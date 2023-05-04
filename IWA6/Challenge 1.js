const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

// && and (check if both conditions are true)
// || or (Check if at Least 1 condition is true)
// ! not (reverses boolean value)

const primaryValid = typeof number === primaryPhone 
const secondaryValid = typeof parseInt(secondaryPhone) === 'number' 

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)