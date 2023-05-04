const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

// && and (check if both conditions are true)
// || or (Check if at Least 1 condition is true)
// ! not (reverses boolean value)

const taxAsDecimal = parseFloat(tax) / 100; //added parseFloat to convert the string to a number and divided by 100 to convert from percentage to decimal.
const startingAfterTax = salary * (1 - taxAsDecimal);
const balance = startingAfterTax - transport - food - rent; 

if (hourOfDay != null && minuteOfDay != null && hourOfDay === 0 && minuteOfDay === 0) { //changed comparisons to strict equality and null check can be remove its not neccesary.
    console.log("R",balance.toFixed(2));
  }

