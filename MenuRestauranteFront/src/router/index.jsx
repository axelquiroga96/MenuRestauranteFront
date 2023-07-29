import { createBrowserRouter } from "react-router-dom";
import { LayoutPublic } from "../layout/LayoutPublic";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Login  from "../pages/Login";
import Orders from "../pages/Orders";   
import Register from "../pages/Register";
import ErrorPage from "../pages/Error-page";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <ErrorPage />,
        children: [ 
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/orders',
                element: <Orders />,
            },
            {
                path: '/admin',
                element: <Admin />,
            },
        ],

    },
    {
        path: "/login",
        element: <Login />,
        children: [
            {
                path: '/login/register',
                element: <Register />,
            },
        ],
    }
])