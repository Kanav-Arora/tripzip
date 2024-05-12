const axios = require('axios');
const { HereAPI } = require('../../config');

async function fetchLocations(req, res) {
    try {
        const {
            location,
        } = req.query;

        const response = await axios.get('https://autocomplete.search.hereapi.com/v1/autocomplete', {
            params: {
                q: location || "India",
                apiKey: HereAPI,
            },
        });

        if (response.data && response.data.items) {
            const cityItems = response.data.items.filter(item => item.localityType === 'city');
            const locations = cityItems.map(item => item.address);
            return res.status(200).json({
                status: 200,
                address: locations,
            });
        } else {
            throw new Error('No locations found');
        }
    } catch (error) {
        console.error('Error fetching locations:', error);
        return res.status(500).json({
            status: 500,
            error: 'Internal Server Error',
        });
    }
}

module.exports = { fetchLocations };
