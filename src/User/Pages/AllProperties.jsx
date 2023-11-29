import AllPropertiesCard from "../Components/AllPropertiesCard";
import AllPropertiesHeader from "../Components/AllPropertiesHeader";
import useProperties from "../../Hooks/useProperties";

const AllProperties = () => {

    const [properties] = useProperties();

    const propertiesFilter = properties.filter(property => property.status === 'accepted');

    return (
        <div>
            <div>
                <AllPropertiesHeader />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24">
                <p className="text-3xl font-semibold">
                    New York Homes for Sale
                </p>

                <div className="mt-14">
                    <p className="text-sm mb-5">
                        Showing {propertiesFilter.length} results
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {
                            propertiesFilter.map(property => <AllPropertiesCard key={property._id} property={property} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProperties;