import React, { useState, useContext, useEffect, useRef } from 'react';
import { animate, spring } from 'motion';
import loginImg from '../assets/login.jpg';
import { IoIosMail } from 'react-icons/io';
import { FaGoogle, FaGithub } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import Loading from '../Components/Loading';
import { Helmet } from 'react-helmet-async';

const SignIn = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signInUser, loginGithub, loginGoogle, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Get the stored location from state or default to home page
    const from = location.state?.from || '/';
    const jobIndex = location.state?.jobIndex;

    // References for animated elements
    const imageRef = useRef(null);
    const cardRef = useRef(null);
    const titleRef = useRef(null);
    const formRef = useRef(null);
    const dividerRef = useRef(null);
    const githubButtonRef = useRef(null);
    const googleButtonRef = useRef(null);
    const errorRef = useRef(null);


    // Add new refs for the sign up and reset password links
    const signUpLinkRef = useRef(null);
    const resetLinkRef = useRef(null);

    // Initialize animations on component mount
    useEffect(() => {
        if (imageRef.current) {
            animate(
                imageRef.current,
                { opacity: [0, 0.85] },
                { duration: 1 }
            );
        }

        if (cardRef.current) {
            animate(
                cardRef.current,
                {
                    x: [100, 0],
                    opacity: [0, 1]
                },
                {
                    duration: 0.6,
                    easing: spring()
                }
            );
        }

        if (titleRef.current) {
            animate(
                titleRef.current,
                { opacity: [0, 1] },
                { duration: 0.5, delay: 0.4 }
            );
        }

        if (formRef.current) {
            const formElements = formRef.current.querySelectorAll('.form-item');
            formElements.forEach((element, index) => {
                animate(
                    element,
                    {
                        y: [20, 0],
                        opacity: [0, 1]
                    },
                    {
                        duration: 0.4,
                        delay: 0.5 + (index * 0.1)
                    }
                );
            });
        }

        if (dividerRef.current) {
            animate(
                dividerRef.current,
                {
                    scaleX: [0, 1],
                    opacity: [0, 1]
                },
                { duration: 0.5, delay: 0.7 }
            );
        }

        if (githubButtonRef.current) {
            animate(
                githubButtonRef.current,
                {
                    y: [20, 0],
                    opacity: [0, 1]
                },
                { duration: 0.3, delay: 0.8 }
            );
        }

        if (googleButtonRef.current) {
            animate(
                googleButtonRef.current,
                {
                    y: [20, 0],
                    opacity: [0, 1]
                },
                { duration: 0.3, delay: 0.9 }
            );
        }

        // Add animations for the sign up and reset password links
        if (signUpLinkRef.current) {
            animate(
                signUpLinkRef.current,
                {
                    y: [20, 0],
                    opacity: [0, 1]
                },
                { duration: 0.3, delay: 1.0 }
            );
        }

        if (resetLinkRef.current) {
            animate(
                resetLinkRef.current,
                {
                    y: [20, 0],
                    opacity: [0, 1]
                },
                { duration: 0.3, delay: 1.1 }
            );
        }
    }, []);

    // Button hover animations
    const setupButtonAnimation = (element) => {
        element.addEventListener('mouseenter', () => {
            animate(
                element,
                { scale: 1.05, boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)' },
                { duration: 0.2 }
            );
        });

        element.addEventListener('mouseleave', () => {
            animate(
                element,
                { scale: 1, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' },
                { duration: 0.2 }
            );
        });

        element.addEventListener('mousedown', () => {
            animate(
                element,
                { scale: 0.95 },
                { duration: 0.1 }
            );
        });

        element.addEventListener('mouseup', () => {
            animate(
                element,
                { scale: 1 },
                { duration: 0.1 }
            );
        });
    };

    // Setup button animations after render
    useEffect(() => {
        const buttons = document.querySelectorAll('.animated-button');
        buttons.forEach(button => {
            setupButtonAnimation(button);
        });
    }, [loading]);

    // If user is already logged in, redirect them
    useEffect(() => {
        if (user) {
            setLoading(false); // Make sure loading is off when user changes

            // If we have a jobIndex, we need to go back and open the modal
            if (jobIndex !== undefined) {
                navigate(from);

                // Allow the page to render before trying to open the modal
                setTimeout(() => {
                    const modalId = `job_modal_${jobIndex}`;
                    const modalElement = document.getElementById(modalId);
                    if (modalElement) {
                        modalElement.showModal();
                    }
                }, 500);
            } else {
                navigate(from);
            }
        }
    }, [user, navigate, from, jobIndex]);

    // Animate error message when it changes
    useEffect(() => {
        if (error && errorRef.current) {
            animate(
                errorRef.current,
                { opacity: [0, 1] },
                { duration: 0.3 }
            );
        }
    }, [error]);

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;

            // Validate Password Strength
            if (password.length < 6) {
                setError('Password must be at least 6 characters long.');
                return;
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                setError('Please enter a valid email address.');
                return;
            }

            setError('');
            setLoading(true);

            await signInUser(email, password);
            form.reset();
            // Navigation will be handled by the useEffect when user state changes
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false); // Always turn off loading state
        }
    };

    const handleSocialSignIn = async (socialLogin) => {
        try {
            setError('');
            setLoading(true);
            await socialLogin();
            // Navigation will be handled by the useEffect when user state changes
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false); // Always turn off loading state
        }
    };

    return (
        <div className="relative">
            <Helmet>
                <title>Sign In</title>
                <meta name="description" content="Sign in to your account" />
                <link rel="canonical" href="/signin" />
                <meta property="og:title" content="Sign In" />
            </Helmet>

            <img
                ref={imageRef}
                src={loginImg}
                className="absolute inset-0 opacity-85 object-cover w-full h-full"
                alt="Login background"
                style={{ opacity: 0 }} // Initial state for animation
            />

            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                    <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                        {/* You can add a welcome message or branding here */}
                    </div>
                    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                        <div
                            ref={cardRef}
                            className="bg-white rounded shadow-2xl p-7 sm:p-10 space-y-4"
                            style={{ opacity: 0, transform: 'translateX(100px)' }} // Initial state for animation
                        >
                            <h3
                                ref={titleRef}
                                className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl"
                                style={{ opacity: 0 }} // Initial state for animation
                            >
                                Sign In!
                            </h3>

                            {loading ? (
                                <Loading></Loading>
                            ) : (
                                <>
                                    <form
                                        ref={formRef}
                                        onSubmit={handleSignIn}
                                        className="space-y-4"
                                    >
                                        <div className="form-item" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                                            <label className="label">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="mail@site.com"
                                                className="input w-full"
                                                required
                                            />
                                        </div>

                                        <div className="form-item" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                                            <label className="label">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className="input w-full"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn w-full border-[#5ec1cc] hover:bg-[#5ec1cc] hover:text-white animated-button form-item"
                                            style={{ opacity: 0, transform: 'translateY(20px)' }}
                                        >
                                            <IoIosMail size={20} />
                                            Login with Email
                                        </button>
                                    </form>

                                    <div
                                        ref={dividerRef}
                                        className="divider divider-primary"
                                        style={{ opacity: 0, transform: 'scaleX(0)' }}
                                    >
                                        or
                                    </div>

                                    <button
                                        ref={githubButtonRef}
                                        type="button"
                                        onClick={() => handleSocialSignIn(loginGithub)}
                                        className="btn bg-black text-white w-full border-black animated-button"
                                        style={{ opacity: 0, transform: 'translateY(20px)' }}
                                    >
                                        <FaGithub size={20} /> Login with GitHub
                                    </button>

                                    <button
                                        ref={googleButtonRef}
                                        type="button"
                                        onClick={() => handleSocialSignIn(loginGoogle)}
                                        className="btn bg-cyan-500 text-white w-full border-[#e5e5e5] animated-button"
                                        style={{ opacity: 0, transform: 'translateY(20px)' }}
                                    >
                                        <FaGoogle size={20} /> Login with Google
                                    </button>

                                    <p
                                        ref={signUpLinkRef}
                                        className="text-xs text-gray-600 sm:text-sm"
                                        style={{ opacity: 0, transform: 'translateY(20px)' }}
                                    >
                                        Don't have an account?{' '}
                                        <Link to="/signup" className="text-[#5ec1cc] font-bold">
                                            Sign Up
                                        </Link>
                                    </p>

                                    <p
                                        ref={resetLinkRef}
                                        className="text-xs text-gray-600 sm:text-sm"
                                        style={{ opacity: 0, transform: 'translateY(20px)' }}
                                    >
                                        Forgot Password?{' '}
                                        <Link to="/reset" className="text-red-500 font-bold">
                                            Reset
                                        </Link>
                                    </p>
                                </>
                            )}

                            {error && (
                                <p
                                    ref={errorRef}
                                    className="text-center text-red-600"
                                    style={{ opacity: 0 }} // Initial state for animation
                                >
                                    {error}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;