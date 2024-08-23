import { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Card = ({ item }) => {

    const { user } = useContext(AuthContext)

    const axiosSecure = useAxiosSecure();

    const { productName, image, price, rating, _id } = item;

    const handleAddToCart = async () => {
        const cartInfo = {
            email: user.email,
            productName,
            image,
            price,
            productId: _id,
            quantity: 1
        }

        const res = await axiosSecure.post('/addToCart', cartInfo)
        console.log(res.data);

        if (res.data.insertedId) {
            toast.success(`${productName} added to cart`)
        } else {
            toast.error(`${productName} already in your cart`)
        }
    }

    return (
        <div className="flex flex-col overflow-hidden bg-white rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 shadow-xl lg:shadow-none lg:border-none">
            <div className="px-4 py-2 flex-1">
                <h1 className="text-base font-normal text-gray-800 uppercase ">{productName}</h1>
                <div className="flex gap-2 mt-2 item-center">
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                </div>
            </div>

            <img className="object-cover w-full h-48 mt-2" src={image} alt="NIKE AIR" />

            <div className="flex items-center justify-between px-4 py-2">
                <h1 className="text-lg font-bold ">${price}</h1>
                <button onClick={handleAddToCart} className="px-2 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-black opacity-50 rounded focus:bg-gray-400 focus:outline-none">Add to cart</button>
            </div>
        </div>
    );
};

export default Card;