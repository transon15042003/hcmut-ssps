import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useRef } from "react";

export default function LoginRequired() {
    console.log("Login required!");
    const { auth, setAuth } = useAuth();
    const location = useLocation();

    const currentUser = JSON.parse(sessionStorage.getItem('user'));
    const loggedIn = useRef(false);
    
    useEffect(() => {
        // console.log("Check session effect");
        if (currentUser) {
            // console.log("Yooooooo");
            setAuth({user: currentUser});
            loggedIn.current = true;
        }
    }, []);

    if (auth?.user || loggedIn.current) {
        return <Outlet />
    }
    return (
        <Navigate 
            to="/login"
            state={{
                from: location
            }}
            replace
        />
    )
}