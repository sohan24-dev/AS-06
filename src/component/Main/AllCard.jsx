import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { toast } from 'react-toastify';
const AllCard = ({ allCard, setSelectedCart, selectedCat }) => {
    const { name, img, tagType, period, price, description, features } = allCard
    const [selected, setSelected] = useState(false)
    const handClick = () => {
        const findCart = selectedCat.find( cartfind => cartfind.name === allCard.name) 
        if(findCart){
            toast.warning(`${name} already added`)
            return;
        }
        toast.success(`Buy ${name}`)
        setSelected(true)
        
        setSelectedCart([...selectedCat, allCard])
        
    }
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

                    {features.map((featuresList, idx) =>
                        <ul className="flex gap-2 text-xs">
                            <li key={idx}
                                className='flex gap-2 text-[#627382]'>
                                <FaCheck />
                                <span>{featuresList}</span>
                            </li>
                        </ul>)}


                    <div className="mt-6">
                        <button
                            onClick={() => handClick(allCard)}
                            className="btn btn-primary btn-block"
                            disabled={selected}>
                            {selected ? 'Buy already' : 'Buy Now'} </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCard;