// src/AuthContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // const storedUser = JSON.parse(localStorage.getItem('user'))
    // if (storedUser) {
    //     setUser(storedUser)
    // }

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'))
        if (storedUser) {
            setUser(storedUser)
        }

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
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };