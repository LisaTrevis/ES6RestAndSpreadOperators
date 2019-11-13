// ----- Rest & Spread Operators ------

// function addNumbers(array) {
// 	return numbers.reduce(function(sum, number) {
// 		return sum + number
// 	}, 0);
// }

// Initial refactor with fat arrow function:
// function addNumbers(array) {
// 	return numbers.reduce(sum, number) => {
// 		return sum + number
// 	}, 0);
// }

// addNumbers[1, 2, 3, 4, 5];

// But what if we wanted to pass in a bunch of numbers as arguments rather than passing in an array, like so:
// addNumbers(1, 2, 3, 4, 5);

// We'd have to set up the function like so:
// function addNumbers(a, b, c, d, e) {
// 	const number = [a, b, c, d, e]
// 	return numbers.reduce(sum, number) => {
// 		return sum + number
// 	}, 0);
// }

// The work around for this is rest, which takes however many numbers we add as arguments and puts them into an array:
// function addNumbers(...numbers) {
// 	return numbers.reduce(sum, number) => {
// 		return sum + number
// 	}, 0);
// }


// SPREAD
// Given:
// const defaultColors = [ 'red', 'green' ];
// const userFavoriteColors = [ 'orange', 'yellow' ]

// defaultColors.concat(userFavoriteColors);

// Now let's refactor this using spread instead:
// [ ...defaultColors, ...userFavoriteColors ];

// A unique case where the spread operator is better than the concat helper is joining a string with a group of arrays:
// [ 'blue', ...defaultColors, ...userFavoriteColors]
// Gives us [ 'blue', 'red', 'green', 'orange', 'yellow']


// Say we want to ensure that soymilk is always on our shopping list, even if we forget to add it, we can use both rest and spread in the same function:
// function validateShoppingList(...items) {
// 	if (items.indexOf('soymilk') < 0) {
// 		return [ 'soymilk', ...items ];
// 	}
// 	return items;
// }

// validateShoppingList('bread', 'oranges', 'kale')


// Say you created a library that includes the following function, but you want to change the name to multiplyProduct so that it more accurately reflects what the function does. However, there are a ton of users who are dependent on the function the way it's currently named:
// const MathLibrary = {
// 	calculateProduct(a, b) {
// 		return a * b;
// 	}
// };

// We could add another function called multiply within the library, but then we'd have duplicate logic:
// const MathLibrary = {
// 	calculateProduct(a, b) {
// 		return a * b;
// 	}
// 	multiplyProduct(a, b) {
// 		return a * b;
// 	}
// };

// The best solution would be using rest:
// const MathLibrary = {
// 	calculateProduct(...rest) {
// 		console.log("Please use multiplyProduct instead");
// 		return this.multiplyProduct(...rest);
// 	}
// 	multiplyProduct(a, b) {
// 		return a * b;
// 	}
// };
// This is also helpful for deprecating functions!


// Refactor the following to use the rest operator:
// function product(a, b, c, d, e) {
//   var numbers = [a,b,c,d,e];
  
//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }

// function product(...numbers) {
// 	return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }


// Refactor the following using the spread operator:
// function join(array1, array2) {
//   return array1.concat(array2);
// }

// function join(array1, array2) {
//   return [...array1, ...array2];
// }


// Refactor the following using only the rest operator:
// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

// function unshift(array, ...nums) {
//   return nums.concat(array);
// }


// ********************************* //
// ********************************* //

// ES6 Maximilian Schwartzmuller

// REST OPERATOR: takes a list of numbers and puts them into an array

// let numbers = [1, 2, 3, 4, 5]

// function sumUp(toAdd) {
// 	let result = 0
// 	for (let i = 0; i < toAdd.length; i++){
// 		result += toAdd[i]
// 	}
// 	return result
// }

// console.log(sumUp(numbers))

// But what if we only have a list of values to pass into the function, that aren't in array format? Or we don't know how many args to expect? Use the Rest operator. It converts a list of numbers into an array of numbers when used in the arg list.

// function sumUp(...toAdd) {
// 	// We can test this by console logging toAdd:
// 	console.log(toAdd)
// 	let result = 0
// 	for (let i = 0; i < toAdd.length; i++){
// 		result += toAdd[i]
// 	}
// 	return result
// }

// console.log(sumUp(100, 20, 10))

// // This also works with strings:
// console.log(sumUp(100, 20, "10"))


// SPREAD OPERATOR: takes an array and splits it into individual values

let numbers = [1, 2, 3, 4, 5]

console.log(Math.max(numbers)) // results in NaN because Math.max expects a list of numbers, not an array.

console.log(...numbers) // loops through the array and splits the numbers

console.log(Math.max(...numbers)) // returns a list of numbers when used in the function call
