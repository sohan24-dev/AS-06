import React, { use, useState } from 'react';
import AllCard from './AllCard';
import Cart from '../Cart/Cart';
import Started from '../Started/Started';
import PricingCard from '../PricingCard/PricingCard';
import Footer from '../Footer/Footer';
import WorkFlow from '../WorkFlow/WorkFlow';

const Main = ({ toolData, setSelectedCart, selectedCat, startedData, pricingData }) => {
    const cardData = use(toolData)
    const [product, setProduct] = useState('product')

    return (
        <div>
            <div className='flex gap-2 justify-center'>
                <button
                    onClick={() => setProduct('product')}
                    className={`btn text-[#25065D] py-2 px-3 rounded-full border border-[#4F39F6] w-33 ${product === 'product'
                        ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'
                        : 'bg-white'
                        }`}>Products </button>
                <button
                    onClick={() => setProduct('Cart')}
                    className={`btn text-[#25065D] py-2 px-3 w-33 rounded-full border border-[#4F39F6] ${product === 'Cart'
                        ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'
                        : 'bg-white'
                        }`}>Cart({selectedCat.length})</button>
            </div>
            {
                product === 'product' ? <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-7 md:px-0'>
                    {cardData.map((allCard, idx) => <AllCard key={idx} allCard={allCard} selectedCat={selectedCat} setSelectedCart={setSelectedCart} />)}

                </div> : <Cart selectedCat={selectedCat} setSelectedCart={setSelectedCart}></Cart>
            }
            {product === 'product' && (
                <>
                    <Started startedData={startedData} />
                    <PricingCard pricingData={pricingData} />
                    <WorkFlow />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Main;