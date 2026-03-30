import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { SiFacebook } from 'react-icons/si';
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='container mx-auto text-white grid grid-cols-2 lg:grid-cols-5 gap-5 py-10 lg:py-15 px-6 md:px-0'>
                <div className='mr-5'>
                    <h2 className='text-2xl font-semibold mb-4'>DigiTools</h2>
                    <p>Premium digital tools for creators, <br />
                        professionals, and businesses. <br />
                        Work smarter with our suite of powerful tools.</p>
                </div>
                <div className='space-y-4 mb-6 ml-4'>
                    <h4 className='text-xl font-semibold'>Product</h4>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Templates</p>
                    <p>Integrations</p>
                </div>
                <div className='space-y-4 mb-6'>
                    <h4 className='text-xl font-semibold'>Company</h4>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Press</p>
                </div>
                <div className='space-y-4 mb-6'>
                    <h4 className='text-xl font-semibold'>Resources</h4>
                    <p>Documentation</p>
                    <p>Help Center</p>
                    <p>Community</p>
                    <p>Contact</p>
                </div>

                <div>
                    <h4 className='text-xl mb-4 font-semibold'>Social Links</h4>
                    <div className='flex gap-2'>
                        <div className='bg-white rounded-full inline-block p-2 text-2xl text-black'>
                            <AiFillInstagram />
                        </div>
                        <div className='bg-white rounded-full inline-block p-2 text-2xl text-black'>
                             <SiFacebook />
                        </div>
                        <div className='bg-white rounded-full inline-block p-2 text-2xl text-black'>
                           <FaLinkedin />
                        </div>                     
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;