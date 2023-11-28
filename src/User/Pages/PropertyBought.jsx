import PropertyBoughtCard from "../Components/PropertyBoughtCard";

const PropertyBought = () => {
    return (
        <div>
            <div className="mb-14">
                <p className="text-2xl font-semibold mb-2">
                    My Bought Properties
                </p>
                <p className="text-sm">
                    We are glad to see you again!
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
                <PropertyBoughtCard />
                <PropertyBoughtCard />
                <PropertyBoughtCard />
                <PropertyBoughtCard />
                <PropertyBoughtCard />
            </div>
        </div>
    );
};

export default PropertyBought;