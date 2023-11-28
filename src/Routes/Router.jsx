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

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'properties',
                element: <AllProperties />
            },
            {
                path: 'propertiesdetails',
                element: <PropertyDetails />
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
                element: <DashboardHome />
            },
            {
                path: 'agentprofile',
                element: <AgentProfile />
            },
            {
                path: 'myaddedproperties',
                element: <MyAddedProperties />
            },
            {
                path: 'updateproperty',
                element: <UpdateProperty />
            },
            {
                path: 'mysold',
                element: <MySoldProperties />
            },
            {
                path: 'requestedproperties',
                element: <RequestedProperties />
            },
            {
                path: 'adminprofile',
                element: <AdminProfile />
            },
            {
                path: 'manageproperties',
                element: <ManageProperties />
            },
            {
                path: 'manageusers',
                element: <ManageUser />
            },
            {
                path: 'managereviews',
                element: <ManageReviews />
            },
            {
                path: 'addnew',
                element: <AddNewProperty />
            },
            {
                path: 'favourites',
                element: <Favourites />
            },
            {
                path: 'bought',
                element: <PropertyBought />
            },
            {
                path: 'userreview',
                element: <Reviews />
            }
        ]
    }
])

export default router;