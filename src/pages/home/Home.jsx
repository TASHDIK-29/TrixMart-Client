import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            hello {user && user?.firstName}
        </div>
    );
};

export default Home;