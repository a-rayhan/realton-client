import { MdArrowOutward } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const PostReview = () => {

    const { user } = useAuth();

    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const reviewInfo = {
            details: data.details,
            username: user?.displayName,
            useremail: user?.email,
            userphoto: user?.photoURL,
        }

        console.log(reviewInfo);

        axiosPublic.post('/reviews', reviewInfo)
            .then(res => {
                if (res.data.insertedId) {
                    reset();

                    Swal.fire({
                        icon: "success",
                        title: 'Review added successfully',
                    });


                }
            }).catch((error) => {
                // An error occurred
                console.log(error.message);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full mx-auto mb-7">
                    <div className="flex flex-col">
                        <label className="md:px-4 mb-1">
                            Review Description
                        </label>

                        <textarea rows={5} type="text" {...register("details")} name="details" placeholder="Enter short description" className="border border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
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