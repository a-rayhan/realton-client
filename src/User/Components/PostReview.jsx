import { MdArrowOutward } from "react-icons/md";

const PostReview = () => {
    return (
        <div>
            <form>
                <div className="w-full mx-auto mb-3">
                    <div className="flex flex-col">
                        <label className="md:px-4 mb-1">
                            Email
                        </label>

                        <input type="text" name="name" placeholder="Enter car name" className="border border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                    </div>
                </div>

                <div className="grid xl:grid-cols-2 gap-x-5">
                    <div className="w-full mx-auto mb-3">
                        <div className="flex flex-col">
                            <label className="md:px-4 mb-1">
                                Name
                            </label>

                            <input type="text" name="name" placeholder="Enter car name" className="border border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                        </div>
                    </div>

                    <div className="w-full mx-auto mb-3">
                        <div className="flex flex-col">
                            <label className="md:px-4 mb-1">
                                Brand Name
                            </label>

                            <input type="text" name="brand" placeholder="Enter car brand" className="border border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                        </div>
                    </div>
                </div>

                <div className="w-full mx-auto mb-7">
                    <div className="flex flex-col">
                        <label className="md:px-4 mb-1">
                            Description
                        </label>

                        <textarea rows={5} type="text" name="details" placeholder="Enter short description" className="border border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                    </div>
                </div>

                <div className="inline-flex items-center gap-x-2 border border-black px-6 py-4 rounded-xl hover:bg-black hover:border-none hover:text-white font-semibold cursor-pointer">
                    Submit Review
                    <MdArrowOutward className='text-xl' />
                </div>
            </form>
        </div>
    );
};

export default PostReview;