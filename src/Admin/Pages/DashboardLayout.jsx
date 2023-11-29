import { Outlet } from "react-router";
import DashboardNavbar from "../Components/DashboardNavbar/DashboardNavbar";
import DashboardNavigation from "../Components/DashboardNavigation";
import AdminDeshboardNav from "../Components/DeshboardSiderNav/AdminDeshboardNav";
import AgentDashboardNav from "../../Agent/AgentDashboardNav";
import UserDashboardNav from "../../User/Components/UserDashboardNav";
import useAdmin from "../../Hooks/useAdmin";
import useAgent from "../../Hooks/useAgent";

const DashboardLayout = () => {

    const [isAdmin] = useAdmin();
    // console.log(isAdmin);

    const [isAgent] = useAgent();
    // console.log(isAgent);

    return (
        <div className="max-w-full mx-auto px-6">
            <DashboardNavbar />
            <div className="flex">
                <div className="w-[300px] h-screen hidden xl:block">

                    {
                        isAdmin && <AdminDeshboardNav /> || isAgent && <AgentDashboardNav /> || <UserDashboardNav />

                    }
                    {/* {
                        isAgent && <AgentDashboardNav /> || <UserDashboardNav />
                    } */}

                    {/* <AdminDeshboardNav /> */}
                    {/* <AgentDashboardNav /> */}
                    {/* <UserDashboardNav /> */}
                </div>

                <div className="bg-[#f7f7f7] w-full rounded-2xl p-6 lg:p-14">
                    <div className="xl:hidden">
                        <DashboardNavigation />
                    </div>

                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;