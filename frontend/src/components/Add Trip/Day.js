import React from 'react';
import Heading from '../Heading';

export default function Day({ dayNo, onDelete }) {
    const handleDelete = () => {
        onDelete(dayNo);
    };
    return (
        <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
                <Heading
                    text={`Day: ${dayNo}`}
                    className="font-bold text-lg"
                />
                <button onClick={handleDelete} className="text-red-600 text-xl">-</button>
            </div>
            <div className="relative w-full h-20 border border-gray-300 rounded-md overflow-hidden">
                <textarea
                    className="w-full h-full p-2 resize-none outline-none overflow-y-scroll scrollbar-hidden"
                    style={{ resize: 'none' }}
                />
            </div>
        </div>
    );
}
