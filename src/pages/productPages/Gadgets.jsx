import Card from "../../components/card/Card";
import useLoadData from "../../hooks/useLoadData";

const Gadgets = () => {

    const products = useLoadData('gadget');

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-normal">Our Exclusive Gadgets Collections</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam provident incidunt eius debitis voluptates in illo voluptas fugit modi.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    products.length > 0 ? products.map((item, idx) => <Card key={idx} item={item} />) : 'loading'
                }
            </div>
        </div>
    );
};

export default Gadgets;