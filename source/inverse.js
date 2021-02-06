'use strict'


const inverse = (array, num = 0) => {
	if (!Array.isArray(array) || !Number.isInteger(num))
		throw new TypeError('Incorrect input data');

	let slc1 = array.slice(0, num), 
		slc2 = array.slice(num);

	return (num >= 0) ? [...slc1, ...slc2.reverse()] : [...slc1.reverse(), ...slc2];
}

