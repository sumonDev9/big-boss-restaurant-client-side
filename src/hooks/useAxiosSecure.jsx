import axios from "axios";

const axiosSecure = axios.create({
   
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    // request interecepter to add authorization header or every secure call to teh api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function(error){
        return Promise.reject(error)
    })

    // intercepts 401 and  403 status
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, (error) => {
        const status = error.response.status;
        console.log('status error in the interceptor', status)
        return Promise.project(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;