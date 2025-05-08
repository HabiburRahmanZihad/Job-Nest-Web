import React, { useState, useContext, useEffect } from 'react';
import { animate, spring } from 'motion';
import SignupImg from '../assets/signup.jpg';
import { CiMail } from 'react-icons/ci';
import { Link, useNavigate, useLocation } from 'react-router';
import { IoIosMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { FaImage } from 'react-icons/fa6';
import { AuthContext } from '../Provider/AuthContext';
import Loading from '../Components/Loading';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { createUser, updateUserProfile, loginGoogle, loginGithub, setUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // References for animations
    const formRef = React.useRef(null);
    const cardRef = React.useRef(null);
    const titleRef = React.useRef(null);
    const dividerRef = React.useRef(null);
    const githubButtonRef = React.useRef(null);
    const googleButtonRef = React.useRef(null);
    const imageRef = React.useRef(null);

    // Initialize animations
    useEffect(() => {
        if (imageRef.current) {
            animate(
                imageRef.current,
                { opacity: [0, 1] },
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
                { duration: 0.5, delay: 0.5 }
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
                { duration: 0.5, delay: 0.8 }
            );
        }

        if (githubButtonRef.current) {
            animate(
                githubButtonRef.current,
                {
                    y: [20, 0],
                    opacity: [0, 1]
                },
                { duration: 0.3, delay: 0.9 }
            );
        }

        if (googleButtonRef.current) {
            animate(
                googleButtonRef.current,
                {
                    y: [20, 0],
                    opacity: [0, 1]
                },
                { duration: 0.3, delay: 1 }
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

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        setLoading(true);



        // Validate image URL
        const imageUrlPattern = /\.(jpeg|jpg|gif|png|webp)$/i;
        if (!imageUrlPattern.test(image)) {
            setError('Url must include .jpeg, .jpg, .gif, .png, or .webp');
            setLoading(false);
            return;
        }
        // Validate password strength
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            setLoading(false);
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password must contain at least one uppercase letter.');
            setLoading(false);
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError('Password must contain at least one lowercase letter.');
            setLoading(false);
            return;
        }
        if (!/[0-9]/.test(password)) {
            setError('Password must contain at least one number.');
            setLoading(false);
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            setLoading(false);
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile({
                    displayName: name,
                    photoURL: image,
                })
                    .then(() => {
                        // Explicitly update the user in AuthContext
                        const updatedUser = { ...user, displayName: name, photoURL: image };
                        setUser(updatedUser);

                        form.reset();
                        const destination = location.state || '/';
                        navigate(destination);
                    })
                    .catch((err) => setError(err.message))
                    .finally(() => setLoading(false));
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    };

    const handleGoogleSignUp = () => {
        setLoading(true);
        loginGoogle()
            .then(() => {
                navigate(location.state || '/');
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };

    const handleGithubSignUp = () => {
        setLoading(true);
        loginGithub()
            .then(() => {
                navigate(location.state || '/');
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };

    return (
        <div className="relative">
            <Helmet>
                <title>Sign Up</title>
            </Helmet>

            <img
                ref={imageRef}
                src={SignupImg}
                className="absolute inset-0 md:opacity-100 object-cover w-full h-full"
                alt="Signup Background"
                style={{ opacity: 0 }} // Initial state for animation
            />

            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                    <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12" />
                    <div
                        className="w-full max-w-xl xl:px-8 xl:w-5/12"
                    >
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
                                Sign Up Now!
                            </h3>

                            {loading ? (
                                <Loading></Loading>
                            ) : (
                                <>
                                    <form
                                        ref={formRef}
                                        onSubmit={handleSignUp}
                                        className="space-y-4"
                                    >
                                        <div className="form-item" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                                            <label className="label">Full Name</label>
                                            <label className="input w-full">
                                                <MdDriveFileRenameOutline />
                                                <input type="text" name="name" placeholder="Full Name" required />
                                            </label>
                                        </div>

                                        <div className="form-item" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                                            <label className="label">Image Link</label>
                                            <label className="input w-full">
                                                <FaImage />
                                                <input type="text" name="image" placeholder="Enter Image URL" required />
                                            </label>
                                        </div>

                                        <div className="form-item" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                                            <label className="label">Email</label>
                                            <label className="input w-full">
                                                <CiMail />
                                                <input type="email" name="email" placeholder="mail@site.com" required />
                                            </label>
                                        </div>

                                        <div className="form-item" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                                            <label className="label" htmlFor="password">Password</label>
                                            <div className="input w-full">
                                                <RiLockPasswordFill />
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    required
                                                    placeholder="Password"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn hover:bg-[#5ec1cc] w-full hover:text-white border-[#5ec1cc] animated-button form-item"
                                            style={{ opacity: 0, transform: 'translateY(20px)' }}
                                        >
                                            <IoIosMail size={20} />
                                            Submit
                                        </button>

                                        <p className="text-xs text-gray-600 sm:text-sm form-item" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                                            Already have an account? <Link to="/signin" className="text-[#5ec1cc] font-bold">Sign In</Link>
                                        </p>
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
                                        onClick={handleGithubSignUp}
                                        type="button"
                                        className="btn bg-black text-white w-full border-black animated-button"
                                        style={{ opacity: 0, transform: 'translateY(20px)' }}
                                    >
                                        <FaGithub size={20} />
                                        Sign up with GitHub
                                    </button>

                                    <button
                                        ref={googleButtonRef}
                                        onClick={handleGoogleSignUp}
                                        type="button"
                                        className="btn bg-cyan-500 text-white w-full border-[#e5e5e5] animated-button"
                                        style={{ opacity: 0, transform: 'translateY(20px)' }}
                                    >
                                        <FaGoogle size={20} />
                                        Sign up with Google
                                    </button>
                                </>
                            )}

                            {error && (
                                <p
                                    className="text-center text-red-600 mt-4"
                                    id="error-message"
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

export default SignUp;