import SectionTitle from "./SectionTitle";
import { GoHome } from "react-icons/go";
import { LuKey } from "react-icons/lu";
import { MdArrowOutward, MdOutlineCurrencyExchange } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row justify-between lg:gap-x-10 xl:gap-x-0 gap-y-14">
                <div className="lg:max-w-[512px]">
                    <div className="lg:w-[350px]">
                        <SectionTitle
                            title='Let’s Find The Right Selling Option For You'
                        />
                    </div>

                    <div className="flex flex-col gap-y-9">
                        <div>
                            <div className="flex gap-6">
                                <div className="bg-[#eb675312] hover:bg-[#eb6753] hover:text-white w-[70px] h-[70px] rounded-full flex justify-center items-center">
                                    <GoHome className='text-3xl ' />
                                </div>

                                <div className="flex-1">
                                    <p className="text-lg font-semibold mb-1">
                                        Property Management
                                    </p>

                                    <p>
                                        Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex gap-6">
                                <div className="bg-[#eb675312] hover:bg-[#eb6753] hover:text-white w-[70px] h-[70px] rounded-full flex justify-center items-center">
                                    <LuKey className='text-3xl ' />
                                </div>

                                <div className="flex-1">
                                    <p className="text-lg font-semibold mb-1">
                                        Mortgage Services
                                    </p>

                                    <p>
                                        Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex gap-6">
                                <div className="bg-[#eb675312] hover:bg-[#eb6753] hover:text-white w-[70px] h-[70px] rounded-full flex justify-center items-center">
                                    <MdOutlineCurrencyExchange className='text-3xl ' />
                                </div>

                                <div className="flex-1">
                                    <p className="text-lg font-semibold mb-1">
                                        Currency Services
                                    </p>

                                    <p>
                                        Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex">
                            <NavLink className="flex items-center gap-x-2 px-6 py-4 rounded-xl bg-black text-white font-semibold hover:bg-[#eb6753]">
                                Learn More
                                <MdArrowOutward className='text-xl' />
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="xl:h-[600px] mx-auto xl:mx-0">
                    <img src="https://homez.ibthemespro.com/images/about/cta-side-bg-1.jpg" alt="" className="h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;