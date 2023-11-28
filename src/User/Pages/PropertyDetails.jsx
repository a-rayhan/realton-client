import { IoBedOutline } from "react-icons/io5";
import AddedReview from "../Components/AddedReview";
import PostReview from "../Components/PostReview";
import { MdArrowOutward } from "react-icons/md";

const PropertyDetails = () => {
    return (
        <div className="bg-[#f7f7f7]">
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div>
                    <h2 className="text-2xl font-semibold mb-3">
                        Equestrian Family Home
                    </h2>

                    <p>
                        San Diego City, CA, USA
                    </p>

                    <div className="flex items-center gap-8 my-5">
                        <div className="flex items-center gap-x-2">
                            <IoBedOutline />
                            <p className="text-sm">
                                1 bed
                            </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <IoBedOutline />
                            <p className="text-sm">
                                1 bath
                            </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <IoBedOutline />
                            <p className="text-sm">
                                1200 sqft
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-5">
                        <p className="text-sm">
                            Posted by
                        </p>

                        <p className="font-semibold">
                            Leslie Alexander
                        </p>
                    </div>
                </div>

                <div className="w-full p-8 rounded-2xl shadow-xl bg-white mb-8">
                    <img src="https://homez.ibthemespro.com/images/listings/listing-single-6-1.jpg" alt="" className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl object-cover" />

                    <div className="inline-flex flex-col md:flex-row gap-3 md:gap-5 my-8 md:my-12">
                        <div className="inline-flex items-center gap-x-2 border border-black px-6 py-4 rounded-xl bg-black hover:border-none text-white font-semibold cursor-pointer">
                            Add to wishlist
                            <MdArrowOutward className='text-xl' />
                        </div>

                        <p className="inline-flex items-center gap-x-2 border border-black px-6 py-4 rounded-xl font-semibold cursor-pointer">
                            $200k
                        </p>
                    </div>

                    <div>
                        <p className="text-lg font-semibold mb-6">
                            Property Description
                        </p>

                        <div >
                            <p>
                                This 3-bed with a loft, 2-bath home in the gated community of The Hideout has it all. From the open floor plan to the abundance of light from the windows, this home is perfect for entertaining. The living room and dining room have vaulted ceilings and a beautiful fireplace. You will love spending time on the deck taking in the beautiful views. In the kitchen, you'll find stainless steel appliances and a tile backsplash, as well as a breakfast bar.

                                Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full p-8 rounded-2xl shadow-xl bg-white mb-8">
                    <p className="text-lg font-semibold mb-8">
                        3 reviews
                    </p>

                    <div>
                        <AddedReview />
                        <AddedReview />
                        <AddedReview />
                        <AddedReview />
                    </div>

                    <div>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="inline-flex items-center gap-x-2 border border-black px-6 py-4 rounded-xl bg-black hover:border-none text-white font-semibold cursor-pointer" onClick={() => document.getElementById('my_modal_5').showModal()}>Add a review</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <PostReview />
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;