/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { backendOrigin } from "../../frontend.config";
import TripHeader from "./components/TripHeader";
import TripBody from "./components/TripBody/TripBody";

import { AuthContext } from "../../context/Auth/authContext"

import init from "../../services/authService"

export default function Trip() {
    const { tripID } = useParams();
    const instance = axios.create({
        withCredentials: true,
        baseURL: backendOrigin,
    });

    const { state, dispatch } = useContext(AuthContext);
    const authUID = state.uid;

    const [tripData, setTripData] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        init(dispatch);
        const fetchData = async () => {
            try {
                const tripResponse = await instance.get(`/trips/${tripID}`);
                setTripData(tripResponse.data.data);

                if (tripResponse.data.data && tripResponse.data.data.createdBy) {
                    const userDetailResponse = await instance.get(
                        `/account/${tripResponse.data.data.createdBy}`
                    );
                    setUserData(userDetailResponse.data.data);
                }
            } catch (error) {
                console.error('Error fetching trip data:', error);
            }
        }

        fetchData();
    }, [tripID]);

    return (
        <div className="mx-40">
            {
                tripData !== null && userData !== null
                    ?
                    (
                        <div>
                            <TripHeader
                                title={tripData.tripDetails.title}
                                city={tripData.tripDetails.city}
                                state={tripData.tripDetails.state}
                                views={tripData.views}
                                isInterested={tripData.tripsInterested.includes(authUID)}
                            />
                            <TripBody tripData={tripData} userData={userData} />
                        </div>
                    )
                    :
                    <div></div>
            }
        </div>
    );
}
