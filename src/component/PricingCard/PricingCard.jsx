import React, { use } from 'react';
import SinglePricingCard from './SinglePricingCard';

const PricingCard = ({ pricingData }) => {
    const PricingAllData = use(pricingData)
    console.log(PricingAllData);
    return (
        <div className='my-8'>
            <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
                {PricingAllData.map((data, idx) => <SinglePricingCard key={idx} data={data}></SinglePricingCard>)}
            </div>
        </div>
    );
};

export default PricingCard;