import Card from "../../components/card/Card";
import useLoadData from "../../hooks/useLoadData";
import shopping from '../../assets/shopingCar.json'
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { totalProduct } from "../../utils/pagination";

const Furniture = () => {

    const [currentPage, setCurrentPage] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {

        const countProduct = async () => {
            setCount(await totalProduct('cloth'))
        }
        countProduct()

    }, [currentPage])

    const numberOfPages = Math.ceil(count / 8);
    const pages = [...Array(numberOfPages).keys()];
    console.log('pages=', pages);

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        } else {
            console.log('No more data');
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        } else {
            console.log('No more data');
        }
    }

    const products = useLoadData('furniture', currentPage);

    return (
        <div className="space-y-10">
            <div className="flex justify-between items-center">
                <div className="w-1/2">
                    <h1 className="text-3xl font-normal">Our Exclusive Furniture Collections</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam provident incidunt eius debitis voluptates in illo voluptas fugit modi.</p>
                </div>
                <div className="w-1/2">
                    <Lottie className="w-1/2 md:w-1/3 mx-auto" animationData={shopping} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    products.length > 0 ? products.map((item, idx) => <Card key={idx} item={item} />) : 'loading'
                }
            </div>


            <div className="flex justify-center">
                <div className="flex">
                    <button onClick={handlePrev} className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md hover:bg-blue-500 hover:text-gray-200">
                        <div className="flex items-center -mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>

                            <span className="mx-1">
                                previous
                            </span>
                        </div>
                    </button>

                    {
                        pages.length > 1 && pages.map(i => <button key={i} onClick={() => setCurrentPage(i)}
                            className={currentPage === i ? 'bg-blue-500 text-gray-200 rounded-md px-4 py-2 mx-1' : ` px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline hover:bg-blue-500 hover:text-gray-200`}>
                            {i}
                        </button>)
                    }

                    <button onClick={handleNext} className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-blue-500   hover:text-gray-200">
                        <div className="flex items-center -mx-1">
                            <span className="mx-1">
                                Next
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Furniture;