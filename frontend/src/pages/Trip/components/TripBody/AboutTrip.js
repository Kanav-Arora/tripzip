import React from "react";

export default function AboutTrip({ description }) {
    return (
        <div className="flex flex-col gap-8">
            <div className="text-xl font-bold">About Trip</div>
            <div className="relative max-h-24 overflow-hidden leading-6">
                {description}
            </div>
            <button className="bg-matteBlack text-white px-4 py-1 block mx-auto rounded-md">
                Show More
            </button>
        </div>
    );
}
