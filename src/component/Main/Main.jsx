import React, { use } from 'react';
import AllCard from './AllCard';

const Main = ({toolData}) => {
    const cardData = use(toolData)
    console.log(cardData);
    return (
        <div className='container mx-auto grid grid-cols-3 gap-5'>
            {cardData.map(allCard => <AllCard allCard={allCard}/>)}
        </div>
    );
};

export default Main;