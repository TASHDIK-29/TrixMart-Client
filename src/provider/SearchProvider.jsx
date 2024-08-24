import { createContext, useState, useContext } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {

    const [search, setSearch] = useState(false);

    const axiosPublic = useAxiosPublic();

    const { data: products = [] } = useQuery({
        queryKey: ['products', search],
        queryFn: async () => {
            const res = await axiosPublic.get('/searchProducts', { params: { search } });

            return res.data.result;
        },

    })


    return (
        <SearchContext.Provider value={{ search, setSearch, products }}>
            {children}
        </SearchContext.Provider>
    );
};
