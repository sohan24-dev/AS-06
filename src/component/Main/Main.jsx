import React, { use, useState } from 'react';
import AllCard from './AllCard';
import Cart from '../Cart/Cart';
import Started from '../Started/Started';

const Main = ({ toolData ,setSelectedCart,selectedCat,startedData}) => {
    const cardData = use(toolData)
    const [product, setProduct] = useState('product')
    
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold pb-4'>Premium Digital Tools</h2>
                <p className='text-[#627382] pb-4'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div className='flex gap-2 justify-center'>
                <button
                onClick={() =>setProduct('product')}
                 className={`btn text-[#25065D] py-2 px-3 rounded-full border border-[#4F39F6] ${product === 'product' 
                    ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'
                    : 'bg-white'
                 }`}>Products </button>
                <button
                onClick={() =>setProduct('Cart')}
                 className={`btn text-[#25065D] py-2 px-3 rounded-full border border-[#4F39F6] ${product === 'Cart' 
                    ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'
                    : 'bg-white'
                 }`}>Cart({selectedCat.length})</button>
            </div>
            {
                product === 'product' ? <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {cardData.map((allCard, idx) => <AllCard key={idx} allCard={allCard} selectedCat={selectedCat} setSelectedCart={setSelectedCart}/>)}
                   
                </div> : <Cart selectedCat={selectedCat} setSelectedCart={setSelectedCart}></Cart>
            }
            {product === 'product' && <Started startedData={startedData} />}
        </div>
    );
};

export default Main;