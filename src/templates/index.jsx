import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function Layout () {
    const user = useAuth()
    return user.checkAuth() ? ( 
    <div>
        <strong>Layouts</strong>
        <main>
            <Outlet></Outlet>
        </main>
    </div>
    ) : <Navigate to={"/"}></Navigate>
}