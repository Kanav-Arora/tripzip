const fs = require('fs');
const { connectToMongo, closeMongoDB } = require('../../backend/db');

connectToMongo().then();

const User = require('../../backend/models/user.mongo');
const UserDetails = require('../../backend/models/userDetails.mongo');
const Trips = require('../../backend/models/trip.mongo');
const TripsDetails = require('../../backend/models/tripDetails.mongo');

const users = JSON.parse(fs.readFileSync('../data/Users.json', 'utf-8'));
const userdetails = JSON.parse(
    fs.readFileSync('../data/UserDetails.json', 'utf-8'),
);
const trips = JSON.parse(fs.readFileSync('../data/Trips.json', 'utf-8'));
const tripdetails = JSON.parse(
    fs.readFileSync('../data/TripDetails.json', 'utf-8'),
);

const importData = async () => {
    try {
        await User.insertMany(users);
        await UserDetails.insertMany(userdetails);
        await Trips.insertMany(trips);
        await TripsDetails.insertMany(tripdetails);
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
