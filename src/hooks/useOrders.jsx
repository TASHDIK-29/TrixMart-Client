import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "../provider/AuthProvider";

const useOrders = () => {
    const axiosSecure = useAxiosSecure();

    // const { user } = useAuth();
    const user = JSON.parse(localStorage.getItem('user'))

    const { data: orders = [], refetch: reloadOrder } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders`, { params: { email: user?.email } });

            return res.data;
        }
    })

    // console.log(products);

    return [orders, reloadOrder];
};

export default useOrders;