import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import Heading from "../../../modules/ui/Heading";
import { ShareMini, HeartIcon } from "../../../assets/ext-icon";
import { motion } from "framer-motion";
import { backendOrigin, frontendOrigin } from "../../../frontend.config";
import Modal from "../../../modules/ui/Modal/Modal";
import UserAvatar from '../../../modules/ui/UserAvatar'

import ShareModal from "../../../modules/Trip/ShareModal/ShareModal";

import axios from "axios";

const popAnimation = {
    pop: { scale: [1, 1.4, 1], transition: { duration: 0.3 } },
    default: { scale: 1 },
};

const PeopleGoingModalItem = ({ name, image }) => {
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="text-base font-normal">
                {name}
            </div>
            <UserAvatar image={image} letter={'KA'} size={1.5} />
        </div>
    );
}

const PeopleGoingModalComponent = ({ peopleGoing }) => {
    return (
        <div className="flex flex-col gap-y-8">
            <div className="text-lg font-bold">Your buddies for the trip</div>
            <div className="grid grid-cols-2 w-full gap-10">
                {peopleGoing.map((person, index) => (
                    <PeopleGoingModalItem key={index} name={person.name} image={person.image} />
                ))}
            </div>
        </div>
    );
};



export default function TripHeader({
    title,
    city,
    state,
    maxSize,
    currentSize,
    isInterested,
}) {
    const { tripID } = useParams();
    const instance = axios.create({
        withCredentials: true,
        baseURL: backendOrigin,
    });
    const location = useLocation();
    const currentUrl = `${frontendOrigin}${location.pathname}${location.search}`;
    const [interested, setInterested] = useState(isInterested);
    const interestedHandler = async () => {
        try {
            setInterested((prevInterested) => !prevInterested);
            const response = await instance.patch(
                `/trips/interested/${tripID}`
            );
            if (response.status === 201) {
                console.log("Trip interest toggled successfully");
            } else {
                setInterested((prevInterested) => !prevInterested);
                console.error("Trip interest toggle failed:", response);
            }
        } catch (error) {
            setInterested((prevInterested) => !prevInterested);
            console.error("Error toggling trip interest:", error.message);
        }
    };

    const [PeopleGoingModalState, togglePeopleGoingModal] = useState(false);

    const openPeopleGoingModal = () => {
        togglePeopleGoingModal(true);
    };

    const closePeopleGoingModal = () => {
        togglePeopleGoingModal(false);
    };

    const [ShareModalState, toggleShareModal] = useState(false);

    const openShareModal = () => {
        toggleShareModal(true);
    };

    const closeShareModal = () => {
        toggleShareModal(false);
    };

    const peopleGoing = [
        {
            name: "Kanav",
            image: "/images/src/kanav.webp"
        },
        {
            name: "Kanav",
            image: "/images/src/kanav.webp"
        },
        {
            name: "Kanav",
            image: "/images/src/kanav.webp"
        },
    ]

    return (
        <>
            <div className="flex flex-col justify-between">
                <Heading text={title} />
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row text-sm font-semibold gap-2 items-center">
                        <div>{`${city}, ${state}`}</div>·
                        <div
                            className={`select-none ${currentSize >= 0 ? 'rounded-lg p-1 hover:bg-gray-100' : ''}`}
                            onClick={currentSize >= 0 ? openPeopleGoingModal : null}
                        >
                            {currentSize}{maxSize !== -1 ? `/${maxSize}` : ''} Going
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="select-none flex flex-row rounded-lg p-2 text-sm font-semibold justify-center gap-1.5 items-center hover:bg-gray-100" onClick={openShareModal}>
                            <ShareMini />
                            Share
                        </div>
                        <div
                            className="select-none group flex flex-row rounded-lg p-2 text-sm font-semibold justify-center gap-1.5 items-center hover:bg-gray-100"
                            onClick={interestedHandler}
                        >
                            <motion.div
                                variants={popAnimation}
                                animate={interested ? "pop" : "default"}
                            >
                                <HeartIcon
                                    fill={interested === true ? "#ef4444" : "none"}
                                    stroke={interested === true ? 0.25 : 1}
                                />
                            </motion.div>
                            Interested
                        </div>
                    </div>
                </div>
            </div>

            {
                currentSize >= 0 ?
                    <Modal
                        isVisible={PeopleGoingModalState}
                        width="fit"
                        height="50%"
                        onClose={closePeopleGoingModal}
                        scroll={true}
                    >
                        <PeopleGoingModalComponent peopleGoing={peopleGoing} />
                    </Modal>
                    :
                    <></>
            }
            <Modal
                isVisible={ShareModalState}
                width="40%"
                height="fit"
                onClose={closeShareModal}
                scroll={true}
            >
                <ShareModal url={currentUrl} />
            </Modal>
        </>
    );
}
