import React from 'react'

export default function SectionA() {
    return (
        <>
            <div className='mt-20 mb-10 mx-5 tablet:mx-20 laptop:mx-40 xlaptop:mx-80'>
                <div className='text-left'>
                    <h2 className='landing-section-title'>Sightseeing Tours</h2>
                    <div className='landing-section-heading'>
                        Find Best
                        <p className='break-words'>Europe Sightseeing Views</p>
                    </div>
                    <div className='landing-section-content block w-full tablet:w-3/6'>Home to majestic mountain ranges, captivating coastlines, and idyllic islands, Europe boasts some of the most beautiful scenery on Earth. While its world-class capitals of London, Paris, and Rome attract the most visitors, the continent's 44 countries each have delightfully different cities and attractions to explore.
                    </div>
                    <button className='py-2 px-4 text-white bg-orange-accent rounded-md'>
                        View Packages
                    </button>
                    <div className='py-10 mobile:py-0'>
                        <div className="flex justify-center space-x-10 flex-row mobile:hidden">
                            <div className="landing-section-a-card-container">
                                <img className="landing-section-a-card-image" src="https://media.istockphoto.com/id/1281233864/photo/eiffel-tower.jpg?s=612x612&w=0&k=20&c=F-SWJqiheuQNCqVfbrIh24oON5kZhr5RoxSdjmhHiBc=" alt="City Image" />
                                <div className="landing-section-a-price-label">$19.99</div>
                            </div>
                            <div className="landing-section-a-card-container">
                                <img className="landing-section-a-card-image" src="https://media.istockphoto.com/id/178801475/photo/crab-catchers-sunrise-on-pondicherry-beach.jpg?s=612x612&w=0&k=20&c=B_bMlEPqotz5g5grYDmDtc7xh90PKxbJrIrNn5Lk3k0=" alt="City Image" />
                                <div className="landing-section-a-price-label">$19.99</div>
                            </div>
                            <div className="landing-section-a-card-container">
                                <img className="landing-section-a-card-image" src="https://i.pinimg.com/550x/3d/f6/d8/3df6d80c3e7ea2421d3c4bfe3948424d.jpg" alt="City Image" />
                                <div className="landing-section-a-price-label">$19.99</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}
