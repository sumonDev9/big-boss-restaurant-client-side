import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
    // tan stack query
    const  axiosSecure = useAxiosSecure();
    const {data: cart = []} = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/cart')
            return res.data
        }
    })
    return [cart]
};

export default useCarts;