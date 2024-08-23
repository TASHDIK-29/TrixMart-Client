import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadData = (category, currentPage) => {
    const axiosPublic = useAxiosPublic();

    const { data: products = [] } = useQuery({
        queryKey: ['products', currentPage],
        queryFn: async () => {
            const res = await axiosPublic.get('/products', { params: { category, currentPage } });

            return res.data;
        }
    })

    // console.log(products);

    return products;
};

export default useLoadData;