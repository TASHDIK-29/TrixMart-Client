import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useLoadAllCart = () => {

    const {user} = useAuth();

    const axiosSecure = useAxiosSecure();
    

    const { data: carts = [], refetch } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allCart', { params: { email: user.email } });

            return res.data;
        }
    })

    // console.log(carts);

    return [carts, refetch];
};

export default useLoadAllCart;