/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { backendOrigin } from "../../frontend.config";
import TripHeader from "./components/TripHeader";
import TripBody from "./components/TripBody/TripBody";

export default function Trip() {
    const { tripID } = useParams();
    const instance = axios.create({
        withCredentials: true,
        baseURL: backendOrigin,
    });

    const tripData = {
        _id: "6549b4914717a8e976d580dd",
        tripDetails: {
            _id: "6549b4914717a8e976d580db",
            startDate: "2023-11-07T03:52:49.720Z",
            endDate: "2023-11-07T03:52:49.720Z",
            description: "Desc",
            city: "Delhi",
            state: "Delhi",
            pincode: "Delhi",
            itinerary: "Something",
            created_at: "2023-11-07T03:52:49.743Z",
            updated_at: "2023-11-07T03:52:49.743Z",
            __v: 0,
        },
        createdBy: "6549b47b4717a8e976d580d9",
        tripsInterested: [],
        views: 31,
        status: "active",
        created_at: "2023-11-07T03:52:49.800Z",
        updated_at: "2023-11-07T03:52:49.800Z",
        __v: 0,
    };

    const userData = {
        "_id": "6549b47a4717a8e976d580d7",
        "tripsCreated": [],
        "tripsInterested": [],
        "status": "active",
        "updatedAt": "2023-11-18T08:09:27.460Z",
        "__v": 0,
        "address": "Old school road, Javascript Nagar",
        "age": 10,
        "city": "MongoDB",
        "country": "Web Dev",
        "gender": "male",
        "pincode": 151009,
        "state": "React",
        "about_yourself": "I am a young and passionate developer who loves to explore new technologies and build innovative solutions. Coding is not just my profession; it's my passion. I enjoy reading about the latest trends in web development and spend my free time gaming and experimenting with new coding projects.",
        "birth_place": "Coder's Land",
        "hobbies": [
            "coding",
            "reading",
            "gaming"
        ],
        "language_speak": [
            "JavaScript",
            "Python",
            "HTML",
            "CSS"
        ],
        "stars": 5,
        "year_of_birth": 1990
    };

    // const [tripData, setTripData] = useState(null);
    // const [userData, setUserData] = useState(null);

    // useEffect(() => {
    //     const fetchTripData = async () => {
    //         try {
    //             const response = await instance.get(`/trips/${tripID}`);
    //             setTripData(response.data.data);
    //         } catch (error) {
    //             console.error('Error fetching trip data:', error);
    //         }
    //     };

    // const fetchUserData = async () => {
    //     try {
    //         const response = await instance.get(
    //             `/account/${tripData.createdBy}`
    //         );
    //         setUserData(response.data.data);
    //     } catch (error) {
    //         console.error("Error fetching user data:", error);
    //     }
    // };

    // fetchTripData();

    // }, [tripID]);

    return (
        <div className="mx-40">
            <TripHeader
                title="Title"
                city={tripData.tripDetails.city}
                state={tripData.tripDetails.state}
                views={tripData.views}
            />
            <TripBody tripData={tripData} userData={userData} />
        </div>
    );
}
