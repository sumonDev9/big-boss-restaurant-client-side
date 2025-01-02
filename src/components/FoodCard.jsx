import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCarts from '../hooks/useCarts';

const FoodCard = ({item}) => {
    const {_id, image, name, recipe, price} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCarts();



    const handleAddToCart = () => {
      if(user && user.email){
        // send cart item to the database
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }

        axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your carts`,
              showConfirmButton: false,
              timer: 1500
            });
            // refectch cart to updated the cart items count 
            refetch();
          }
        })
      }
      
      else{
        Swal.fire({
          title: "You are not Logged In",
          text: "Please login to add to the car?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            // send the user to the login page 
            navigate('/login', {state: {from: location}})
          }
        });
      }
    }

    return (
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className=''>
    <img
      src={image}
      alt={name}/>
      <p className='absolute mr-5 mt-5 top-0 right-0 bg-slate-900 text-white px-5 py-2'>${price}</p>
  </figure>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={handleAddToCart} className="btn btn-outline bg-slate-200  border-0 mt-4 border-b-4">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;