import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const [passError, setPassError] = useState('');
    const [error, setError] = useState('');

    const { googleSignIn, signin } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const handleSocialLogin = (item) => {
        item()
            .then(result => {
                Swal.fire({
                    title: 'success!',
                    text: 'Login with Google succesfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)

        const email = form.get('email');
        const password = form.get('password');

        if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
            setPassError('Wrong password');
        }
        else {
            setPassError('');
            setError('');

            if (email) {
                signin(email, password)
                    .then(result => {
                        Swal.fire({
                            title: 'success!',
                            text: 'Login succesfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        navigate(location?.state ? location.state : '/')

                    })
                    .catch(error => {
                        setError('Wrong email address')
                    })
            }
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="max-w-[734px] py-9 bg-black mx-auto rounded-lg">
                <div>
                    <p className="text-5xl font-semibold text-white mt-6 mb-12 text-center">
                        Log in to Realton
                    </p>
                </div>

                <div>
                    <div>
                        <div onClick={() => handleSocialLogin(googleSignIn)} className="w-[324px] bg-transparent border border-[#f7f7f7] rounded-full flex items-center gap-x-8 px-7 mt-10 mx-auto">
                            <FcGoogle className="text-3xl" />

                            <button className="py-3 text-white font-medium">
                                Continue with Google
                            </button>
                        </div>

                        <hr className="my-8 w-[324px] md:max-w-[500px] mx-auto" />

                        <form action="" onSubmit={handleLogin}>
                            <div className="w-[324px] mx-auto mb-3">
                                <div className="flex flex-col">
                                    <label className="text-white mb-1">
                                        Email <span className="text-[#ff566a]">*</span>
                                    </label>

                                    <input type="email" name="email" placeholder="Enter your email" className="max-w-2xl bg-[#5e5beb] py-3 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" required />
                                </div>

                                <p className="px-4 text-[#ff566a] text-sm mt-2">
                                    {error}
                                </p>
                            </div>

                            <div className="w-[324px] mx-auto">
                                <div className="flex flex-col">
                                    <label className="text-white mb-1">
                                        Password <span className="text-[#ff566a]">*</span>
                                    </label>

                                    <input type="password" name="password" placeholder="Enter your password" className="max-w-2xl bg-[#5e5beb] py-3 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" />
                                </div>

                                <p className="px-4 text-[#ff566a] text-sm mt-2">
                                    {passError}
                                </p>
                            </div>

                            <div className="flex justify-center items-center mt-7">
                                <button className="text-xl bg-[#7a63f1] py-3 w-[324px] rounded-full text-white font-medium">
                                    Login
                                </button>
                            </div>
                        </form>

                        <hr className="my-8 w-[324px] md:max-w-[500px] mx-auto" />

                        <div>
                            <p className="text-[#f7f7f7] text-sm text-center mt-6">
                                Don't have an account? <NavLink to='/register' className='underline text-white'>Register</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;