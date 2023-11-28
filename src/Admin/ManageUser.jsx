import ManageUserTable from "./Components/ManageUserTable";

const ManageUser = () => {
    return (
        <div>
            <div className="mb-14">
                <p className="text-2xl font-semibold mb-2">
                    Manage Users
                </p>
                <p className="text-sm">
                    We are glad to see you again!
                </p>
            </div>

            <div>
                <ManageUserTable/>
            </div>
        </div>
    );
};

export default ManageUser;