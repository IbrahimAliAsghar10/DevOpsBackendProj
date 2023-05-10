const request = require('supertest');
const app = require('../src/index');
const chai = require('chai');
const expect = chai.expect;

describe('POST /login', () =>{
  it('should return a 200 OK status and a user response', (done) => {
    request(app)
      .post('/login')
      .send({ email: 'user1@example.com', password: 'password1' })
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({ message: 'Login successful',
      user:{
        id:1,
        email: 'user1@example.com'
      } })
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return a 401 Unauthorized status and an error message if email or password is incorrect', (done) => {
    request(app)
      .post('/login')
      .send({ email: 'testuser@example.com', password: 'wrongpassword' })
      .expect(401)
      .expect('Content-Type', /json/)
      .expect({ success: false, error: 'Invalid email or password' })
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
