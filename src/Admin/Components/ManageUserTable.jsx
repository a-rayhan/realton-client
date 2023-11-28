import ManageUserTableRow from "./ManageUserTableRow";

const ManageUserTable = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name/Email</th>
                            <th>Role</th>
                            <th>Mark as fraud</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <ManageUserTableRow />
                        <ManageUserTableRow />
                        <ManageUserTableRow />
                        <ManageUserTableRow />
                        <ManageUserTableRow />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUserTable;