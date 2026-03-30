import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ setSelectedCart, selectedCat }) => {
    console.log(selectedCat);
    const handDelet = (cartdelet) =>{
        const filterDelet = selectedCat.filter( selected => selected.id != cartdelet.id)
        toast.error(`Delete successfully`)
        setSelectedCart(filterDelet)
    }
    const totalPrice = selectedCat.reduce((total, item) => total + item.price, 0);
    return (
        <div className='container mx-auto shadow-xl p-6 my-4 bg-[#F2F2F2]'>
            {selectedCat.length === 0 ? <div className='h-[300px] flex items-center justify-center flex-col gap-4'>
                <h2 className='text-2xl font-medium'>No select yet </h2>
                <p className='text-3xl'>Go product Cart and select your Digital tools </p>
            </div> : <div className=' space-y-4'>
                <h2 className='text-xl font-extrabold'>Your Cart </h2>
                {selectedCat.map((cart, idx) => {
                    return <div key={idx} className='flex justify-between items-center py-2 px-4 bg-[#F9FAFC] rounded-2xl'>
                        <div className='flex items-center gap-3 '>
                            <img className='p-2 rounded-full bg-[#F2F2F2]' src={cart.img} alt="" />
                            <div>
                                <h2 className='font-extrabold'>{cart.name}</h2>
                                <p>${cart.price}</p>
                            </div>
                        </div>
                        <div>
                            <button
                            onClick={() => handDelet(cart)}
                             className='text-red-600 font-semibold btn'>Remove
                            </button>

                        </div>
                    </div>
                })}
                <div className='flex justify-between items-center'>
                    <h4>Total</h4>
                    <p className='font-bold text-xl'>${totalPrice}</p>
                </div>
                <div>
                    <button
                        onClick={() => {
                            toast.success(`Proceed to Checkout`),
                            setSelectedCart([])}
                            
                        }
                        className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-full text-white'>Proceed to Checkout</button>
                </div>
            </div>}

        </div>
    );
};

export default Cart;