
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation();
    
    if(loading){
        return <Loading></Loading>
    }

    if(user && user.email) {
        return children;
    }
    return <Navigate to={'/Login'} state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;