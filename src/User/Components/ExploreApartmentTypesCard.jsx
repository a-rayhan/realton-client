const ExploreApartmentTypesCard = () => {
    return (
        <div className="bg-[#f7f7f7] p-5 rounded-lg hover:bg-black hover:text-white cursor-pointer">
            <div className="bg-white w-16 h-16 rounded-full flex justify-center items-center">

                <img src="https://i.ibb.co/HN2QZz5/house.png" alt="" className="w-8" />
            </div>

            <div className="mt-20">
                <p className="text-lg font-semibold">
                    Houses
                </p>

                <p className="text-sm">
                    22 Properties
                </p>
            </div>
        </div>
    );
};

export default ExploreApartmentTypesCard;