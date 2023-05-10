const request = require('supertest');
const app = require('../src/index');
const chai = require('chai');
const expect = chai.expect;

describe('GET /api/data', () => {  
  it('responds with json', (done) => {
    request(app)
      .get('/api/data')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const items = res.body;
        expect(items).to.be.an('array');
        done();
  });
});
});
