import { NavLink } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
    return (
        <div className="bg-[#f7f7f7]">
            <div className="max-w-7xl mx-auto px-6 py-24 mb-24">
                <div className="lg:flex justify-between items-center">
                    <div className="font-semibold">
                        <SectionTitle
                            title='Need help? Talk to our expert.'
                            description='Talk to our experts or Browse through more properties.'
                        />
                    </div>

                    <div className="md:flex gap-8">
                        <NavLink className="inline-flex items-center gap-x-2 border border-black px-6 py-4 rounded-xl hover:bg-[#eb6753] hover:border-none hover:text-white font-semibold">
                            Contact Us
                            <MdArrowOutward className='text-xl' />
                        </NavLink>

                        <NavLink className="hidden md:flex items-center gap-x-2 bg-black px-6 py-4 rounded-xl hover:bg-[#eb6753] text-white font-semibold">
                            920 851 9087
                            <MdArrowOutward className='text-xl' />
                        </NavLink>
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    );
};

export default Contact;