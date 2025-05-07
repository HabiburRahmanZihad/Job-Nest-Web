import { Sparkle } from 'lucide-react';
import React from 'react';

const OurSpeciality = () => {
    return (
        <div className="bg-base-300  rounded-xl ">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Key</span>
                        </span>{' '}
                        Features of our service
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        **JobNest** is a user-friendly platform that helps job seekers find and apply to jobs from multiple companies in one place. It offers smart filters and personalized recommendations to make the job search easier and faster.

                    </p>
                </div>

                <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">

                    <div className="text-center">
                        <div className="btn flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#5ec1cc] sm:w-24 sm:h-24">
                            <Sparkle size={30} />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Centralized Job Listings</h6>
                    </div>

                    <div className="text-center">
                        <div className="btn flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#5ec1cc] sm:w-24 sm:h-24">
                            <Sparkle size={30} />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Advanced Search Filters</h6>
                    </div>

                    <div className="text-center">
                        <div className="btn flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#5ec1cc] sm:w-24 sm:h-24">
                            <Sparkle size={30} />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Comprehensive Job Details</h6>
                    </div>

                    <div className="text-center">
                        <div className="btn flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#5ec1cc] sm:w-24 sm:h-24">
                            <Sparkle size={30} />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Direct Application Submission</h6>
                    </div>

                    <div className="text-center">
                        <div className="btn flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#5ec1cc] sm:w-24 sm:h-24">
                            <Sparkle size={30} />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Tailored Job Suggestions</h6>
                    </div>

                    <div className="text-center">
                        <div className="btn flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#5ec1cc] sm:w-24 sm:h-24">
                            <Sparkle size={30} />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Application Management</h6>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurSpeciality;