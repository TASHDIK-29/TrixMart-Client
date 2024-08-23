import Card from "../../components/card/Card";
import useLoadData from "../../hooks/useLoadData";
import shopping from '../../assets/shopingCar.json'
import Lottie from "lottie-react";

const Toys = () => {

    const products = useLoadData('toy');

    return (
        <div className="space-y-10">
            <div className="flex justify-between items-center">
                <div className="w-1/2">
                    <h1 className="text-3xl font-normal">Our Exclusive Toys Collections</h1>
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
        </div>
    );
};

export default Toys;