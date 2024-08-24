import { useEffect } from "react";
import Card from "../../components/card/Card";
import { useSearch } from "../../provider/SearchProvider";
import Lottie from "lottie-react";
import noData from '../../assets/noData.json'

const SearchProducts = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const { products, isLoading } = useSearch();
    console.log('products = ', products);

    return (
        
        <div className="min-h-[70vh]">
            {isLoading && <div className="flex justify-center"><span className="loading loading-infinity loading-lg"></span></div> }
            {!isLoading && <h1 className="text-3xl font-normal">Found {products ? products.length : 0} Products :</h1>}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12">
                {
                    (products && !isLoading) && products.map((item, idx) => (
                        <Card key={idx} item={item} />
                    ))
                }
            </div>
            <div>
                {
                    (products === false || products.length === 0 && !isLoading) && <div className="flex justify-center items-center">
                        <Lottie className="w-1/2 md:w-1/3" animationData={noData} />
                    </div>
                }
            </div>
        </div>
    );
};

export default SearchProducts;