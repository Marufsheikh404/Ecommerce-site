import React from 'react';
import { CiBadgeDollar, CiDeliveryTruck } from 'react-icons/ci';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { LuBadgePercent } from 'react-icons/lu';

const Support = () => {
    const infoData = [
        {
            icon: <CiDeliveryTruck size={50} />,
            title: "Free Shiping",
            description: "Clean and minimal design that focuses"
        },
        {
            icon: <FaHandHoldingHeart size={50} />,
            title: "24X7 Support",
            description: "Optimized code ensures your website"
        },
        {
            icon: <LuBadgePercent size={50} />,
            title: "30 Days Return",
            description: "Built with the latest security standards"
        },
        {
            icon: <CiBadgeDollar size={50} />,
            title: "Payment Secure",
            description: "Looks great on all devices — from"
        }
    ];
    return (
        <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                infoData.map((d,inx) => (
                    <div key={inx} className="card bg-base-100 lg:w-55 lg:h-55 w-full shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer mx-auto my-3">
                        <figure className="px-10 pt-10">
                            <p className='text-[#5CAF90]'>{d.icon}</p>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-xl font-semibold">{d.title}</h2>
                            <p className='ct'>{d.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Support;