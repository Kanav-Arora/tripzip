import React from 'react'

import { WriteMini } from '../../../assets/ext-icon'

export default function AddTripButton(props) {
    return (
        <button onClick={props.onClick} className='text-white pr-2 flex flex-row items-center'>
            <WriteMini className="mr-2" />
            Trip
        </button>
    )
}
