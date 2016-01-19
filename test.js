var expect = require ('chai').expect;
var isPositive = require('./index.js');

describe ('check for positive numbers', function () {
	it ('expected true if the number is positive', function () {
		expect(isPositive(10)).to.be.equal(true);
	});

	it ('expected false if the number is negative', function () {
		expect(isPositive(-10)).to.be.equal(false);
	});

	it ('expected undefinded if the number is null', function () {
		expect(isPositive(null)).to.be.equal(undefined);
	});
});