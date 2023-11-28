import { FaQuoteLeft } from "react-icons/fa";
import { MdStar } from "react-icons/md";

const ReviewCard = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-5">
                <div>
                    <p className="text-lg font-semibold">
                        Great Work
                    </p>
                </div>
                <div>
                    <FaQuoteLeft className='text-3xl text-[#eb675326]' />
                </div>
            </div>

            <p className="font-medium mb-5">
                Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.
            </p>

            <div className="flex text-[#fdcc0d] text-lg">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
            </div>

            <hr className="my-6" />

            <div className="flex gap-6">
                <div className="w-14 h-14 rounded-full bg-slate-400">
                    <img src="https://homez.ibthemespro.com/images/testimonials/testimonial-1.png" alt="" className="w-full h-full rounded-full object-cover" />
                </div>

                <div>
                    <p className="font-semibold mb-1">
                        Leslie Alexander
                    </p>
                    <p className="text-sm">
                        Nintendo
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;