import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/Authprovider";
import { Link } from "react-router-dom";


const SignUp = () => {

    const {register, handleSubmit, watch, formState: { errors }} = useForm();
    const {createUser} = useContext(AuthContext);

    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {
            const loggerUser = result.user;
            console.log(loggerUser);
        })
     }

    return (
   <>
   <Helmet>
    <title>Big Boss | Sign Up</title>
    </Helmet>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name",  { required: true })} placeholder="name" className="input font-mono input-bordered"  />
                {errors.name && <span className="text-red-700 mt-2">This field is required</span>}
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input type="email" {...register("email",  { required: true })} 
                placeholder="email" className="input font-mono input-bordered"  />
                {errors.email && <span  className="text-red-700 mt-2">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true,
                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                     minLength: 6, 
                     maxLength: 10 })} placeholder="password" className="input font-mono input-bordered"  />
                {errors.password?.type === "minLength" && (<p className="text-red-600">password mush be 6 characters</p>)}

                {errors.password?.type === "maxLength" && (<p className="text-red-600">password mush be less 20 characters</p>)}

                {errors.password?.type === "pattern" && (<p className="text-red-600">password mush be one Uppercase and one lowercase, one number and one special characters</p>)}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
               
              </div>
            </form>
            <p><small>Already have an account <Link to='/login'>login</Link></small></p>
          </div>
        </div>
      </div>
   </>
    );
};

export default SignUp;