import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navber = ({ selectedCat }) => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn  btn-ghost text-blue-500 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href='#'>Products</a></li>
                            <li><a href='#'>Features</a></li>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Testimonials</a></li>
                            <li><a href='#'>FAQ</a></li>
                        </ul>
                    </div>
                    <h1 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-2xl font-bold">
                        DigiTools
                    </h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        <li><a href='#'>Products</a></li>
                        <li><a href='#'>Features</a></li>
                        <li><a href='#'>Pricing</a></li>
                        <li><a href='#'>Testimonials</a></li>
                        <li><a href='#'>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-3 items-center">
                    
                        <button className='btn relative'>
                            <ShoppingCart />

                            <span className='absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full'>
                                {selectedCat.length}
                            </span>
                        </button>
                        <button className='font-light btn '>
                            Login
                        </button>
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-4">
                            Get Started
                        </button>
                    
                </div>
            </div>
        </div>
    );
};

export default Navber;