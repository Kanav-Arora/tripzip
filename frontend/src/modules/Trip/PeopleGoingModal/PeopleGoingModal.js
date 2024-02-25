import { useEffect, useState } from 'react';
import UserAvatar from '../../../modules/ui/UserAvatar'
import axios from 'axios';
import { backendOrigin } from '../../../frontend.config';

function extractInitials(name) {
    const words = name.split(' ');
    const initials = words.map(word => word[0].toUpperCase());
    return initials.join('');
}

const PeopleGoingModalItem = ({ name, image }) => {
    return (
        <div className="flex flex-row justify-between items-center py-4">
            <div className="text-base font-normal">
                {name}
            </div>
            <UserAvatar image={image} name={extractInitials(name)} size={2} />
        </div>
    );
}

async function fetchData(instance, personID) {
    try {
        const response = await instance.get(`/users/userdata/${personID}`);
        return { data: response.data, status: response.status };
    } catch (error) {
        console.error(`Error fetching data for ${personID}`);
        return { data: null, status: error.response ? error.response.status : 500 };
    }
}

export default function PeopleGoingModal({ peopleGoing }) {
    const [successfulResults, setSuccessfulResults] = useState([]);
    useEffect(() => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: backendOrigin,
        });
        const fetchDataForPeople = async () => {
            try {
                const results = await Promise.all(peopleGoing.map(person => fetchData(instance, person)));
                const successfulFetch = results.filter(result => result.status === 200);
                setSuccessfulResults(successfulFetch);
            } catch (error) {
                console.error(`Error fetching data for people: ${error.message}`);
            }
        };

        fetchDataForPeople();
    }, [peopleGoing]);
    return (
        <div className="flex flex-col gap-y-2 w-full px-5 py-4">
            <div className="text-lg font-bold">Your buddies for the trip</div>
            <div className="flex flex-col w-full divide-y">
                {successfulResults.length > 0 && successfulResults.map((person, index) => (
                    <PeopleGoingModalItem key={index} name={person.data.name} image={'/images/src/kanav.webp'} />
                ))}
            </div>
        </div>
    );
}

