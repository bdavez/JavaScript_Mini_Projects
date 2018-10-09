/* Start of code, showing different ways to print a message */

alert('Hello World!'); //  Alert popup message

console.log('Secret message'); // console log message

document.write("Hiya"); // write to webpage

// Varaibles 
var x = 6; 
var y = 9;
console.log(x);

// Artithmetic 
var arithAnswer = x * y;
console.log("Multiplication answer is", arithAnswer);

//  Strings 
var firstName = 'Jane';
var lastName = ' Doe';
var flName = firstName + lastName;
// name += ' Doe'; - Can add both first and last name without adding a new variable
console.log("Name is",flName);

// Functions
function roflcopter() {
    console.log('Some things go up and some things go down');
}

roflcopter();

// New Function 

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log (fullName('bob', 'robertsons'));

fullName();