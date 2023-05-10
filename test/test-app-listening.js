const request = require('supertest');
const app = require('../src/index');
const chai = require('chai');
const expect = chai.expect;

describe('GET /', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect({message:'Hello folks'});
      done();
  }).timeout(5000);
});

describe('Server Listening', function () {
  it('should listen on port 3001', function(done) {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({message:'Hello folks'});
      done();
  }).timeout(5000);
});
