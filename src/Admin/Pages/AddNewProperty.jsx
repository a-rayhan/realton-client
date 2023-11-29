import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AddNewProperty = () => {

    const { user } = useAuth();

    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const propertyInfo = {
            title: data.title,
            price: data.price,
            photo: data.photo,
            location: data.location,
            rating: data.rating,
            description: data.description,
            username: user?.displayName,
            useremail: user?.email,
            userphoto: user?.photoURL,
        }

        console.log(propertyInfo);

        axiosPublic.post('/properties', propertyInfo)
            .then(res => {
                if (res.data.insertedId) {
                    reset();

                    Swal.fire({
                        icon: "success",
                        title: 'Post a property successfully',
                    });


                }
            }).catch((error) => {
                // An error occurred
                console.log(error.message);
            });
    }


    return (
        <div>
            <div className="mb-14">
                <p className="text-2xl font-semibold mb-2">
                    Add New Property
                </p>
                <p className="text-sm">
                    We are glad to see you again!
                </p>
            </div>

            <div className="px-4 md:px-8 py-7 md:py-5 bg-white rounded-2xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mx-auto mb-3">
                        <div className="flex flex-col">
                            <label className="md:px-4 mb-1">
                                Title
                            </label>

                            <input type="text" {...register("title")} name="title" placeholder="Enter property title" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-2 gap-x-5">
                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="md:px-4 mb-1">
                                    Price
                                </label>

                                <input type="text" {...register("price")} name="price" placeholder="Enter property price" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="md:px-4 mb-1">
                                    Location
                                </label>

                                <input type="text" {...register("location")} name="location" placeholder="Enter property location" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="md:px-4 mb-1">
                                    Property Photo Url
                                </label>

                                <input type="text" {...register("photo")} name="photo" placeholder="Enter property photo url" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" required />
                            </div>
                        </div>

                        <div className="w-full mx-auto mb-3">
                            <div className="flex flex-col">
                                <label className="md:px-4 mb-1">
                                    Rating
                                </label>

                                <input type="text" {...register("rating")} name="rating" placeholder="Enter rating" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full mx-auto mb-3">
                        <div className="flex flex-col">
                            <label className="md:px-4 mb-1">
                                Description
                            </label>

                            <textarea rows={3} type="text" {...register("description")} name="description" placeholder="Enter short description" className="border-2 border-[#434344] py-4 px-6 rounded-lg placeholder:text-lg" />
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-7">
                        <button className="text-xl bg-black hover:bg-[#eb6753] py-4 w-full rounded-xl text-white font-medium">
                            Post New Property
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewProperty;