import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';

const SocialLogin = () => {
    const {googleSignIn} = useAuth();

    const handlegoogleSign = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
    }

    return (
        <div className='px-6'>
            <button onClick={handlegoogleSign} className="btn btn-block">
                <FaGoogle></FaGoogle>
                Google with continue
            </button>
        </div>
    );
};

export default SocialLogin;