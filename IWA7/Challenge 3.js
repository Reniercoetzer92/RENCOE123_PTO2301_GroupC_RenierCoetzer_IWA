const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

//you can use "" double quotes
//you can use '' single

// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \t	tab
// \r	carriage return
// \b	backspace
// \f	form feed

const owed = Math.abs(parseFloat(leoBalance)) + Math.abs(parseFloat(sarahBalance)); //With applying "Math.abs()" method : take away the "-"
                                                                                    //"ParseFloat" change a string to a number

const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${Math.abs(parseFloat(leoBalance)).toFixed(2)})`; //add instipulation ${word}
                                                                                                        //"trim()" removes the leading and trailing white space and line terminator characters from a string

const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${Math.abs(parseFloat(sarahBalance)).toFixed(2)})`; //add instipulation ${word}
                                                                                                                //"trim()" removes the leading and trailing white space and line terminator characters from a string

const total = `  Total amount owed: R ${owed.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$& ")}`; //add instipulation ${word} 
                                                                                                //add expression of new value "owed"

const result = `\n${leo}\n${sarah}\n\n${divider}\n${total}\n${divider}`; // Change the Format
                                                                    // add instipulation ${word}
                                                                    // \n   newline
console.log(result);