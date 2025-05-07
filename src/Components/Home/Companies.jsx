import CompanyCard from './CompanyCard';
import { useLoaderData } from 'react-router';

const Companies = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className="px-4 py-16 mx-auto   lg:px-4 lg:py-20">


                <div className=" text-center mb-10 mx-auto">
                    <h2 className=" font-bold leading-tight tracking-tight text-gray-900 text-4xl text-center">
                        We work with the best companies in the world
                    </h2>
                </div>



                <div className="grid gap-12 row-gap-8  md:grid-cols-2 lg:grid-cols-4">

                    {
                        data.map((company) => (
                            <CompanyCard
                                key={company.id}
                                company={company}
                            ></CompanyCard>
                        ))
                    }
                </div>


            </div>
        </div>
    );
};

export default Companies;