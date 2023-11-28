const UpdateProperty = () => {
    return (
        <div>
            <div className="mb-14">
                <p className="text-2xl font-semibold mb-2">
                    Update Existing Property
                </p>
                <p className="text-sm">
                    We are glad to see you again!
                </p>
            </div>

            <div className="px-4 md:px-8 py-7 md:py-5 bg-white rounded-2xl">
                <form>
                    <div className="w-full mx-auto mb-3">
                        <div className="flex flex-col">
                            <label className="md:px-4 mb-1">
                                Title
                            </label>

                            <input type="text" name="name" placeholder="Enter car name" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-2 gap-x-5">
                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="md:px-4 mb-1">
                                    Price
                                </label>

                                <input type="text" name="name" placeholder="Enter car name" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="md:px-4 mb-1">
                                    Location
                                </label>

                                <input type="text" name="brand" placeholder="Enter car brand" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="md:px-4 mb-1">
                                    Property Photo Url
                                </label>

                                <input type="text" name="name" placeholder="Enter car name" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="md:px-4 mb-1">
                                    Rating
                                </label>

                                <input type="text" name="rating" placeholder="Enter rating" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full mx-auto mb-3">
                        <div className="flex flex-col">
                            <label className="md:px-4 mb-1">
                                Description
                            </label>

                            <textarea rows={3} type="text" name="details" placeholder="Enter short description" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-7">
                        <button className="text-xl bg-black hover:bg-[#eb6753] py-4 w-full rounded-xl text-white font-medium">
                            Update Property
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProperty;