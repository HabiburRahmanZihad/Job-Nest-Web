import React from 'react';
import { use } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';

const UpdateProfile = () => {
    const { updateUserProfile, user, setUser } = use(AuthContext);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;

        if (name.length < 3) {
            toast.error('Name must be at least 3 characters long.');
            return;
        }

        // Validate image URL
        const imageUrlPattern = /\.(jpeg|jpg|gif|png|webp)$/i;
        if (!imageUrlPattern.test(image)) {
            toast.error('Url must include .jpeg, .jpg, .gif, .png, or .webp');
            return;
        }

        const profile = {
            displayName: name,
            photoURL: image,
        };

        // Update user profile logic here
        updateUserProfile(profile)
            .then(() => {
                // Explicitly update the user in AuthContext
                const updatedUser = { ...user, displayName: name, photoURL: image };
                setUser(updatedUser);
                toast.success('Profile updated successfully!');
                //redirect to My Profile page
                window.location.href = '/profile'; // Redirect to My Profile page
            })
            .catch((error) => {
                toast.error('Error updating profile:', error);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>

            <div className="flex items-center justify-center min-h-[calc(100vh-310px)] bg-base-200">
                <form
                    onSubmit={handleUpdateProfile}
                    className="flex flex-col  justify-center w-full max-w-md p-6 bg-base-300 rounded shadow-md space-y-4">
                    <h1 className='text-center text-2xl font-extrabold'>Update Your Profile</h1>

                    <label className="label text-xl font-bold">Full Name</label>
                    <label className="input w-full">
                        <input type="text" name="name" placeholder="Enter your Name" required />
                    </label>


                    <label className="label text-xl font-bold">Image Link</label>
                    <label className="input w-full">
                        <input type="text" name="image" placeholder="Enter Image URL" required />
                    </label>

                    <button
                        type="submit"
                        className="btn w-full px-4 py-2 text-white bg-[#5ec1cc] rounded hover:bg-[#000000] "
                    >
                        Update Profile
                    </button>
                </form>

            </div>


        </div>
    );
};

export default UpdateProfile;