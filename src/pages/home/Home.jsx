import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const { user, furniture, toys, gadgets, cloths, loading } = useContext(AuthContext);
    console.log(user, furniture, toys, gadgets, cloths);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    
    return (
        <div>
            <Helmet>
                <title>TrixMart | Home</title>
            </Helmet>
            <Banner />
            {loading && <div className="flex justify-center"><span className="loading loading-infinity loading-lg"></span></div> }
            <div className="mt-16">
                <h1 className="text-2xl font-bold">Trendy Cloths</h1>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 my-6">
                    {cloths.length > 1 && cloths.map((item, idx) => <Card key={idx} item={item} />)}
                </div>
                <div className="mt-4 flex justify-end">
                    <button className="border-2 border-slate-700 pl-3 py-1 font-medium flex justify-center items-center gap-2"><Link to={'/cloths'}>See All</Link><GoTriangleRight className="text-lg" /></button>
                </div>
            </div>
            <div className="mt-16">
                <h1 className="text-2xl font-bold">Exclusive Gadgets</h1>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 my-6">
                    {gadgets.length > 1 && gadgets.map((item, idx) => <Card key={idx} item={item} />)}
                </div>
                <div className="mt-4 flex justify-end">
                    <button className="border-2 border-slate-700 pl-3 py-1 font-medium flex justify-center items-center gap-2"><Link to={'/gadgets'}>See All</Link><GoTriangleRight className="text-lg" /></button>
                </div>
            </div>
            <div className="mt-16">
                <h1 className="text-2xl font-bold">Modern Toys</h1>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 my-6">
                    {toys.length > 1 && toys.map((item, idx) => <Card key={idx} item={item} />)}
                </div>
                <div className="mt-4 flex justify-end">
                    <button className="border-2 border-slate-700 pl-3 py-1 font-medium flex justify-center items-center gap-2"><Link to={'/toys'}>See All</Link><GoTriangleRight className="text-lg" /></button>
                </div>
            </div>
            <div className="mt-16">
                <h1 className="text-2xl font-bold">Eye catchy Furniture</h1>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 my-6">
                    {furniture.length > 1 && furniture.map((item, idx) => <Card key={idx} item={item} />)}
                </div>
                <div className="mt-4 flex justify-end">
                    <button className="border-2 border-slate-700 pl-3 py-1 font-medium flex justify-center items-center gap-2"><Link to={'/furniture'}>See All</Link><GoTriangleRight className="text-lg" /></button>
                </div>
            </div>
        </div>
    );
};

export default Home;