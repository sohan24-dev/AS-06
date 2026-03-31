import React, { use } from 'react';
import SinglePricingCard from './SinglePricingCard';

const PricingCard = ({ pricingData }) => {
    const PricingAllData = use(pricingData)
    // console.log(PricingAllData);
    return (
        <div className='my-8 space-y-5'>
            <h2 className='font-bold text-4xl md:text-5xl text-center'>Simple, Transparent Pricing</h2>
            <p className='text-center text-[#627382] pb-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='container mx-auto grid lg:grid-cols-3 gap-4 my-4 px-7 md:px-0'>
                {PricingAllData.map((data, idx) => <SinglePricingCard key={idx} data={data}></SinglePricingCard>)}
            </div>
        </div>
    );
};

export default PricingCard;