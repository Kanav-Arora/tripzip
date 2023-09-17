import React from 'react'
import { CalendarMini as Calendar, PersonMini as Person } from '../../assets/ext-icon.jsx'

export default function SectionC() {
    let trending = [
        {
            place: "Switzerland",
            url: "https://cdn.britannica.com/65/162465-050-9CDA9BC9/Alps-Switzerland.jpg",
            desc: "A landlocked country of towering mountains, deep Alpine lakes,grassy valleys dotted with neat farms and small villages.",
            days: 8,
            people: 10,
        },
        {
            place: "Greece",
            url: "https://cdn.tourradar.com/s3/serp/original/2147_iyMRxiWm.jpg",
            desc: `The country’s unique light, the endless blue color of Greece and 
            the islands have made Greece synonymous with summer holidays.`,
            days: 10,
            people: 20,
        },
        {
            place: "Ooty",
            url: "https://media1.thrillophilia.com/filestore/yd4e9agzzc1wmwwhsocexspozned_1589380868_shutterstock_1373319851.jpg?w=576&h=650",
            desc: `The country’s unique light, the endless blue color of Greece and 
            the islands have made Greece synonymous with summer holidays.`,
            days: 10,
            people: 20,
        },
    ]
    return (
        <>
            <div className="mt-20 mb-10 mx-auto tablet:mx-20 laptop:mx-40 xlaptop:mx-60">
                <div className="landing-section-title">Trending</div>
                <div className="landing-section-heading">Our Trending Trips</div>
                <div className='py-10'>
                    <div className="flex flex-col items-center space-y-10 laptop:space-y-0 laptop:flex-row laptop:justify-center laptop:items-stretch laptop:space-x-10  xlaptop:space-y-0  xlaptop:items-stretch xlaptop:flex-row xlaptop:justify-center xlaptop:space-x-10 ">
                        {trending.map((places, index) => {
                            return (
                                <div className="bg-white rounded-lg shadow-lg w-8/12 tablet:w-6/12 relative" key={index}>
                                    <div className="relative h-40 overflow-hidden rounded-t-lg mb-4">
                                        <img
                                            className="absolute top-0 left-0 w-full h-full object-cover"
                                            src={places.url}
                                            alt="City Image"
                                        />
                                    </div>
                                    <div className="text-left px-5 pb-10 h-max flex flex-col">
                                        <div className='mb-5'>
                                            <h2 className="text-xl font-bold mb-2">{places.place}</h2>
                                            <div className='flex gap-10 pb-5'>
                                                <div className='flex gap-2 leading-5'>
                                                    <Calendar></Calendar>
                                                    {places.days} Days
                                                </div>
                                                <div className='flex gap-2 leading-5'>
                                                    <Person></Person>
                                                    {places.people} Going
                                                </div>
                                            </div>
                                            <p className="text-gray-700 mb-6">
                                                {places.desc}
                                            </p>
                                        </div>
                                        <button className="py-2 px-4 text-white bg-orange-accent rounded-md absolute bottom-5 left-5 right-5 w-fit">
                                            Explore Now
                                        </button>
                                    </div>
                                </div>

                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
