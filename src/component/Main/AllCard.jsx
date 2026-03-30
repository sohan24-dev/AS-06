import React from 'react';
import { FaCheck } from "react-icons/fa6";
const AllCard = ({ allCard }) => {
    const { name, img, tagType, period, price,description } = allCard
    return (
        <div className='flex items-center'>
            <div className="card w-full bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between items-center w-full'>
                        <img className='p-2 rounded-full bg-[#F2F2F2]' src={img} alt="" />
                        <div>
                            <p className={`badge 
                            ${tagType === 'popular' && 'bg-[#E1E7FF]'} p-4 ${tagType === 'new' && 'bg-[#DBFCE7]'}
                            ${tagType === 'best' && 'bg-[#FEF3C6]'}`}>{tagType}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">{name}</h2>
                    </div>
                    <p className='text-[#627382]'>{description}</p>
                    <div className='flex items-center gap-2'>
                        <h4 className='text-xl font-bold'>${price}</h4>
                        <p className='text-[#627382]'>/{period}</p>
                    </div>
                    <ul className="mt-6 flex gap-2 text-xs">
                        <FaCheck />
                        <li className='flex-1 text-[#627382]'>
                            <span>High-resolution image generation</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Buy Now </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCard;