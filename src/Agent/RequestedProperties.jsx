import RequestedPropertiesTable from "./RequestedPropertiesTable";

const RequestedProperties = () => {
    return (
        <div>
            <div className="mb-14">
                <p className="text-2xl font-semibold mb-2">
                    Requested Properties
                </p>
                <p className="text-sm">
                    We are glad to see you again!
                </p>
            </div>

            <div>
                <RequestedPropertiesTable />
            </div>
        </div>
    );
};

export default RequestedProperties;