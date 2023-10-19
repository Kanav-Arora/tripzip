const chai = require('chai');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');

const app = require('../index');
const { JwtSecret, JwtExpiresIn, MongodbUri } = require('../config');

chai.use(chaiHttp);

const { expect } = chai;

console.log("app test starts");

describe('GET /', () => {
    it('should return JSON with authentication status and user data if authenticated', (done) => {
        const payload = { id: 1, name: 'John Doe' };

        const expectedResponse = {
            isAuth: true,
            userData: {
                id: payload.id,
                name: payload.name,
            },
        };
        const token = jwt.sign(payload, JwtSecret, { expiresIn: JwtExpiresIn });
        chai.request(app)
            .get('/')
            .set('Cookie', `access_token=${token}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal(expectedResponse);
                done();
            });
    });

    it('should return JSON with authentication status as false and null user data if not authenticated', (done) => {
        const expectedResponse = {
            isAuth: false,
            userData: null,
        };

        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal(expectedResponse);
                done();
            });
    });
});
