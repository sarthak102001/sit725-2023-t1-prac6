const assert = require('chai').assert;
const main = require('../server');

//Results
const helloWorldText = main.helloWorld();
const multiplicationResult = main.multiplication(25, 4);
const arrayOfNumbers = main.arrayOfNumbers();

describe('Main Suite', function () {

    describe('Hello World Method - Test Cases', function () {
        it('Hello World text is as expected', function () {
            assert.equal(helloWorldText, 'hello world');
        });
        it('Validate data type', function () {
            assert.typeOf(helloWorldText, 'string', 'The expected data type is a string')
        });
    });

    describe('Multiplication Method * Test Cases', function () {
        it('More than 75', function () {
            assert.isAbove(multiplicationResult, 75);
        });
        it('Validate data type', function () {
            assert.typeOf(multiplicationResult, 'number', 'The expected data type is a number')
        });
    });

    describe('Array Method - Test Cases', function () {
        it('Array includes the number 5', function () {
            assert.include(arrayOfNumbers, 5);
        });
        it('Array includes the number 0', function () {
            assert.include(arrayOfNumbers, 0);
        });
        it('Array includes the number 3', function () {
            assert.include(arrayOfNumbers, 3);
        });
        it('Validate array length', function () {
            assert.lengthOf(arrayOfNumbers, 6)
        });
    });


});


var expect = require("chai").expect;
var request = require("request");

describe("Add Two Numbers", function () {
    var url = "http://localhost:8080/addTwoNumbers/3/5";
    it("returns status 200 to check if api works", function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
        });
    });
    it("returns statusCode key in body to check if api give right result should be 200", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done()
        });
    });
    it("returns the result as number", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('number');
            done()
        });
    });
    it("returns the result equal to 8", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.equal(8);
            done()
        });
    });
    it("returns the result not equal to 15", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.not.equal(15);
            done()
        });
    });
});


describe("Multiply Two Numbers", function () {
    var url = "http://localhost:8080/multiplyTwoNumbers/1/5";
    it("returns status 200 to check if api works", function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
        });
    });
    it("returns statusCode key in body to check if api give right result should be 200", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done()
        });
    });
    it("returns the result as number", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('number');
            done()
        });
    });
    it("returns the result equal to 5", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.equal(5);
            done()
        });
    });
    it("returns the result not equal to 15", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.result).to.not.equal(15);
            done()
        });
    });
});



describe("Add Two strings", function () {
    var url = "http://localhost:8080/addTwoNumbers/a/b";
    it("should return status 200", function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
        });
    });
    it("returns statusCode key in body to check if api gives right result should be 400", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(400);
            done()
        });
    });
    it("returns the result as null", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('null');
            done()
        });
    });
});

