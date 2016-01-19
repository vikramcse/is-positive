var getType = require('what-type');
module.exports = function (number) {
	if (getType(number) === 'integer' && number !== null && number !== undefined) {
		return number > 0;
	}
}