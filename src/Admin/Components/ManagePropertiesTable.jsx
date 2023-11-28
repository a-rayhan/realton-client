import ManagePropertiesRow from "./ManagePropertiesRow";

const ManagePropertiesTable = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Property Details</th>
                            <th>Agent Info</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <ManagePropertiesRow />
                        <ManagePropertiesRow />
                        <ManagePropertiesRow />
                        <ManagePropertiesRow />
                        <ManagePropertiesRow />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePropertiesTable;