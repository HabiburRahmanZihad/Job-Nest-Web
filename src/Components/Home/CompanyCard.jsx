import React from 'react';
import { Link } from 'react-router';

const CompanyCard = ({ company }) => {
    return (
        <Link to={`/companies/${company.id}`}   
            className="image-full  shadow-sm p-4 rounded-2xl bg-base-300 hover:shadow-lg transition duration-300 ease-in-out">

            <div className="h-[150px] shadow-lg rounded-2xl overflow-hidden">
                <img
                    className=" w-full h-full rounded-2xl"
                    src={company.logo}
                    alt="Shoes" />
            </div>

            <div className="text-center mt-4">
                <h2 className="text-2xl font-bold text-[#326a70]">{company.name} </h2>
            </div>

        </Link>
    );
};

export default CompanyCard;