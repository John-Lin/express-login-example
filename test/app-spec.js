var supertest = require('supertest');
var should = require('should');
var express = require('express');
var app = require('../app');

describe('Upload app test cases', function () {
  it('should should status code 200 without error ', function (done) {
    supertest(app)
      .get('/ping')
      .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => {
        if (err) return err;
        res.text.should.match(/pong!/);
        done();
      });
  });
});
