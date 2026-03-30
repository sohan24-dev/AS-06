import React from 'react';

const SingleStarted = ({StartData}) => {
    console.log(StartData);
    const {id,name,img,description} =StartData
    return (
        <div className='bg-[#FFFFFF] shadow p-4 rounded-2xl'>
            <div className='flex justify-end '>
                <p className='px-3 py-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>{id}</p>
            </div>
            <div className='flex justify-center'>
                <img className='py-4 px-4.5 rounded-full bg-[#dcc9eb] ' src={img} alt="" />
            </div>
            <div className='text-center'>
                <h2 className='text-2xl font-semibold'>{name}</h2>
                <p className='text-[#627382]'>{description}</p>
            </div>
        </div>
    );
};

export default SingleStarted;