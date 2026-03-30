import React from 'react';

const SinglePricingCard = ({data}) => {
    console.log(data);
    const {title,price,description,type} = data
    return (
        <div className='bg-[#F2F2F2]'>
            <h2>{title}</h2>
            <h1>{price}</h1>
            <p>{description}</p>
            <p>{type}</p>
            <button></button>
        </div>
    );
};

export default SinglePricingCard;