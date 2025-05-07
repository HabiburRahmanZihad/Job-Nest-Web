import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import CardDetails from '../Components/CardDetails';
import { Helmet } from 'react-helmet-async';

const CompanyDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // Find the company using the id from the params
    const company = data.find((company) => company.id == id);

    const { name, logo, location, website, industry, jobs } = company;

    return (
        <div>
            <Helmet>
                <title>{name} Details </title>
            </Helmet>

            <div className="flex justify-center items-center mt-4 gap-4">
                <div>
                    <img className="w-30 rounded-2xl" src={logo} alt={name} />
                </div>
                <h1 className="text-3xl font-bold text-center text-[#5ec1cc] ">{name}</h1>
                <div>
                    <img className="w-30 rounded-2xl" src={logo} alt={name} />
                </div>
            </div>

            <div className="card bg-base-100 w-full border-2 border-[#5ec1cc] shadow-sm my-5 mx-auto">
                <div className="card-body text-center text-xl">
                    <h1 className="text-2xl font-bold  mt-4">Company Details</h1>
                    <p className=" mt-2">Location: {location}</p>
                    <p className=" mt-2">Industry: {industry}</p>
                </div>
            </div>


            <ul className="list bg-base-100 rounded-box shadow-md my-4 ">

                <li className="p-4 pb-2 text-2xl opacity-60 tracking-wide">
                    Available Jobs in <span className='font-bold'>{name}</span>:
                </li>

                {
                    jobs.map((job, index) =>
                        <CardDetails
                            key={job.id}
                            index={index}
                            website={website}
                            job={job}>
                        </CardDetails>)
                }

            </ul>
        </div>
    );
};

export default CompanyDetails;
