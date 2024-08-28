import { createContext } from "react";
import useFirebase from "../../Hooks/useFirebase";
import PropTypes from 'prop-types';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const AllContent = useFirebase();
    return (
        <AuthContext.Provider value={AllContent}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children : PropTypes.node,
}