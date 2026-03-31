import React, { use } from 'react';
import SingleStarted from './SingleStarted';

const Started = ({startedData}) => {
    const StartCart = use(startedData)
    // console.log(StartCart);
    return (
        <div className='bg-[#F9FAFC] my-5 '>
            <div className='container mx-auto py-7'>
            <div className='text-center my-8 px-7 md:px-0'>
                <h2 className='text-4xl lg:text-6xl font-bold pb-3'>Get Started in 3 Steps</h2>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid lg:grid-cols-3 my-6 gap-6 px-7 md:px-0'>
                {StartCart.map( (StartData,idx) => <SingleStarted StartData={StartData} key={idx}></SingleStarted>)}
            </div>
        </div>
        </div>
    );
};

export default Started;