import { useContext, useRef, useState } from 'react';
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../providers/Authprovider';
import { Link } from 'react-router-dom';

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const {user, signInUser} = useContext(AuthContext);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
       
        // login 
        signInUser(email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
        })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }
        else{
            setDisabled(true);
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
                {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  name='email' placeholder="email" className="input font-mono input-bordered normal-case"  />
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input font-mono input-bordered normal-case"  />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {/* reload captha */}
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" ref={captchaRef} name='captcha' placeholder="type the captcha above" className="input input-bordered font-mono normal-case"  />
                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">validation</button>
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} className="btn btn-primary" type="submit" value='login'/>
              </div>
            </form>
            <p><small>New Here? <Link to='/sign'>create an account</Link></small></p>
          </div>
        </div>
      </div>
    );
};

export default Login;