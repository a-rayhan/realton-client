import { RiHome3Line } from "react-icons/ri";

const AdminProfile = () => {
    return (
        <div>
            <div className="mb-14">
                <p className="text-2xl font-semibold mb-2">
                    Howdy, Abu!
                </p>
                <p className="text-sm">
                    We are glad to see you again!
                </p>
            </div>

            <div className="bg-white p-6 rounded-2xl mb-8 max-w-lg flex flex-col md:flex-row justify-center items-center gap-7">
                <img src="https://images.unsplash.com/photo-1508978644997-53cc5bfb8a03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-40 h-40 rounded-full object-cover mb-4" />

                <div>
                    <p className="text-2xl font-semibold">
                        Abu Rayhan
                    </p>

                    <p className="text-sm mb-3">
                        aburayhandh@gmail.com
                    </p>
                    <div className="inline-flex gap-1 md:flex-col">
                        <p>
                            Role
                        </p>
                        <p className="bg-green-500 text-white px-2 text-lg rounded inline-block">
                            Admin
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl flex justify-between items-center gap-8 shadow">
                    <div>
                        <p>
                            All Properties
                        </p>

                        <p className="text-3xl font-semibold">
                            583
                        </p>
                    </div>

                    <div className="w-20 h-20 rounded-full bg-[#f7f7f7] flex justify-center items-center">
                        <RiHome3Line className='text-4xl' />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl flex justify-between items-center gap-8 shadow">
                    <div>
                        <p>
                            Total Users
                        </p>

                        <p className="text-3xl font-semibold">
                            583
                        </p>
                    </div>

                    <div className="w-20 h-20 rounded-full bg-[#f7f7f7] flex justify-center items-center">
                        <RiHome3Line className='text-4xl' />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl flex justify-between items-center gap-8 shadow">
                    <div>
                        <p>
                            Total Favorites
                        </p>

                        <p className="text-3xl font-semibold">
                            583
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

export default AdminProfile;