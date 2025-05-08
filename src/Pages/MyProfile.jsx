import React, { useContext } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { AuthContext } from '../Provider/AuthContext';
import { Link, useNavigate } from 'react-router'; // Added missing import
import { Helmet } from 'react-helmet-async';
import { FaArrowRight } from 'react-icons/fa6';
import toast from 'react-hot-toast';

const MyProfile = () => {
    const { signOutUser, user, loading } = useContext(AuthContext);
    const navigate = useNavigate(); // Added for redirection after logout

    // If loading, show a spinner
    if (loading) {
        return (
            <>
                <div className="flex items-center justify-center h-screen">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-500"></div>
                </div>
            </>
        );
    }

    // Handle missing user data gracefully with fallbacks
    const email = user?.email || user?.providerData?.[0]?.email || "No email found";
    const displayName = user?.displayName || user?.providerData?.[0]?.displayName || "Knucklehead";
    const photoURL = user?.photoURL || user?.providerData?.[0]?.photoURL || "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp";

    // Handle sign out
    const handleLogout = async () => {
        try {
            await signOutUser();
            navigate('/'); // Navigate to home after logout
        } catch (error) {
            toast.error("Error signing out:", error);
        }
    };

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <Helmet>
                <title>My Profile</title>
            </Helmet>
            
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white rounded shadow-sm lg:flex-row sm:mx-auto h-full">
                <div className="relative lg:w-1/2">
                    <img
                        src={photoURL}
                        alt="Profile Picture"
                        className="w-full  h-full object-cover rounded-lg"
                    />
                </div>
                <div className="flex flex-col justify-center p-5 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Welcome!!!
                        </p>
                    </div>
                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                        {displayName}
                    </h5>
                    <p className="mb-5 text-gray-800">
                        Email: {email}
                    </p>

                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleLogout}
                            className="btn h-12 px-6 mr-6 font-medium rounded shadow-md bg-[#5ec1cc] text-white hover:bg-white hover:text-[#5ec1cc]"
                        >
                            <IoMdArrowRoundBack size={20} />
                            Log out
                        </button>

                        <Link
                            to="/update-profile"
                            className="btn h-12 px-6 mr-6 font-medium rounded shadow-md bg-[#5ec1cc] text-white hover:bg-white hover:text-[#5ec1cc]"
                        >

                            Update Profile <FaArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;