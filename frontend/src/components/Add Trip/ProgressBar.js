import React from 'react';

const ProgressBar = ({ percentage }) => {
    return (
        <div className="relative h-1.5 rounded-full">
            <div
                className="absolute rounded-bl-xl inset-y-0 left-0 bg-orangeaccent"
                style={{ width: `${percentage}%` }}
            />
            <div
                className="absolute rounded-br-xl inset-y-0 right-0 bg-orangeaccent opacity-25"
                style={{ width: `${100 - percentage}%` }}
            />
        </div>
    );
}

export default ProgressBar;
