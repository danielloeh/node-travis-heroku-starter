const chai = require('chai');
var expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../src/server.js').app;

chai.should();
chai.use(chaiHttp);

describe('hello world', () => {

    after(async () => {
        require('./../src/server').stop();
    });

    it('checks output', () => {
        return chai.request(app)
            .get('/')
            .then((res) => {
                res.should.have.status(200);
                expect(res.text).to.equal('{message: \'Hello World\'}');
            })
            .catch(err => {
                throw err
            })
    })
});
