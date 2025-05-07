import React, { useRef, useEffect } from 'react';
import bgHero from '../../assets/hero.png';

const Hero = () => {
    const titleRef = useRef(null);
    const highlightRef = useRef(null);
    const descriptionRef = useRef(null);
    const containerRef = useRef(null);

    // Animate text elements on component mount
    useEffect(() => {
        // Title animation
        if (titleRef.current) {
            titleRef.current.style.opacity = '0';
            titleRef.current.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                titleRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                titleRef.current.style.opacity = '1';
                titleRef.current.style.transform = 'translateY(0)';
            }, 100);
        }
        
        // Highlight text animation
        if (highlightRef.current) {
            highlightRef.current.style.opacity = '0';
            highlightRef.current.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                highlightRef.current.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
                highlightRef.current.style.opacity = '1';
                highlightRef.current.style.transform = 'translateX(0)';
            }, 300);
        }
        
        // Description animation
        if (descriptionRef.current) {
            descriptionRef.current.style.opacity = '0';
            
            setTimeout(() => {
                descriptionRef.current.style.transition = 'opacity 1s ease';
                descriptionRef.current.style.opacity = '1';
            }, 500);
        }
    }, []);

    return (
        <div
            className="bg-base-200 min-h-[600px] bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url(${bgHero})` }} 
        >
            {/* Keeping your original layout */}
            <div
                ref={containerRef}
                className="max-w-[500px] text-[#0b1320] py-64 md:pl-12 px-5">

                <h1 className="text-4xl font-bold">
                    <span ref={titleRef} style={{ display: 'inline-block' }}>Find Your Perfect Career</span> <br /> 
                    <span ref={highlightRef} className='text-8xl text-[#f3f0f0]' style={{ display: 'inline-block' }}>Match</span>
                </h1>

                <p ref={descriptionRef} className="mt-4 text-lg text-gray-800">
                    "Explore thousands of job opportunities from top companies in one place. Easily filter, compare, and apply to jobs that align with your skills and goals. Your next career move starts here."
                </p>

            </div>
        </div>
    );
};

export default Hero;