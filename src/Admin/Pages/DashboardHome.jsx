import { RiHome3Line } from "react-icons/ri";
import useAuth from "../../Hooks/useAuth";

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <div className="mb-14">
                <p className="text-2xl font-semibold mb-2">
                    Howdy, {user?.displayName}!
                </p>
                <p className="text-sm">
                    We are glad to see you again!
                </p>
            </div>

            <div className="bg-white p-6 rounded-2xl mb-8 max-w-lg flex flex-col md:flex-row justify-center items-center gap-7">
                <img src={user?.photoURL} alt="" className="w-40 h-40 rounded-full object-cover mb-4" />

                <div>
                    <p className="text-2xl font-semibold">
                        {user?.displayName}
                    </p>

                    <p className="text-sm mb-3">
                        {user?.email}
                    </p>
                    <div className="inline-flex gap-1 md:flex-col">
                        <p>
                            Role
                        </p>
                        <p className="bg-green-500 text-white px-2 text-lg rounded inline-block">
                            User
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;