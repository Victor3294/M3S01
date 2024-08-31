import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { HomePage } from "../pages/home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: '/home',
        element: <HomePage></HomePage>
    }
])