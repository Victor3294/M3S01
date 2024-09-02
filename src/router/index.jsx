import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { HomePage } from "../pages/home";
import { Layout } from "../templates";
import { Timer } from "../pages/timer";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: '/dashboard',
        element: <Layout></Layout>,
        children: [
            {
                path: '/dashboard/home',
                element: <HomePage></HomePage>
            },
            {
                path: '/dashboard/timer',
                element: <Timer></Timer>
            }
        ]

    },
])