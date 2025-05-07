import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TbDetails } from 'react-icons/tb';
import { Link } from 'react-router';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <section className="px-4 py-16 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-2xl mx-auto mb-12 text-center">
                    <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase bg-teal-accent-400 rounded-full">
                        About JobNest
                    </p>
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern id="pattern" x="0" y="0" width=".135" height=".30">
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect fill="url(#pattern)" width="52" height="24" />
                            </svg>
                            <span className="relative">Your</span>
                        </span>{' '}
                        career journey starts here
                    </h2>
                    <p className="mt-4 text-base text-gray-700 md:text-lg">
                        JobNest is your trusted partner in discovering opportunities,
                        connecting with employers, and building your dream career—all in one platform.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {[
                        {
                            title: 'Smart Job Matching',
                            desc: `We use intelligent algorithms to match you with roles that align with your skills, experience, and preferences.`,
                        },
                        {
                            title: 'Verified Employers',
                            desc: `Our platform features thoroughly verified employers to ensure you're applying to trustworthy opportunities.`,
                        },
                        {
                            title: 'Career Guidance',
                            desc: `Access curated resources and tips to enhance your resume, ace interviews, and grow your career confidently.`,
                        },
                        {
                            title: 'Seamless Application',
                            desc: `Apply to jobs with one click, track your applications, and communicate directly with recruiters through JobNest.`,
                        },
                    ].map(({ title, desc }, i) => (
                        <div key={i} className="max-w-md mx-auto text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-indigo-50 rounded-full sm:w-24 sm:h-24">
                                <TbDetails size={30} color='#5ec1cc' />
                            </div>
                            <h6 className="mb-3 text-xl font-bold">{title}</h6>
                            <p className="mb-3 text-sm text-gray-900">{desc}</p>
                            <Link to={'/'}
                                className="inline-flex items-center font-semibold text-deep-purple-accent-400 transition-colors duration-200 hover:text-deep-purple-800"
                            >
                                Learn more
                            </Link>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
};

export default About;