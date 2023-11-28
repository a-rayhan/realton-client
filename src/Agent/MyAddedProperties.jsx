import MyAddedPropertiesCard from "./MyAddedPropertiesCard";

const MyAddedProperties = () => {
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
                <MyAddedPropertiesCard />
                <MyAddedPropertiesCard />
                <MyAddedPropertiesCard />
                <MyAddedPropertiesCard />
                <MyAddedPropertiesCard />
                <MyAddedPropertiesCard />
            </div>
        </div>
    );
};

export default MyAddedProperties;