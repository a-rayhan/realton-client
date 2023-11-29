import useProperties from "../../Hooks/useProperties";
import ManagePropertiesTable from "./ManagePropertiesTable";

const ManageProperties = () => {

    const [properties] = useProperties();

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
                <ManagePropertiesTable properties={properties} />
            </div>
        </div>
    );
};

export default ManageProperties;