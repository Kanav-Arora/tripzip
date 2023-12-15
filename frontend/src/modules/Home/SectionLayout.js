import React from 'react';

export default function SectionLayout({
    subheading,
    title,
    description,
    children,
}) {
    return (
        <div className="my-28 mx-40 flex flex-col z-0">
            <div className="justify-between flex flex-row items-end">
                <div className="flex flex-col">
                    <div className="text-gray-500 text-sm">{subheading}</div>
                    <div className="text-black text-4xl font-bold">{title}</div>
                </div>
                <div className="text-gray-500 text-sm w-1/3">{description}</div>
            </div>
            <div className="my-8">{children}</div>
        </div>
    );
}
