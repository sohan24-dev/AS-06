import React from 'react';

const Count = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-15 mb-8'>
            <div className='grid grid-cols-3 container mx-auto text-center'>
                <div className='border-r border-gray-300'>
                    <h2 className='font-bold text-4xl lg:text-5xl pb-3'>50K+</h2>
                    <p className='text-xl'>Active Users</p>
                </div>
                <div className='border-r border-gray-300 '>
                    <h2 className='font-bold text-4xl lg:text-5xl pb-3'>200+</h2>
                    <p className='text-xl'>Premium Tools</p>
                </div>
                <div>
                    <h2 className='font-bold text-4xl lg:text-5xl pb-3'>4.9+</h2>
                    <p className='text-xl'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Count;