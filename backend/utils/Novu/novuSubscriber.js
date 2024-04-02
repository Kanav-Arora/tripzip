/* eslint-disable import/no-extraneous-dependencies */

const { Novu } = require('@novu/node');
const { AwsBucketUrl, NovuAPI } = require('../../config');

const novu = new Novu(NovuAPI);

async function createSubscriber(subscriberID, payload) {
    const response = await novu.subscribers.identify(subscriberID, {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        avatar: `${AwsBucketUrl}${subscriberID}`,
        locale: 'en-US',
    });
    return response;
}

async function updateSubscriber(subscriberID, payload) {
    const response = await novu.subscribers.update(subscriberID, payload);
    return response;
}

async function deleteSubscriber(subscriberID) {
    const response = await novu.subscribers.delete(subscriberID);
    return response;
}

async function fetchSubscriber(subscriberID) {
    const response = await novu.subscribers.get(subscriberID);
    return response;
}

module.exports = {
    createSubscriber, updateSubscriber, deleteSubscriber, fetchSubscriber,
};
