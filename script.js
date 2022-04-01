/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Kavya");
console.log(23);

let firstName = "Kavya";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let kavya_gopi = "KG";
let $function = 27;

let person = "Kavya";
let PI = 3.1415;

let muGirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "Teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Kavya");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

onsole.log(tyoeof null);

let age = 30;
age = 31;
console.log(age);

// const cannot be changed .
const birthYear = 2002;
// birthYear = 1999;
// const job;

var job = "Programmer";
job = "Teacher";

lastName = "Gopi";
console.log(lastName);


const now = 2030;
const ageKavya = now - 2002;
const ageMadhu = now - 2007;
console.log(ageKavya, ageMadhu);

console.log(ageKavya * 2, ageKavya / 2, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Kavya";
const lastName = "Gopi";
console.log(firstName + " " + lastName);

-----------------------
Assignment Operator 
------------------------

let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

-----------------------
Comparison Operator
-----------------------

console.log(ageKavya < ageMadhu); // >, <, >=. <=
console.log(ageMadhu >= 18);

const isFullAge = ageMadhu >= 18;

console.log(now - 2002 > now - 2007);


const now = 2030;
const ageKavya = now - 2002;
const ageMadhu = now - 2007;

console.log(now - 2002 > now - 2007);

console.log(25 - 10 - 5);

let x, y;
x, y = y = 25 = 10 = 5 ; // x = y = 10, x =
console.log(x,y);

const averageAge = ageKavya + ageMadhu / 2
console.log(ageKavya, ageMadhu, averageAge)


----------------------------------------------------------------------------

Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement bothversions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
Test Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Test Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀

----------------------------

const massMark = 78;
const heightMArk = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95;
const heightMArk = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMArk ** 2;
const BMIJohn = (massJohn / heightJohn) * heightJohn;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


const firstNAme = "Kavya";
const job = "Programmer";
const birthYear = 2002;
const year = 2022;

const Kavya =
"I'm " + firstNAme + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(Kavya);

const kavyaNew = `I'm ${firstNAme}, a ${year - birthYear} year old ${job}!`;
console.log(kavyaNew);

console.log(`Just a regular string. . . `);

console.log(`string with \n\
multiple \n\
lines`);

console.log(`string
multiple
lines`);

-------------------
if else statements
-------------------

const age = 15;

if (age >= 18) {
  console.log(`Kaviya can start driving license`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Kavya is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2002;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

---------------------
Coding Challenge #2
---------------------

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
-----------
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉
GOOD LUCK 😀
----------------------------------------------------------------------------------------------
const massMark = 78;
const heightMArk = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMArk = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMArk ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}) !`);
} else {
  console.log(`john's BMI (${BMIMark}) is higher than Mark's (${BMIJohn}) !`);
}

--------------------
Type Conversion
--------------------

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

-------------------
Type coerction
-------------------

console.log("I am " + 23 + " year old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");

let n = "2" + 5;
n = n - 1;
console.log(n);

-------------------------
Truthyl and Falsy Values 
-------------------------

- 5 falsy values: 0, '' , undefinrd, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(Kavya));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;) ");
} else {
  console.log("you should get a job !");
}

---------------------------------------------------------------------

let height = 123;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

*/

const age = "18";
if (age === 18) console.log("you became an adult :D (strict)");

if (age == 18) console.log("you Just became an adult :D(loose)");

const favorite = Number(prompt("what's your favourite number ?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number ");
} else if (favorite === 9) {
  console.log("9 is also a cool number ");
} else {
  console.log("number is not 23 or 7 0r 9");
}

if (favorite !== 23) console.log("why not 23?");
