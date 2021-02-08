'use strict'

/**	
* Changes the order of the elements in the array to the opposite.
* If a number is passed to the function as the second argument - then 
* all the elements of the array are rearranged except for the 
* first few (the number depends on the number). If the number is 
* negative, then the elements at the end of the array remain in place.
*
*
* @param {Array.<*>} array An array of elements
* @param {number} num A number of elements to skip. If the number is 
* negative, then the elements at the end of the array remain in place
* @throws {TypeError}
* @returns {Array.<*>} inversed array
*
* @author Suvorov Nikita <suvnik.2020@gmail.com>
*
* @example <caption>Only an array is passed to the function</caption>
* // returns [ 5, 4, 3, 2, 1 ]
* inverse([1, 2, 3, 4, 5]);
*
* @example <caption>The number of skipped elements is positive</caption>
* // returns [ 1, 2, 5, 4, 3 ]
* inverse([1, 2, 3, 4, 5], 2);
*
* @example <caption>The number of skipped elements is negative</caption>
* // returns [ 3, 2, 1, 4, 5 ]
* inverse([1, 2, 3, 4, 5], -2);
*/

const inverse = (array, num = 0) => {
	if (!Array.isArray(array) || !Number.isInteger(num)) {	
		throw new TypeError('Incorrect input data');
	}

	const slice1 = array.slice(0, num); 
	const slice2 = array.slice(num);

	return (num >= 0) ? [...slice1, ...slice2.reverse()] : [...slice1.reverse(), ...slice2];
}

