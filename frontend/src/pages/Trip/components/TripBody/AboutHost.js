import React from "react";
import { StarMini, CakeIcon, MapIcon, LanguageIcon, AcademicCapIcon, MapPinIcon } from "../../../../assets/ext-icon";
import UserAvatar from '../../../../modules/ui/UserAvatar'

const UserCard = ({ name, stars, yearsHosting, numberOfTrips, image }) => {
    return (
        <div className="h-fit bg-white rounded-lg px-6 py-4 flex flex-row gap-10">
            <div className="basis-3/4">
                <div className="h-full flex flex-col justify-center items-center gap-y-1">
                    <UserAvatar image='/images/src/kanav.webp' letter='KA' size={5} />
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

const AboutItem = ({ Icon, Text }) => {
    return (<div className="flex flex-row gap-2 items-center my-3">
        <Icon />
        {Text}
    </div>);
}

export default function AboutHost({ userData }) {
    let location = `${userData.state}, ${userData.country}`;
    let hobbies = 'Likes';
    userData.hobbies.forEach((hobby) => {
        hobbies += ` ${hobby},`;
    });
    let languages = 'Speaks';
    userData.language_speak.forEach((language) => {
        languages += ` ${language},`;
    });
    return (
        <div className="flex flex-col gap-8">
            <div className="text-xl font-bold">Meet your host</div>
            <div className="flex flex-col justify-center">
                <div className="w-full bg-[#f0efe9] gap-8 rounded-lg px-28 py-10 text-black flex flex-col">
                    <UserCard
                        name="Kanav"
                        stars={userData.stars}
                        yearsHosting={2}
                        numberOfTrips={userData.tripsCreated.length}
                    />
                    <div className="flex flex-col justify-items-start">
                        <AboutItem Icon={CakeIcon} Text={`Born in ${userData.year_of_birth}`} />
                        <AboutItem Icon={MapIcon} Text={`From ${userData.birth_place}`} />
                        <AboutItem Icon={MapPinIcon} Text={`Located at ${location}`} />
                        <AboutItem Icon={AcademicCapIcon} Text={hobbies} />
                        <AboutItem Icon={LanguageIcon} Text={languages} />
                    </div>
                    <div>
                        {userData.about_yourself}
                    </div>
                    <button className="w-fit rounded-md bg-matteBlack text-white font-bold py-2 px-4">
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
