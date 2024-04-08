const Users = require('../../models/user.mongo');

async function deleteUser( req, res ) {

    const userId = req.user.uid;
    try {
        // Update User Status to 'deleted'
        const userChanges = {
          status: 'deleted',
          isGoogleAuth: false,
          isVerified: false,
          updated_at: Date.now()
        }

        const updatedUser = await Users.findByIdAndUpdate(userId, userChanges);
        
        if (!updatedUser) {
          throw new Error(`User: ${ userId } not found`);
        }

        res.clearCookie('access_token');

        return res.status(200).send({
          status: 200,
          message: `User: ${ userId } deleted successfully`,
        });

    } catch (error) {
        console.error('Error updating user:', error);
    }
}

module.exports = { deleteUser };