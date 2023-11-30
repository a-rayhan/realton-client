import useAuth from "../Hooks/useAuth";
import MyAddedPropertiesCard from "./MyAddedPropertiesCard";
import useProperties from "../Hooks/useProperties";

const MyAddedProperties = () => {

    const [properties] = useProperties();

    const { user } = useAuth();

    const propertyFilter = properties.filter(property => user.email == property.useremail);


    return (
        <div>
            <div className="mb-14">
                <p className="text-2xl font-semibold mb-2">
                    My Added Properties
                </p>
                <p className="text-sm">
                    We are glad to see you again!
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {
                    propertyFilter.map(property => <MyAddedPropertiesCard key={property._id} property={property} />)
                }
            </div>
        </div>
    );
};

export default MyAddedProperties;