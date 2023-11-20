import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Heading from "../../../modules/ui/Heading";
import { ShareMini, HeartIcon } from "../../../assets/ext-icon";
import { motion } from "framer-motion";
import { backendOrigin } from "../../../frontend.config";

import axios from "axios";

const popAnimation = {
    pop: { scale: [1, 1.4, 1], transition: { duration: 0.3 } },
    default: { scale: 1 },
};

export default function TripHeader({
    title,
    city,
    state,
    views,
    isInterested,
}) {
    const { tripID } = useParams();
    const instance = axios.create({
        withCredentials: true,
        baseURL: backendOrigin,
    });
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

    return (
        <div className="flex flex-col justify-between">
            <Heading text={title} />
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row text-sm font-semibold gap-2">
                    <div>{`${city}, ${state}`}</div>·
                    <div>{`${views} views`}</div>
                </div>
                <div className="flex flex-row gap-2">
                    <div className="select-none flex flex-row rounded-lg p-2 text-sm font-semibold justify-center gap-1.5 items-center hover:bg-gray-100">
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
    );
}
