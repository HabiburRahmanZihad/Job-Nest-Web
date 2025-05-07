import React, { useContext } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const CardDetails = ({ job, index, website }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const { title, bannerImage, location: jobLocation, salary, jobType, description, requirements } = job;

    // Create a unique modal ID for each job card
    const modalId = `job_modal_${index}`;

    // Add a function to handle the click event with the unique ID
    const handleDetailsClick = (e) => {
        e.preventDefault(); // Prevent default behavior
        
        if (user) {
            // If user is logged in, show the modal
            document.getElementById(modalId).showModal();
        } else {
            // If user is not logged in, redirect to signin page with the current path as state
            // This allows us to redirect back after login
            navigate('/signin', { 
                state: {
                    from: location.pathname,
                    jobIndex: index
                }
            });
        }
    };

    return (
        <li className="list-col flex flex-col md:flex-row justify-between items-center space-y-5 py-5 px-5">
            <div className="flex items-center gap-4">
                <div className="text-4xl font-thin tabular-nums">0{index + 1}</div>

                <div className='hidden md:block'>
                    <img className="size-20 rounded-box"
                        src={bannerImage} alt={title} />
                </div>

                <div className="list-col-grow">
                    <h1 className="text-xl font-bold">Job Title: {title}</h1>
                    <p className="font-semibold opacity-60">
                        JobType: {jobType} </p>
                    <p className="font-semibold opacity-60">Salary: {salary} </p>
                </div>
            </div>

            <div>
                <button 
                    className="btn text-[16px] bg-[#5ec1cc] text-white py-6" 
                    onClick={handleDetailsClick}
                >
                    Details <AiFillInfoCircle size={20} />
                </button>

                {/* Modal dialog */}
                <dialog id={modalId} className="modal">
                    <div className="modal-box text-justify space-y-4">
                        <h3 className="font-bold text-2xl">Job Details</h3>
                        <img className='rounded' src={bannerImage} alt={title} />
                        <p className="text-xl"><span className='font-bold'>Job Title:</span> {title}</p>
                        <p className="text-xl"><span className='font-bold'>Description:</span> {description}</p>
                        <p className="text-xl"><span className='font-bold'>Location:</span> {jobLocation}</p>
                        <p className="text-xl"><span className='font-bold'>Salary:</span> {salary}</p>
                        <p className="text-xl"><span className='font-bold'>Job Type:</span> {jobType}</p>
                        <div>
                            <span className='text-xl font-bold'>Requirements:</span>
                            {requirements.map((req, index) => (
                                <p key={index} className="py-4 text-justify">0{index + 1} : {req}</p>
                            ))}
                        </div>

                        <div className="modal-action">
                            <form method="dialog" className="flex gap-4">
                                <button className="btn btn-warning text-white">Close</button>
                                <Link to={website} target='_blank' className="btn bg-[#5ec1cc] text-white">Apply</Link>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </li>
    );
};

export default CardDetails;