import AllPropertiesCard from "../Components/AllPropertiesCard";
import AllPropertiesHeader from "../Components/AllPropertiesHeader";

const AllProperties = () => {
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
                        Showing 25 results
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AllPropertiesCard />
                        <AllPropertiesCard />
                        <AllPropertiesCard />
                        <AllPropertiesCard />
                        <AllPropertiesCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProperties;