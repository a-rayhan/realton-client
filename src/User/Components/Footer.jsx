import { HiHomeModern } from "react-icons/hi2";
import { FaApple, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-black">
            <div className="max-w-7xl mx-auto px-6 pt-24 py-14">
                <div className="lg:flex justify-between">
                    <div className="flex-1 mb-14 xl:mb-0">
                        <div className="flex items-center gap-x-2 mb-9">
                            <div className="h-12 w-12 rounded-full bg-[#eb6753] flex justify-center items-center">
                                <HiHomeModern className='text-2xl font-bold text-white' />
                            </div>
                            <p className="text-2xl font-bold text-white">
                                Realton
                            </p>
                        </div>

                        <div className="xl:flex gap-12">
                            <div className="mb-5 xl:mb-0">
                                <p className="text-[#bebdbd] text-sm mb-2">
                                    Total Free Customer Care
                                </p>

                                <p className="text-white">
                                    +(0) 123 050 945 02
                                </p>
                            </div>

                            <div>
                                <p className="text-[#bebdbd] text-sm mb-2">
                                    Need Live Support?
                                </p>

                                <p className="text-white">
                                    hi@homez.com
                                </p>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-xl text-white font-semibold mb-3">
                                Apps
                            </p>

                            <div className="inline-flex  flex-col lg:flex-row gap-4">
                                <div className="bg-[#ffffff0a] ps-5 pr-12 py-4 rounded-2xl flex gap-4 items-center hover:bg-[#eb6753] cursor-pointer">
                                    <FaApple className='text-3xl text-white' />

                                    <div>
                                        <p className="text-xs text-[#bebdbd]">
                                            Download on the
                                        </p>

                                        <p className="text-white">
                                            Apple Store
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-[#ffffff0a] ps-5 pr-12 py-4 rounded-2xl flex gap-4 items-center hover:bg-[#eb6753] cursor-pointer">
                                    <FaGooglePlay className='text-3xl text-white' />

                                    <div>
                                        <p className="text-xs text-[#bebdbd]">
                                            Download on the
                                        </p>

                                        <p className="text-white">
                                            Google Play
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-14">
                            <p className="text-white font-semibold mb-5">
                                Follow us on social media
                            </p>

                            <div className="flex gap-6 text-white text-lg">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-12">
                            <p className="text-white font-semibold mb-6">
                                Keep Yourself Up to Date
                            </p>

                            <div className="md:w-[500px] xl:max-w-2xl">
                                <div className="bg-[#ffffff0a] px-6 py-6 rounded-xl flex items-center gap-x-5">
                                    <input type="search" placeholder="Enter an address, neighborhood, city, or ZIP code for Buy" className="md:ps-7 pr-3 py-2 outline-none text-white md:w-[400px] xl:w-[900px] bg-transparent rounded-lg" />

                                    <button className="flex justify-center items-center text-white">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="md:flex justify-between">
                            <div className="mb-10 xl:mb-0">
                                <h3 className="text-white font-medium text-base mb-5">
                                    Popular Search
                                </h3>

                                <div className="flex flex-col gap-5 text-[#bebdbd] text-sm">
                                    <p>Apartment for Rent</p>
                                    <p>Apartment Low to Hide</p>
                                    <p>Offices for Buy</p>
                                    <p>Offices for Rent</p>
                                </div>
                            </div>

                            <div className="mb-10 xl:mb-0">
                                <h3 className="text-white font-medium text-base mb-5">
                                    Quick Links
                                </h3>

                                <div className="flex flex-col gap-5 text-[#bebdbd] text-sm">
                                    <p>Terms of Use</p>
                                    <p>Privacy Policy</p>
                                    <p>Pricing Plans</p>
                                    <p>Our Services</p>
                                    <p>Contact Support</p>
                                    <p>Careers</p>
                                    <p>FAQs</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-white font-medium text-base mb-5">
                                    Discover
                                </h3>

                                <div className="flex flex-col gap-5 text-[#bebdbd] text-sm">
                                    <p>Miami</p>
                                    <p>Los Angeles</p>
                                    <p>Chicago</p>
                                    <p>New York</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-5 lg:my-8" />

                <div className="text-[#bebdbd] text-center text-sm md:flex justify-between">
                    <p>
                        © Realton 2023 - All rights reserved
                    </p>

                    <p>
                        Privacy · Terms · Sitemap
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;