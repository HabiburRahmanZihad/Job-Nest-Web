import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const ResetPass = () => {
    const { forgetPassword } = useContext(AuthContext);

    const handleResetPass = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;


        forgetPassword(email)
            .then(() => {
                toast.success('Password reset email sent. Redirecting to Gmail...');
                form.reset();
                // Redirect to Gmail after alert
                setTimeout(() => {
                    // Redirect to Gmail to new tab
                    window.open('https://mail.google.com', '_blank');
                    window.location.href = '/signin'; // Redirect to sign-in page after 1 second
                }, 1000);
            })
            .catch(error => {
                toast.error(error.message);
            });
    };


    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-302px)] bg-gray-100">
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body space-y-4">

                    <h2 className="card-title">Reset Your Password</h2>

                    <p>Enter your email address and we will send you a link to reset your password.</p>

                    <form
                        onSubmit={handleResetPass}
                        className="form-control w-full max-w-xs space-y-4"
                    >

                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter valid email"
                            className="input input-bordered w-full max-w-xs"
                            required
                        />

                        <button type="submit" className="btn bg-cyan-500 text-white w-full">
                            Send Reset Link
                        </button>

                        <p className="text-xs text-gray-600 sm:text-sm">
                            Remembered your password?{' '}
                            <Link to="/signin" className="text-[#5ec1cc] font-bold">Sign In</Link>
                        </p>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default ResetPass;