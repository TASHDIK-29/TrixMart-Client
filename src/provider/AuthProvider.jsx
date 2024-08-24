// src/AuthContext.js
import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const [cloths, setCloths] = useState([])
    const [gadgets, setGadgets] = useState([])
    const [toys, setToys] = useState([])
    const [furniture, setFurniture] = useState([])

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'))
        if (storedUser) {
            setUser(storedUser)
        }

        const loadHomeData = async() =>{
            setLoading(true);
            const res = await axiosPublic.get('/homeData')
            console.log(res.data);

            setCloths(res.data.cloths)
            setGadgets(res.data.gadgets)
            setToys(res.data.toys)
            setFurniture(res.data.furniture)
            setLoading(false)
        }

        loadHomeData();

    }, [])

    const axiosPublic = useAxiosPublic();


    const login = async (email, password) => {
        const response = await axiosPublic.post('/login', { email, password });



        // localStorage.setItem('token', response.data.token);
        // localStorage.setItem('credential', emailOrNumber);
        // setUser({ credential: emailOrNumber });

        // console.log(response.data);


        return response.data;

    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('credential');
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, loading, furniture, toys, gadgets, cloths }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };