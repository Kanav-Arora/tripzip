import React from 'react'
import Heading from '../../../components/Heading';
import Title from '../../../components/Title';

import './Page1.css'

export default function Page1(props) {

    const inputValueHandler = (e) => {
        props.handler(
            {
                location: e.target.value,
                description: props.inputs.description,
            }
        )
    }

    const textAreaValueHandler = (e) => {
        props.handler(
            {
                location: props.inputs.location,
                description: e.target.value,
            }
        )
    }

    return (
        <div className="flex flex-col h-full">
            <Title text="Create a trip" isBold fontSize={"1.25rem"} classname="mb-8" />
            <Heading text="Location" className='mb-2 font-medium' />
            <input
                type="text"
                className="w-1/2 border border-gray-300 p-2 rounded-md mb-8 text-sm location-input"
                value={props.inputs.location}
                onChange={inputValueHandler}
            />
            <Heading text="Description" className='font-medium mb-2' subText="- Optional" subTextStyle="text-gray-400" />
            <div className="flex-1  relative w-full rounded-md overflow-hidden description-input">
                <textarea
                    className="w-full h-full p-2 resize-none outline-none text-sm overflow-y-scroll"
                    style={{ resize: 'none' }}
                    value={props.inputs.description}
                    onChange={textAreaValueHandler}
                />
            </div>
        </div>
    )
}
