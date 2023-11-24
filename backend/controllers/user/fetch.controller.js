const logger = require('../../utils/logger/logger');
const Users = require('../../models/user.mongo');

async function userData(req, res) {
    const { userID } = req.params;

    try {
        if (!userID) {
            return res.status(400).send({ message: 'Invalid or missing params' });
        }

        const user = await Users.findOne({ _id: userID }, { name: 1 });

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        return res.status(200).send({ name: user.name });
    } catch (error) {
        logger.error(error);
        return res.status(500).send({ message: 'Internal Server Error :(' });
    }
}

module.exports = { userData };
