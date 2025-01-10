
import { useLoaderData } from 'react-router-dom';
import SectionHeading from '../../components/sectionHeading';
import { FaUtensils } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';


// step -1 images
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, category, recipe, image, price, _id} = useLoaderData();
        const { register, handleSubmit, reset } = useForm();

        const axiosPublic = useAxiosPublic();
        const axiosSecure = useAxiosSecure();
    
        const onSubmit = async (data) => {
            // console.log(data)
            // image upload to imgbb and then get an url
            const imageFile = {image: data.image[0]}
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            
            if(res.data.success){
                 // now send the menu item data to the server with the image url
                 const menuItem = {
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url
                }
                // 
                const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
                // console.log(menuRes.data)
                if(menuRes.data.modifiedCount > 0){
                      // show success popup
                    //   reset();
                      Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: `${data.name} is updated to the menu.`,
                          showConfirmButton: false,
                          timer: 1500
                        });
                }
            }
            // console.log(res.data);
            
        }
    return (

        <div>
              <SectionHeading heading={"UPDATE ITEM"} subHeading={'---Refresh info---'}></SectionHeading>
            <div className="mb-10 rounded-lg bg-white p-5">
                          <form onSubmit={handleSubmit(onSubmit)}>
                              {/* Recipe Name */}
                              <div className="form-control w-full my-6">
                                  <label className="label">
                                      <span className="label-text">Recipe Name*</span>
                                  </label>
                                  <input
                                    defaultValue={name}
                                      type="text"
                                      placeholder="Recipe Name"
                                      {...register('name', { required: true })}
                                      required
                                      className="input input-bordered w-full" />
                              </div>
                              <div className="flex gap-6">
                                  {/* category */}
                                  <div className="form-control w-full my-6">
                                      <label className="label">
                                          <span className="label-text">Category*</span>
                                      </label>
                                      <select defaultValue="category" {...register('category', { required: true })}
                                          className="select select-bordered w-full">
                                          <option disabled value="default">Select a category</option>
                                          <option value="salad">Salad</option>
                                          <option value="pizza">Pizza</option>
                                          <option value="soup">Soup</option>
                                          <option value="dessert">Dessert</option>
                                          <option value="drinks">Drinks</option>
                                      </select>
                                  </div>
          
                                  {/* price */}
                                  <div className="form-control w-full my-6">
                                      <label className="label">
                                          <span className="label-text">Price*</span>
                                      </label>
                                      <input
                                      defaultValue={price}
                                          type="number"
                                          placeholder="Price"
                                          {...register('price', { required: true })}
                                          className="input input-bordered w-full" />
                                  </div>
          
                              </div>
                              {/* recipe details */}
                              <div className="form-control">
                                  <label className="label">
                                      <span className="label-text">Recipe Details</span>
                                  </label>
                                  <textarea
                                  defaultValue={recipe}
                                  {...register('recipe')} className="textarea resize-none textarea-bordered h-24" placeholder="Bio"></textarea>
                              </div>
                                  {/* file input */}
                              <div className="form-control w-full my-6">
                                  <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                              </div>
          
                              <button className="btn">
                              Update Recipe <FaUtensils className="ml-4"></FaUtensils>
                              </button>
                          </form>
                      </div>
        </div>
    );
};

export default UpdateItem;