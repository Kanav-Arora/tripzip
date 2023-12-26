const fs = require('fs');

// const users = JSON.parse(fs.readFileSync('./Users.json', 'utf-8'));
// const userdetails = JSON.parse(
//     fs.readFileSync('./UserDetails.json', 'utf-8'),
// );
const trips = JSON.parse(fs.readFileSync('./Trips.json', 'utf-8'));
const tripdetails = JSON.parse(
    fs.readFileSync('./TripDetails.json', 'utf-8'),
);

const tripDetailsId = [];
tripdetails.forEach((trip) => {
    tripDetailsId.push(trip._id);
});

console.log('trips with issues');

trips.forEach((trip) => {
    if ((trip.tripDetails in tripDetailsId) === false) { console.log(trip.tripDetails); }
});
