import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import { useCart } from "../provider/CartProvider";
import AllCartModal from "../components/modal/AllCartModal";
import Footer from "../components/footer/Footer";

const MainLayout = () => {

    const { isCartOpen } = useCart();

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-2">
                <div className="h-[100px]"></div>
                <Outlet />
            </div>
            <Footer />
            {
                isCartOpen && <AllCartModal />
            }
        </>
    );
};

export default MainLayout;