import React from "react";
import { StarMini } from "../../../../assets/ext-icon";

const UserCard = ({ name, stars, yearsHosting, numberOfTrips, image }) => {
    return (
        <div className="h-fit bg-white rounded-lg px-6 py-4 flex flex-row gap-10">
            <div className="basis-3/4">
                <div className="h-full flex flex-col justify-center items-center">
                    <div className="text-lg font-bold">{name}</div>
                    <div className="text-sm">Host</div>
                </div>
            </div>
            <div className="basis-1/4 flex flex-col divide-y">
                <div className="flex flex-col pb-4 justify-center">
                    <div className="text-base font-bold  flex flex-row gap-x-1 items-center">
                        {stars} <StarMini />
                    </div>
                    <div className="text-xs">Stars</div>
                </div>
                <div className="flex flex-col py-4 justify-center">
                    <div className="text-base font-bold">{yearsHosting}</div>
                    <div className="text-xs">Years Hosting</div>
                </div>
                <div className="flex flex-col pt-4 justify-center">
                    <div className="text-base font-bold">{numberOfTrips}</div>
                    <div className="text-xs">Trips</div>
                </div>
            </div>
        </div>
    );
};

export default function AboutHost() {
    return (
        <div className="flex flex-col gap-8">
            <div className="text-xl font-bold">Meet your host</div>
            <div className="flex flex-col justify-center">
                <div className="w-full bg-[#f0efe9] rounded-lg px-28 py-10 text-black flex flex-col">
                    <UserCard
                        name="Kanav"
                        stars={4.6}
                        yearsHosting={2}
                        numberOfTrips={10}
                    />
                    <button className="w-fit rounded-md bg-matteBlack text-white font-bold my-6 py-2 px-4">
                        Message Host
                    </button>
                    <div className="text-xs font-extralight pt-6 border-t border-gray-300">
                        We are not responsible to protect any payment transfers
                        over or outside Travel Buddy.
                    </div>
                </div>
            </div>
        </div>
    );
}
