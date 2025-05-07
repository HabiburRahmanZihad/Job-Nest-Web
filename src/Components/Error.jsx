import React from 'react';
import error from '../assets/error.png';
import { Link } from 'react-router';
import { IoCaretBackCircleSharp } from 'react-icons/io5';
const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>

            <img className=' md:w-3/6 mx-auto ' src={error} alt="" />

            <Link to='/'
                className="btn  bg-[#5ec1cc] hover:text-white text-2xl ">
                <IoCaretBackCircleSharp size={20} />
                Back to Home
            </Link>

        </div>
    );
};

export default Error;