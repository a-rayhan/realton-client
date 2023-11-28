import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUserProfile, logout, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const axiosPublic = useAxiosPublic();

    const handleSocialLogin = (item) => {
        item()
            .then(result => {
                Swal.fire({
                    title: 'success!',
                    text: 'Register succesfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then((result) => {
                // Signed up 
                console.log(result.user);

                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        // Profile updated!

                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();

                                    Swal.fire({
                                        icon: "success",
                                        title: 'User Signup Successfully',
                                    });

                                    logout()
                                        .then(() => {
                                            navigate('/login');
                                        })
                                        .catch(error => console.log(error.message));
                                }
                            })

                    }).catch((error) => {
                        // An error occurred
                        console.log(error.message);
                    });
                // ...
            })
            .catch((error) => {
                console.log(error.message);
                // ..
            });
    }
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="max-w-[734px] py-9 bg-black mx-auto rounded-lg">
                <div className="max-w-[400px] mx-auto px-6">
                    <p className="text-4xl md:text-5xl font-semibold text-white mt-6 mb-12">
                        Sign up to start Realton
                    </p>
                </div>

                <div>
                    <div>
                        <div onClick={() => handleSocialLogin(googleSignIn)} className="w-[324px] bg-transparent border border-[#f7f7f7] rounded-full flex items-center gap-x-8 px-7 mx-auto">
                            <FcGoogle className="text-3xl" />

                            <button className="py-3 text-white font-medium">
                                Register with Google
                            </button>
                        </div>

                        <hr className="my-8 w-[324px] md:max-w-[500px] mx-auto" />

                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-[324px] mx-auto mb-3">
                                <div className="flex flex-col">
                                    <label className="text-white mb-1">
                                        Name <span className="text-[#ff566a]">*</span>
                                    </label>

                                    {errors.name && <span className="text-sm mb-1 text-[#BB8506]">You must enter your name</span>}

                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter your email" className="max-w-2xl bg-[#5e5beb] py-3 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" required />
                                </div>

                                {/* <p className="px-4 text-[#ff566a] text-sm mt-2">
                                {error}
                            </p> */}
                            </div>

                            <div className="w-[324px] mx-auto mb-3">
                                <div className="flex flex-col">
                                    <label className="text-white mb-1">
                                        Email <span className="text-[#ff566a]">*</span>
                                    </label>

                                    {errors.email && <span className="text-sm mb-1 text-[#BB8506]">You must enter your valid email</span>}

                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="Enter your email" className="max-w-2xl bg-[#5e5beb] py-3 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" required />
                                </div>

                                {/* <p className="px-4 text-[#ff566a] text-sm mt-2">
                                {error}
                            </p> */}
                            </div>

                            <div className="w-[324px] mx-auto mb-3">
                                <div className="flex flex-col">
                                    <label className="text-white mb-1">
                                        Password <span className="text-[#ff566a]">*</span>
                                    </label>

                                    <input type="password" {...register("password")} name="password" placeholder="Enter your password" className="max-w-2xl bg-[#5e5beb] py-3 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" />
                                </div>

                                {/* <p className="px-4 text-[#ff566a] text-sm mt-2">
                                {passError}
                            </p> */}
                            </div>

                            <div className="w-[324px] mx-auto">
                                <div className="flex flex-col">
                                    <label className="text-white mb-1">
                                        Photo Url <span className="text-[#ff566a]">*</span>
                                    </label>

                                    <input type="text" {...register("photo")} name="photo" placeholder="Enter your email" className="max-w-2xl bg-[#5e5beb] py-3 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" required />
                                </div>

                                {/* <p className="px-4 text-[#ff566a] text-sm mt-2">
                                {error}
                            </p> */}
                            </div>

                            <div className="flex justify-center items-center mt-7">
                                <button className="text-xl bg-[#7a63f1] py-3 w-[324px] rounded-full text-white font-medium">
                                    Register
                                </button>
                            </div>
                        </form>

                        <hr className="my-8 w-[324px] md:max-w-[500px] mx-auto" />

                        <div>
                            <p className="text-[#f7f7f7] text-sm text-center mt-6">
                                Already have an account? <NavLink to='/login' className='underline text-white'>Log in here.</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;