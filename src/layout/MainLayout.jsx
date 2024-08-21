import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-6">
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;