import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../Context/useAuthContext";

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuthContext();
    const location = useLocation()
    if(loading){
        return <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>

    }
    if(user?.email){
       return children
    }
    return (
        <Navigate
        state={location.pathname}
        to='/login'
        ></Navigate>
    );
};

export default PrivateRoute;