import React from 'react';
import { BsTools } from 'react-icons/bs';
import { FiAlertOctagon } from 'react-icons/fi';
import { MdMobileFriendly, MdOutlineVerifiedUser } from 'react-icons/md';
import { RiAppsFill } from 'react-icons/ri';

const WhyJobnest = () => {
    return (
        <div className=" pt-16">

            <h1 className="text-3xl font-bold text-center">Why Choose <br /> <span className='text-5xl text-[#5ec1cc]'>JobNest?</span></h1>
            <div className="px-4 py-10 mx-auto ">

                <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl">

                    {/* <!-- 1 --> */}
                    <div className="p-8 border-[#5ec1cc] bg-base-200  hover:bg-[#5ec1cc]  transform ease-in-out-500  opacity-75 hover:opacity-100   border-b sm:border-r">
                        <div className="max-w-md text-center">
                            <div
                                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full  bg-white border sm:w-16 sm:h-16">
                                <MdMobileFriendly size={30} />
                            </div>
                            <h6 className="mb-2 font-semibold  leading-5">User-Friendly,Modern Design</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Clean interface for a smooth experience.
                            </p>
                        </div>
                    </div>
                    {/* <!-- 2 --> */}
                    <div className="p-8 border-[#5ec1cc] bg-base-200 hover:bg-[#5ec1cc]   transform ease-in-out-500  opacity-75 hover:opacity-100 border-b lg:border-r">
                        <div className="max-w-md text-center">
                            <div
                                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white border sm:w-16 sm:h-16">
                                <MdOutlineVerifiedUser size={30} />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5"> Verified Job Listings</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Only genuine openings from trusted companies.
                            </p>
                        </div>
                    </div>
                    {/* <!-- 3 --> */}
                    <div className="p-8 border-[#5ec1cc] bg-base-200 hover:bg-[#5ec1cc]   transform ease-in-out-500  opacity-75 hover:opacity-100 border-b sm:border-r lg:border-r-0">
                        <div className="max-w-md text-center">
                            <div
                                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white border sm:w-16 sm:h-16">
                                <RiAppsFill size={30} />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5"> Easy Application & Tracking</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Apply in one click and track your application status.
                            </p>
                        </div>
                    </div>
                    {/* <!-- 4 --> */}
                    <div className="p-8 border-[#5ec1cc] bg-base-200 hover:bg-[#5ec1cc]   transform ease-in-out-500  opacity-75 hover:opacity-100 border-b lg:border-b-0 lg:border-r">
                        <div className="max-w-md text-center">
                            <div
                                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white border sm:w-16 sm:h-16">
                                <BsTools size={30} />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5"> Career Resources & Tools</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Resume builders, interview tips, salary insights, and more.
                            </p>
                        </div>
                    </div>
                    {/* <!-- 5 --> */}
                    <div className="p-8 border-[#5ec1cc] bg-base-200 hover:bg-[#5ec1cc]  transform ease-in-out-500  opacity-75 hover:opacity-100  border-b sm:border-b-0 sm:border-r">
                        <div className="max-w-md text-center">
                            <div
                                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white border sm:w-16 sm:h-16">
                                <svg className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12" stroke="currentColor"
                                    viewBox="0 0 52 52">
                                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Real Success Stories</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Inspiring journeys from users who found their dream roles with us.
                            </p>
                        </div>
                    </div>
                    {/* <!-- 6 --> */}
                    <div className="p-8 border-[#5ec1cc] bg-base-200 hover:bg-[#5ec1cc] transform ease-in-out-500  opacity-75 hover:opacity-100  ">
                        <div className="max-w-md text-center">
                            <div
                                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white border sm:w-16 sm:h-16">
                                <FiAlertOctagon size={30} />
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Job Alerts & Recommendations</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                Get tailored job alerts based on your preferences.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default WhyJobnest;