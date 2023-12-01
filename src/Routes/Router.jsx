import { createBrowserRouter } from "react-router-dom";
import Home from "../User/Pages/Home";
import UserLayout from "../User/Pages/UserLayout";
import DashboardLayout from "../Admin/Pages/DashboardLayout";
import DashboardHome from "../Admin/Pages/DashboardHome";
import AddNewProperty from "../Admin/Pages/AddNewProperty";
import Favourites from "../Admin/Components/Favourites";
import Reviews from "../Admin/Components/Reviews";
import AllProperties from "../User/Pages/AllProperties";
import Login from "../User/Pages/Login";
import Register from "../User/Pages/Register";
import PropertyDetails from "../User/Pages/PropertyDetails";
import PropertyBought from "../User/Pages/PropertyBought";
import AgentProfile from "../Agent/AgentProfile";
import MyAddedProperties from "../Agent/MyAddedProperties";
import MySoldProperties from "../Agent/MySoldProperties";
import RequestedProperties from "../Agent/RequestedProperties";
import AdminProfile from "../Admin/AdminProfile";
import ManageProperties from "../Admin/Components/ManageProperties";
import ManageReviews from "../Admin/ManageReviews";
import ManageUser from "../Admin/ManageUser";
import UpdateProperty from "../Agent/UpdateProperty";
import PrivateRoutes from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AgentRoute from "./AgentRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import Advertise from "../Admin/Components/Advertise";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'properties',
                element: <PrivateRoutes><AllProperties /></PrivateRoutes>
            },
            {
                path: 'propertiesdetails',
                element: <PrivateRoutes><PropertyDetails /></PrivateRoutes>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'home',
                element: <PrivateRoutes><DashboardHome /></PrivateRoutes>
            },
            {
                path: 'agentprofile',
                element: <AgentRoute><AgentProfile /></AgentRoute>
            },
            {
                path: 'myaddedproperties',
                element: <AgentRoute><MyAddedProperties /></AgentRoute>
            },
            {
                path: 'updateproperty/:updateId',
                element: <AgentRoute><UpdateProperty /></AgentRoute>
            },
            {
                path: 'mysold',
                element: <AgentRoute><MySoldProperties /></AgentRoute>
            },
            {
                path: 'requestedproperties',
                element: <AgentRoute><RequestedProperties /></AgentRoute>
            },
            {
                path: 'adminprofile',
                element: <AdminRoute><AdminProfile /></AdminRoute>
            },
            {
                path: 'manageproperties',
                element: <AdminRoute><ManageProperties /></AdminRoute>
            },
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUser /></AdminRoute>
            },
            {
                path: 'managereviews',
                element: <AdminRoute><ManageReviews /></AdminRoute>
            },
            {
                path: 'advertise',
                element: <AdminRoute><Advertise /></AdminRoute>
            },
            {
                path: 'addnew',
                element: <AgentRoute><AddNewProperty /></AgentRoute>
            },
            {
                path: 'favourites',
                element: <PrivateRoutes><Favourites /></PrivateRoutes>
            },
            {
                path: 'bought',
                element: <PrivateRoutes><PropertyBought /></PrivateRoutes>
            },
            {
                path: 'userreview',
                element: <PrivateRoutes><Reviews /></PrivateRoutes>
            }
        ]
    }
])

export default router;