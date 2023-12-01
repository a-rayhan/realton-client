import useProperties from "../../Hooks/useProperties";
import AdvertiseTable from "./AdvertiseTable";

const Advertise = () => {

    const [properties] = useProperties();

    return (
        <div>
            <div className="mb-14">
                <p className="text-2xl font-semibold mb-2">
                    Advertise Properties
                </p>
                <p className="text-sm">
                    We are glad to see you again!
                </p>
            </div>

            <div>
                <AdvertiseTable properties={properties} />
            </div>
        </div>
    );
};

export default Advertise;