import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import { useCart } from "../provider/CartProvider";
import AllCartModal from "../components/modal/AllCartModal";

const MainLayout = () => {

    const { isCartOpen } = useCart();

    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <div className="h-[100px]"></div>
                <Outlet />
            </div>
            {
                isCartOpen && <AllCartModal />
            }
        </>
    );
};

export default MainLayout;