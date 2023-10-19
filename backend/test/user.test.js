const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const { expect, assert } = chai;

chai.use(chaiHttp);

console.log("user test starts");

describe('Signup and Signin Route', async () => {
    it('signup | signin -> should create a new user if input is valid', async () => {
        const signupData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'password123',
        };
        const signupResponse = await chai.request(app)
            .post('/users/signup')
            .send(signupData);
        console.log("sign up response");
        expect(signupResponse).to.have.status(201);
        expect(signupResponse).to.be.json;

        expect(signupResponse.body).to.have.property('uid');
        expect(signupResponse.body).to.have.property('name');

        const signinData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'password123',
        };

        const signinResponse = await chai.request(app)
            .post('/users/signin')
            .send(signinData);

        expect(signinResponse).to.have.status(201);
        expect(signinResponse).to.be.json;

        expect(signinResponse.body).to.have.property('uid');
        expect(signinResponse.body).to.have.property('name');

        assert.equal(signupResponse.body.uid, signinResponse.body.uid);
        assert.equal(signupResponse.body.name, signinResponse.body.name);
    });

    it('signup -> should return an error if name is missing', async () => {
        const response = await chai.request(app)
            .post('/users/signup')
            .send({
                email: 'jane.doe@example.com',
                password: 'password123',
            });
        expect(response).to.have.status(400);
        expect(response).to.be.json;
        expect(response.body).to.have.property('message', 'Invalid or missing params');
    });

    it('signup -> should return an error if email is missing', async () => {
        const response = await chai.request(app)
            .post('/users/signup')
            .send({
                name: 'Jane Doe',
                password: 'password123',
            });

        expect(response).to.have.status(400);
        expect(response).to.be.json;
        expect(response.body).to.have.property('message', 'Invalid or missing params');
    });

    it('signup -> should return an error if password is missing', async () => {
        const response = await chai.request(app)
            .post('/users/signup')
            .send({
                name: 'Jane Doe',
                email: 'jane.doe@example.com',
            });

        expect(response).to.have.status(400);
        expect(response).to.be.json;
        expect(response.body).to.have.property('message', 'Invalid or missing params');
    });

    it('should return an error if user already exists', async () => {
        const existingUser = {
            name: 'Existing User',
            email: 'existing.user@example.com',
            password: 'password123',
        };
        await chai.request(app)
            .post('/users/signup')
            .send(existingUser);

        const response = await chai.request(app)
            .post('/users/signup')
            .send(existingUser);

        expect(response).to.have.status(400);
        expect(response).to.be.json;
        expect(response.body).to.have.property('message', 'User already exists');
    });
});
