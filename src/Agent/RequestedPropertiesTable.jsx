import RequestedPropertiesRow from "./RequestedPropertiesRow";

const RequestedPropertiesTable = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Property Details</th>
                            <th>Buyer Info</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <RequestedPropertiesRow />
                        <RequestedPropertiesRow />
                        <RequestedPropertiesRow />
                        <RequestedPropertiesRow />
                        <RequestedPropertiesRow />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestedPropertiesTable;