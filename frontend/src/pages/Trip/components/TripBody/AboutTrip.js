import React from "react";
import SectionContainer from "../../styles/SectionContainer";

export default function AboutTrip({ description }) {
    return (
        <SectionContainer>
            <div className="text-2xl font-bold mb-4">About Trip</div>
            <div className="relative max-h-24 overflow-hidden leading-6">
                {description}
            </div>
            <button className="bg-black text-white px-4 py-1 mt-3 block mx-auto rounded-md">
                Show More
            </button>
        </SectionContainer>
    );
}
