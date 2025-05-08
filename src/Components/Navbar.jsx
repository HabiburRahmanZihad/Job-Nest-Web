import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router'; // Fixed: Changed from react-router to react-router-dom
import title from '../assets/logoTitle.png';
import { Menu, LogIn, UserPlus } from 'lucide-react';
import { AuthContext } from '../Provider/AuthContext';
import { RiLogoutBoxLine } from 'react-icons/ri';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const photoURL =
        user?.photoURL || user?.providerData?.[0]?.photoURL || 'https://img.daisyui.com/images/profile/demo/yellingcat@192.webp';

    const links = (
        <>
            <NavLink to="/" end>
                {({ isActive }) => (
                    <p className={`btn w-full px-4 py-2 rounded-md transition hover:bg-cyan-500 hover:text-white ${isActive ? 'bg-cyan-500 text-white' : ''}`}>
                        Home
                    </p>
                )}
            </NavLink>

            <NavLink to="/about" end>
                {({ isActive }) => (
                    <p className={`btn w-full px-4 py-2 rounded-md transition hover:bg-cyan-500 hover:text-white ${isActive ? 'bg-cyan-500 text-white' : ''}`}>
                        About
                    </p>
                )}
            </NavLink>
        </>
    );

    const handleLogout = () => {
        // Handle logout logic here, e.g., call a logout function from AuthContext
        signOutUser()
            .then(() => {
                toast.error('User Logged Out Successfully');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }


    return (
        <div className="navbar shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <Menu size={20} />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <Link to="/">
                    <img className="w-50" src={title} alt="Site Logo" />
                </Link>
            </div>

            <div className="navbar-end space-x-2">
                <ul className="menu menu-horizontal hidden md:grid grid-cols-2 gap-2 text-sm font-semibold text-center">
                    {links}
                </ul>

                {!user ? (
                    <>
                        <NavLink to="/signin" end>
                            {({ isActive }) => (
                                <p className={`btn hover:text-white hover:bg-cyan-500 ${isActive ? 'bg-cyan-500 text-white' : ''}`}>
                                    SignIn <LogIn size={18} />
                                </p>
                            )}
                        </NavLink>

                        <NavLink to="/signup" end>
                            {({ isActive }) => (
                                <p className={`btn hover:text-white hover:bg-cyan-500 hidden lg:flex ${isActive ? 'bg-cyan-500 text-white' : ''}`}>
                                    SignUp <UserPlus size={18} />
                                </p>
                            )}
                        </NavLink>
                    </>
                ) : (
                    <>
                        <Link to="/profile" className="flex items-center">
                            <img className="w-11 h-11 rounded-full object-cover" src={photoURL} alt="User profile" />
                        </Link>
                        <button onClick={handleLogout} className='btn text-white  bg-amber-500 hover:bg-cyan-500 rounded-md'>Logout<RiLogoutBoxLine size={20} /></button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;