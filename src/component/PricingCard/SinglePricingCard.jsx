import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const SinglePricingCard = ({ data }) => {
    console.log(data);
    const { title, price, description, type, button, features ,time} = data
    return (
        <div className={`relative py-6 rounded-2xl  px-5 space-y-2 ${type === 'Most popular' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-[#F2F2F2] text-[#627382]'}`}>
            <h2 className='text-xl font-medium'>{title}</h2>
            <p>{description}</p>
            <div className='flex items-center gap-1'>
                <h1 className='text-xl font-black'>{`$ ${price}`}</h1>
            <p>{`/${time} `}</p>
            </div>
            {type === 'Most popular' && (
                <p className="absolute -top-3 left-1/2 -translate-x-1/2 
         text-[#BB4D00] px-3 py-1 rounded-full font-medium shadow bg-[#FEF3C6] ">
                    {type}
                </p>
            )}

            {features.map((featuresList, idx) =>
                <ul className={`flex gap-2`}>
                    <li key={idx}
                        className='flex gap-2 items-center'>
                        <FaCheck />
                        <span>{featuresList}</span>
                    </li>
                </ul>)}
            <button className={`btn w-full rounded-full ${type === 'Most popular' ? 'bg-[#FFFFFF] text-[#9514FA]' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'}`}>{button}</button>
        </div>
    );
};

export default SinglePricingCard;