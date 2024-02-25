const { PasswordManager } = require('./services/passwordManager');

async function example() {
    try {
        const hashedPassword = await PasswordManager.toHash('travelbuddy');
        console.log(hashedPassword);
    } catch (error) {
        console.error('Error:', error);
    }
}

example();
