import toast from "react-hot-toast";
import useLoadAllCart from "../../hooks/useLoadAllCart";
import { useAuth } from "../../provider/AuthProvider";
import { useCart } from "../../provider/CartProvider";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { useEffect, useState } from "react";

const AllCartModal = () => {

    const [cartItems, setCartItems] = useState([]);

    const increaseQuantity = (id) => {
        console.log(id);
        setCartItems(cartItems.map(item =>
            item._id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (id) => {
        console.log(id);
        setCartItems(cartItems.map(item =>
            item._id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    };

    const { toggleCartModal } = useCart();


    const axiosPublic = useAxiosPublic();

    const [carts, refetch, error] = useLoadAllCart();

    useEffect(() => {
        setCartItems(carts);
    }, [carts])

    if (error) {
        toggleCartModal()
        return toast.error('Session Expired: Please Login Again')
    }

    const totalCost = carts.reduce((acc, cart) => {
        return acc + cart.price;
    }, 0).toFixed(2)


    const handleCart = async (option, id, quantity) => {
        const res = await axiosPublic.patch('/handleCart', { option, id, quantity })

        console.log(res.data);

        if (res.data?.remove?.deletedCount) {
            refetch();
        }
    }

    return (
        <div
            className="fixed inset-0 z-10 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
                    &#8203;
                </span>

                <div
                    className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl  sm:my-8 sm:max-w-2xl sm:p-6 sm:align-middle"

                >
                    <div className="flex flex-col w-full p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                        <h2 className="text-xl font-semibold">Your cart</h2>
                        <ul className="flex flex-col divide-y dark:divide-gray-300">
                            {
                                cartItems.map(cart => (
                                    <li key={cart._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                        <div className="flex w-full space-x-2 sm:space-x-4">
                                            <img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
                                            <div className="flex flex-col justify-between w-full pb-4">
                                                <div className="flex justify-between w-full pb-2 space-x-2">
                                                    <div className="space-y-4">
                                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">{cart?.productName}</h3>
                                                        <div className="flex items-center gap-1">
                                                            <button onClick={() => decreaseQuantity(cart?._id)}><CiSquareMinus className="text-2xl" /></button>
                                                            <button className="px-2 rounded-full border border-black text-slate-700 cursor-default">{cart?.quantity}</button>
                                                            <button onClick={() => increaseQuantity(cart?._id)}><CiSquarePlus className="text-2xl" /></button>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-lg font-semibold">${cart?.price * cart?.quantity}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center text-sm divide-x">
                                                    <button
                                                        onClick={() => handleCart('remove', cart._id)}
                                                        type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                            <rect width="32" height="200" x="168" y="216"></rect>
                                                            <rect width="32" height="200" x="240" y="216"></rect>
                                                            <rect width="32" height="200" x="312" y="216"></rect>
                                                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                        </svg>
                                                        <span>Remove</span>
                                                    </button>
                                                    <button
                                                        onClick={() => handleCart('confirm', cart._id, cart.quantity)}
                                                        type="button" className="flex items-center px-2 py-1 space-x-1">
                                                        <MdOutlineConfirmationNumber className="text-lg" />
                                                        <span>Confirm Order</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }

                        </ul>
                        <div className="space-y-1 text-right">
                            <p>Total amount : <span className="font-semibold">${totalCost}</span>
                            </p>
                            <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button onClick={toggleCartModal} type="button" className="px-6 py-2 border rounded-md dark:border-violet-600">Back
                                <span className="sr-only sm:not-sr-only"> to shop</span>
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllCartModal;