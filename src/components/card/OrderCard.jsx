import img from '../../assets/placeholderImg.jpg';


const OrderCard = ({ order }) => {
    return (
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="w-1/3">
                <img className='w-full h-full' src={img} alt="" />
            </div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-xl font-bold text-gray-800 ">{order?.productName}</h1>

                {/* <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p> */}

                <div className="flex mt-2 item-center">
                    <svg className="w-5 h-5 text-gray-700 fill-current " viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>

                    <svg className="w-5 h-5 text-gray-700 fill-current " viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>

                    <svg className="w-5 h-5 text-gray-700 fill-current " viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>

                    <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>

                    <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                </div>

                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 md:text-xl flex gap-2 items-center">${order?.price}<span className='text-base font-normal'>
                           | Unit - {order?.quantity}
                        </span></h1>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 rounded bg-gray-700 hover:bg-gray-700 hover:bg-gray-600 focus:outline-none focus:bg-gray-700 focus:bg-gray-600">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;