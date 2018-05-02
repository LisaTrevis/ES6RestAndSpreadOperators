// ----- Rest & Spread Operators ------

function addNumbers(array) {
	return numbers.reduce(function(sum, number) {
		return sum + number
	}, 0);
}

// Initial refactor with fat arrow function:
function addNumbers(array) {
	return numbers.reduce(sum, number) => {
		return sum + number
	}, 0);
}

addNumbers[1, 2, 3, 4, 5];

// But what if we wanted to pass in a bunch of numbers as arguments rather than passing in an array, like so:
addNumbers(1, 2, 3, 4, 5);

// We'd have to set up the function like so:
function addNumbers(a, b, c, d, e) {
	const number = [a, b, c, d, e]
	return numbers.reduce(sum, number) => {
		return sum + number
	}, 0);
}

// The work around for this is, which takes however many numbers we add as arguments and puts them into an array:
function addNumbers(...numbers) {
	return numbers.reduce(sum, number) => {
		return sum + number
	}, 0);
}







