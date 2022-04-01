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

------------------------------------------------
BASIC BOOLEANLOGIC: THE AND, OR & NOT OPERATORS
------------------------------------------------

A: Sarah has a driver's license
B: Sarah has good vision

Boolean variables that can be either TRUE or FALSE 

AND : A & B = " Sarah has a driver's license AND Sarah has good vision "
(TRUE when all are true . FALSE when even one is False)

OR : A OR B = " Sarah has a driver's license OR Sarah has good vision "
(TRUE when ONE is true . FALSE when all are False)

NOT : Inverts TRUE / FALSE value 
-------------------------------------------------------------------------

const hasDriverLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("someone else should drive...");
}

const isTired = true; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && isTired) {
  console.log("sarah is able to drive !");
} else {
  console.log("someone else should drive...");
}

---------------------------------------------------------------------------------------
Coding Challenge #3
-------------------
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
----------
Test Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Test Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Test Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
--------------------------------------------------------------------------------------

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoales = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoales);

if (scoreDolphins > scoreKoales && scoreDolphins >= 100) {
  console.log("Dolphines win the trophy");
} else if (scoreKoales > scoreDolphins && scoreKoales >= 100) {
  console.log("koales win the Dolphines");
} else if (
  scoreKoales === scoreDolphins &&
  scoreDolphins >= 100 &&
  scoreKoales >= 100
) {
  console.log("Both wins the trophy");
} else {
  console.log("No one wins the trophy");
}

------------------------------------------------------------------------------------------

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
    case "Tuesday":
      console.log("Prepare theory videos");
      break;
      case "Wednesday":
        case "Thursaday":
          console.log("weite code example");
          break;
          case "Friday":
            console.log("Record Videos");
            break;
            case "Saturday":
              case "Sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
  }
  
  -----------------------------------------------------------------------------------------

  if (day === "Monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
  } else if (day === "Tuesday") {
    console.log("Prepare theory videos");
  } else if (day === "Wednesday" || "Thursday") {
    console.log("weite code example");
  } else if (day === "Friday") {
    console.log("Record Videos");
  } else if (day === "Saturday" || "Sunday") {
    console.log("Enjoy the weekend :D");
  } else {
    console.log("Not a valid day!");
  }
  
  -----------------------------------------------------------------------------------------
  The Conditional (Ternary) Operator
  -----------------------------------
  */

const age = 23;
if (age >= 18) {
  console.log("I like to drink wine");
} else {
  console.log("I like to drink water");
}

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
