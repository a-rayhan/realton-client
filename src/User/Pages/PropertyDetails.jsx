import { IoBedOutline } from "react-icons/io5";
import AddedReview from "../Components/AddedReview";
import PostReview from "../Components/PostReview";
import { MdArrowOutward } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useProperties from "../../Hooks/useProperties";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {

    const [properties] = useProperties();

    const { user } = useAuth();

    const [propertyItem, setPropertyItem] = useState([]);

    const { propertyId } = useParams();

    useEffect(() => {
        const findPropertyId = properties.find(property => property._id == propertyId);
        setPropertyItem(findPropertyId);
    }, [propertyId, properties]);

    const axiosPublic = useAxiosPublic();

    const handleWishlist = () => {
        axiosPublic.post('/wishlists', propertyItem)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: `${propertyItem.title} added wishlist!`,
                    });


                }
            }).catch((error) => {
                // An error occurred
                console.log(error.message);
            });
    }

    return (
        <div className="bg-[#f7f7f7]">
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div>
                    <h2 className="text-2xl font-semibold mb-3">
                        {propertyItem.title}
                    </h2>

                    <p>
                        {propertyItem.location}
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
                            {propertyItem.username}
                        </p>
                    </div>
                </div>

                <div className="w-full p-8 rounded-2xl shadow-xl bg-white mb-8">
                    <img src={propertyItem.photo} alt="" className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl object-cover" />

                    <div onClick={handleWishlist} className="inline-flex flex-col md:flex-row gap-3 md:gap-5 my-8 md:my-12">
                        <div className="inline-flex items-center gap-x-2 border border-black px-6 py-4 rounded-xl bg-black hover:border-none text-white font-semibold cursor-pointer">
                            Add to wishlist
                            <MdArrowOutward className='text-xl' />
                        </div>

                        <p className="inline-flex items-center gap-x-2 border border-black px-6 py-4 rounded-xl font-semibold cursor-pointer">
                            {propertyItem.price}
                        </p>
                    </div>

                    <div>
                        <p className="text-lg font-semibold mb-6">
                            Property Description
                        </p>

                        <div >
                            <p>
                                {propertyItem.description}
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