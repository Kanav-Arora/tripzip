async function signOutUser(req, res) {
    res.clearCookie('access_token', { domain: 'localhost' });
    res.status(200).json('Logout successful');
}

module.exports = { signOutUser };
