const firstName = 'John';                                                //Declare fisrtname, age and hobby. with const.
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {                                        //add parameter insider brackets
  console.log(parameter);                                               //Add .log after console
  console.log(parameter); 
};

const iLoveCoding = () => {                                            //Hobby was already declared, use iLoveCoding
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);          //Correct Firstname
}

iLoveCoding();

/*firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = () => {
  console(parameter)
  console(parameter)
}

function hobby () {
  logTwice(`Hello, ${name} (${age}). I love ${hobby}!`)
}

hobby()*/