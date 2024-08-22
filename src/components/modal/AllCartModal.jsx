import { useCart } from "../../provider/CartProvider";

const AllCartModal = () => {

    const { toggleCartModal } = useCart();

    

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
                    className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl  sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle"

                >
                    <h3 className="text-lg font-medium text-center underline leading-6 text-gray-800 capitalize " id="modal-title">
                        Manage Parcel
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                        Select delivery man and approximate delivery date for the parcel.
                    </p>

                    <button onClick={toggleCartModal}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default AllCartModal;