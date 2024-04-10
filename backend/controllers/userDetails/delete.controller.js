const Users = require('../../models/user.mongo');

async function deleteUser( req, res ) {

    if (!req.isAuth) {
        return res.status(401).send({ message: 'Unauthorised access' });
    }

    const { uid } = req.user;
    try {
        // Update User Status to 'deleted'
        const userChanges = {
          status: 'deleted',
          isGoogleAuth: false,
          isVerified: false,
          updated_at: Date.now()
        }

        const updatedUser = await Users.findByIdAndUpdate(uid, userChanges);
        
        if (!updatedUser) {
          throw new Error(`User: ${ uid } not found`);
        }

        res.clearCookie('access_token');

        return res.status(200).send({
          status: 200,
          message: `User: ${ uid } deleted successfully`,
        });

    } catch (error) {
        logger.error(error);

        return res.status(500).send({ message: 'Internal Server Error :(' });
    }
}

module.exports = { deleteUser };