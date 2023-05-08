const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {                                                                            //"=" needs to start a definition. Default format
	name: leoName,                                                                       // ":" should be used in the statement not "=".
	balance: leoBalance,                                                                 // "," should be after line.
	accessId: '47afb389-8014-4d0b-aff3-e40203d2107f',                                    // Write accessId as a camelcase // put id number as a string.
	age: 24,
	address: {
		'number': leoNumber,
		'street': leoStreet,
		'postal-code': leoPostal,                                                         //put all as a string.
	}
}

const sarah = {
	name: sarahName.trim() + ' ' + sarahSurname,                                         //"h" in Sarah was missing // remove blank space after Sarah with .trim().
	balance: sarahBalance,
	accessId: "6b279ae5-5657-4240-80e9-23f6b635f7a8",                                     
	age: 62,                                                                              // Change the format off Sarah's information.
	address: {
        'number': sarahNumber,
		'street': sarahStreet,
		'postal-code': sarahPostal,
	}
}                                                                                         //Curly Bracket was missing.

console.log(leo, leo.address['postal-code'])                                              //Change postal code to string //remove brackets and put in .address together with leo.
console.log(sarah, sarah.address['postal-code'])                                          // leo.address  objects syntax