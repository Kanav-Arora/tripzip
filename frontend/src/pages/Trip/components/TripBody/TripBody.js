import React from "react";
import AboutTrip from "./AboutTrip";
import SectionContainer from "../../styles/SectionContainer";
import RequestCard from "./RequestCard";
import AboutHost from "./AboutHost";

import UserAvatar from "../../../../modules/ui/UserAvatar";

function formatDate(inputDate) {
    const date = new Date(inputDate);
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString().slice(-2);

    return `${day} ${month}, ${year}`;
}

export default function TripBody({ tripData, userData }) {
    const startDate = formatDate(tripData.tripDetails.startDate);
    const endDate = formatDate(tripData.tripDetails.endDate);
    const desc = tripData.tripDetails.description;
    const itinerary = tripData.tripDetails.itinerary;

    return (
        <div className="flex flex-row gap-10">
            <div className="w-3/5 overflow-y-scroll">
                <SectionContainer border={true}>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2 text-base">
                            From{" "}
                            <div className="font-semibold">{startDate}</div> to{" "}
                            <div className="font-semibold">{endDate}</div>
                        </div>
                        <UserAvatar
                            image="/images/src/kanav.webp"
                            name="KA"
                            size={1.75}
                            hasShadow={true}
                        />
                    </div>
                </SectionContainer>
                <SectionContainer border={true}>
                    <AboutTrip description={desc} itinerary={itinerary} startDate={startDate}
                        endDate={endDate} />
                </SectionContainer>
                <SectionContainer border={true}>
                    <AboutHost userData={userData} />
                </SectionContainer>
            </div>
            <div className="w-2/5">
                <div className="sticky top-0">
                    <RequestCard
                        startDate={startDate}
                        endDate={endDate}
                        interested={tripData.tripsInterested.length}
                        cost={tripData.tripDetails.cost}
                    />
                </div>
            </div>
        </div>
    );
}
