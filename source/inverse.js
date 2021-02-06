'use strict'

/**	
* Changes the order of the elements in the massic to the opposite.
* If a number is passed to the function as the second argument - then 
* all the elements of the array are rearranged except for the 
* first few (the number depends on the number). If the number is 
* negative, then the elements at the end of the array remain in place.
*
*
* @param {Array} array An array of elements
* @param {Number} num A number of elements to skip. If the number is 
* negative, then the elements at the end of the array remain in place.
* @returns {array} inversed array
*
* @author Suvorov Nikita <suvnik.2020@gmail.com>
*
* @example <caption>Only an array is passed to the function</caption>
* // returns [ 5, 4, 3, 2, 1 ]
* minmax([1, 2, 3, 4, 5]);
*
* @example <caption>The number of skipped elements is positive</caption>
* // returns [ 1, 2, 5, 4, 3 ]
* minmax([1, 2, 3, 4, 5], 2);
*
* @example <caption>The number of skipped elements is negative</caption>
* // returns [ 3, 2, 1, 4, 5 ]
* minmax([1, 2, 3, 4, 5], -2);
*/

const inverse = (array, num = 0) => {
	if (!Array.isArray(array) || !Number.isInteger(num))
		throw new TypeError('Incorrect input data');

	let slc1 = array.slice(0, num), 
		slc2 = array.slice(num);

	return (num >= 0) ? [...slc1, ...slc2.reverse()] : [...slc1.reverse(), ...slc2];
}

