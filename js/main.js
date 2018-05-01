// ----- Template Strings ------

// Also known as template literals or string interpolation
// Really great when mixing in a lot of variables to clean up code.

// function getMessage() {
// 	const year = new Date().getFullYear();

// 	return "The year is " + year;
// }


// function getMessage() {
// 	const year = new Date().getFullYear();

// 	return `The year is ${year}`;
// }


// Can also be written as:

// function getMessage() {
// 	return `The year is ${ new Date().getFullYear() }`;
// }


// Refactor the functions to use template strings:

// function doubleMessage(number) {
//   return "Your number doubled is " + (2 * number);
// }

// function doubleMessage(number) {
//   return `Your number doubled is ${2 * number}`;
// }


// function fullName(firstName, lastName) {
//   return firstName + lastName;
// }

// function fullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }