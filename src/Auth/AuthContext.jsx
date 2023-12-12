import { createContext } from "react";
import Signup from '../Components/Signup/Signup'
import firebase from "../Firebase/config";

const AuthContext = createContext(firebase)
const Auth = () => (
    <AuthContext.Provider value={firebase}>
        <Signup />
    </AuthContext.Provider>
);

export default Auth;