import { FaRegTrashAlt } from "react-icons/fa";
import { MdStar } from "react-icons/md";

const ManageReviewsCard = () => {
    return (
        <div>
            <div className="p-2 lg:p-6">
                <div className="flex justify-between">
                    <div className="flex-1">
                        <p className="text-xl font-semibold mb-1">
                            Equestrian  Family Home
                        </p>

                        <p className="text-sm mb-4">
                            13 mins ago
                        </p>
                    </div>

                    <div className="hover:bg-[#f7f7f7] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <p className="text-lg">
                            <FaRegTrashAlt />
                        </p>
                    </div>
                </div>

                <p className="font-medium text-sm md:text-base mb-5">
                    Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.
                </p>

                <div className="md:flex justify-between items-center">
                    <div className="md:flex gap-5 mb-2 md:mb-0">
                        <div className="w-14 h-14 rounded-full bg-slate-400 mb-2 md:mb-0">
                            <img src="https://homez.ibthemespro.com/images/testimonials/testimonial-1.png" alt="" className="w-full h-full rounded-full object-cover" />
                        </div>

                        <div>
                            <p className="font-semibold mb-1">
                                Leslie Alexander
                            </p>
                            <p className="text-sm mb-1">
                                aburayhandh@gmail.com
                            </p>
                            <p className="text-sm">
                                Nintendo
                            </p>
                        </div>
                    </div>

                    <div className="flex text-[#fdcc0d] text-lg">
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                    </div>
                </div>
            </div>

            <hr className="my-10" />
        </div>
    );
};

export default ManageReviewsCard;