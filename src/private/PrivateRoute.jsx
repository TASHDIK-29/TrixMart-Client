import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    // const {user} = useAuth();

    const user = JSON.parse(localStorage.getItem('user'))

    if(user){
        return children
    }
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;