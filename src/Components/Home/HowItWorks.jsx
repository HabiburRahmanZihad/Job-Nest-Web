import { MessageSquareQuote } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const HowItWorks = () => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const itemRefs = useRef([]);

    // Set up refs for each item
    itemRefs.current = Array(6).fill().map((_, i) => itemRefs.current[i] || React.createRef());

    useEffect(() => {
        // Title animation
        if (titleRef.current) {
            titleRef.current.style.opacity = '0';
            titleRef.current.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                titleRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                titleRef.current.style.opacity = '1';
                titleRef.current.style.transform = 'translateY(0)';
            }, 100);
        }
        
        // Description animation
        if (descriptionRef.current) {
            descriptionRef.current.style.opacity = '0';
            descriptionRef.current.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                descriptionRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                descriptionRef.current.style.opacity = '1';
                descriptionRef.current.style.transform = 'translateY(0)';
            }, 300);
        }
        
        // Staggered animation for each item
        itemRefs.current.forEach((ref, index) => {
            if (ref.current) {
                ref.current.style.opacity = '0';
                ref.current.style.transform = 'translateX(-20px)';
                
                setTimeout(() => {
                    ref.current.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    ref.current.style.opacity = '1';
                    ref.current.style.transform = 'translateX(0)';
                }, 500 + (index * 150)); // Staggered delay for each item
            }
        });
    }, []);

    // Function to handle hover effect
    const handleHover = (ref, isEnter) => {
        if (ref.current) {
            if (isEnter) {
                ref.current.style.transform = 'translateY(-5px)';
                ref.current.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            } else {
                ref.current.style.transform = 'translateY(0)';
                ref.current.style.boxShadow = 'none';
            }
        }
    };

    return (
        <>
            <div className='bg-base-300 rounded-xl'>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 
                            ref={titleRef} 
                            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
                        >
                            🛠️ How JobNest Works
                        </h2>
                        <p 
                            ref={descriptionRef} 
                            className="text-base text-gray-700 md:text-lg"
                        >
                            JobNest is designed to streamline the job search process for both job seekers and employers. Here's how it functions:
                        </p>
                    </div>
                    <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
                        {/* 1 */}
                        <div 
                            ref={itemRefs.current[0]} 
                            className="flex items-center p-2 duration-300  border-2 border-[#5ec1cc]  rounded transition-all"
                            onMouseEnter={() => handleHover(itemRefs.current[0], true)}
                            onMouseLeave={() => handleHover(itemRefs.current[0], false)}
                        >
                            <div className="mr-2">
                                <MessageSquareQuote size={25} />
                            </div>
                            <p className="text-xl duration-200 text-[#0c282b]">
                                <span className='font-bold'>Account Creation:</span> Users can sign up as either job seekers or employers.
                            </p>
                        </div>

                        {/* 2 */}
                        <div 
                            ref={itemRefs.current[1]} 
                            className="flex items-center p-2 duration-300 border-2 border-[#5ec1cc] rounded transition-all"
                            onMouseEnter={() => handleHover(itemRefs.current[1], true)}
                            onMouseLeave={() => handleHover(itemRefs.current[1], false)}
                        >
                            <div className="mr-2">
                                <MessageSquareQuote size={25} />
                            </div>
                            <p className="text-xl duration-200 text-[#0c282b]">
                                <span className='font-bold'>Profile Setup:</span> Job seekers complete their profiles by adding details like education, experience, and skills
                            </p>
                        </div>

                        {/* 3 */}
                        <div 
                            ref={itemRefs.current[2]} 
                            className="flex items-center p-2 duration-300 border-2 border-[#5ec1cc] rounded transition-all"
                            onMouseEnter={() => handleHover(itemRefs.current[2], true)}
                            onMouseLeave={() => handleHover(itemRefs.current[2], false)}
                        >
                            <div className="mr-2">
                                <MessageSquareQuote size={25} />
                            </div>
                            <p className="text-xl duration-200 text-[#0c282b]">
                                <span className='font-bold'>Job Search:</span> Users can browse job listings aggregated from various companies, using filters such as job title, location, and experience level to find relevant opportunities.
                            </p>
                        </div>

                        {/* 4 */}
                        <div 
                            ref={itemRefs.current[3]} 
                            className="flex items-center p-2 duration-300 border-2 border-[#5ec1cc] rounded transition-all"
                            onMouseEnter={() => handleHover(itemRefs.current[3], true)}
                            onMouseLeave={() => handleHover(itemRefs.current[3], false)}
                        >
                            <div className="mr-2">
                                <MessageSquareQuote size={25} />
                            </div>
                            <p className="text-xl duration-200 text-[#0c282b]">
                                <span className='font-bold'>Detailed Listings:</span> Each job post provides comprehensive information about the role, qualifications required, company details, and application procedures.
                            </p>
                        </div>

                        {/* 5 */}
                        <div 
                            ref={itemRefs.current[4]} 
                            className="flex items-center p-2 duration-300 border-2 border-[#5ec1cc] rounded transition-all"
                            onMouseEnter={() => handleHover(itemRefs.current[4], true)}
                            onMouseLeave={() => handleHover(itemRefs.current[4], false)}
                        >
                            <div className="mr-2">
                                <MessageSquareQuote size={25} />
                            </div>
                            <p className="text-xl duration-200 text-[#0c282b]">
                                <span className='font-bold'>Application Process</span> ob seekers can apply directly through the platform by submitting their resumes and cover letters.
                            </p>
                        </div>

                        {/* 6 */}
                        <div 
                            ref={itemRefs.current[5]} 
                            className="flex items-center p-2 duration-300 border-2 border-[#5ec1cc] rounded transition-all"
                            onMouseEnter={() => handleHover(itemRefs.current[5], true)}
                            onMouseLeave={() => handleHover(itemRefs.current[5], false)}
                        >
                            <div className="mr-2">
                                <MessageSquareQuote size={25} />
                            </div>
                            <p className="text-xl duration-200 text-[#0c282b]">
                                <span className='font-bold'>Personalized Recommendations:</span> he platform offers job suggestions tailored to the user's profile and previous activity.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default HowItWorks;