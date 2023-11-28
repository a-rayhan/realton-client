import { FiSearch } from "react-icons/fi";

const AllPropertiesHeader = () => {
    return (
        <div className="w-full h-[500px] bg-black text-white flex flex-col justify-center items-center bg-img">
            <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-semibold px-5 md:px-10 lg:px-0">
                    Find Your Dream Home
                </h2>

                <p className="mt-4 px-10 md:px-0">
                    We’ve more than 745,000 apartments, place & plot.
                </p>
            </div>

            <div className="md:w-full lg:w-[800px] xl:w-[1000px] mt-12 lg:mt-20 md:px-10 lg:px-0">
                <div className="bg-white px-6 py-6 rounded-xl flex items-center gap-x-5">
                    <input type="search" placeholder="Enter an address, neighborhood, city, or ZIP code for Buy" className="px-7 py-4 outline-none text-black md:w-full lg:w-[700px] xl:w-[900px] bg-[#dee2e6] rounded-lg" />

                    <button className="h-14 w-14 rounded-full bg-black hover:bg-[#eb6753] flex justify-center items-center text-white text-2xl">
                        <FiSearch />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllPropertiesHeader;