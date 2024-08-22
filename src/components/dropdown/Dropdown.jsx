import { useState, useEffect, useRef, useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../provider/CartProvider';

const Dropdown = () => {

    const { toggleCartModal } = useCart();

    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const handelLogout = () => {
        logout();

        navigate('/');
    }

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            {/* Dropdown toggle button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-10 flex items-center p-2 text-sm  border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-400 focus:ring text-white bg-gray-800 focus:outline-none"
            >
                <span className="mx-1">{user && user.firstName}</span>
                <svg
                    className="w-5 h-5 mx-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div
                    className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right rounded-md shadow-xl bg-gray-800"
                    style={{ transition: 'transform 0.1s ease-out, opacity 0.1s ease-out' }}
                >
                    <a
                        href="#"
                        className="flex items-center p-3 -mt-2 text-sm transition-colors duration-300 transform text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        <img
                            className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                            alt={user.firstName}
                        />
                        <div className="mx-1">
                            <h1 className="text-sm font-semibold text-gray-200">{user.firstName}</h1>
                            <p className="text-sm text-gray-400">{user.email}</p>
                        </div>
                    </a>

                    <hr className="border-gray-700" />

                    <a
                        href="#"
                        className="block px-4 py-3 text-sm capitalize transition-colors duration-300 transform text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        View Profile
                    </a>
                    <button
                        onClick={toggleCartModal}
                        className="block px-4 py-3 text-sm capitalize transition-colors duration-300 transform text-gray-300 hover:bg-gray-700 hover:text-white w-full text-start"
                    >
                        Cart
                    </button>

                    <hr className="border-gray-700" />

                    <button
                        onClick={handelLogout}
                        className="block px-4 py-3 text-sm capitalize transition-colors duration-300 transform text-gray-300 hover:bg-gray-700 hover:text-white w-full text-start"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
