import React from 'react';

const WorkFlow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
            <div className='text-white container mx-auto text-center py-12 space-y-7 px-7 md:px-0'>
                <h2 className='text-3xl font-bold'>Ready to Transform Your Workflow?</h2>
                <p>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                <div className='flex justify-center gap-2'>
                    <button className='btn rounded-full bg-white text-[#9514FA]'>Explore Products</button>
                    <button className='btn rounded-full bg-inherit text-white border-white'>View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default WorkFlow;