const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport: 10.2,                                                                        //PROPERTIES
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',                                                                              //PROPERTIES
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,                                                                  //PROPERTIES
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseFloat(tax[913]) / 100;                                            //parsefloat tax value 913, you need the % in decimal
const startingAfterTax = salary * (1 - taxAsDecimal);                                       //put 1 - Decimal value in brackets it should first calculate 1 - the taxdecimal then times salary
const type = size + '-' + lodging;                                                          //Swop around Wording // Put a -  in the middle of words to form the word 'Large-Apartment'.
const balance = startingAfterTax - expenses.transport - expenses.food - rent[type];         //Add Sallary, Expenses in brackets should be a dot to access the statement of expenses //Remove expenses for rent 
console.log(type, balance.toFixed(2));                                                      //add tofixes for 2 decimal for answer.