import React from "react";

export default function SectionContainer({ border, children }) {
    return (
        <div className={`py-4 ${border === true ? "border-y" : ""}`}>
            {children}
        </div>
    );
}
