const fs = require('fs');
const { Types: { ObjectId } } = require('mongoose');
const { connectToMongo, closeMongoDB } = require('../../backend/db');

connectToMongo().then();

const User = require('../../backend/models/user.mongo');
const UserDetails = require('../../backend/models/userDetails.mongo');
const Trips = require('../../backend/models/trip.mongo');
const TripsDetails = require('../../backend/models/tripDetails.mongo');

const users = JSON.parse(fs.readFileSync('../data/Users.json', 'utf-8'));
const userdetails = JSON.parse(fs.readFileSync('../data/UserDetails.json', 'utf-8'));
const trips = JSON.parse(fs.readFileSync('../data/Trips.json', 'utf-8'));
const tripdetails = JSON.parse(fs.readFileSync('../data/TripDetails.json', 'utf-8'));

const convertedTrips = trips.map((trip) => ({
    ...trip,
    _id: new ObjectId(trip._id),
    tripDetails: new ObjectId(trip.tripDetails),
    createdBy: new ObjectId(trip.createdBy),
    tripsInterested: trip.tripsInterested.map((id) => new ObjectId(id)),
    peopleGoing: trip.peopleGoing.map((id) => new ObjectId(id)),
}));

const convertedTripDetails = tripdetails.map((tripDetail) => ({
    ...tripDetail,
    _id: new ObjectId(tripDetail._id),
}));

const convertedUserDetails = userdetails.map((userDetail) => ({
    ...userDetail,
    _id: new ObjectId(userDetail._id),
    tripsCreated: userDetail.tripsCreated.map((id) => new ObjectId(id)),
    tripsInterested: userDetail.tripsInterested.map((id) => new ObjectId(id)),
}));

const convertedUsers = users.map((user) => ({
    ...user,
    _id: new ObjectId(user._id),
    userDetails: new ObjectId(user.userDetails),
}));

const importData = async () => {
    try {
        await User.insertMany(convertedUsers);
        await UserDetails.insertMany(convertedUserDetails);
        await Trips.insertMany(convertedTrips);
        await TripsDetails.insertMany(convertedTripDetails);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Data imported successfully');
    }
};

importData().then(() => {
    closeMongoDB().then(() => {
        process.exit();
    });
});
