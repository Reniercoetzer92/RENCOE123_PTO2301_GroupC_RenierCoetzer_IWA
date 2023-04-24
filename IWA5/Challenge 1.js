FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

let customers = 1 // define Customers, location, currency
const location = "RSA"
let currency = "$"

shipping = null

const RSA = "RSA"
const NAM = "NAM"

if (location === RSA) { // if status format incorrect
	shipping = 400 
	currency = 'R' 
} else if (location === NAM){ // research something ive struggled with.
	shipping = 600 
}
else shipping = 800

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED

let price = shoes + toys + shirts + batteries + pens

if (price > 1000 && "60") { // not sure what they wanted here
	if (location === NAM && customers < 2) {
			if (location === RSA)
		    shipping = null || calcShipping
		}
	}

if (shipping === 400 && customers !== 1) { 
	console.log(FREE_WARNING) 
}

location === 'NK' ? console.log(BANNED_WARNING) : console.log('price', currency, price + shipping)