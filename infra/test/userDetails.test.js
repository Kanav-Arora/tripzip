const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../backend/index');
const { expect } = chai;

const { testUID, testToken } = require('./user.test');

chai.use(chaiHttp);

describe('User Details Routes', () => {
    it('should post user details', async () => {
        const userDetails = {
            uid: testUID,
            address: '456 Oak Street',
            pincode: '789012',
            city: 'New City',
            state: 'New State',
            country: 'New Country',
            age: 30,
            gender: 'female',
            tripsCreated: 8,
            tripsInterested: 3,
            status: 'active'
        };

        const response = await chai.request(app)
            .post('/account')
            .set('x-uid', testUID)
            .set('Cookie', `access_token=${testToken}`)
            .send(userDetails);

        expect(response).to.have.status(201);
        expect(response).to.be.json;
        expect(response.body).to.have.property('message', `UserDetails created ${uid}`);
    });

    it('should overwrite user details if uid exists', async () => {
        const uid = 'example_uid';
        const userDetails = {
            uid: 'example_uid',
            address: '789 Elm Street',
            pincode: '345678',
            city: 'Updated City',
            state: 'Updated State',
            country: 'Updated Country',
            age: 35,
            gender: 'male',
            tripsCreated: 12,
            tripsInterested: 6,
            status: 'inactive'
        };

        const response = await chai.request(app)
            .post('/account')
            .set('x-uid', uid)
            .send(userDetails);

        expect(response).to.have.status(201);
        expect(response).to.be.json;
        expect(response.body).to.have.property('message', `UserDetails overwritten ${uid}`);
    });

    it('should get user details by uid', async () => {
        const uid = 'example_uid';
        const expectedResponse = {
            uid: 'example_uid',
            address: '789 Elm Street',
            pincode: '345678',
            city: 'Updated City',
            state: 'Updated State',
            country: 'Updated Country',
            age: 35,
            gender: 'male',
            tripsCreated: 12,
            tripsInterested: 6,
            status: 'inactive'
        };

        const response = await chai.request(app)
            .get('/account')
            .set('x-uid', uid);

        expect(response).to.have.status(200);
        expect(response).to.be.json;
        expect(response.body).to.deep.equal(expectedResponse);
    });

    it('should return 404 if user details are not found', async () => {
        const uid = 'non_existent_uid';

        const response = await chai.request(app)
            .get('/account')
            .set('x-uid', uid);

        expect(response).to.have.status(404);
        expect(response).to.be.json;
        expect(response.body).to.have.property('message', 'Data not found');
    });
});
