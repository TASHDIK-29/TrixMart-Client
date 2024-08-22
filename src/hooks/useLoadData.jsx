import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadData = (category) => {
    const axiosPublic = useAxiosPublic();
    console.log('category=', category);

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products', { params: { category: category } });

            return res.data;
        }
    })

    // console.log(products);

    return products;
};

export default useLoadData;