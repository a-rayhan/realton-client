import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ServicesCard = ({img, title, description, button}) => {
    return (
        <div className="bg-[#f7f7f7] flex flex-col justify-center items-center p-7 rounded-2xl hover:shadow-2xl">
            <img src={img} alt="" className="mb-6" />

            <div className="flex flex-col justify-center items-center">
                <p className="text-xl font-semibold mb-3">
                    {title}
                </p>

                <p className="text-center mb-4">
                    {description}
                </p>

                <NavLink className="flex items-center gap-x-2 border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white">
                    {button}
                    <MdArrowOutward className='text-xl' />
                </NavLink>
            </div>
        </div>
    );
};

export default ServicesCard;