import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Banner from "../../components/banner/Banner";

const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <Banner />
        </div>
    );
};

export default Home;