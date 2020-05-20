/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
*/
// comment

/*
* Multi line comment


// Variable mutation
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);
// type cohersion changed the number to string
// unique to JS as does it for you.

var job, isMarried; // multiple variables one line
job = 'teacher';
isMarried = false;

console.log(firstName + ' ' + age + ' year old ' + job + '. is married? ' + isMarried);
// made the boolean into string false

// Variable mutation - change value
age = 'twenty eight';
job = 'driver';

var lastName = prompt('What is his last name?');
/*

/*
/ Basic operators
*/
/*
var year, yearJohn, yearMark;
var ageJohn = 28;
var ageMark = 33;
now = 2018;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn, yearMark);

// logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder)
console.log(typeof ageJohn)

// Operator precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge =  now - yearJohn >= fullAge;
//console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

var x, y;
x = (3 + 5) * 4 - 6; // 26

// more operators
x = x * 2;
x *= 2;

x += 1;
x++; */

// IF/ELSE Statements
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :) ')
}

var isMarried = false;

if (isMarried) { //only needs true or false
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :) ')
8/}
*/

/*
// Boolean Logic
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

// The ternary operator and switch statements

// Ternary operator
//if else all in one line

/*
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.')
    : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer': 'juice';
console.log(drink);

// Switch statement
// not big fan of author
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else.');
}

var firstName = 'John';
var age = 20;

// more usual case of using switch
switch (true) {
    case age <13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/* -----------------------------------------------------
TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined');
}

// ==  type do not have to match


if (height == '23') {
    console.log('The == operator does type coercion!')
} */

// code challenge
/*
var johnAvg = (89 + 120 + 103) / 3;
var mikeAvg = (116 + 94 + 123) / 3;
var maryAvg = (97 + 134 + 105) / 3;

if (johnAvg > mikeAvg && johnAvg > maryAvg) {
    console.log('John is the winner, with an average score of : ' + johnAvg);
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
    console.log('Mike is the winner, with an average score of : ' + mikeAvg)
} else if (maryAvg > mikeAvg && maryAvg > johnAvg) {
    console.log('Mary is the winner, with an average score of : ' + maryAvg);
} else {
    console.log('It was a draw, with an average score of : ' + johnAvg);
}
*/

// Functions
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);


console.log(ageJohn, ageMike, ageJane)

function yearsUntilRetirement(Year, firstName) {
    var age = calculateAge(Year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years')
    } else {
        console.log(firstName + ' is already retired.')
    }
}

yearsUntilRetirement(1990, 'John');
// Function statements and expressions

// writing functions in different way

// function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a can in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
            default:
                return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
*/


// expressions always results in value then = expression
// statement but do not produce results if statements etc unless given values then expression

// ARRAYS
/*
// initialise new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array('1990', '1969', '1949');

console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary'; // adds in as new last element
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); // add to end
john.unshift('Mr'); // adds to first value and pushes others indexes
john.pop(); // removes last element
john.shift(); // removes the first element
john.indexOf(1990) // which position it appears in array - if not returns -1

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

 */

// coding challenge
/*
var tip = function(bill) {
    switch(true) {
        case bill < 50:
            return bill * 0.2;
        case bill >= 50 && bill <= 200:
            return bill * 0.15;
        default:
            return bill * 0.10;
    }
}

var bills = [124, 48, 268]

var allTips = [tip(bills[0]) ,
    tip(bills[1]),
    tip(bills[2])];
var billAndTips = [ allTips[0] + bills[0],
    allTips[1] + bills[1],
    allTips[2] + bills[2] ];
console.log(allTips, billAndTips);
*/

// Objects and properties

// single most important feature in JS
// these are dictionaries - get things by name not index - no order

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}

console.log(john.firstName);
console.log(john['lastName']);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

// Objects and modes

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age =  2018 - this.birthYear;
    }
};
john.calcAge();
console.log(john); */



























