const logger = require('../../utils/logger/logger');
const User = require('../../models/user.mongo');

async function userData(req, res) {
    const { userID } = req.params;

    try {
        if (!userID) {
            return res
                .status(400)
                .send({ message: 'Invalid or missing params' });
        }

        const user = await User.findOne({ _id: userID }).populate('userDetails').exec();

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        return res.status(200).send({
            status: 200,
            message: 'UserDetails fetched successfully',
            data: user,
        });
    } catch (error) {
        logger.error(error);
        return res.status(500).send({ message: 'Internal Server Error :(' });
    }
}

module.exports = { userData };
