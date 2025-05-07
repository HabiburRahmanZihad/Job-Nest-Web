import React from 'react';
import logo from '../assets/fav.png';
import footertitle from '../assets/title.png';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-[#4e9ba3] shadow-sm  p-10">

                <aside className="flex flex-col items-center text-white">
                    <img className='w-20' src={logo} alt="" />
                    <img className='w-60 h-10' src={footertitle} alt="" />

                    <p className="font-bold ">
                        Nest Your Next Career Move
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>

                <nav>
                    <div className="grid grid-flow-col gap-4 text-white">
                        <Link to={'https://x.com/xihad_xihad/'} target='_blank' ><FaTwitter size={20} /></Link>

                        <Link to={'https://www.youtube.com/@xihadxone'}><FaYoutube size={20} target='_blank' /></Link>

                        <Link to={'https://www.facebook.com/habiburrahmanzihad.zihad'}><FaFacebook size={20} target='_blank' /></Link>

                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;