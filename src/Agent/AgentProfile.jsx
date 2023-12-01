import { RiHome3Line } from "react-icons/ri";
import useAgent from "../Hooks/useAgent";
import useAuth from "../Hooks/useAuth";
import useProperties from "../Hooks/useProperties";

const AgentProfile = () => {
    const [isAgent] = useAgent();
    const { user } = useAuth();

    const [properties] = useProperties();

    const propertyFilter = properties.filter(property => user.email == property.useremail);

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

            <div alt="" className="bg-white p-6 rounded-2xl mb-8 max-w-lg flex flex-col md:flex-row justify-center items-center gap-7">
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
                            {
                                isAgent && 'Agent' || 'User'
                            }
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl flex justify-between items-center gap-8 shadow">
                    <div>
                        <p>
                            My Added Properties
                        </p>

                        <p className="text-3xl font-semibold">
                            {propertyFilter.length}
                        </p>
                    </div>

                    <div className="w-20 h-20 rounded-full bg-[#f7f7f7] flex justify-center items-center">
                        <RiHome3Line className='text-4xl' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AgentProfile;