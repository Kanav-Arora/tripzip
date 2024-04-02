const { Novu } = require('@novu/node');
const { NovuAPI, NovuIdentifierActionable, NovuIdentifierPlain } = require('../../config');
const { FrontendOrigin } = require('../../config');

const novu = new Novu(NovuAPI);

async function requestTripNovu(subscriberID, tripID, tripTitle, uid, name) {
    const response = await novu.trigger(NovuIdentifierActionable, {
        to: {
            subscriberId: subscriberID,
        },
        payload: {
            FrontendOrigin,
            tripID,
            tripTitle,
            uid,
            name,
        },
        actor: {
            subscriberId: uid,
        },
    });

    return response;
}

async function tripPlainNotificationNovu(subscriberID, tripID, tripTitle, uid, name, approved) {
    const response = await novu.trigger(NovuIdentifierPlain, {
        to: {
            subscriberId: subscriberID,
        },
        payload: {
            FrontendOrigin,
            tripID,
            tripTitle,
            uid,
            name,
            approved,
        },
        actor: {
            subscriberId: uid,
        },
    });
    return response;
}

async function cancelTrigger(transactionID) {
    const response = await novu.events.cancel(transactionID);
    return response;
}

module.exports = {
    requestTripNovu, tripPlainNotificationNovu, cancelTrigger,
};
