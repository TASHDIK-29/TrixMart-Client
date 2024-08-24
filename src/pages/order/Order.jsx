import { Helmet } from "react-helmet-async";
import OrderCard from "../../components/card/OrderCard";
import useOrders from "../../hooks/useOrders";
import { useAuth } from "../../provider/AuthProvider";
import { useEffect } from "react";

const Order = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const [orders] = useOrders();

    const {user} = useAuth();

    return (
        <div className="min-h-[75vh]">
            <Helmet>
                <title>TrixMart | {user.firstName} Order</title>
            </Helmet>
            <h1 className="text-3xl font-normal text-gray-800  lg:text-3xl ">
                 <span>{user?.firstName}</span>s Orders
            </h1>

            <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-slate-500 rounded-full"></span>
                <span className="inline-block w-10 h-1 ml-1 bg-slate-500 rounded-full"></span>
                <span className="inline-block w-6 h-1 ml-1 bg-slate-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-slate-500 rounded-full"></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                {
                    orders.length > 0 && orders.map((order, idx) => (
                        <OrderCard key={idx} order={order} />
                    ))
                }
            </div>
        </div>
    );
};

export default Order;