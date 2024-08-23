import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const OrderCard = ({ order }) => {
    return (
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="w-1/3">
                <img className='w-full h-full' src={order?.image} alt="" />
            </div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-xl font-bold text-gray-800 ">{order?.productName}</h1>

                {/* <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p> */}

                <div className="flex gap-2 mt-2 item-center">
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={order?.rating}
                        readOnly
                    />
                </div>

                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 md:text-xl flex gap-2 items-center">${order?.price}<span className='text-base font-normal'>
                        | Unit - {order?.quantity}
                    </span></h1>
                    
                </div>
            </div>
        </div>
    );
};

export default OrderCard;