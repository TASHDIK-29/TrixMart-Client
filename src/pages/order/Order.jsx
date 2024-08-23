import OrderCard from "../../components/card/OrderCard";
import useOrders from "../../hooks/useOrders";

const Order = () => {

    const [orders] = useOrders();


    return (
        <div>
            order {orders.length}
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