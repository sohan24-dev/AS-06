import { Triangle } from 'lucide-react';
import headerImg from '../../assets/Img/banner.png';
import React from 'react';

const Hearder = () => {
    return (
        <div className='container mx-auto my-10 grid md:grid-cols-2 gap-15'>
            <div className='hearder-left space-y-5 flex flex-col justify-center '>
                    <div>
                        <div className='inline-flex gap-2 items-center px-3 py-1 bg-[#b3abe4] rounded-4xl'>
                        <p className="w-3 h-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]"></p>
                        <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                    </div>
                    </div>
                <h2 className='text-5xl font-bold leading-normal'>Supercharge Your <br />Digital Workflow</h2>
                <p className='text-[#627382] leading-relaxed'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products</p>
                <div className='flex gap-4'>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 rounded-full">
                        Explore Products
                    </button>
                    <button className="btn flex items-center gap-2 px-4 py-2 rounded-full border border-[#9514FA] bg-white">
                        <Triangle className="w-4 h-4 text-[#9514FA] rotate-90" />
                        <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                            Watch Demo
                        </span>
                    </button>
                </div>
            </div>
            <div className='hearder-right w-full h-[85%]'>
                <img src={headerImg} alt="" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default Hearder;