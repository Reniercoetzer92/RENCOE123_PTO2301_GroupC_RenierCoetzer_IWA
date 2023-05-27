let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

let isLogged = false                                                               //New flag variable

const logCalc = () => {                                                            // "=" on the wong side 
    const isString = typeof calculated === 'numerical-string';                     // add stricked "==="
    const calculatedAsNumber = isString ?  calculated: parseInt(calculated);        //Convert string to number "parseInt"
    calculated = calculatedAsNumber + 1
};

const calcUser = () => {                                                // "=" on the wong side 
   logCalc()                                                            //Add bracket to enable function "logCalc"                   
  if (calculated > 2) {user = 'John'};
  if (calculated > 2 && isLogged === false)                             // Check if it hasn't been logged yet
    {state = 'requesting';
    isLogged = true;                                                    // Set the flag to true after logging
    console.log(`User: ${user} (${calculated})`)                        // Log the user information
  }
  if (calculated >= 3) state = 'idle';                                 //add "=" sign
};

const checkUser = () => {                                              // "=" on the wong side 
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
  }
};

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()