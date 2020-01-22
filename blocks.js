// #White Level - addition(3, 2) ➞ 5

// 1. Create a function that takes two numbers as arguments and return their sum.

function add(a, b) {
  return a + b;
}

function add(a, b) {
  let sum = a + b; 
  return sum;
}

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Sorry but you didn't pass two numbers.";
  }
    return a + b; 
}


// #White Level - lessThanOrEqualToZero(5) ➞ false

// 2. Create a function that takes a number as its only argument and returns true if it's less than or equal 
//    to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
	if (num <= 0)
	  return true;
	else
		return false;
}

// es6
const lessThanOrEqualToZero = num => num <= 0;

// ternary
function lessThanOrEqualToZero(num) {
	return num <= 0 ? true : false;
}

// #White Level - triArea(10, 10) ➞ 50

// 3.  Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
	let area = (base * height ) / 2; 
  return area;
}

function triArea(base, height) {
	var a = base * height ;
	var b = a / 2 ;
	return b;
}

function triArea(base, height) {
	return base * height / 2;
}

const triArea = (base, height) => (base * height) / 2;

// #Whtie Level -  nextEdge(9, 2) ➞ 10


// 4. Create a function that finds the maximum range of a triangles third edge.

function nextEdge(side1, side2) {
	return (side1 + side2) - 1
}

function nextEdge(side1, side2) {
	if (side1 > 0 && side2 > 0) {
		return (side1 + side2) - 1;
	} else {
		return;
	}
}

const nextEdge = (side1, side2) => side1 + side2 - 1;

// #Whtie Level -  convert(2) ➞ 120

// 5. Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
	seconds = minutes * 60; 
	return seconds;
}

function convert(minutes) {
	return  minutes * 60;
}

const convert = (minutes) => minutes * 60

// #Whtie Level -  addition(9) ➞ 10

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
	return num + 1;
}

function addition(num) {
	return ++num;
}

const addition = (num) => num++

// #Whtie Level -  animals(2, 3, 5) ➞ 36

/*

6. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

*/

function animals(chickens, cows, pigs) {
	chickens *= 2;
	cows *= 4;
	pigs *= 4;
	return chickens + cows + pigs;
}

function animals(chickens, cows, pigs) {
	return chickens*2+(cows+pigs)*4;
}

const animals = (chickens, cows, pigs) => chickens * 2 + cows * 4 + pigs * 4;

// #Whtie Level -  divisibleByFive(5) ➞ true

// 7. Create a function that returns true if an integer is divisible by 5, and false otherwise.

function divisibleByFive(n) {
	return n % 5 === 0; 
}

function divisibleByFive(n) {
	if (n % 5 === 0) {
		return true;
	}
	else {
		return false;
	}
};

divisibleByFive = n => !(n % 5)


// #White Level - profitableGamble(0.2, 50, 9) ➞ true

/*

8. Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

*/

function profitableGamble(prob, prize, pay) {
	let profit = prob * prize - pay;
		if (profit > 0) {
			return true;
		} else {
			return false;
		}
}

function profitableGamble(prob, prize, pay) {
	return (prob * prize - pay) > 0
}

const profitableGamble = (prob, prize, pay) =>
	prize * prob > pay;
	
function profitableGamble(prob, prize, pay) {
	return prob * prize - pay > 0 ? true : false
}

// #Yellow Level - function(1, 0, 10) ➞ 205 input (5, 2, -6) ➞ "invalid"

/* 

9. Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, 
where users get points for completing challenges. An Easy challenge is worth five points, a Medium challenge 
is worth ten points, and a Hard challenge is worth twenty points.

Create a function that takes in the number of each challenge level a user has played and calculates the 
user's total number of points. Keep in mind that a user cannot complete negative challenges, so the 
function should return the string "invalid" if any of the passed parameters is negative.

Create a function that takes in the number of each challenge level a user has played and calculates 
the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the 
function should return the string "invalid" if any of the passed parameters is negative.

*/ 

function scoreCalculator(easy, med, hard) {
	if (easy < 0 || med < 0 || hard < 0) {
	 return "invalid";
  } else {
	 return easy * 5 + med * 10 + hard * 20;
	}
}

function scoreCalculator(easy, med, hard) {
  if (easy >= 0 && med >= 0 && hard >= 0){
		return (easy * 5) + (med * 10) + (hard * 20);
	} else {
		return "invalid";
	}	
}

const scoreCalculator = (...points) => 
	points.some(num => num < 0) ? 
		'invalid' : (points[0]*5) + (points[1]*10) + (points[2]*20)

const scoreCalculator = (e, m, h) => {
	if (e < 0 || m < 0 || h < 0) return 'invalid'
		return e * 5 + m * 10 + h * 20
	}

function scoreCalculator(easy, med, hard) {
	return (easy<0||med<0||hard<0) ? "invalid" : 5*easy + 10*med + 20*hard;
}

// #White Level - howManySeconds(10) ➞ 36000

// 10. Write a function that converts hours into seconds.

function howManySeconds(hours) {
	return hours * 3600;
}

const howManySeconds = hours => Number.isInteger(hours) ? hours*3600 : "error";

let howManySeconds = h => h * 3600;

// #White Level - concatName("First", "Last") ➞ "Last, First"

// 11. Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(firstName, lastName) {
	return lastName + ', ' + firstName
}

function concatName(firstName, lastName) {
	return `${lastName}, ${firstName}`;
}

const concatName = (first, last) => `${last}, ${first}`;

// #White Level - A string containing only whitespaces " " does not count as empty.

// 12. Create a function that returns true if a string is empty and false otherwise.

function isEmpty(s) {
	return (!s || 0 === s.length);
}

function isEmpty(s) {
	return s.length == 0;
}

function isEmpty(s) {
	return s === '';
}

function isEmpty(s) {
	if (s === '') {
		return true
	} else {
		return false
	}
}

function isEmpty(s) {
	return s === '' ? true : false;
}

// #White - squared(9) ➞ 81

// 13. Fix the code in the code tab to pass this challenge (only syntax errors). 
// Look at the examples below to get an idea of what the function should do.
// The variables are named just fine, you just have to debug the code usage of variables.

function squared(b) {
	return b*b;
}

// #White - length("apple") ➞ 5

// 14. Write a function that returns the length of a string. Make your function recursive.

function length(str) {
  while(str.length >= 0) {
	  return str.length
  }
}

const length = str => str == '' ? 0 : length(str.substring(1)) + 1;

const length = str => !str ? 0 : 1 + length(str.slice(1));


// Recursion Example - StackOverflow

var counter = 10;
while(counter > 0) {
    console.log(counter--);
}

var countdown = function(value) {
	if (value > 0) {
			console.log(value);
			return countdown(value - 1);
	} else {
			return value;
	}
};
countdown(10);

// #White - getFirstValue([80, 5, 100]) ➞ 80

// 15. Create a function that takes an array and returns the first element.

function getFirstValue(arr) {
	let first = arr => arr[0];
  return(first(arr));
}

function getFirstValue(arr) {
	return arr[0];
}

const getFirstValue = arr => arr[0];

// #White - comp("ABC", "DE") ➞ false

// 16. Create a function that takes two strings as arguments and return either true or false depending 
// on whether the total number of characters in the first string is equal to the total number of characters 
// in the second string.

function comp(str1, str2) {
	if (str1.length === str2.length) {
		return true;
	} else {
		return false; 
	}
}

function comp(str1, str2) {
	return str1.length === str2.length;
}

const comp = (str1, str2) => str1.length === str2.length;

//  #White - check([1, 2, 3, 4, 5], 3) ➞ true

// 17. Write a function to check if an array contains a particular number.

function check(arr, el) {
	return arr.includes(el); 
}

function check(arr, el) {
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === el){
			return true;
		}
	}
	return false;
}

function check(arr, el) {
	if (arr.includes(el)) {
		return true
	} else {
		return false
	}
}

const check = (arr, el) => Array.from(arr).includes(el) ? true : false; 

const check = (arr, el) => arr.includes(el)

function check(arr, el) {
	return arr.indexOf(el) > -1;
}

// #White - helloName("Gerald") ➞ "Hello Gerald!"

// 18. Create a function that takes a name and returns a greeting. Don't use a normal function but use an "arrow function".

const helloName = name => `Hello ${name}!`

const helloName = name => 'Hello ' + name+'!'


// 19. Create a function that accepts an array and returns the last item in the array.

// #White - getLastItem(["cat", "dog", "duck"]) ➞ "duck"

function getLastItem(arr) {
	return arr.pop()
}

function getLastItem(arr) {
	return (arr.slice(-1)[0]);
}

function getLastItem(arr) {
  return arr[arr.length - 1]
}

const getLastItem = arr => arr[arr.length - 1];

function getLastItem(arr) {
  if (arr.length > 0)
  		return(arr[arr.length-1]);
  else return(null);
}

// codeblocq example

var array = [1,2,3,4,5,6];
console.log(array.slice(-1)); // [6]
console.log(array.slice(-2)); // [5,6]
console.log(array.slice(-3)); // [4,5,6]

// 20. Create a function that finds the index of a given item.

// #White - search([9, 8, 3], 3) ➞ 2

function search(arr, item) {
	return arr.indexOf(item); 
}

function search(arr, item) {
	for(var i = 0;i < arr.length; i++) {
		if (arr[i] == item) {
		return i;
		}
	}
	return -1;
}

function search(arr, item) {
	return arr.findIndex(i => i === item)
}

// 21. Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

// #White - isEvenOrOdd(3) ➞ "odd"

function isEvenOrOdd(num) {
  return num % 2 ? 'odd' : 'even';
}

function isEvenOrOdd(num) {
	if ( num % 2 === 0) { 
		return 'even'; 
	} else {
		return 'odd'; 
	}
}

let isEvenOrOdd = n => n % 2 ? 'odd' : 'even'; 

let isEvenOrOdd = n => n & 1 ? 'odd' : 'even';

// 22. Create a function that finds the index of a given item in a sorted array using recusion. Input is (arr, item).

// #Yellow - search([2, 4, 6, 8, 10], 8) ➞ 3

function search(arr, item) {
	if (arr.toString() === arr.slice(0).sort((a,b) => a - b).toString()){
    return arr.indexOf(item); 
	}
	return -1; 
}

function search(arr, item) {
	return arr.indexOf(item); 
}

const search = (arr, item) => arr.indexOf(item);

const search = (arr,item) => {
	for (let i=0; i<arr.length; i++){
		if(arr[i] === item){
			return i;
		}
	}
	return -1;
};


// #Yellow - volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

// 23. Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

function volumeOfBox(sizes) {
	return sizes.height * sizes.width * sizes.length;
}

const volumeOfBox = (sizes) => sizes.width * sizes.length * sizes.height;

// 24. Create a function that returns true if a string contains any spaces.

// #White = hasSpaces("hello, world") ➞ true

function hasSpaces(str) {
	if (str.includes(' ')) {
		return true
	} else {
		return false
  }
}

function hasSpaces(str) {
	return str.includes(' ') ? true : false
}

function hasSpaces(str) {
	return str.includes(' ')
}

const hasSpaces = str => str.includes(' ');

function hasSpaces(str) {
	return str.indexOf(' ') != -1;
}

function hasSpaces(str) {
	return (/\s/).test(str);
}

// example 

var sentence = 'The quick brown fox jumps over the lazy dog.';

var word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);

// 25. Write a function to reverse an array.

// #White - reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// expected output: "The word "fox" is in the sentence"

function reverse(arr) {
	return arr.reverse()
}

function reverse(arr) {
	let result = [];
	for (let i = arr.length -1; i > -1; i--) {
		result.push(arr[i]);
	}
	
	console.log(...result);
	return result;
}

function reverse(arr) {
	let word = [];
	for(letter of arr){
		word.unshift(letter)
	}
	return word
}

const reverse = arr => arr.reverse();

// 26. Create a function that takes a base number and an exponent number and returns the calculation.

// #White - calculateExponent(5, 5) ➞ 3125

function calculateExponent(num, exp) {
	return Math.pow(num, exp) 
}

function calculateExponent(num, exp) {
	return exp > 1 ? num * calculateExponent(num, exp - 1) :  num;
}

const calculateExponent = (num, exp) => {
	let newexp = 1;
	for (let i = 0; i < exp; i++) {
		newexp = newexp * num
	}
	return newexp;
}

const calculateExponent = (num, exp) => Math.pow(num, exp);

// 27. Create a function to concatenate two integer arrays.

// #White - concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

function concat(arr1, arr2) {
	return arr1.concat(arr2); 
}

function concat(arr1, arr2) {
	for(let i=0;i<= arr2.length-1;i++)
		{
			arr1.push(arr2[i]);
		}
	return arr1;
}

function concat(arr1, arr2) {
	return [...arr1,...arr2]
	}

function concat(arr1, arr2) {
	for (item of arr2){
		arr1.push(item)
	}	
	return arr1
}

	const concat = (arr1, arr2) => arr1.concat(arr2);

	// 28. Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
	
	// #White - divisible(1000) ➞ true

function divisible(num) {
	if (num % 100 === 0) {
		return true; 
	} else {
		return false; 
	}
}

function divisible(num) {
	return !(num % 100)
}

function divisible(num) {
	return num % 100 === 0;
}

const divisible = num => num % 100 === 0;


// 29. Write a function that takes two integers (hours, minutes) and converts them into seconds.

// #White - convert(1, 3) ➞ 3780

function convert(hours, minutes) {
	return hours * 3600 + minutes * 60; 
}

function convert(hours, minutes) {
	var hour = hours * 3600;
	var min = minutes * 60;
	return hour + min;	
}

const convert = (hours, minutes) => hours * 3600 + minutes * 60

// 30. Create a function that returns the total number of parameters passed in.

// #White - numberArgs(10, 20, 30, 40, 50) ➞ 5

function numberArgs() {
	return arguments.length;
}

function numberArgs(whatever) {
	return arguments.length;
}

function numberArgs(... a) {
	return (a||[]).length;
}

const numberArgs = (...args) => args.length;

// 31. Create a function that returns the ASCII value of the passed in character.

// #White - ctoa("m") ➞ 109

function ctoa(c) {
	return c.codePointAt();
}

const ctoa = char => char.charCodeAt(0);

// 32. Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// #White - 
// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

function cityFacts(city) {
	let name = city.name; 
	let population = city.population;
	let continent = city.continent;
	return name + ' has a population of ' + population + ' and is situated in ' + continent;
}

function cityFacts(city) {
	return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}

const cityFacts = (city) => {
	return city.name + " has a population of " + city.population + " and is situated in " + city.continent;
}

function cityFacts(city) {
	let {name, population ,continent}=city;
	return `${name} has a population of ${population} and is situated in ${continent}`
}

// 33. Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

// #Yellow / Chaining - formatDate("11/12/2019") ➞ "20191211"

function formatDate(date) {
	return date.split('/').reverse().join('')
	}

function formatDate(date) {
	const [month, day, year] = date.split("/")
	return `${year}${day}${month}`
}

let formatDate = date => date.split('/').reverse().join('');

function formatDate(date) {
	let newDate = [];
	date = date.split('/');
	newDate.push(date[2], date[1], date[0]);
	return newDate.join('');
}

// 34. Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// 1. Total number of slices. 2. Number of recipients. 3. How many slices each person gets.

// #White - equalSlices(11, 5, 2) ➞ true
// 5 people x 2 slices each = 10 slices < 11 slices

function equalSlices(total, people, each) {
	return total >= people * each; 
}

function equalSlices(total, people, each) {
	if(people * each <= total) {
		return true;
	} else {
		return false;
	}
}

// 35. Create a function that returns the number of argument it was called with.

// #White - numArgs("foo", "bar") ➞ 2

function numArgs() {
	return arguments.length; 
}

function numArgs(...args) {
	return args.length;
}

const numArgs = (...args) => args.length; 

numArgs = (...a) => a.length || 0


// 36. Write a function that validates whether two strings are identical. Make it case insensitive.

// #White - match("hello", "hELLo") ➞ true

function match(s1, s2) {
	return s1.toLowerCase() == s2.toLowerCase()
}

function match(s1, s2) {
	if ( s1.toUpperCase() == s2.toUpperCase()) {
		return true;
	} else {
		return false;
	}
}

const match = (s1, s2) =>  s1.toLowerCase() === s2.toLowerCase();

// 37. There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// #White - 

function remainder(x, y) {
	return x % y
}

const remainder = (x, y) => x % y

// 38. Create a function that takes an array and a string as arguments and return the index of the string.

// #Yellow find_index(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

function find_index(arr, str) {
	return arr.indexOf(str); 
}

function find_index(arr, str) {
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == str){
			return i
		}
	}
}

function find_index(arr, str) {
	return arr.indexOf(str)
}

// 39. Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

// #White - stackBoxes(2) ➞ 4

function stackBoxes(n) {
	return Math.pow(n, 2)
}

function stackBoxes(n) {
	return n*n
}

function stackBoxes(n) {
	var stack = 0;
	for(let i = 0; i < n; i++){
		stack = stack + 2 * i + 1
	};
	return stack
}

// 40. toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.

// #White - toInt("532") ➞ 532

function toInt(str) {
	return parseInt(str)
}
function toStr(int) {
	return int.toString()
}

function toInt(str) {
	return Number(str)
}
function toStr(int) {
	return String(int)
}

const toInt = (str) => parseInt(str);
const toStr = (int) => int.toString();


// 41. Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

// #White - negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]

function negate(arr) {
	return arr.map(value => -value)
}

negate = arr => {
	let ret = [];
	for(let item of arr){
		ret.push(-item);
	}
	return ret;
}

function negate(arr) {
	for(let i = 0; i < arr.length; i++) {
		arr[i] = -arr[i];
	}
	return arr;
}

// 42. In this challenge, you must verify the equality of two different given parameters: a and b.

// White - checkEquality(1, true) ➞ false
// A number and a boolean: their type is different

function checkEquality(a, b) {
  return a === b ? true : false;
}

const checkEquality = (a, b) => a === b;

function checkEquality(a, b) {
  return a === b;
}

function checkEquality(a, b) {
  if (a == "undefined" || a == "null" || a == "NaN")
		return false

  if (b == "undefined" || b == "null" || b == "NaN")
		return false
	
	if ((typeof a == typeof b) && (a == b))
		return true
	else
		return false
}

// 43. Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

// #White - isInRange(4, { min: 0, max: 5 }) ➞ true

function isInRange(num, range) {
	if (num >= range.min && num <= range.max) {
		return true;
	} else {
		return false;
	}
}

function isInRange(num, range) {
	return num >= range.min && num <= range.max;
}

const isInRange = (num, range) => num >= range.min && num <= range.max;

function isInRange(num, range) {
	return (num <= range.max && num >= range.min) ? true : false
}

// 44. Create a function that checks if the argument is an integer or a string. Return int if it's an integer and str if it's a string.

// #White - intOrString(9843532) ➞ "int"

function intOrString(param) {
	if (Number.isInteger(param)) {
		return 'int'
	} else {
		return 'str'
	}
}

function intOrString(param) {
	if (typeof param === 'number' ){
		return 'int'
	} else {
		return 'str'
	}
}

function intOrString(param) {
	return typeof param === 'number' ? 'int' : 'str';
}

const intOrString = (param) => typeof param === "string" ? "str" : "int"

// 45. Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".

/*

If the number is a multiple of 3 the output should be "Fizz".
If the number given is 5 the output should be "Buzz".
If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.

*/

/*

Yellow - 

FizzBuzz(3) ➞ "Fizz"

FizzBuzz(5) ➞ "Buzz"

FizzBuzz(15) ➞ "FizzBuzz"

FizzBuzz(4) ➞ 4

*/

function FizzBuzz(num) {
	if ( num % 15 === 0 ) {
		return 'FizzBuzz'
	} else if ( num % 3 === 0 ) {
		return 'Fizz';
	} else if ( num % 5 === 0) {
		return 'Buzz';
	} else {
		return num.toString();
	}
}

function FizzBuzz(num) {
	if (num % 3 == 0 && num % 5 == 0) {
		return 'FizzBuzz';
	} else if (num % 3 == 0) {
		return 'Fizz';
	} else if (num % 5 == 0) {
		return 'Buzz';
	} else {
		return `${num}`;
	}
}

function FizzBuzz(num) {
	return num % 15 === 0 ? 'FizzBuzz' 
	     : num % 5 === 0 ? 'Buzz' 
	     : num % 3 === 0 ? 'Fizz' 
	     : String(num);
}

function FizzBuzz(num) {
	return (num%3?'':'Fizz')+(num%5?'':'Buzz')||`${num}`;
}

function FizzBuzz(num) {
	return ((num%3==0)&(num%5==0))?'FizzBuzz':((num%3==0)?'Fizz':((num%5==0)?'Buzz':String(num)))
}

// 46. Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// isPlural("changes") ➞ true

function isPlural(word) {
	if (word.endsWith('s')) {
		return true
	} else {
		return false
	}
}

function isPlural(word) {
	return word.endsWith("s");
}

function isPlural(word) {
	return word[word.length - 1] == 's';
}

function isPlural(word) {
	return (word.charAt(word.length - 1) === 's')
}

const isPlural = word => word.endsWith('s');

let isPlural = w => /s$/i.test(w)

// 47. Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.

// White - operation(15, 9) ➞ "added"

function operation(num1, num2) {
	if (num1 + num2 == 24) {
		return 'added'
	} else if (num1 - num2 == 24) {
		return 'subtracted'
	} else if (num1 * num2 == 24) {
		return 'multiplied'
	} else if (num1 / num2  == 24) {
		return 'divided'
	} else {
		return null
	}
}

const operation=(a,b)=>
	a+b==24?"added"
	:a-b==24?"subtracted"
	:a*b==24?"multiplied"
	:a/b==24?"divided"
	:null;

function operation(num1, num2) {
	return num1 / num2 === 24 ? 'divided' : num1 * num2 === 24 ? 'multiplied' : num1 - num2 === 24 ? 'subtracted' : num1 + num2 === 24 ? 'added' : null
}

// 48. Create a function that takes a string and returns the word count. The string will be a sentence.

// White - countWords("Just an example here move along") ➞ 6

function countWords(str) {
	return str.split(' ').length;
}

function countWords(str){
	var arr = str.split(" ");
	return arr.length
}

const countWords = str => str.split(' ').length;

const countWords = str => str.replace(/[^\w\s]/gi, '').split(' ').length;


/* 49. You are given 2 out of 3 of the angles in a triangle, in degrees.

Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

An acute angle is less than 90 degrees.
A right angle is exactly 90 degrees.
An obtuse angle is greater than 90 degrees (but less than 180 degrees).

For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

*/

// White - missingAngle(135, 11) ➞ "acute"

function missingAngle(angle1, angle2) {
	let x = (180 - (angle1 + angle2))
	if (x > 90) {
		return 'obtuse'
	} else if (x === 90) {
		return 'right'
	} else {
		return 'acute'
	}
}

function missingAngle(angle1, angle2) {
	return angle1 + angle2 < 90 ? 'obtuse'
		: angle1 + angle2 > 90 ? 'acute'
		: 'right';
}

function missingAngle(angle1, angle2) {
	return angle1 + angle2 === 90 ? 'right' : angle1 + angle2 < 90 ? 'obtuse' : 'acute';
}

// 50. Create functions for the Calculator class that can do the following :

// add two numbers
// subtract two numbers
// multiply two numbers
// divide two numbers

// Yellow - calculator.add(10, 5) ➞ 15

class Calculator {

	add(a,b) {
		return a + b;
	}
	subtract(a,b) {
		return a - b;
	}
	multiply(a,b) {
		return a * b;
	}
	divide(a,b) {
		return a / b;
	}
}

class Calculator {
	add = (a,b) => a + b;
	subtract = (a,b) =>  a - b;
	multiply = (a,b) => a * b;
	divide = (a,b) => a / b;
}

class Calculator {
	constructor(a,b) {
		this.a = a,
		this.b = b
	}

	add(a,b) {
		return a+b;
	}
	
	subtract(a,b) {
		return a-b;
	}
	
	multiply(a,b) {
		return a*b;
	}
	
	divide(a,b) {
		return a/b;
	}
}

// 51. Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

// Yellow - numberSyllables("beau-ti-ful") ➞ 3

function numberSyllables(word) {
	return word.split("-").length;
}

function numberSyllables(word) {
  let count = 1;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '-') {
      count += 1
    }
  }
  return count
}

function numberSyllables(word) {
	let regex = /-/g ;
	let syl = word.match(regex);
	return syl.length+1;
}

const numberSyllables = word => word.split('-').length

// 52. Create a function that takes an array of numbers and return the first and last elements as a new array.

// Yellow - firstLast(["edabit", 13, null, false, true]) ➞ ["edabit", true]

function firstLast(arr) {
	let newArray = [];
	let first = arr.shift()
	let last = arr.pop()
	
	newArray.push(first);
	newArray.push(last);
	
	return (newArray)
}

function firstLast(arr) {
	return [arr.shift(), arr.pop()]
}

function firstLast(arr) {
	const myArr = [];
	myArr.push(arr.shift());
	myArr.push(arr.pop());
	return myArr;
}

const firstLast = arr => [arr.shift(), arr.pop()];

function firstLast(arr) {
	let newArr = [];
	newArr.push(arr[0], arr[arr.length - 1]);
	return newArr;
}

function firstLast(arr) {
	return [arr[0], arr[arr.length-1]]
}

const firstLast = ([first, ...rest]) => [first, rest.pop()];

// 53. Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

// Yellow - Go(5) ➞ "-----"

function Go(num) {
	let counter = ''; 
	if (num >= 1 && num <= 60) {
		for (let i = 0; i < num; i++) {
			counter += '-'; 
		}
		return counter; 
	}
}

function Go(num) {
	let str = '';
	 for(let i = 0; i < num; i++){
	 str += '-';
	 }
	 return str;
 }

function Go(num) {
	return "-".repeat(num);
}

const Go = num => '-'.repeat(num);

function Go(num) {
	return Array(num).fill('-').join('');
}

function Go(num) {
	let result = [];
		for (let i = 0; i < num; i++) {
			result.push("-");
		}
	return result.join("");
}


// 54. Create a function that takes three number arguments — one number as an input and two additional
// numbers representing the endpoints of a closed range — and return the number limited to this range.

// Yellow - limitNumber(5, 1, 10) ➞ 5
// limitNumber(14, 1, 10) ➞ 10

/* 

If the number falls within the range, the number should be returned.
If the number is less than the lower limit of the range, the lower limit should be returned.
If the number is greater than the upper limit of the range, the upper limit should be returned.

*/

function limitNumber(num, rangeLow, rangeHigh) {
	if (num >= rangeLow && num <= rangeHigh) {
		return num;
	} else if (num < rangeLow) {
		return rangeLow; 
	} else {
		return rangeHigh; 
	}
}

const limitNumber = (num, min, max) => Math.max(min, Math.min(max, num));

function limitNumber(num, rangeLow, rangeHigh) {
	return [...arguments].sort((a, b) => a - b)[1]
}

let limitNumber = (num, rangeLow, rangeHigh) => 
num < rangeLow ? rangeLow :
num > rangeHigh ? rangeHigh : num;

function limitNumber(num, rangeLow, rangeHigh) {
	return num>rangeHigh ? rangeHigh: num<rangeLow ? rangeLow: num
}

let limitNumber = (num, low, high) =>
num < low ? low : num > high ? high : num;

// 55. Create a function that takes an array and returns the difference between the smallest and biggest numbers.

// Yellow - diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

function diffMaxMin(arr) {
	return Math.max(...arr) - Math.min(...arr)
}

const diffMaxMin = a => Math.max(...a) - Math.min(...a);

function diffMaxMin(arr) {
	arr.sort(function(a,b){return a-b;})
	return arr[arr.length-1]-arr[0];
}

/*

56. In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

The first number is the major version.
The second number is the minor version.
The third number is the patch (bug fixes).
Write three separate functions, one to retrieve each element in the semantic versioning specification.

*/

// White - 6.1.9
// retrieveMajor("6.1.9") ➞ "6"

const retrieveMajor = v => v.split(".")[0];
const retrieveMinor = v => v.split(".")[1];
const retrievePatch = v => v.split(".")[2];

function retrieveMajor(semver) {
	return semver.charAt(0)
}
function retrieveMinor(semver) {
	return semver.charAt(2)
}
function retrievePatch(semver) {
	return semver.charAt(4)
}

function retrieveMajor(semver) {
	return [...semver][0];
}
function retrieveMinor(semver) {
	return [...semver][2];
}
function retrievePatch(semver) {
	return [...semver][4];
}

// 57. You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers 
// (the hourly wage of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.

// White - programmers(147, 33, 526) ➞ 493

function programmers(one, two, three) {
	return Math.max(...arguments) - Math.min(...arguments)
}

function programmers(one, two, three) {
	return Math.max(one, two, three) - Math.min(one, two, three);
}

function programmers(one, two, three) {
	let high = Math.max(one, two, three);
	let low = Math.min (one, two, three);
	return high - low;
}

function programmers(one, two, three) {
	let arr = [...arguments].sort((a,b)=>a-b)
	return arr.pop()-arr.shift()
}

const programmers = (x,y,z) => Math.max(x,y,z) - Math.min(x,y,z)

function programmers(one, two, three) {
	var max = 0;
	var min=0;
	for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
	var maximum = max;
	
	for (i = arguments.length; i >=0 ; i--) {
    if (arguments[i] < max) {
      max = arguments[i];
			min=max;
    }
  }
	
	return maximum-min;
}

// 58. Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. 
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.


// White - monthName(3) ➞ "March"

function monthName(num) {
	  switch (num) {
			case (1): 
				return 'January'; 
			case (2): 
				return 'February'; 
			case (3): 
				return 'March'; 
			case (4): 
				return 'April'; 
			case (5): 
				return 'May'; 
			case (6): 
				return 'June'; 
			case(7): 
				return 'July'; 
			case (8): 
				return 'August'; 
			case (9): 
				return 'September'; 
			case (10): 
				return 'October'; 
			case (11): 
				return 'November'; 
			case (12): 
				return 'December'; 
			default: 
				return 'Enter the date of a month'
		}
}

function monthName(num) {
	let months = {
		1:"January",
		2:"February",
		3:"March",
		4:"April",
		5:"May",
		6:"June",
		7:"July",
		8:"August",
		9:"September",
		10:"October",
		11:"November",
		12:"December"
	}
	return months[num]
}

function monthName(num) {
	return new Date(2000, num - 1).toLocaleString("en-us", {month: "long"});
}

function monthName(num) {
	let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	let month = monthArray[num -1]
	return month
}

// 59. Create a function to multiply all values in an array by the amount of values in that array.

// Yellow - MultiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function MultiplyByLength(arr) {
	return arr.map(item => item * arr.length); 
}

MultiplyByLength = arr => arr.map(item => item * arr.length)

function MultiplyByLength(arr) {
	for(var i=0; i<arr.length; i++){
		arr[i] = arr[i] * arr.length;
	}
	return arr
}

function MultiplyByLength(arr) {
	let result=[];
	for(let i=0;i<arr.length;i++){
		result.push(arr[i] * arr.length);
	}
	return result;
}

function MultiplyByLength(arr) {
	let newArr = [];
	arr.forEach((i) => {
		const times = i * arr.length;
		newArr.push(times);
	})
	return newArr
}

// 60. Create a function that takes an array of numbers. Return the largest number in the array.

// White - Create a function that takes an array of numbers. Return the largest number in the array.

function findLargestNum(arr) {
	return Math.max(...arr); 
}

const findLargestNum = (arr) => Math.max(...arr); 

function findLargestNum(arr) {
  var max = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(max < arr[i]) {
       max = arr[i];
    }
  }
  return max;
}

function findLargestNum(arr) {
	let num = arr[0];
	for (let i = 0; i < arr.length; i++){
		if (arr[i] > num) {
			num = arr[i]
		}
	}
	return num;
}

function findLargestNum(arr) {
  return arr.sort((a, b) => b - a)[0]
}


// 61. Create a function that takes a number as an argument and returns the amount of digits it has.

// White - findDigitAmount(123) ➞ 3

function findDigitAmount(num) {
	return num.toString().length; 
}

findDigitAmount = num => num.toString().length; 

function findDigitAmount(num) {
	let str = num.toString();
	return str.length;
}

// 62. Write a function that returns true if two rooks can attack each other, and false otherwise.

// Yellow - canCapture(["A8", "E8"]) ➞ true  canCapture(["A1", "B2"]) ➞ false

function canCapture([yourRook, opponentsRook]) {
	if (yourRook.charAt(0) == opponentsRook.charAt(0)) {
			return true; 
	} else if (yourRook.charAt(1) === opponentsRook.charAt(1)) {
			return true; 
	} else {
		  return false; 
	}
}

function canCapture([yourRook, opponentsRook]) {
	if(yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1]) {
		return true;
	} else {
		return false;
	}
}

function canCapture([yourRook, opponentsRook]) {
	return yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1];
}

function canCapture([yourRook, opponentsRook]) {
	return opponentsRook.includes(yourRook[0]) || opponentsRook.includes(yourRook[1]) ? true : false
}

const canCapture = (arr) => {
	for (let i=0; i<arr.length; i++) {
		return arr[i][0] === arr[i+1][0] || arr[i][1] === arr[i+1][1]
	}
}

function canCapture([yourRook, opponentsRook]) {
	return ((yourRook.split("")[0] === opponentsRook.split("")[0]) || yourRook.split("")[1]=== opponentsRook.split("")[1]) ? true : false;
}

// 63. Remove all vowels from the string.

// Yellow - removeVowels("candy") ➞ "cndy"

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '')
}

function removeVowels(str) {
  return str.replace(/[aeiou]/g, '')
}


// 64. A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

// White - additiveInverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]

function additiveInverse(arr) {

}

const additiveInverse = (arr) => arr.map(item => item * 1)

function additiveInverse(arr) {
	for (i = 0; i < arr.length; i++){
		 arr[i] = arr[i]*-1  
	}
	return arr
}

function additiveInverse(arr) {
	newArr = [];
	arr.forEach(num => {
		console.log(num);
		newArr.push(num * -1);
	});
	return newArr;
}

function additiveInverse(arr) {
	const invArr = [];
	for (element of arr){
		invArr.push(element*(-1));
	}return invArr;
}

// 65. Create a function that returns the smaller number.

// White - smallerNum("21", "44") ➞ "21"

function smallerNum(n1, n2) {
	num = Math.min(n1, n2);
	return num.toString();
}

function smallerNum(n1, n2) {
  return Math.min(n1, n2).toString();
}

const smallerNum = (n1, n2) => (Number(n1) < Number(n2) ? n1 : n2);

function smallerNum(n1, n2) {
	if (Number.parseInt(n1) > Number.parseInt(n2))
		return n2;
	else
		return n1;
}

// 66. Create a function that takes in an array and returns true if all its values are even, and false otherwise.

// White - checkAllEven([1, 2, 3, 4]) ➞ false

function checkAllEven(arr) {
  return arr.every(x => x % 2 === 0)
}

const checkAllEven = arr => arr.every(x => x % 2 === 0);

// 67. Create a function replaces all the vowels in a string with a specified character.

// White - replaceVowels("the aardvark", "#") ➞ "th# ##rdv#rk"

function replaceVowels(str, ch) {
	return str.replace(/[aeiou]/gi, ch)
}

function replaceVowels(str, ch) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	
	const strArry = [...str].map((char) => {
		return vowels.includes(char) ? ch : char;
	});
	return strArry.join('');
}

const replaceVowels = (str, ch) => str.replace(/[aeiouy]/gi, ch)

function replaceVowels(str, ch) {
	str = str.split('');
	for(var i=0; i < str.length; i++){
		if(str[i]==='a'|| str[i]==='e'||str[i]==='i'||str[i]==='u'||str[i]==='o'){
			str[i] = ch;
		}
	}
	return str.join('');
}



/*

68.

A value is said to be "truthy" if it evaluates to true in a Boolean context. All values are truthy in JavaScript unless they're one of the following:

false
null
undefined
0
NaN
""
In JavaScript, an empty object and an empty array are both considered "truthy," but an empty string is considered false when evaluated as a Boolean (this behavior is what we call "falsey").

Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.

*/

// White - isTruthy("false") ➞ 1


function isTruthy(input) {
	return input ? 1 : 0
}

isTruthy = (input) => +!!input;

function isTruthy(input) {
	if(input) {
		return 1
	} else {
		return 0
	}
}

const isTruthy = (input) => {
	x = [false,null,undefined,0,NaN,``];
	return (x.includes(input)?0:1);
}

/* 69. 

Write two functions:

firstArg() should return the first parameter passed in.
lastArg() should return the last parameter passed in.
Return undefined if the function takes no parameters.

*/

// White - firstArg(1, 2, 3) ➞ 1

function firstArg() {
	return arguments[0];
}

function lastArg() {
	return arguments[arguments.length-1];
}

const firstArg = (...args) => args[0];
const lastArg = (...args) => args[args.length - 1];

const firstArg = (...args) => args.shift();
const lastArg = (...args) => args.pop();

// 70. Given an array of integers, return the difference between the largest and smallest integers in the array.

// White - difference([10, 15, 20, 2, 10, 6]) ➞ 18
// 20 - 2 = 18

function difference(nums) {
	return Math.max(...nums) - Math.min(...nums)
}

const difference = nums => Math.max(...nums) - Math.min(...nums);

function difference(nums) {
	let maxNum = 0;
	let minNum = nums[0];
	
	for(let i = 0; i < nums.length; i++){
		if(nums[i] > maxNum) maxNum = nums[i];
		if(nums[i] < minNum) minNum = nums[i];
	}
	
	return maxNum - minNum;
}

function difference(nums) {
	return nums.sort((a,b) => a-b)[nums.length-1]-nums.sort((a,b) => a-b)[0];
}

function difference(nums) {
	nums=nums.sort((a,b)=>{
		return a-b;
	})
	return nums[nums.length-1]-nums[0];
}

function difference(nums) {
	nums.sort((a, b) => a - b);
	let myArray = [nums[0], nums[nums.length-1]];
	var x = myArray[1] - myArray[0];
	return(x);
}

function difference(nums) {
	let max = nums.reduce(function(a, b){
		return Math.max(a,b);
	});
	let min = nums.reduce(function(a, b){
		return Math.min(a, b);
	});
	return max - min;
}


// 71. Create a function that takes an array of students and returns an array of student names.

/* White -

getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Steve", "Mike", "John"]

*/


function getStudentNames(students) {
	return students.map(student => student.name); 
}

function getStudentNames(students) {
	newarray = [];
	for (let i = 0; i < students.length; i++) {
			newarray.push(students[i].name);
	}
	return newarray;
}

function getStudentNames(students) {
  const arr = [];
	students.forEach(student => arr.push(student.name));
	return arr;
}

function getStudentNames(students) {
	this.students = students;
let arr = [];
for (let x = 0; x < this.students.length; x++) {
	arr.push(this.students[x]['name']);
}
return (arr);
}

function getStudentNames(students) {
  const arr = [];
	students.forEach(student => arr.push(student.name));
	return arr;
}

// 72. Write a function that takes three string arguments (first, last, word) and returns true if (when alphabetically sorted) word is found between first and last.

// Yellow - isBetween("apple", "banana", "azure") ➞ true


function isBetween(first, last, word) {
	return word > first && word < last;
}

function isBetween(first, last, word) {
	return [...arguments].sort()[1] === word;
}

const isBetween = (first, last, word) => [first, last, word].sort()[1] === word;

function isBetween(first, last, word) {
	return [first,last,word].sort().indexOf(word) == 1;
}

function isBetween(first, last, word) {
	let wordsArr = [first, last, word];
	if(wordsArr.sort()[1] == word){
		return true ;
	}
	return false;

}

const isBetween = function(start_word, end_word, word){
	return start_word <= word && end_word >= word ? true : false;
};

function isBetween(first, last, word) {
	let newArr = [first,word,last]
  let sortedArr = newArr.slice().sort()
  for(let i =0;i<newArr.length;i++){
    if(newArr[i]===sortedArr[i]){
      continue
    }
    if(newArr[i]!==sortedArr[i]){
      return false
    }
  }
  return true
}

// 73. Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.

// Yellow -  transform([1, 2, 3, 4, 5]) ➞ [2, 1, 4, 3, 6]

function transform(arr) {
	return arr.map(num => num % 2 === 0 ? num - 1 : num + 1)
}

const transform = arr => arr.map(x => x % 2 ? x + 1 : x - 1);

function transform(arr) {
	for(i = 0; i < arr.length; i++){
		if(arr[i] % 2 == 0){
			arr[i] = arr[i]-1;
		}
		else{
			arr[i] = arr[i]+1
		}
	}
	return arr;
}

function transform(arr) {
	let arr1=[]
	for(i=0;i<arr.length;i++){
	let x=0
		if(arr[i]%2===0){x=(arr[i]-1)}
		else{x=(arr[i]+1)}
		arr1.push(x)
	}
	return arr1
}

function transform(arr) {
	const x = []
	arr.forEach(a => {
		a % 2 === 0 ? x.push(a-1) : x.push(a+1)
	})
	return x
}

// 74. A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

// Yellow - getWord("seas", "onal") ➞ "Seasonal"

function getWord(left, right) {
	return left.charAt(0).toUpperCase()+ left.slice(1) + right
}

function getWord(left, right) {
	return left[0].toUpperCase() + left.slice(1) + right
}

const getWord=(left, right)=> 
left.replace(/^./g,match=>match.toUpperCase())+right

function getWord(left, right) {
	return left[0].toUpperCase()
		.concat(left.slice(1))
		.concat(right)
}

// 75. Write a regular expression that matches a string if it contains at least one digit.

// "23cc4" ➞ true

let x = /\d/

let x = /[0-9]/

// 76. Create a function that returns true if an input string contains only uppercase or only lowercase letters.

// sameCase("hello") ➞ true

function sameCase(str) {
  return /^[A-Z]+$/.test(str) || /^[a-z]+$/.test(str);
}

const sameCase = str =>
	str.toUpperCase() === str || str.toLowerCase() === str;
	
	function sameCase(str) {
		return str === str.toUpperCase() || str === str.toLowerCase() ? true : false
	}

	function sameCase(str) {
		return (str === str.toLowerCase()) || (str === str.toUpperCase());
	}

	function sameCase(str) {
		return /\b[a-z]+\b|\b[A-Z]+\b/g.test(str)
	}

// 77. Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.
// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

// Yellow - hurdleJump([1, 2, 3, 4, 5], 5) ➞ true


	function hurdleJump(hurdles, jumpHeight) {
		if (hurdles.every(x => x <= jumpHeight)) {
		 return true; 
		} else {
		 return false;
		}
	}

	function hurdleJump(hurdles, jumpHeight) {
		return Math.max(...hurdles) <= jumpHeight;
	}

	function hurdleJump(hurdles, jumpHeight) {
		return hurdles.every(h => jumpHeight >= h)
	}

	function hurdleJump(hurdles, jumpHeight) {
		for(i=0;i<hurdles.length;i++){
			if(jumpHeight < hurdles[i])
				return false;
		}
		return true;
	}

	function hurdleJump(hurdles, jumpHeight) {
		return (hurdles.sort((a, b) => a < b)[0] || 0) <= jumpHeight;
	}

// 78. Create a function to remove all null values from an array.

// White - removeNull(["a", null, "b", null]) ➞ ["a", "b"]

function removeNull(arr) {
	return arr.filter(el => el != null)
}

const removeNull = (arr) => arr.filter((a) => a !== null);

function removeNull(arr) {
	return arr.filter(Boolean);
}

const removeNull = (arr) => {
	let newArr=[];	
	 for(let i=0;i<arr.length;i++)
		 {
			 if(arr[i] != null)
			 newArr.push(arr[i])
		 }
	 return newArr
 }

// 79. Write a function that returns true if a hash contains the specified key, and false otherwise.

// White = hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false

function hasKey(obj, key) {
	if (obj.hasOwnProperty(key)) {
		return true; 
	} else {
		return false;
	}
}

function hasKey(obj, key) {
	return obj.hasOwnProperty(key);
}

function hasKey(obj, key) {
	return Object.keys(obj).includes(key);
}

function hasKey(obj, key) {
	return key in obj;
}

const hasKey = (obj, key) => obj.hasOwnProperty(key);

const hasKey = (obj, key) => obj[key]? true : false;

function hasKey(obj, key) {
	var arr = Object.keys(obj);
	for(var i=0; i<arr.length; i++){
		if(arr[i]==key){
			return true;
		}
	}
	return false;
}

/* 80. 

You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. 
You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), 
and the starting inventory. Return the total profit made, rounded to the nearest dollar. Assume all of the 
inventory has been sold.

profit({
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}) ➞ 14796

*/

function profit(info) {
	let profit = [];
	let sellPrice = info.sellPrice; 
	let costPrice = info.costPrice; 
	let inventory = info.inventory; 
	return profit = Math.round((sellPrice - costPrice) * inventory); 
}

function profit(info) {
	return Math.round((info.sellPrice * info.inventory)-(info.costPrice * info.inventory))
	}

	function profit(info) {
		let profit = (info.sellPrice - info.costPrice) * info.inventory;
		return Math.round(profit);
	}

const profit = prod => Math.round((prod.sellPrice - prod.costPrice) * prod.inventory);

// 81. Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

// Yellow - isInOrder("abc") ➞ true
// isInOrder("edabit") ➞ false

function isInOrder(str) {
	let y = str.split('').sort().join('')
		if (str === y) {
			return true
		} else {
			return false
		}
	}

function isInOrder(str) {
	return str === str.split("").sort().join("")
}

const isInOrder = str => [...str].sort().join('') === str;

function isInOrder(str) {
	return str === str.split("").sort().join("");
}

function isInOrder(str) {
	return [...str].sort().join('') === str
}

function isInOrder(str) {
	str = str.split("");
	for (let i = 0; i < str.length - 1; i++) {
		if (str[i].charCodeAt(0) > str[i+1].charCodeAt(0)) return false;
	}
	return true;
}

// 82. Create a function that takes two integers and checks if they are equal.

// White - isEqual("1", 1) ➞ false

const isEqual = (n1, n2) => {
	return typeof n1 === "string" || typeof n2 === "string" ?
		false : n1 === n2;
}

function isEqual(num1, num2) {
	return typeof num1 === "number" && typeof num2 === "number" && num1 === num2;
}

function isEqual(num1, num2) {
	return Number.isInteger(num1,num2) && num1 == num2;
}

// 83. Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

// White - countdown(5) ➞ [5, 4, 3, 2, 1, 0]

function countdown(start) {
	let result = []; 

	for(let i = start; i >= 0; i--) {
		result.push (i)
	}
	return result; 
}

function countdown(start) {
	return [...Array(start + 1)].map((i) => start - i)
}

// 84. Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.

// White - [17, 11, 99, 55, 23, 1], 5 ➞ [2, 1, 4, 0, 3, 1]

function mysteryFunc(arr, num) {
  return arr.map(el => el % num)
} 

const mysteryFunc = (arr, num) => arr.map(el => el % num);

function mysteryFunc(arr, num) {
  var newArr = [];
	for (var i = 0; i < arr.length; i++){
		newArr.push(arr[i]%num);
	}
	return newArr;
}


// 85. Create a function that takes in two arrays: the array of user-typed words, 
// and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) 
// and -1s (incorrectly-typed words).

/* 

Yellow - correctStream(
  ["it", "is", "find"],
	["it", "is", "fine"]
	 ) ➞ [1, 1, -1]

*/

function correctStream(ans, sol) {
  ans.map(e => sol.indexOf(e) !== -1 ? 1 : -1);
}

const correctStream = (ans, sol) =>
  ans.map((ans, i) => (ans === sol[i] ? 1 : -1));

function correctStream(user, correct) {
	let result = [];
	for (let i = 0; i < user.length; i++) {
		if (user[i]=== correct[i]) {
			result.push(1);
		} else {
			result.push(-1);
		}
	}
	return result;
}

// 86. Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

// White - nextElement([3, 5, 7, 9]) ➞ 11


function nextElement(arr) {
	return arr[arr.length - 1] + (arr[1] - arr[0]);
}

const nextElement = arr => {
	const [secondLast, last] = arr.slice(-2);
	return last + (last - secondLast);
}

function nextElement(arr) {
  let result = '';
  let dif = arr[1] - arr[0];
  result = arr.slice(-1)[0] + dif;
  return result;
}

const nextElement = a => (a[1] - a[0]) + a[a.length - 1];

// 87. Write a function that finds the sum of the first n natural numbers. Make your function recursive.

// White - sum(5) ➞ 15
// 1 + 2 + 3 + 4 + 5 = 15

const sum = function(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
			arr.push(i);
	}
	return arr.reduce((acc, cur) => acc + cur);
};

const sum = n => n === 1 ? n : n + sum(n-1);

function sum(n) {
	let result = 0
	for(let i = 0; i <= n; i++){
		result += i
	}
	return result
}

function sum(n) {
	if(n === 0)
		return 0
	return(n + sum(n-1))
}

// 88. Write a function that returns true if there exists at least one number that is larger than or equal to n.

// White - existsHigher([4, 3, 3, 3, 2, 2, 2], 4) ➞ true

function existsHigher(arr, n) {
	return Math.max(...arr) >= n;
}

const existsHigher = (arr, n) => arr.some(num => num >= n);

function existsHigher(arr, n) {
	return arr.reduce((bool, a) => a >= n ? true : bool, false);
}

function existsHigher(arr, n) {
	for (i = 0; i < arr.length; i++){
		
	if (arr[i] >= n ) {
		return true;
	}
	}
	return false;
}

// 89. Create a function which filters out strings from an array and returns a new array containing only integers.

// White - filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function filterList(l) {
	return l.filter(x => Number.isInteger(x))
}

function filterList(l) {
	return l.filter( c => typeof c === 'number');
}

function filterList(l) {
	return l.filter(x => !isNaN(x));
}

function filterList(l) {
	return l.filter(item => typeof item !== 'string');
}

// 90. A palindrome is a word that is identical forward and backwards.

// Yellow - checkPalindrome("reviver") ➞ true

function checkPalindrome(str) {
	return str == str.split("").reverse().join("") ? true : false;
}

const checkPalindrome = (str) => str.split('').reverse().join('').toLowerCase() == str.toLowerCase()

function checkPalindrome(str) {
	return	[...str].reverse().join("") == str
}

function checkPalindrome(str) {
  for (i = 0; i < str.length; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function checkPalindrome(str) {
  let removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  let checkPalindrome = removeChar.split('').reverse().join('');
  return (removeChar === checkPalindrome);
}

// 91. Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

// White - checkFactors([2, 3, 4], 12) ➞ true
// Since 2, 3, and 4 are all factors of 12.

function checkFactors(factors, num) {
	return factors.every(x => !(num % x)); 
}

function checkFactors(factors, num) {
	return [...factors].every(factor => num % factors === 0)
}

const checkFactors = (factors, n) => factors.every(x => n % x == 0);

function checkFactors(factors, num) {
	for (let i = 0; i < factors.length; i++) {
		if (num % factors[i] !== 0) {
			return false;
		}
	}
	return true;
}

findEvenNum = (num) => {
let evenNum = []
for (i = 1; i <= num; i++) {
	evenNum.push(i)
} 
evenNum = evenNum.filter(x => x % 2 == 0)
return evenNum
}


// 92. Create a function that finds all even numbers from 1 to the given number.

// Yellow - findEvenNums(8) ➞ [2, 4, 6, 8]

function findEvenNums(num) {
	let evenNum = []
	
	for (i = 1; i <= num; i++) {
		evenNum.push(i)
	} 

	evenNum = evenNum.filter(x => x % 2 == 0)

	return evenNum
}

function findEvenNums(num) {
	let even = [];
	
	for (let i = 1; i <= num; i++) {
		if (i % 2 === 0) {
			even.push(i);
		}
	}

	return even;
}

const findEvenNums = num => [...Array(num).keys()].map(x => x + 1).filter(x => !(x % 2));

function findEvenNums(num) {
	var arr = []
	for(var i = 2; i <= num; i += 2) {
		arr.push(i)
	}
	
	return arr
}

function findEvenNums(num) {
	var res = [];
	for(var i=1; i <= num; i++) {
		if (i % 2 === 0) {
			res.push(i);
		}
	}
	return res;
}

function findEvenNums(num) {
	let even =[];
	for (i = 1 ; i<=num ; i++) {
		if (i%2==0){even.push(i);}
	}
	return even;
}

// 93. Write a function that turns a comma-delimited list into an array of strings.

// White  - toArray("watermelon, raspberry, orange")
// ➞ ["watermelon", "raspberry", "orange"]

function toArray(str) {
	return str.length > 0 ? str.split(", ") : [];
}

function toArray(str) {
	if(str) {
		return str.split(", ");
	} else {
		return [];
	}
}

function toArray(str) {
	return (str.length == 0) ? [] : str.split(", ");
}

function toArray(str) {
	if (str == '') return [];
	return str.split(/,\s/);
}

function toArray(str) {
	return str.length ? str.split(',').map(t => t.trim()) : [];
}

// 94. Create a function that adds a string ending to each member in an array.

// White - addEnding(["clever", "meek", "hurried", "nice"], "ly")
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]

function addEnding(arr, ending) {
	return arr.map(x => x + ending)
}

function addEnding(arr, ending) {
	return arr.map(word => `${word}${ending}`);
}

function addEnding(arr, ending) {
	return arr.map(x => x.concat(ending));
}

function addEnding(arr, ending) {
	for(var i=0; i < arr.length; i++){
		arr[i] = arr[i]+ending;
	}
	return arr;
}

// 95. unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// 182 and 637 are divisible by 13.

// White - unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// 182 and 637 are divisible by 13.

function unlucky13(nums) {
	return nums.filter(x => x % 13 !== 0); 
}

const unlucky13 = nums => nums.filter(n => n % 13);

function unlucky13(nums) {
	var newArr = [];
	for(var i = 0; i < nums.length; i++){
		if(nums[i] % 13 != 0){
			newArr.push(nums[i]);
		}
	}
	return newArr;
}

// 96. Given a year you must implement a function that returns true if it's a leap year, or false if it's not.
// A year must either be divisible by 400 or divisible by 4 and not 100.

// Yellow - isLeap(1800) ➞ false
// Exactly divided by 4, but is also exactly divided by 100.

const isLeap = year => year % 400 === 0 || year % 4 === 0 && year %100 !== 0;

function isLeap(year) {
	return year % 4 == 0 &&  year % 100 !== 0 || year % 400 == 0;
}

function isLeap(year) {
	if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
		return true;
	}else {
		return false;
	}
}

// 97. Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array.

// x = [1, 2, 3, 4, 5]
// minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.

function minusOne(arr) {
  return arr.slice(0, arr.length - 1); 
}

function minusOne(arr) {
  return arr.slice(0, -1)
}

const minusOne = arr => arr.slice(0, -1);

function minusOne(arr) {
	arr1=[];
	for (i=0;i< arr.length-1;i++){
		arr1.push(arr[i]);
	}
  return arr1;
}

function minusOne(arr) {
	let newArr = arr.slice();
	newArr.pop();
	return newArr;
}

// 98. Create a function that removes the first and last characters from a string.
// If the string is 2 or fewer characters long, return the string itself.

// Yellow- removeFirstLast("benefit") ➞ "enefi"
// removeFirstLast("a") ➞ "a"


function removeFirstLast(str) {
	if (str.length > 2) {
	return str.split('').slice(1, str.length - 1).join(''); 
  } else {
	return str; 
	}
}

function removeFirstLast(str) {
	if (str.length > 2) {
		let arr = str.split('')
		arr.shift()
		arr.pop()
		return arr.join('')
	}
	return str
}

function removeFirstLast(str) {
	if (str.length <= 2) return str;
	return str.replace(/(^\w|\w$)/g, '');
}

const removeFirstLast = str => str.length > 2 ? str.slice(1, - 1) : str;

// 99. Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

// White - reverseCapitalize("hellothere") ➞ "EREHTOLLEH"


function reverseCapitalize(str) {
	return str.toUpperCase().split('').reverse().join('')
}

function reverseCapitalize(str) {
	return [...str].reverse().join('').toUpperCase()
}

const reverseCapitalize = string => string.split('').reverse().join('').toUpperCase();

function reverseCapitalize(str) {
	let reversed = "";
	for( let i = str.length -1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed.toUpperCase();
}

// 100. Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).

// White - getSequence(1, 5) ➞ [1, 2, 3, 4, 5]


function getSequence(low, high) {
	arr = [];
	for (i = low; i <= high; i++) {
		arr.push(i);
	}
	return arr;
}

const getSequence = (low, high) => [...Array(high - low + 1)].map((x, i) => i + low);

const getSequence = (low, high) => Array.from(Array(high - low + 1), (x, i) => i + low);

// 101. Write a function that reverses a string. Make your function recursive.

// White - reverse("hello") ➞ "olleh", reverse("") ➞ ""

function reverse(str) {
	return str.split('').reverse().join(''); 
}

function reverse(str) {
  if (!str) return str;
  return str.slice(-1) + reverse(str.slice(0, -1));
}

const reverse = str => str === "" ? "" : reverse(str.substr(1)) + str.charAt(0);

function reverse(str) {
	if (typeof str !== 'string') {
	  return;
	}
	else if (str === '') {
		return '';
	} else {
		return reverse(str.substr(1)) + str[0];
	}
}

// 102. Create a function that filters out an array of state names into two categories based on the second parameter.

// Abbreviations abb
// Full names full

// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
// Yellow ➞ ["CA", "NY"]

function filterStateNames(arr, type) {
	return arr.filter(x => type === 'abb' ? x.length < 3 : x.length > 2);
}

function filterStateNames(arr, type) {
	return arr.filter(x => (type === 'abb') ? x.length === 2 : x.length > 2);
}

function filterStateNames(arr, type) {
	if(type == 'abb') {
		return arr.filter(el => el.length <= 2);
	}else if(type == 'full') {
		return arr.filter(el => el.length > 2);
	}
}

function filterStateNames(arr, type) {
  var r = [];
	for (var i in arr) {
		if (type == 'abb') {
			if (/^[A-Z]+$/.test(arr[i])) r.push(arr[i]);
		} else {
			if (!/^[A-Z]+$/.test(arr[i])) r.push(arr[i]);
		}
	}
	return r;
}

// 103. Create a function that takes an array of numbers and returns the smallest number in the set.

// White - findSmallestNum([34, 15, 88, 2]) ➞ 2

function findSmallestNum(arr) {
	return Math.min(...arr); 
}

function findSmallestNum(arr) {
  var lowest;
  lowest = arr[0];
  for (var i in arr){
    if (arr[i]<lowest){
      lowest = arr[i];
    }
  }
  return lowest;
}

function findSmallestNum(arr) {
  return arr.reduce((prev, item) => Math.min(prev, item))
}

function findSmallestNum(arr) {
  arr.sort(function (a,b){
    return a-b;
  });
  return arr[0];
}

// 104. Create a function that converts two arrays of x- and y- coordinates into an array of (x,y) coordinates.

// White - convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])
// ➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]

function convertCartesian(x, y) {
	return x.map((v, i) => [v, y[i]])
}

function convertCartesian(x, y) {
	return x.map(function(x,i){return [x,y[i]]})
}

function convertCartesian(x, y) {
	let coords = [];
	for (let i=0; i < x.length; i++) {
		let coord = [];
		coord.push(x[i], y[i])
		coords.push(coord);
	}
	return coords;
}

function convertCartesian(x, y) {
	var arr = [];
	for (i=0;i<x.length;i++){
		var ar=[x[i], y[i]];
		arr.push(ar)
	}
	return arr
}

// 105. Create a function that filters out an array to include numbers who only have a certain number of digits.

// Yellow - filterDigitLength([88, 232, 4, 9721, 555], 3) ➞ [232, 555]
// Include only numbers with 3 digits.

function filterDigitLength(arr, num) {
	return arr.filter(x => x.toString().length === num)
}

function filterDigitLength(arr, num) {
	return arr.filter(n => String(n).length === num);
}

function filterDigitLength(arr, num) {
	let set = []
	let lengthen = arr.map(item => {
		if (item.toString().length == num) {
			set.push(item);
		};
	});
	return set
}

// 106. Write a function that maps files to their extension names.

// Yellow - getExtension(["code.html", "code.css"])
// ➞ ["html", "css"]

function getExtension(arr) {
	return arr.map(x => x.split(".").pop())
}

function getExtension(arr) {
	return arr.map(x => x.split('.')[1])
}

const getExtension = arr => arr.map(file => file.split('.').slice(-1)[0]);

function getExtension(arr) {
	let arr0 = [];
	for(let i in arr)
		arr0.push(arr[i].split('.')[1])
	return arr0;
}

// 107. Given an unsorted array, create a function that returns the nth smallest element (the smallest element is the first smallest, the second smallest element is the second smallest, etc).

// Yellow - nthSmallest([1, 3, 5, 7], 3) ➞ 5
// nthSmallest([7, 3, 5, 1], 2) ➞ 3

function nthSmallest(arr, n) {
	var sortedArr = arr.sort((a, b) => a - b)
	if (n > sortedArr.length){
		return null
	} else return sortedArr[n-1]
}

function nthSmallest(arr, n) {
	arr.sort(function(a,b){return a -b});
	if (n <= arr.length) {
		return arr[n -1];
	} else {
		return null;
	}
}


function nthSmallest(arr, n) {
	return n > arr.length ? null : arr.sort()[n-1];
}

const nthSmallest = (arr, n) =>
	n > arr.length ? null : arr.sort((a, b) => a - b)[n - 1];
	
// 108. Create a function that returns true if two arrays contain identical values, and false otherwise.

// White - checkEquals([4, 7, 6], [4, 5, 6]) ➞ false

function checkEquals(arr1, arr2) {
	if (arr1.join(" ") === arr2.join(" ")) {
  	return true
 	} else {
  	return false
 	}
}

function checkEquals(arr1, arr2) {
	return (arr1.toString() === arr2.toString());
}

const checkEquals = (arr1, arr2) =>
	JSON.stringify(arr1) === JSON.stringify(arr2);
	

// 109. You are given one input: An array containing eight 1's and/or 0's. Write a function that takes an 8 bit binary number and convert it to decimal.

// White - binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]) ➞ 255

function binaryToDecimal(binary) {
	return parseInt(binary.join(""), 2);
}

function binaryToDecimal(binary) {
	let index = binary.length-1;
	let decimal = 0;
	for(let i=0; i< binary.length; i++){
		decimal += binary[i]*Math.pow(2,index);
		index--;
	}
	return decimal;
}

function binaryToDecimal(binary) {
	var bstr = binary.join('');
	return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}

// 110. Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

// White - reverse(false) ➞ true

function reverse(bool) {
	return bool === true ? false : bool === false ? true : "boolean expected" 
}


function reverse(bool) {
	if (typeof bool !== 'boolean') return "boolean expected"
	return !bool
}

function reverse(bool) {
	return typeof bool === 'boolean' ? !bool : 'boolean expected'
}

const reverse = bool => typeof bool === 'boolean' ? !bool : 'boolean expected';

function reverse(bool) {
	if (typeof bool === 'boolean') {
		return !bool
	} else {
		return 'boolean expected'
	}
}

function reverse(bool) {
	if ( bool === true ) {
		return false;
	} else if ( bool === false ) {
		return true;
	} else {
		return "boolean expected";
	}
}

// 111. Create a function to extract the name of the subreddit from its URL.

// Yellow - subReddit("https://www.reddit.com/r/funny/") ➞ "funny"

function subReddit(link) {
	return link.split("/").slice(4, 5).toString()
}

function subReddit(link) {
	return link.split("/")[4]
}

function subReddit(link) {
	link = link.split('/')
	return link[link.length - 2]
}

const subReddit= (link) => link.split('/r/')[1].split('/')[0]

const subReddit = link => link.match(/\/r\/(\w+)/)[1];

let subReddit = r => (r.match(/\/r\/([a-z]+)/i))[1]

// 112. Create a function that returns the product of all odd integers in an array.

// Yellow - oddProduct([3, 4, 1, 1, 5]) ➞ 15

function oddProduct(arr) {
	return arr.filter(x => x % 2 !== 0).reduce((a,b) => a * b);
}

function oddProduct(arr) {
	return arr.reduce((acc, a) => a % 2 !== 0 ? acc * a : acc, 1);
}

let oddProduct=(arr)=>arr.filter(x=>x%2==1).reduce((a,b)=>a*b)

function oddProduct(arr) {
	var sum = 1;
	for (i = 0; i < arr.length; i++){
		if(arr[i]%2 != 0){
			sum = sum*arr[i];
		}
	}
	return sum;
}

function oddProduct(arr) {
	return arr.filter(el => el % 2 !== 0).reduce((acc, curr) => acc * curr);
}

// 113. Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

// White - middleEarth(["Frodo", "Sam", "Gandalf"]) ➞ true

function middleEarth(arr) {
	return Math.abs(arr.indexOf('Sam') - arr.indexOf('Frodo')) === 1
}

const middleEarth = arr => /samfrodo|frodosam/gi.test(arr.join(''));

function middleEarth(arr) {
	const i = [arr.indexOf('Frodo'), arr.indexOf('Sam')];
	return (Math.max(...i) - Math.min(...i)) === 1;
}

function middleEarth(arr) {
	const i = [arr.indexOf('Frodo'), arr.indexOf('Sam')];
	return (Math.max(...i) - Math.min(...i)) === 1;
}

// 114. Transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]

// White = WremoveEmptyArrays(["a", "b", []]) ➞ ["a", "b"]

function removeEmptyArrays(arr) {
	return arr.filter(x => x.length !== 0)
}

function removeEmptyArrays(arr) {
	return arr.filter(x => x > [])
}

function removeEmptyArrays(arr) {
	return arr.filter(x => x != "")
}

const removeEmptyArrays = arr => arr.filter(x => x != false);

// 115. Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:

// evenOddPartition([1, 0, 1, 0, 1, 0]) ➞ [[0, 0, 0], [1, 1, 1]]

const evenOddPartition = arr => [arr.filter(x => x % 2 == 0),arr.filter(y => y % 2 != 0) ]

// solution 2

const isEven = num => num % 2 === 0;

const evenOddPartition = arr => [
  arr.filter(isEven),
  arr.filter(num => !isEven(num)),
];

// solution 3 

function evenOddPartition(arr) {
	var results = [[],[]];
	for (var i in arr) {
		results[arr[i]%2].push(arr[i]);
	}
	return r;
}

// solution 4 

function evenOddPartition(arr) {
	let even = arr.filter(x => x%2===0);
  let odd = arr.filter(x=>x%2!==0);
  return [even,odd]
}

// solution 5

function evenOddPartition(arr) {
	return [arr.filter(x => x%2==0),arr.filter(x => x%2!=0)]
}

// 116. Write a function that returns true if the product of an array is divisible by the sum of that same array.

// White - divisible[4, 2, 6] ➞ true

function divisible(arr) {
	const arrSum = arr.reduce((a,b) => a + b, 0)
	const arrProd = arr.reduce((a,b) => a * b, 1)
	return arrProd % arrSum == 0 ? true : false; 
}

function divisible(arr) {
	let prod = arr.reduce((acc,cur) => acc *= cur,1),
			sum = arr.reduce((acc,cur) => acc += cur,0)
	return prod % sum == 0
}

function divisible(arr) {
	return arr.reduce((a, c) => a * c, 1) % arr.reduce((a, c) => a + c) === 0
}

function divisible(arr) {
	let sum = 0;
	let product = 1;
	
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
		product *= arr[ i];
	}
	if(product % sum === 0) {
		return true;
	}
	else {
		return false;
	} 
}

function divisible(arr) {
	let total = arr.reduce( (sum, current) => sum + current, 0 );
	let prod = arr.reduce( (a, b) => a * b );

	return ( prod / total ) % 2 === 0;
}

// 117. Write a function that retrieves the last n elements from an array.

/* 
White - last([4, 3, 9, 9, 7, 6], 3) ➞ [9, 7, 6]

last([1, 2, 3, 4, 5], 7) ➞ "invalid"

last([1, 2, 3, 4, 5], 0) ➞ []
*/

function last(a, n) {
	return n === 0 ? [] : n > a.length ? "invalid" : a.slice(-n);
}

function last (a, n) {
	return n > a.length ? "invalid" : a.slice(a.length-n); 
}

function last(a, n) {
	return a.length >= n ? a.slice(a.length - n, a.length) : 'invalid'
}

const last = (a, n) => a.length >= n ? a.slice(a.length-n, a.length) : "invalid"

// 118. Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.

// White - nameShuffle("Donald Trump") ➞ "Trump Donald"

function nameShuffle(str) {
	return str.split(' ').reverse().join(' ')
}

function nameShuffle(str) {
	const arr = str.split(' ');
	return arr[1] + ' ' + arr[0];
}

// 119. Given two integers, a and b, return True if a can be divided evenly by b. Return False otherwise.
 
// White - dividesEvenly(98, 7) ➞ True
// # 98/7 = 14

function dividesEvenly(a, b) {
  return a % b == 0 ? true : false; 
}

function dividesEvenly(a, b) {
	if (a % b === 0) {
		return true;
	} else {
		return false;
	}
}

// 120. The solution should be one string with a comma in between every "Hello (Name)".

//  Yellow - Add "Hello" to every name.
// Make one big string with all greetings.

// greetPeople(["Angela", "Joe"]) ➞ "Hello Angela, Hello Joe"


function greetPeople(names) {
	return names.map(x => 'Hello ' + x).join(', '); 
}

const greetPeople = names => names.map(name => `Hello ${name}`).join(', ');

function greetPeople(names) {
	if (names.length === 0) {
		return "";
	}
	let greeting = "";
	for (let i = 0; i < names.length; i++) {
		greeting = greeting + "Hello " + names[i] + ", ";
	}
	return greeting.slice(0, -2);
}

function greetPeople(names) {
	if (names.length === 1) {
		return `Hello ${names}`;
	} else if (names.length > 1) {
		let name = names.pop()
		return greetPeople(names) + `, Hello ${name}`;
	} else {
		return '';
	}
}


// 121. Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.

// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]

function dictionary(initial, words) {
	return words.filter(word => word.startsWith(initial));
}

function dictionary(initial, words) {
	return words.filter(x => x.slice(0, initial.length) === initial);
}

function dictionary(initial, words) {
	let matchingWords = [];
	words.forEach(word => {
		if (word.includes(initial)) {
			matchingWords.push(word);
		}
	});
	return matchingWords;
}

// 122. Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

// White - cardHide("1234123456785678") ➞ "************5678"

function cardHide(card) {
	end = card.slice(-4)
	if (card.length > 14) {
	return '************' + end;
  } else {
	return '**********' + end;
	}
}

function cardHide(card) {
	return card.replace(/.(?=.{4,}$)/g, '*')
}

const cardHide = card => '*'.repeat(card.length - 4) + card.slice(-4);

function cardHide(card) {
	return '*'.repeat(card.length - 4) + card.slice(-4); 
}

function cardHide(card) {
	return '*'.repeat(card.length - 4) + card.slice(card.length - 4);
}

function cardHide(card) {
	let num = card.split('');
	let newArr = [];

	for(let i = 0; i < num.length; i++) {
		if(i > card.length - 5) {
			newArr.push(num[i]);
		} else {
			newArr.push('*');
		}
	}
	
	return newArr.join('');
}

// 123. Hamming distance is the number of characters that differ between two strings.
// Create a function that computes the hamming distance between two strings.

// Yellow - hammingDistance("abcde", "bcdef") ➞ 5
// hammingDistance("abcde", "abcde") ➞ 0

function hammingDistance(a, b) {
	let counter = 0; 
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			counter++; 
		 }
		} 
		return counter; 
	}

	function hammingDistance(a, b) {
		let counter = 0; 
		for (i in a) {
			if (a[i] !== b[i]) {
				counter++; 
			}
		}
		return counter; 
	}

	function hammingDistance(a, b) {
		return a.split('').filter((curr, i) => curr !== b[i]).length; 
	}

	const hammingDistance = (a, b) => [...a].filter((x, i) => x != b[i].length)


// 124. Create a function that takes an array of numbers and returns only the even values.

// White - noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]

function noOdds(arr) {
	return arr.filter(x => x % 2 == 0); 
}

let nooOdds = arr => arr.filter(x => x % 2 == 0); 

function noOdds(arr) {
	return arr.filter(a => !(a % 2)); 
}

function noOdds(arr) {
	let even = []; 
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] % 2 == 0) {
			even.push(arr[i]); 
		}
	}
	return even; 
}

// 125. Write a function that returns true if all characters in a string are identical and false otherwise.

// White - isIdentical("aaaaaa") ➞ true
// isIdentical("aabaaa") ➞ false

function isIdentical(s) {
	return s.split('').every(el => el === s[0]);
}

function isIdentical(s) {
	return (new Set(s)).size == 1
}

function isIdentical(s) {
	return /^(\w)\1*$/.test(s)
}

function isIdentical(s) {
	let x = s[0];as
	for (let i of s) {
		if (i !== x) { return false; }
	}
	return true;
}

function isIdentical(s){
	for (let i = 0; i < s.length; i++){
		if(s[0] !=s[i]){
			return false; 
		}
		  return true; 
		}
	}

// 126. Create a function that takes a string as its argument and returns the string in reversed order.

// White - reverse("Hello World") ➞ "dlroW olleH"

function reverse(str) {
	return str.split('').reverse().join('')
}

function reverse(str) {
  return [...str].reverse().join('');
}

function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result; 
}

// 127. Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

// Yellow - owofied("I'm gonna ride 'til I can't no more")
// ➞ "I'm gonna rwidwe 'twil I can't no morwe owo"

function owofied(sentence) {
	return sentence.replace(/([ie])/g, 'w$1') + ' owo';
}

function owofied(sentence) {
	return sentence.replace(/i/g, "wi").replace(/e/g, "we") + " owo";
}

function owofied(sentence) {
	var replaceI = sentence.replace(/\i/g, 'wi');
	var replaceWi = replaceI.replace(/\e/g, 'we');
	var owo = replaceWi + " owo";
	return owo;
}

// 128. You work in a toy car workshop, and your job is to build toy cars from a collection of parts. 
// Each toy car needs 4 wheels, 1 car body, and 2 figures of people to be placed inside. 
// Given the total number of wheels, car bodies and figures available, how many complete toy cars can you make?

// White - cars(2, 48, 76) ➞ 0
// # 2 wheels, 48 car bodies, 76 figures

// cars(43, 15, 87) ➞ 10

function cars(wheels, bodies, figures) {
	return Math.floor(Math.min(wheels / 4, bodies, figures / 2));
}

function cars(wheels, bodies, figures) {
  return Math.floor(Math.min(wheels/4, bodies/1, figures/2))
}

function cars(wheels, bodies, figures) {
	let num = 1; 
	while(wheels >= num * 4 && bodies >= num * 1 && figures >= num * 2){
		num++;
 }
 return num - 1;  
}

// 129. Create a function that takes two strings and returns true if the first string ends with the second string; otherewise return false.

// White - checkEnding("abc", "bc") ➞ true
// checkEnding("abc", "d") ➞ false

function checkEnding(str1, str2) {
	return str1.substring(str1.length - str2.length) === str2; 
}

function checkEnding(str1, str2) {
	return str1.endsWith(str2); 
}

function checkEnding(str1, str2) {
  return str2 === str1.substr(str1.length - str2.length, str2.length);
}

const checkEnding = (a, b) => {
  return [...a].join('').slice(a.length - b.length, a.length) === b
}

const checkEnding = (str1, str2) => str1.endsWith(str2);

// 130. Create a function that takes a string and returns a string with its letters in alphabetical order.

// White - AlphabetSoup("hello") ➞ "ehllo"

function AlphabetSoup(str) {
	return str.split('').sort().join('') 
}

function AlphabetSoup(str) {
	return [...str].sort().join(''); 
}

function AlphabetSoup(str) {
	return Array.from(str).sort().join(''); 
}

function AlphabetSoup(str) {
  const chars = str.split('').map(c => c.charCodeAt())
  chars.sort((a,b) => a-b)
  return chars.map(c => String.fromCharCode(c)).join('')
}

// 131. Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.

// White - same([1, 3, 4, 4, 4], [2, 5, 7]) ➞ true
// same([9, 8, 7, 6], [4, 4, 3, 1]) ➞ false

function sameCase(a1, a2) {
  return new Set(a1).size === new Set(a2).size; 
}

function same(a1, a2) {
	return [...new Set(a1)].length == [...new Set(a2)].length; 
}

function same(a1, a2) {
	let x = new Set(a1); 
	let y = new Set(a2); 

	if(x.size === y.size) {
		return true; 
	} else {
		return false; 
	}
}

// 132. Write a function that removes any non-letters from a string, returning a well-known film title.
// White - lettersOnly("R!=:~0o0./c&}9k`60=y") ➞ "Rocky"

function lettersOnly(str) {
	return str.replace(/[^a-zA-Z]+/g, '')
}

function lettersOnly(str) {
	return str.replace(/[^a-z]/gi, '');
}

function lettersOnly(str) {
	return str.replace(/[^a-z]/gi, '')
}

// 133. Given an array, transform that array into a mirror.

// Yellow - mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]

function mirror(arr) {
	return [... arr, ... arr.splice(0, arr.length - 1).reverse()]
}

function mirror(arr) {
	return arr.concat(arr.concat().reverse().slice(1));
}

function mirror(arr) {
	return [...arr, ...arr.slice(0,-1).reverse()]
}

function mirror(arr) {
	let result = []
	for(let i = arr.length - 2; i>=0; i--){
			result.push(arr[i])
	}
	 arr.push(...result)
	return arr
}

// 134. Create a function that takes an array of strings and returns the words that are exactly four letters.

// White - isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]

function isFourLetters(arr) {
	return arr.filter(x => x.split('').length == 4)
}

function isFourLetters (arr) {
  return arr.filter(x => x.length === 4);
}

function isFourLetters(arr) {
  var result = [];
  for(var i=0; i < arr.length; i++){
    if (arr[i].length == 4){
      result.push(arr[i]);
    }
	}
  return result;
}

function isFourLetters(arr) {
  return arr.reduce(function(acc, val){
  	if(val.length === 4) {
      acc.push(val)
    }
    
    return acc
  }, [])
}

// 135. Given two strings, create a function that returns the total number of unique characters from the combined string.

// "a", "e", "l", "p", "y"

function countUnique(s1, s2) {
	return new Set(s1 + s2).size;
}

function countUnique(s1, s2) {
	let x =s1.concat(s2).split('');
		return [...new Set(x)].length
	}

function countUnique(s1, s2) {
	return new Set((s1+s2).split("")).size
	}

function countUnique(s1, s2) {
	let r = "";
	s1 += s2;
	for (let x of s1) {
		if (!r.includes(x)) { r += x; }
	}
	return r.length;
}

// 136. creating a function that takes in a string and checks to see if it contains the following words or phrases:

// Yellow - "anime", "meme", "vine", "roasts", "Danny DeVito"

function preventDistractions(str) {
	let arr = ["anime", "meme", "vine", "roasts", "Danny DeVito"];
	return arr.some(x => str.includes(x)) ? "NO!" : "Safe watching!";
}

function preventDistractions(str) {
	const regexp = /anime|meme|vine|roasts|Danny DeVito/ig;
	return regexp.test(str)? "NO!":"Safe watching!";
}

function preventDistractions(str) {
	const Words = [ "anime", "meme", "vine", "roasts", "Danny DeVito"]
	return Words.some(word => str.includes(word)) ? "NO!" : "Safe watching!"
}

const preventDistractions = str => str.match(/\b\w*(anime|meme|vine|roasts|Danny\sDeVito)\w*\b/g) ? "NO!":"Safe watching!";

// 137. Create a function that returns the minimum number of removals to make the sum of all elements in an array even.

// Yellow - minimumRemovals([1, 2, 3, 4, 5]) ➞ 1
// minimumRemovals([5, 7, 9, 11]) ➞ 0


function minimumRemovals(arr) {
	sum = arr.reduce((a,b) => a + b) 
	return sum % 2 == 0 ? 0 : 1
}

function minimumRemovals(arr) {
	return arr.reduce((a,b) => a + b) % 2 ? 1 : 0
}

function minimumRemovals(arr) {
	return arr.filter(x => x % 2 != 0).length % 2 == 0 ? 0:1
}

function minimumRemovals(arr) {
	let count =0;
	for (let i=0; i < arr.length; i++) {
		count = count + arr[i];
	};
	if (count % 2 === 0) {
		return 0;
	}
	return 1;
}

// 138. Create a function that repeats each character in a string n times.

// Yellow - repeat("mice", 5) ➞ "mmmmmiiiiiccccceeeee"

function repeat(str, n) {
	return str
					.split('')
					.map(x => x.repeat(n))
					.join('');
}

function repeat(str, n) {
	return [...str].map(x => x.repeat(n)).join('');
}

function repeat(str, n) {
	var s = '';
  for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < n; j++) {
			s += str.charAt(i);
		}
	}
	return s;
}

// 139. Create a function that takes two arguments (item, times). 
// The first argument (item) is the item that needs repeating while the second argument (times)
//  is the number of times the item is to be repeated. Return the result in an array.

// White -  repeat(3, 4) -> (3, 3, 3, 3)
function repeat(item, times) {
	return Array(times).fill(item);
}

function repeat(item, times) {
	let a = [];
	for (let i = 0; i<times; i++){
		a.push(item)
	}
	return a
}

// 140. Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step. See step 1, 2 and 3 in the image above.
// Matchstick Houses
// matchHouses(4) ➞ 21

function matchHouses(step) {
	return step === 0 ? 0 : 5 * step + 1;
}

function matchHouses(step) {
	return step > 0 ? (step * 5 + 1) : 0
}

// 141. Write a function that returns true if a number is a palindrome.

// Yellow - isPalindrome(838) ➞ true
// isPalindrome(4433) ➞ false

function isPalindrome(n) {
	return [...String(n)].reverse().join('') === ''+n
}

function isPalindrome(n) {
	return String(n).split('').reverse().join('') == String(n); 
}

function isPalindrome(n) {
	return n.toString() === n.toString().split('').reverse().join('');
}

const isPalindrome = n => n == n.toString().split("").reverse().join("")

// 142. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.

// Yellow - addUp(4) ➞ 10
// addUp(13) ➞ 91

function addUp(num) {
  if (num === 1) return 1;
	return num + addUp(num - 1); // recursion 
}

function addUp(num) {
	let sum = 0; 
	for (let i = 1; i <= num; i++) {
		sum += i; 
	}
	return sum; 
}

function addUp(num) {
	if (num == 1) {
		return 1
	} else {
		return num + addUp(num -1); 
	}
}

function addUp(num) {
	return (!num) ? 0 : num + add(num - 1)
}


// 143. Create a function, that will for a given a, b, c, do the following:

// Yellow - Add a to itself b times. Then check if the result is divisible by c.

if (b == 1) {
	return 0
}
if ((abcmath(a, b - 1, c) + a + a) % c === 0) {
	return true; 
} else {
  return false; 
}

function abcmath(a, b, c) {
	for (let i = 0; i <= b; i++) {
		a = a + a;
	}
	return a % c === 0;
}

function abcmath(a, b, c) {
	let sum = a;
	for (let i = 0; i < b; i++) {
		sum += sum; 
	}
	  return sum % c == 0;
}

function abcmath(a, b, c) {
	for (var i = 0; i < b; i++) {
		a += a;
	}
	return a % c === 0;
}

function abcmath(a, b, c) {
	var count = 0;
	for (i = a; count <= b; count++){
		a === a + a;
	}
	if (a % c === 0){
		return true
	} else {
		return false;
	}
}

// 144. Write a function that calculates the factorial of a number recursively. Recursion

// factorial(5) ➞ 120
// factorial(1) ➞ 1
// factorial(0) ➞ 1

const factorial = n => n == 0 ? 1 : n * factorial(n - 1);

const factorial = n => Array.from({length : n}, (v, i) => i+1).reduce((a, e) => a * e, 1)

function factorial(n) {
  if (n == 0 || n == 1)
		return 1; 
  for (let i = n - 1; i >= 1; i--) {
		n *= i;
	}
	return n; 
}

function factorial(n) {
	if( n > 1 ) {
		return n * factorial(n-1);
	}
	return 1;
}

function factorial(n) {
	return n < 2 ? 1 : n * factorial(n-1);
}

function factorial(n) {
	let result = n 
	if (n == 0 || n == 1) return 1
	while (n > 1) { 
    n--;
    result *= n;
  }
  return result;
}

// 145. Write a function that finds the sum of an array. Make your function recursive.

// Yellow - sum([1, 2, 3, 4]) ➞ 10

function sum(arr) {
  return arr != 0 ? arr.reduce((a,b) => a + b) : 0
}

function sum(arr) {
	return arr.length > 0 ? arr.reduce((a, b) => a + b) : 0
}

function sum(arr) {
	return arr.length === 0?0:arr.pop()+sum(arr);
}

function sum(arr) {
	let sum = 0;
	for(let i=0; i<arr.length; i++){	
			sum += arr[i]
	}
	return sum
}

// 146. Create a function that takes two strings as arguments and returns the number of times the first string is found in the second string. Regex
// Yellow - charCount("b", "big fat bubble") ➞ 4

function charCount(myChar, str) {
	let arr = str.split('')
	let count = arr.filter(x => x == myChar)
	return count.length
}
 
function charCount(myChar, str) {
	return [...str].filter(x => x === myChar).length;
}

function charCount(myChar, str) {
	let count = 0;
	for (let i=0; i<str.length; i++) {
		if (str.charAt(i) === myChar) {
			count++;
		}
	}
	return count;
}

// 147.  Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise.

// timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

// timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

function timeForMilkAndCookies(date) {
	return date.getMonth() === 11 && date.getDate() === 24; 
}

function timeForMilkAndCookies(date) {
  var day = date.getDate();
  var month = date.getMonth();
  
  if(day == 24 && month == 11) {
    return true
  } else {
    return false
  }
}

// 148. Write a function that takes a positive integer and return its factorial. recursion

// Yellow -  factorial(4) ➞ 24
// factorial(0) ➞ 1

function factorial(z) {
	if( z > 1 ) {
	  return z * factorial(z - 1);
	}
	  return 1;
}

function factorial(z) {
	return z ? (z * factorial(z - 1)) : 1
}

function factorial(z) {
	let result = 1
	for (let i = 1; i <= z; i++) {
		result *= i
	}
	return result
}

function factorial(z) {
	if (z === 0){
		return 1
	} else {
		var answer = 1;
		while (z > 0) {
			answer = z * answer;
		  	z -= 1
		}
		return answer
	}
}

const factorial = num => (num <= 1 ? 1 : num * factorial(num - 1));

// 149. Write a regular expression that matches only an even number. Numbers will be presented as strings.

// "132" ➞ true
//"29" ➞ false

let x = /[02468]$/

let x = /^\d*[02468]$/;

// 150. Create a function that takes an array of non-negative numbers and strings and return a new array without the strings. Filter

// White - filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

function filterArray(arr) {
	return arr.filter(function (x) {
		return typeof x == 'number'
	})
}

function filterArray(arr) {
  return arr.filter(n => typeof n === 'number');
}

function filterArray(arr) {
  return arr.filter(num => Number.isInteger(num));
}

function filterArray(arr) {
  var returnArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "number") {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
}

function filterArray(arr) {
  var result = []; 
  var filterArr = arr.map(function(str) {
    if(typeof str === 'number') {
      result.push(str);
    }
  });
  
  return result;
}

// 151. Create a function that takes a string and returns a string in which each character is repeated once.

// White - Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
	return str.split('').map(x => x + x).join('')
}

let doubleChar = str => str.replace(/./g,'$&$&');

let doubleChar = s => s.replace(/./g, x => x+x)

function doubleChar(str) {
  var result = "";  
  for (var i = 0; i < str.length; i++){
    result = result.concat(str.charAt(i), str.charAt(i));
  }  
  return result;
}

function doubleChar(str) {
  var string = str;
  var newString = [];
  
  for(var i = 0; i < string.length; i++) {
		newString.push(string[i]);
    newString.push(string[i]);
  }
  return newString.join('');
}

/* 152. Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
HOF 

If f returns the larger number, return the string f.
If g returns the larger number, return the string g.
If the functions return the same number, return the string neither.

*/

// Yellow - whichIsLarger(() => 5, () => 10) ➞ "g"

// whichIsLarger(() => 25,  () => 25) ➞ "neither"

// whichIsLarger(() => 505050, () => 5050) ➞ "f"

function whichIsLarger(f, g) {
	return f() > g() ? "f" : f() < g() ? "g" : "neither";
}

function whichIsLarger(f, g) {
	if (f() === g()) return 'neither'
	return f() > g () ? 'f' : 'g'
}

function whichIsLarger(f, g) {
	return f() > g() ? "f" : 
				 f() === g() ? "neither" : "g"
}

function whichIsLarger(f, g) {
  if (f() > g()) return 'f';
  else if (f() < g()) return 'g';
  else return 'neither';
}

function whichIsLarger(f, g) {
  const fval = f(), gval = g();
  return (fval > gval) ? 'f' : (gval > fval) ? 'g' : 'neither';
}

function whichIsLarger(f, g) {
	if(f()>g()){
		return "f";
	}else if(f()<g()){
		return "g"
	}else if(f()==g()){
		return "neither";
	}
}

// 153. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// White - minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)] 
}

const minMax = arr => [Math.min(...arr), Math.max(...arr)];

function minMax(arr) {
  arr.sort(function(a, b){return a-b});
  return [arr[0], arr[arr.length-1]];
  
}

function minMax(arr) {
  var returnArr = [];
  var min = arr[0];
  var max = arr[0];
  
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
    if(arr[i] > max) {
      max = arr[i];
    }
  }

	returnArr.push(min);
  returnArr.push(max);
  
  return returnArr;
}

function minMax(arr) {
  return arr.sort((a,b) => a - b).slice(0, 1).concat(arr.slice(-1));
}

// 154. Create a function that returns the index of the first vowel in a string. REGEX

// White - firstVowel("hello") ➞ 1
// firstVowel("STRAWBERRY") ➞ 3

function firstVowel(str) {
	str.search(/[aeiou]/i); 
}

function firstVowel(str) {
	return str.search(/[aeiou]/gi);
}

function firstVowel(str) {
	return str.search(/a|e|i|o|u/i);
}

function firstVowel(str) {
	return str.indexOf(str.match(/[aeiou]/i))
	}

function firstVowel(str) {
	var r = str.match(/[aiueo]/i);
	if (r) {
		return str.indexOf(r[0]);
	}
	return -1;
}

// 155. A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.

// Yellow - societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

function societyName(friends) {
	let order = friends.sort()
	let initial = order.map(x => x[0])
	return initial.join('')
}

function societyName(friends) {
	return friends.map(x => x[0]).sort().join("")
}

function societyName(friends) {
	return friends.map( person => person[0].toUpperCase() )
		           .sort()
		           .join('');
}

function societyName(friends) {
	return friends.reduce(function(acc,current)  {
    return acc + current[0]
  }, "").split("").sort().join("")
}

// 156. Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

// White - largestSwap(27) ➞ false

// largestSwap(43) ➞ true

function largestSwap(num) {
	const digits = num.toFixed().split('')
	return digits[0] >= digits[1]
}

function largestSwap(num) {
	const swapNum = Number([...num.toString()].reverse().join(""))
	return swapNum < num ? true : swapNum > num ? false : true 
}

function largestSwap(num) {
	return num >= Number(String(num).split("").reverse().join(""));
}

function largestSwap(num) {
	num = num.toString()
	if (num[1] > num[0]) {
		return false
	}
	return true
}

// 157. Create a function that takes in an array of numbers and returns the sum of its cubes.

// Yellow - sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes([3, 4, 5]) ➞ 216

function sumOfCubes(nums) {
	arr = nums.map(n => Math.pow(n, 3)); 
	sum = arr.reduce((acc, cur) => acc + cur); 
	return nums.length !== 0 ? sum : 0;
}

function sumOfCubes(nums) {
	arr = nums.map(x => Math.pow(x,3));
	return (nums.length > 0) ? arr.reduce((a,b) => a + b) : 0; 
}

const sumOfCubes = nums => nums.map(x => x * x * x).reduce((a,c) => a + c, 0);

const sumOfCubes = nums => nums.map(x => Math.pow(x ,3)).reduce((a,b)=> a+b,0);

// 158. Create a function that returns the number of hashes and pluses in a string.

// Yellow - hashPlusCount("###+") ➞ [3, 1]

// hashPlusCount("##+++#") ➞ [3, 3]

function hashPlusCount(str) {
	regex1 = /\#/gi; 
	regex2 = /\+/gi; 
	arr1 = str.match(regex1).length
	arr2 = str.match(regex2).length
	return [arr1, arr2]
}

function hashPlusCount(str) {
	return [str.split('+').join('').length, str.split('#').join('').length]
}

let hashPlusCount=([...str])=>
[str.filter(x=>x=='#').length,str.filter(x=>x=='+').length]

function hashPlusCount(str) {
	return [str.replace(/\+/g,'').length,
	        str.replace(/\#/g,'').length];
}

function hashPlusCount(str) {
	return [str.split("").filter(x => x === "#").length,
				 str.split("").filter(x => x === "+").length,]
}

// 159. Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

// Yellow - reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
// reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"

function reverseCase(str) {
	return [...str].map(c => c.toLowerCase() == c ? c.toUpperCase() : c.toLowerCase()).join("")
}

function reverseCase(str) {
	let newString = '';
	for (let i = 0; i < str.length; i++) {
		let letter = str.charAt(i);
		if (letter == letter.toUpperCase()) {
            letter = letter.toLowerCase();
        } else {
            letter = letter.toUpperCase();
        }
		newString += letter;
	}
	return newString;
}

function reverseCase(str) {
	return str.split('').map(a => a == a.toLowerCase() ? a.toUpperCase()
				 : a.toLowerCase()).join('');
}

function reverseCase(str) {
	return str.split('').map(l => {
		return l.match(/[a-z]/) ? l.toUpperCase() : l.toLowerCase()
	}).join('')
}


function reverseCase(str) {
	return str.split('').map(x => x === x.toUpperCase() ? x.toLowerCase():x.toUpperCase()).join('');
}

function reverseCase(str) {
	return str.split('').map(letter => letter == letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('')
}

function reverseCase(str) {
	return [...str].map(letter => {
		return letter == letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()
		}).join('')
}

// 160. Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

// White - canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

function canNest(arr1, arr2) {
   return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)
}

function canNest(arr1, arr2) {
	arr1.sort(), arr2.sort();
	let min = arr2[0], max = arr2[1];
	return arr1[0] > min && arr1[arr1.length - 1] < max;
}

// 161. Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

// Yellow - getAbsSum([2, -1, 4, 8, 10]) ➞ 25
// getAbsSum([2, 4, 6, 8, 10]) ➞ 30

function getAbsSum(arr){
  return arr.reduce((count, num) => count + Math.abs(num), 0)
}

function getAbsSum(arr){
  return arr.reduce((a, b)=> a + Math.abs(b), 0);
}

function getAbsSum(arr){
  let sum = 0; 
  arr.forEach(e => sum += Math.abs(e)); 
  return sum;
}

function getAbsSum(arr){
  var sum = 0;
  arr.map(function(ar){
    sum += Math.abs(ar);
  })
  return sum;
}

function getAbsSum(arr){
  var i = 0
	arr.forEach(x => i += Math.abs(x))
	return i;
}

// 162. Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

// White - factorial(5) ➞ 120
// factorial(13) ➞ 6227020800

function factorial(int) {
	if(int < 1) {
		return 1;
	} else {
		return int * factorial(int-1);
	}
 }

function factorial(int) {
	let num = 1;
  for(let i = 1; i <= int; i++) {
    num *= i;
  }
  return num;
}

const factorial = int => int == 0 ? 1 : int * factorial(int - 1);

// 163. Create a function that determines whether an input value is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.

// White - isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false


function isOmnipresent(arr, val) {
	return arr.every(x => x.includes(val));
}

function isOmnipresent(arr, val) {
	for (let i =0; i<arr.length; i++){
		if (arr[i].includes(val)){
		}else{return false}
	}
	return true;
}


function isOmnipresent(arr, val) {
	var ans = 0;
  while(ans < arr.length){
    if (arr[ans].indexOf(val) !== -1){
      ans++;
    } else {
      return false;
    }
  }
  return true;
}

function isOmnipresent(arr, val) {
	return arr.map(a => a.includes(val)).every(res => res == true)
	}

/* 164.	Write a function that returns the number of users in a chatroom based on the following rules:

If there is no one, return "no one online".
If there 1 person, return "[user1] online".
If there are 2 people, return [user 1] and [user 2] online".
If there are n>2 people, return the first two names and add "and n-2 more online".
For example, if there are 5 users, return:

"[user1], [user2] and 3 more online"

*/

/* Yellow - chatroomStatus([]) ➞ "no one online"

chatroomStatus(["paRIE_to"]) ➞ "parIE_to online"

chatroomStatus(["s234f", "mailbox2"]) ➞ "s234f and mailbox2 online"

chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
➞ "pap_ier44, townieBOY and 4 more online"

*/

function chatroomStatus(users) {
	if (users.length == 0){
		return 'no one online'
	} else if (users.length == 1){
		return `${users[0]} online`
	} else if (users.length == 2){
		return `${users[0]} and ${users[1]} online`
	} else if (users.length > 2){
		return `${users[0]}, ${users[1]} and ${users.length - 2} more online`
	}
}

function chatroomStatus(users) {
	if(users.length === 0){
		return "no one online";
	}
	else if(users.length === 1){
		return users[0] + " online";
	}
	else if(users.length === 2){
		return users[0] + " and " + users[1] + " online";
	}
	else {
		return users[0]  + ", " + users[1] + " and "+ (users.length-2) +" more online" ;
	}
}

function chatroomStatus(users) {
	switch (users.length){
		case 0: return "no one online"
		case 1: return users[0]+' online'
		case 2: return users[0]+' and '+users[1]+ ' online'
		default: return users[0]+', '+users[1]+' and '+(users.length-2)+' more online'
	}
}

const chatroomStatus = users => {
  const { length } = users;
  if (length > 2) {
    return `${users.slice(0, 2).join(', ')} and ${length - 2} more online`;
  }
  if (length < 1) return 'no one online';
  return `${users.join(' and ')} online`;
};

// 165. Write a function that returns true if an object is empty, and false otherwise.

// White - isEmpty({}) ➞ true
// isEmpty({ a: 1 }) ➞ false

function isEmpty(obj) {
	for(let key in obj) {
			if(obj.hasOwnProperty(key))
					return false;
	}
	return true;
}

function isEmpty(obj) {
	return !Object.keys(obj).length
}

function isEmpty(obj) {
  return Object.keys(obj).length == 0;
}

function isEmpty(obj) {
	return Object.keys(obj).length? false:true
}

// 166. A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.

// Create a function that transforms an array into a set.

// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]

// set([4, 4, 4, 4]) ➞ [4]

// set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]

// https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c

function set(arr) {
	[...new Set(arr)]; 	
	arr.filter((item, index) => arr.indexOf(item) === index); 
	return arr.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []); 
}

function set(arr) {
	return [...new Set(arr)]
}

function set(arr) {
	return arr.filter((n, index) => arr.indexOf(n) == index);
}

const set = (arr) => Array.from(new Set(arr))

function set(arr) {
	const set = [];
	arr.map(e => {
		if (set.includes(e)) {
			return null
		} else {
			set.push(e)
		}
	})
return set
}

function set(arr) {
	var a = [];
	for(var i = 0; i< arr.length; i++){
		if(!a.includes(arr[i])){
			a.push(arr[i]);
		}
	}
	return a;
}

// 167. Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

// isPrefix should return true if it begins with the prefix argument.
// isSuffix should return true if it ends with the suffix argument.
// Otherwise return false.

/* 
Yellow 

isPrefix("automation", "auto-") ➞ true

isSuffix("arachnophobia", "-phobia") ➞ true

isPrefix("retrospect", "sub-") ➞ false

isSuffix("vocation", "-logy") ➞ false

*/

const isPrefix = (word, prefix) => word.startsWith(prefix.slice(0, -1));

const isSuffix = (word, suffix) => word.endsWith(suffix.slice(1));

function isPrefix(word, prefix) {
	return word.startsWith(prefix.replace("-", ""));
}

function isSuffix(word, suffix) {
	return word.endsWith(suffix.replace("-", ""));
}

const isPrefix = (word, prefix) => word.startsWith(prefix.split('-')[0]);
const isSuffix = (word, suffix) => word.endsWith(suffix.split('-')[1]);

// 168. Write a regular expression that matches a string if and only if it is a valid zip code.

// White - "32554" ➞ true

// "92 342" ➞ false
// Invalid: contains a whitespace

// "9@342" ➞ false
// Invalid: contains a non-numeric character

// "923444" ➞ false
// Invalid: length is not 5

const x = /^\d{5}$/;

let x = /^[0-9]{5}$/;

let x = /^[0-9][0-9]{3}[0-9]$/;

let x = /(^\d{5}$)|(^\d{5}-\d{4}$)/

// 168. Create a function to convert an array of percentages to their decimal equivalents.

// White - convertToDecimal(["1%", "2%", "3%"]) ➞ [0.01, 0.02, 0.03]

function convertToDecimal(perc) {
	return perc.map(x => parseFloat(x)/100);
}

function convertToDecimal(perc) {
	return perc.map(i => parseFloat(i.slice(0, i.length - 1)) / 100)
}

function convertToDecimal(perc) {
	let decimalsArray = []
    for(let i = 0; i < perc.length; i++){
        let percentagesNumbers = parseFloat(perc[i])/100;
         decimalsArray.push(percentagesNumbers);
    }
    return decimalsArray;
}

// 169. Write two functions:

// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.

// toArray(235) ➞ [2, 3, 5]

// toArray(0) ➞ [0]

// toNumber([2, 3, 5]) ➞ 235

// toNumber([0]) ➞ 0

const toArray = num => String(num).split('').map(Number);
const toNumber = arr => Number(arr.join(''));

function toArray(num) {
	return [...num.toString()].map(s => Number(s))
}

function toNumber(arr) {
	return Number(arr.join(""))
}

function toArray(num) {
	return String(num).split("").map(Number);
}

function toNumber(arr) {
	return parseInt(arr.join(""))
}

function toArray(num) {
  var arr = [...num.toString()];
	return arr.map(el=> Number(el));
}

function toNumber(arr) {
  return Number(arr.join(''));
}

let toArray = function(num){
	let a = [];
	while(true){
			a.push(num%10);
			num = Math.floor(num/10);
			if(num == 0){
					break;
			}
	}
	a.sort((a, b) => a - b);
	return a;
}

function toNumber(arr) {
	let num = parseInt(arr.join(''), 10);
	return num;
}

// 170. Write a function that takes a string as an argument and returns the left most digit in the string.

// Yellow - leftDigit("TrAdE2W1n95!") ➞ 2
// leftDigit("V3r1ta$") ➞ 3
// leftDigit("U//DertHe1nflu3nC3") ➞ 1
// leftDigit("J@v@5cR1PT") ➞ 5

function leftDigit(num) {
	let regex = /[0-9]/g;
  let found = num.match(regex)
	return parseInt(found[0])
}

const leftDigit = str => Number(str.match(/[\d]/));

function leftDigit(num) {
  return +num.split("").find(function(e) {
    return !isNaN(e);
  });
}

function leftDigit(num) {
	return +num.replace(/[^\d]/g, '')[0]
}

function leftDigit(num) {
	return Number(num.match(/[0-9]/gi)[0])
}


// 171. Create a function that moves all capital letters to the front of a word.

// White capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"

function capToFront(s) {
  return s.match(/[A-Z]/g).join('') + s.match(/[a-z]/g).join('');
}

function capToFront(s) {
	let lowerCase = [...s].filter(l => l === l.toLowerCase())
	let upperCase = [...s].filter(l => l === l.toUpperCase())
	return [...upperCase,...lowerCase].join("")
}

function capToFront(s) {
	let inputArr = s.split("");
	let indexArr = [];
	let resultStr = "";

	for (i = 0; i < inputArr.length; i++) {
			if (inputArr[i] != inputArr[i].toLowerCase()) {
					resultStr = resultStr + inputArr[i];
					indexArr.push(i);
			};
	};

	for (i = indexArr.length - 1;  i >= 0; i--) {
			inputArr.splice(indexArr[i], 1);
			console.log(inputArr)
	}

	inputArr.forEach(function(element) {
			resultStr = resultStr + element;
	})
return resultStr;
}

function capToFront(s) {
	var sLetters = s.split('')
var upper = []
var lower = []
sLetters.forEach(function(letter) {
	if(letter === letter.toUpperCase()) {
		upper.push(letter)
	} else {
		lower.push(letter)
	}
	})
return upper.join('') + lower.join('')
}

// 172. Create a function that takes a string and returns the number (count) of vowels contained within it.

// White - countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1
// countVowels("Prediction") ➞ 4

function countVowels(str) {
	let regex = /[aeiou]/g;
	let found = str.match(regex);
	return found.length
 }

function countVowels(str) {
  return str.match(/[aeiou]/g).length;
}

function countVowels(str) {
  return str.match(/[aeiou]/gi).length;
}

function countVowels(str) {
  return str.split('').reduce(function(count, val){
    if (val.match(/[aeiuo]/)) {
      count++;
    }
    return count;
  },0);
}

// 173. Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

// White - isSymmetrical(7227) ➞ true

// isSymmetrical(12567) ➞ false

function isSymmetrical(num) {
  return String(num).split('').reverse().join('') == String(num); 
}

const isSymmetrical = num => {
	const str = String(num);
	return str.split('').reverse().join('') === str;
}

function isSymmetrical(num) {
	return num.toString().split("").reverse().join("") === num.toString();
}

const isSymmetrical = num => num == num.toString().split('').reverse().join('');

// 174. Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// White - isAvgWhole([1, 3]) ➞ true
// isAvgWhole([1, 2, 3, 4]) ➞ false
// isAvgWhole([1, 5, 6]) ➞ true
// isAvgWhole([1, 1, 1]) ➞ true
// isAvgWhole([9, 2, 2, 5]) ➞ false

function isAvgWhole(arr) {
	sum = arr.reduce((acc,cur) => acc += cur,0)
	return sum % arr.length == 0 ? true : false; 
}

function isAvgWhole(arr) {
	return Number.isInteger(arr.reduce((accum, val) => accum + val) / arr.length) 
}

function isAvgWhole(arr) {
	var sum = 0;
	arr.forEach(num => {
		sum += num;
	})
	if (sum/arr.length % 1 === 0) {
		return true;
	}
	return false;
}

// 175. Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

// White - sayHelloBye("alon", 1) ➞ "Hello Alon"
// sayHelloBye("Tomi", 0) ➞ "Bye Tomi"
// sayHelloBye("jose", 0) ➞ "Bye Jose"

function sayHelloBye(name, num) {
	n = name.charAt(0).toUpperCase() + name.slice(1)
	return num === 1 ? `Hello ${n}` : `Bye ${n}`
}

function sayHelloBye (name, num) {
	name = name[0].toUpperCase() + name.slice(1);
	return num === 1 ? `Hello ${name}` : `Bye ${name}`;
}

function sayHelloBye (name, num) {
	let say = ""
	let capName = name[0].toUpperCase() + name.slice(1);
	if (num == 0){
		say = "Bye ";
	}else{
		say = "Hello "
	}
	return say + capName;
}

// 176. Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.

// White - isValid("59001") ➞ true
// isValid("853a7") ➞ false
// isValid("732 32") ➞ false

function isValid(zip) {
	let regex = /^[0-9]{5}$/;
	return zip.match(regex) ? true : false; 
}

function isValid(zip) {
	return zip.length == 5 && !isNaN(zip);
	}

function isValid(zip) {
	return !isNaN(zip) && zip.length === 5
}

function isValid(zip) {
	return !isNaN(zip);
}

// 177. Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

// White - convertBinary("house") ➞ "01110"
// convertBinary("excLAIM") ➞ "0100000"
// convertBinary("moon") ➞ "0111"

function convertBinary(str) {
	return str
					.replace(/[a-m]/gi, '0')
					.replace(/[n-z]/gi, '1');
}

const convertBinary = str =>
	str.replace(/[a-m]|([n-z])/gi, (match, g1) => Number(match === g1));
	
function convertBinary(str) {
	var s = /[a-mA-M]/;
	return str.split("").map(x => x.match(s) ? 0 :  1).join("");
}

// 178. Create a function to count the number of 1s in a 2D array.

// Yellow - countOnes([
//   [1, 1, 1],
//   [0, 0, 1],
//   [1, 1, 1]
// ]) ➞ 7

function countOnes(matrix) {
	return matrix.toString().split(',').filter(x => x == '1').length
}

function countOnes(matrix) {
	return matrix.join("").split("").filter(x => x == "1").length;
}

function countOnes(matrix) {
	return matrix.reduce((a, arr) => a + arr.reduce((_a, n) => _a += n === 1 ? 1: 0, 0), 0);
}

function countOnes(matrix) {
	let count = 0;
	for(i=0; i<matrix.length; i++){
		matrix[i].map(x => {
			if(x === 1){
				count += 1;
			}
		})
	}
	return count;
}

function countOnes(matrix) {
	let arr= matrix.concat(...matrix)
	    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++;
        }
    }
    return count;
}

function countOnes(matrix) {
	const flat =  matrix.reduce((acc1, m)=>acc1.concat(m),[])
	return flat.filter(val=>val===1).length
}

// 179. Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

// Yellow  - totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63
// totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10
// totalVolume([1, 1, 1]) ➞ 1

const totalVolume = (...boxes) =>
	boxes.reduce((total, [l, w, h]) => total + l * w * h, 0);
	
function totalVolume(...boxes) {
	var sum=0;
	for (i=0; i<boxes.length; i++) {
		sum+=boxes[i][0] * boxes[i][1] * boxes[i][2];
	}
	return sum;
}

function totalVolume(...boxes) {
	let total = 0;
	for (var i = 0; i < boxes.length; i++) {
		total += boxes[i].reduce((a, b) => a * b);
	}
	return total;
}

function totalVolume(...boxes) {
	return [...boxes].map(arr => arr.reduce((a,b) => a * b)).reduce((a,b) => a + b);
}

const totalVolume = (...boxes) => boxes.map(el => el.reduce((sum,item) => sum *=item,1)).reduce((a,b)=> a+b,0)

// 180. Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

// White - joinPath("portion1", "portion2") ➞ "portion1/portion2"
// joinPath("portion1/", "/portion2") ➞ "portion1/portion2"

function joinPath(portion1, portion2) {
	return `${portion1.replace('/','')}/${portion2.replace('/','')}`;
}

function joinPath(portion1, portion2) {
	let p1 = portion1.includes('/')? portion1.slice(0,-1) : portion1
	let p2 = portion2.includes('/')? portion2.slice(1) : portion2
	return `${p1}/${p2}`
}

function joinPath(portion1, portion2) {
  return portion1.replace(/\//g,'')+'/'+portion2.replace(/\//g,'');
}

const joinPath = (...portions) => portions.map(portion => portion.replace(/\//g, '')).join('/');

// 181. Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// sortByLength(["Google", "Apple", "Microsoft"])
// ➞ ["Apple", "Google", "Microsoft"]

// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

function sortByLength(arr) {
	return arr.sort(function(a,b){
		return a.length - b.length;
	})
}

/* 

If compareFunction is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFunction). If a and b are two elements being compared, then:

If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first).
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e. b comes first).
compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.

*/

function sortByLength(arr) {
	return arr.sort((a, b) => { return a.length - b.length})
}

function sortByLength(arr) {
	return arr.sort((a, b) => a.length - b.length);
}

function sortByLength(arr) {
	return arr.sort(function(a,b){
		return a.length - b.length;
	})
}

function sortByLength(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      var temp = array[j]
      if (array[j].length > array[j + 1].length) {
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
	return array;
}

// 182. Given two numbers, return true if the sum of both numbers is less than 100. Return false otherwise.

// lessThan100(22, 15) ➞ true
// 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// 83 + 34 = 117

function lessThan100(a, b) {
  sum = a + b
	return sum < 100 ? true : false; 
}

const lessThan100 = (a, b) => a + b < 100;

// 183. Given a number n, write a function that returns PI to n decimal places.

// White - myPi(5) ➞ 3.14159

// myPi(4) ➞ 3.1416

// myPi(15) ➞ 3.141592653589793

function myPi(n) {
	return Number(Math.PI.toFixed(n));
}

function myPi(n) {
	return parseFloat(Math.PI.toFixed(n))
}

function myPi(n) {
	var pi = +(Math.PI);
	return Number(parseFloat(pi).toFixed(n));
}

function myPi(n) {
	var num= Math.PI.toFixed(n);
  return parseFloat(num);
}

// 184. Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// White - spelling("bee") ➞ ["b", "be", "bee"]
// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]

function spelling(str) {
	return str.split('').map((c, i) => str.slice(0, i+1) );
}

function spelling(str) {
	let newArr = [];
	for(let i = 1; i <= str.length; i++){
		newArr.push(str.slice(0, i));
	}
	return newArr;
}

const spelling = str => {
	let arr = [];
	for(let i = 1; i<=str.length; i++)
		arr.push(str.substr(0, i));
	return arr;
}

function spelling(str) {
	let result = [];
	let word = "";
	for(let i in str) {
		word = word + str[i];
		result.push(word);
	}
	return result;
}

function spelling(str) {
	var a = [];
	for(var i = 0; i < str.length; i++){
		a.push(str.slice(0,i+1));
	}
	return a;
}

// 185. Create a function that takes a string and returns a new string with all vowels removed.

// removeVowels("I have never seen a thin person drinking Diet Coke.")
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."

// removeVowels("We're gonna build a wall!")
// ➞ "W'r gnn bld  wll!"

function removeVowels(str) {
	return str.replace(/[aeiou]/gi, '')
}

function removeVowels(str) {
  return str.split("").filter(char => 'aeiouAEIOU'.indexOf(char) < 0).join("")
}

// 186. You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".

// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

// findNemo("Nemo is me") ➞ "I found Nemo at 1!"

// findNemo("I Nemo am") ➞ "I found Nemo at 2!"

findNemo = a => {
  b = a.split(" ").indexOf("Nemo") + 1
  return b ? `I found Nemo at ${b}!` : "I can't find Nemo :("
}

function findNemo(sentance) {
	let str = sentance.split(' ');
	for (let i = 0; i < str.length; i++){
		if (str[i] == "Nemo") return "I found Nemo at " + (i+1) + "!";
	}
	
	return "I can\'t find Nemo :(";
}

function findNemo(sentence) {
	let newSentence = sentence.split(" ");
	for(let i = 0; i < newSentence.length; ++i){
		if(newSentence[i] === "Nemo") {
			return `I found Nemo at ${i + 1}!`
		}
	}
	return "I can't find Nemo :("
}

// 187. Given a string of letters, how many capital letters are there?

// White - capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6

// capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14

// capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0

function capitalLetters(txt) {
	let regex = /[A-Z]/g
	count = txt.match(regex) || []
		return count.length
}

const capitalLetters = s => {
	return [...s].filter(v => v === v.toUpperCase()).length;
}

const capitalLetters = txt => txt.split(/[A-Z]/).length - 1;

function capitalLetters(txt) {
	return txt.match(/[A-Z]/g)!==null ? txt.match(/[A-Z]/g).length : 0
}

// 188. An array is special, if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

// Yellow - isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// Index 2 has an odd number 9.

function isSpecialArray(arr) {
	for (var i in arr) {
		if (i%2 != arr[i]%2) return false;
	}
	return true;
}

const isSpecialArray = a => a.every((v, i) => v%2 == i%2);

function isSpecialArray(arr) {
	return arr.every((n, i) => n % 2 === i % 2);
}

function isSpecialArray(arr) {
  return arr.every((element, index) => element%2 === index%2)
}

function isSpecialArray(arr) {
	return arr.every((a,i) => (a % 2) === (i % 2));
}

// 189. Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

// White - transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]

// transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]

function transformUpvotes(str) {
	return str.split(' ')
		.map(a => (a.endsWith("k") ? parseFloat(a) * 1000 : parseInt(a)));
}

function transformUpvotes(str) {
	return str.split(' ').map(element => element.endsWith('k') ? parseFloat(element)*1000 : parseFloat(element));
}

const transformUpvotes = s => s.split(" ").map(x =>
	+ (x.replace(".", "").replace("k", "00")));

function transformUpvotes(str) {
	str = str.split(" ");
	for (var i = 0; i < str.length; i++){
		if (str[i].charAt(str[i].length - 1) == "k"){
			str[i] = str[i].slice(0, str[i].length - 1) * 1000;
		}
	}
	return str.map(x => Number(x));
}

// 190. Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

// Yellow - formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468"
// formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) ➞ "(345) 501-2527"

function formatPhoneNumber(numbers) {
  return `(${numbers.slice(0,3).join("")}) ${numbers.slice(3,6).join("")}-${numbers.slice(6).join("")}`
}

function formatPhoneNumber(numbers) {
  const first = numbers.slice(0, 3).join('')
  const middle = numbers.slice(3,6).join('')
  const last = numbers.slice(6).join('')
  return `(${first}) ${middle}-${last}`
}

function formatPhoneNumber(numbers) {
  return numbers.join('').replace(/^(\d{3})/, '($1) ').replace(/(\d{3})(\d{4})$/, '$1-$2');
}

// 191. Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

// White - highLow("1 2 3 4 5") ➞ "5 1"

// highLow("1 2 -3 4 5") ➞ "5 -3"

// highLow("1 9 3 4 -5") ➞ "9 -5"

// highLow("13") ➞ "13 13"

function highLow(str) {
  var nums = str.split(' ');
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}

function highLow(str) {
  const num = str.split(' ');
  return [
    Math.max(...num),
    Math.min(...num),
  ].join(' ');
}

function highLow(str) {
  str = str.split(" ")
  return Math.max(...str) + " " + Math.min(...str) 
}

function highLow(str) {
  let a = str.split(' ').map((x) => +x);
  return Math.max(...a) + ' ' + Math.min(...a);
}

// 192. Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

function identicalFilter(arr){
	return arr.filter((str) => new Set(str).size === 1)
}

function identicalFilter(arr) {
	return arr.filter(val => {
		return new Set(val.split('')).size == 1
	})
}

function identicalFilter(arr) {
	return arr.filter(i => i === i[0].repeat(i.length))
}

function identicalFilter(arr) {
	return arr.filter(word => {
		let keep = true;
		for (let i = 1; i < word.length; i++) {
			if (word[i] !== word[0]) {
				keep = false;
			}
		}
		return keep;
	})
}

// 192. Write a function that reverses all the words in a sentence which contains a particular letter.

// Yellow - specialReverse("word searches are super fun", "s")
// ➞ "word sehcraes are repus fun"

// specialReverse("first man to walk on the moon", "m")
// ➞ "first nam to walk on the noom"

function specialReverse(s, c) {
	return s.split(" ")
		.map(x => x[0]== c ? x.split("").reverse().join(""):x)
		.join(" ");
}

function specialReverse(s, c) {
	return s.split(" ").map(x => (x.includes(c)? x.split("").reverse().join("") : x)).join(" ")
}

function specialReverse(s, c) {
	return s.split(" ")
		.map(a => a[0] == c ? a.split("").reverse().join("") : a)
		.join(" ");
}

// 193. Create a function that returns only strings with unique characters.

// Yellow - filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞ ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

// filterUnique(["88", "999", "989", "9988", "9898"]) ➞ []

// filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞ ["ABCDE", "BED", "BAC"]

const filterUnique = arr =>
arr.filter(x => new Set(x).size == x.length);

function filterUnique(arr) {
	return arr.filter(a => new Set(a.split('')).size === a.length)
}

function filterUnique(arr) {
	return arr.filter(a => new Set(a.split('')).size === a.length);
}

// 194. Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.

// Yellow - factorGroup(33) ➞ "even"
// factorGroup(36) ➞ "odd"
// factorGroup(7) ➞ "even"

const factorGroup = num => Number.isInteger(Math.sqrt(num)) ? 'odd' : 'even';

let factorGroup=(num)=>Number.isInteger(Math.sqrt(num))?'odd':'even'

function factorGroup(num) {
	var r = [];
	for (var i = 1; i <= num; i++) {
		if (num % i == 0) r.push(i);
	}
	return r.length % 2 == 1 ? 'odd' : 'even';
}

function factorGroup(num) {
	var sum = 0;
	for (var i  = 1; i <= num; i++){
		if (num%i == 0){
			sum = sum + 1;
		}
	}
	
	if (sum % 2 == 0){
		return "even";
	}
	else{
		return "odd";
	}
}

// 195. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

// Yellow - findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

// findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]

function findLargestNums(arr) {
  return arr.map(x => Math.max(...x));
}

function findLargestNums(arr) {
  var result = [];
  for(var i = 0; i < arr.length; i++){
    var val = arr[i].sort(function(a,b){return a<b?1: -1;});
    result.push(val[0]);
  }
  return result;
}

function findLargestNums(arr) {
  return arr.map(el => el.sort((a, b) => a - b).pop());
}

function findLargestNums(arr) {
	var res = [];
		for(var i =0;i< arr.length; i++){
			var arr1 = arr[i];
			arr1.sort(function(a,b){return a-b});
			res.push(arr1[arr1.length-1])
		}
		return res
}

// 196. A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36

// Create a function that determines whether or not an array is a factor chain.

// Yellow - factorChain([1, 2, 4, 8, 16, 32]) ➞ true
// factorChain([1, 1, 1, 1, 1, 1]) ➞ true
// factorChain([2, 4, 6, 7, 12]) ➞ false

function factorChain(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if ((arr[i + 1] % arr[i]))
			return false
	}
	return true
}

function factorChain(arr) {
	var counter = 0;
	 for(var i = 0; i < arr.length - 1; i++) {
		 if(arr[i+1] % arr[i] != 0) {
			 counter++
		 }
	 }
	 return counter < 1
 }

function factorChain(arr) {
	return !Number.isNaN(
		arr.reduce((a, b) => b % a === 0 ? b : NaN)
	);
}

const factorChain = arr => arr.slice(1).every((num, i) => num % arr[i] === 0);

// 197. Create a function that takes an array of numbers and returns the mean value.

// mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]) ➞ 2.55
// mean([2, 3, 2, 3]) ➞ 2.50
// mean([3, 3, 3, 3, 3]) ➞ 3.00

function mean(arr) {
  reducer = (a, b) => a + b;
  let total = arr.reduce(reducer);
  let answer = (total / arr.length);
  let ans = answer.toFixed(2)
	return Number.parseFloat(ans)
}

function mean(arr) {
  return parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(2));
}

function mean(arr) {
  return Number((arr.reduce((a, b) => a + b) / arr.length).toFixed(2));
}

function mean(arr) {
	var mean = 0;
	 for (var i=0; i<arr.length; i++) {
		 mean += arr[i];
	 }
	 return mean = Math.round((mean / arr.length) * 100) / 100;
 }

//  198. Create a function that takes in a date and returns the correct century.

function century(year) {
	if (year > 2000) {
		return "21st century";
	} else if (year % 100 === 0) {
		return year / 100 + "th century";
	} else {
		var remain = year % 100;
		return ((year + 100) - remain) / 100 + "th century";
	}
}

function century(year) {
	return Math.ceil(year/100)== 21 ? "21st century":Math.ceil(year/100)+"th century";
}

function century(year) {
	const century = Math.ceil(year / 100);
  return century !== 21 
		? `${century}th century` 
		: `${century}st century`;
}

const century = y => {
	let c = Math.ceil(y/100); 
	return	`${c}${c==21?"st":"th"} century`;
};

function century(year) {
	const c = Math.floor((year - 1) / 100) + 1;
	return c + (c == 21 ? "st" : "th") + " century"
}

function century(year) {
	var lastIdx = year > 999 ? 2 : 1;
	
	var cent = parseInt(year.toString().substring(0,lastIdx));
	if (year.toString().substring(2,4) != "00") {
		cent++;
	}
	var result = `${cent}th century`;
	
	switch (cent) {
		case 1:
		case 21:
			result = `${cent}st century`;
			break;
		case 2:
		case 22:
			result = `${cent}nd century`;
			break;
		case 3:
		case 23:
			result = `${cent}rd century`;
			break;
	}

return result;
}

// 199. Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.

// White - flip(1) ➞ 0
// flip(0) ➞ 1

function flip(y) {
	return 1-y;
}

function flip(y) {
	x = [1, 0]
	return x[y]
}

function flip(y) {
	return Math.abs(1 - y);
}

// 200. Write a function that converts an object into an array, where each element represents a key-value pair.

// White - toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []

function toArray(obj) {
	return Object.entries(obj);
}

function toArray(obj) {
	var a = [];
	for(var i in obj){
		a.push([i,obj[i]]);
	}
	return a;
}

function toArray(obj) {
	return Object.keys(obj).map(x => [x, obj[x]]);
}

function toArray(obj) {
	var arr = [];
	for(let [key,value] of Object.entries(obj)){
		if(key){
			arr.push([key,value]);
		}
	}
	return arr
}

// 201. You need to detect what browser is being used. Create a function that takes a string (browser identifier) and returns the browser name.

// White - detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36") ➞ "Google Chrome"
// detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0") ➞ "Mozilla Firefox"

function detectBrowser(userAgent){
	if (userAgent.includes('Firefox')) {
		return "Mozilla Firefox";
	} else if (userAgent.includes('Chrome')){
		return "Google Chrome";
	} else {
		return "Internet Explorer";
	}
}

function detectBrowser(userAgent){
	if (/Firefox\//.test(userAgent)) {
		return 'Mozilla Firefox';
		
	} else if (/Chrome\//.test(userAgent)) {
		return 'Google Chrome';
		
	} else if (/Windows\/|Windows\ |PowerPC/.test(userAgent)) {
		return 'Internet Explorer';
		
	}
}

let detectBrowser = userAgent => userAgent.includes("Firefox") 
? "Mozilla Firefox" : userAgent.includes("Chrome") ? "Google Chrome" :
"Internet Explorer";

detectBrowser = s => s.includes("Firefox") ? "Mozilla Firefox" : s.includes("AppleWebKit") ? "Google Chrome" : "Internet Explorer"

// 202. Write a function redundant that takes in a string str and returns a function that returns str.

// White - const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""

const redundant = str => () => str;

function redundant(str) {
	return () => str;
}

function redundant(str) {
  const e = () => str;
  return e;
}

// 203. Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// White - indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)

function indexMultiplier(arr) {
	return arr.reduce((acc, cv, i)=> acc + cv * i, 0)
}

const indexMultiplier = arr => arr.reduce((a,v,i) => a + v*i, 0);

function indexMultiplier(arr) {
	let sum = 0;
	for (let i=0; i<arr.length; i++) {
		const count = arr[i] * [i];
		sum += count;
	}
	return sum;
}

// 204. Write a function that converts an object into an array of keys and values.

// White - objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function objectToArray(obj) {
	return Object.keys(obj).map(key => [key, obj[key]])
}

function objectToArray(obj) {
	return Object.keys(obj).map(a => [a, obj[a]]);
}

function objectToArray(obj) {
	const myArray = Object.entries(obj);
	return myArray;
}

function objectToArray(obj) {
	var r = [];
  for (var i in obj) {
		r.push([i, obj[i]]);
	}
	return r;
}

// 205. Per 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups i would get.

// White - totalCups(6) ➞ 7
// totalCups(12) ➞ 14
// totalCups(213) ➞ 248

function totalCups(n) {
	return n + Math.floor(n / 6)
 }

 function totalCups(n) {
  let extra = n / 6;
	return Math.floor(n + extra)
}

const totalCups = num => num + Math.floor(num / 6);

function totalCups(n) {
  return Math.floor((n / 6 + n));
}

// 206. Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

// Yellow - arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

const arrayOfMultiples = (num, length) => {
	return Array.from({length: length}, (_, i) => num * (i + 1));
}

function arrayOfMultiples (num, length) {
	let mult = [];
	
		for(i = 1;i <= length; i++){
			mult.push(num*i);
		}
		
	return mult;
	}

	function arrayOfMultiples (num, length) {
		var result = []
			for (let i = 1; i <= length; i++) {
					result.push(num*i)
					
			}
			return result
	}

	// 207. Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order.

	function sortDescending(num) {
		return parseInt(num.toString().split('').sort().reverse().join(''));
	}

	function sortDescending(num) {
		return Number(num.toString().split('').sort((a, b) => b - a).join(''));
	}

	function sortDescending(num) {
		var arr = num.toString().split('');
		arr = arr.sort((a,b) => b - a );
		arr = arr.join('');
		return parseInt(arr);
	}

	// 208. Create a function that takes an integer and returns it as an ordinal number. An Ordinal Number is a number that tells the position of something in a list, such as 1st, 2nd, 3rd, 4th, 5th etc.

// White - returnEndOfNumber(553) ➞ "553-RD"
// returnEndOfNumber(34) ➞ "34-TH"
// returnEndOfNumber(1231) ➞ "1231-ST"
// returnEndOfNumber(22) ➞ "22-ND"

function returnEndOfNumber(num) {
	if ([11,12,13].includes(num)) return `${num}-TH`
	if (String(num).endsWith('1')) return `${num}-ST`
	if (String(num).endsWith('2')) return `${num}-ND`
	if (String(num).endsWith('3')) return `${num}-RD`
	return `${num}-TH`
}

function returnEndOfNumber(num) {	
	switch(""+num%10) {
		case "1": return num.toString() + "-ST"
		case "2": return num.toString() + "-ND"
	 case "3": return num.toString() + "-RD"
	 default: return num.toString() + "-TH"
   }	
}

function returnEndOfNumber(num) {
	var res
	var end = num.toString().slice(-1)
	
	if (end == 1) {
		res = num + '-ST'
	} else if (end == 2) {
		res = num + '-ND'
	} else if (end == 3) {
		res = num + '-RD'
	} else if (end > 3) {
		res = num + '-TH'
	}
	return res
}

/* 209. Given a total due and an array representing the amount of change in your pocket, 
determine whether or not you are able to pay for the item. Change will always be represented 
in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 
20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50. 
*/

function changeEnough(change, amountDue) {
	let sum = change[0]*0.25 + change[1]*0.1 + change[2]*0.05 + change[3]*0.01;
	return sum >= amountDue;
}

const changeEnough = (change, amountDue) => {
	change[0] *= 0.25;
	change[1] *= 0.1;
	change[2] *= 0.05;
  change[3] *= 0.01;
  
  return change.reduce((acc, val) => acc + val, 0) >= amountDue;
}

function changeEnough(change, amountDue) {
	let [q,d,n,p] = change;
	return (q*.25) + (d*.10) + (n*.05) + (p*.01) >= amountDue;
}

function changeEnough(change, amountDue) {
	let money = [change[0] * 0.25, change[1] * 0.1, change[2] * 0.05, change[3] * 0.01];
	return (money.reduce((acc, next) => acc + next) >= amountDue); 
}

function changeEnough(change, amountDue) {
	var a = change[0]*0.25;
	a += change[1]*0.1;
	a += change[2]*0.05;
	a += change[3]*0.01;
	return a >= amountDue;
}

// 210. Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

// Yellow -  indexShuffle("abcdefg") ➞ "acegbdf"
// indexShuffle("holiday") ➞ "hldyoia"
// indexShuffle("maybe") ➞ "myeab"

function indexShuffle(str) {
	const even = [...str].filter((char, i) => i % 2 === 0);
	const odd = [...str].filter((char, i) => i % 2);
	
	return [...even, ...odd].join('');
}

// 211. Create a function that takes an object and returns the keys and values as separate arrays.

// White - keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

function keysAndValues(obj) {
  return [Object.keys(obj), Object.keys(obj).map(x => obj[x])];
}

function keysAndValues(obj) {
  var keys = Object.keys(obj);
  return [keys, keys.map( key => obj[key] )];
}

function keysAndValues(obj) {
  var result = [];
  result.push(Object.keys(obj))
  const vals = Object.keys(obj).map(key => obj[key]);
  result.push(vals)
  return result
}

// 212. Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

function calculator(num1,operator,num2) {
	return {
		'+': num1 + num2,
		'-': num1 - num2,
		'*': num1 * num2,
		'/': num2 ? num1 / num2 : 'Cannot divide by 0!'
	}[operator]
}

function calculator(num1, operator, num2) {
	operations = {
		'+': (a,b) => a + b,
		'-': (a,b) => a - b,
		'*': (a,b) => a * b,
		'/': (a,b) => b ? a / b :"Can't divide by 0!"
	}
	
	return operations[operator](num1,num2)
}

function calculator(num1, operator, num2) {
	switch (operator) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
			if (num2 === 0) return "Can't divide by 0!";
			return num1 / num2;
	}
	return null;
}

// 213. Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// White - Sort numbers array in ascending order.
// If functions argument is null, an empty array or undefined, return an empty array.
// Return new array of sorted numbers.

// sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]
// sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]
// sortNumsAscending(null) ➞ []
// sortNumsAscending([]) ➞ []

function sortNumsAscending(arr) {
  return (arr || []).sort((a,b) => a - b)
}

function sortNumsAscending(arr) {
  if (arr === null) return [];
  return arr.sort((a, b) => a - b);
}

function sortNumsAscending(arr) {
  if (!arr) return [];
  return arr.sort((a,b) => a - b);
}

function sortNumsAscending(arr) {
  return arr ? arr.sort(function(a, b){ return a - b; }) : [];
}

// 214. Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. 

// White - testJackpot(["@", "@", "@", "@"]) ➞ true
// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false
// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false

function testJackpot(result) {
  return result.every(x => x === result[0]);	
}

function testJackpot(result) {
	return new Set(result).size === 1
}

const testJackpot = result => !result.find(r => r !== result[0])

function testJackpot(result) {
	for(var i=0; i<result.length-1; i++) {
		if(result[i] !== result[i+1] ) {
			return false;
		}
	}
	return true;
}

// 215. Create a function that returns true if an asterisk * is inside a box.

// White - inBox([
//   "###",
//   "#*#",
//   "###"
// ]) ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) ➞ true

// inBox([
//   "*####",
//   "# #",
//   "#  #*",
//   "####"
// ]) ➞ false

const inBox = arr => arr.some(x => x.includes('*'));

function inBox(arr) {
  for (let i=0; i<arr.length; i++){
    let element = arr[i]; 
    //console.log(element)

    if (element.includes('*')){
      return true
    }
  }
  return false
}

function inBox(arr) {
	for (var i in arr) {
		if (arr[i].indexOf('*') != -1) return true;
	}
	return false;
}

function inBox(arr) {
	return arr.join('').includes('*')
}

// 216. Create a function that concatenates n input arrays, where n is variable.

// White - concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

function concat(...args) {
	return [].concat(...args)
}

function concat(...args) {
	var result = args[0];
	for (var i = 1; i < args.length; i++){
		result = result.concat(args[i]);
	}
	return result;
}

function concat(...args) {
	return args.reduce((a, b) => a.concat(b), [])
}

const concat = (...arrays) => arrays.reduce((result, arr) => result.concat(arr), []);

// 217. Create a function that takes an integer n and reverses it.

// White - rev(5121) ➞ "1215"
// rev(69) ➞ "96"
// rev(-122157) ➞ "751221"

function rev(n) {
	return Math.abs(n).toString().split('').reverse().join('')
}

function rev(n) {
	return [...n.toString()].reverse().join('').replace(/-/, '')
}

function rev(n) {
	let arr = String(n).match(/\d/g);
	return arr.reverse().join("");
} 

// 218. Create a function that takes a word and returns true if the word has two consecutive identical letters.

// White - doubleLetters("loop") ➞ true
// doubleLetters("yummy") ➞ true
// doubleLetters("orange") ➞ false
// doubleLetters("munchkin") ➞ false

function doubleLetters(word) {
	return /(\w)\1/.test(word)
}

function doubleLetters(word) {
	word = word.split("");
	for (var i = 1; i < word.length; i++){
		if(word[i-1] == word[i]){
			return true;
			break;
		}
	}
	return false;
}

function doubleLetters(word) {
	return /(\w)\1/gi.test(word)
}

// 219. Create a function that takes an array of items and checks if the last item matches the rest of the array.

// White - matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// The last item is the rest joined.

// matchLastItem([1, 1, 1, "11"]) ➞ false
// The last item should be "111".

// matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true

function matchLastItem(arr) {
	return arr.pop() === arr.join('');
}

const matchLastItem = arr => {
  const last = arr.pop();
  return arr.join('') === last;
};

function matchLastItem(arr) {
	// Get the last item in the array.
	var lastItem = arr.pop();

	// Convert the rest into strings and join them.
	var onlyStrings = arr.map(function(item){
			return item.toString();
	});

	var str = onlyStrings.join("");

	// Compare the joined string to the last item.
	if(str === lastItem){
			// console.log("T");
			return true;
	}
	else{
			// console.log("F");
			return false;
	}
}

// 220. Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

// Yellow - Adds two (+2) to each odd integer.
// Subtracts two (-2) to each even integer.

// evenOddTransform([3, 4, 9], 3) ➞ [9, -2, 15]
// Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]
// evenOddTransform([0, 0, 0], 10) ➞ [-20, -20, -20]
// evenOddTransform([1, 2, 3], 1) ➞ [3, 0, 5]

function evenOddTransform(arr, n) {
	return arr.map( x => x % 2 ===0 ? x - 2*n : x + 2*n )	
}

function evenOddTransform(arr, n) {
	return arr.map(function(x) {
		if (x % 2 == 1) return x+2*n;
		return x-2*n;
	});
}

function evenOddTransform(arr, n) {
	for(var i = 0; i < arr.length; i++){
			if (arr[i] % 2 == 0){
				arr[i] = arr[i] + (-2)*n;
			}
			else{
				arr[i] = arr[i] + (2)*n;
			}
	}
	return arr;
}

// 221. Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

// White - reverseImage([
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1]
// ]) ➞ [
//   [0, 1, 1],
//   [1, 0, 1],
//   [1, 1, 0]
// ]

// reverseImage([
//   [1, 1, 1],
//   [0, 0, 0]
// ]) ➞ [
//   [0, 0, 0],
//   [1, 1, 1]
// ]

// reverseImage([
//   [1, 0, 0],
//   [1, 0, 0]
// ]) ➞ [
//   [0, 1, 1],
//   [0, 1, 1]
// ]

function reverseImage(image) {
	return image.split('').reverse().join('')
}

function reverseImage(image) {
	return image.map(el => el.map(e => (e === 0) ? 1 : 0));
}

function reverseImage(image) {
	for (var i in image) {
		for (var j in image[i]) {
			image[i][j] = image[i][j] == 0 ? 1 : 0;
		}
	}
	return image;
}

// 222. A quadratic equation a x² + b x + c = 0 has either 0, 1, or 2 distinct solutions for real values of x. 
// Given a, b and c, you should return the number of solutions to the equation.

// Yellow - solutions(1, 0, -1) ➞ 2
// x² - 1 = 0 has two solutions (x = 1 and x = -1).

// solutions(1, 0, 0) ➞ 1
// x² = 0 has one solution (x = 0).

// solutions(1, 0, 1) ➞ 0
// x² + 1 = 0 has no solutions.

function solutions(a, b, c) {
	var d = Math.pow(b,2) - 4*a*c;
	if (d > 0) return 2;
	if (d == 0) return 1;
	return 0;
}

function solutions(a,b,c) {
  const disc = b*b - 4*a*c;
  return disc > 0 ? 2 : disc == 0 ? 1 : 0;
}

function solutions(a, b, c) {
	let num = Math.pow(b, 2) - 4 * a * c;
	return num === 0 ? 1 : (num > 0 ? 2 : 0);
}

const solutions = (a,b,c) => [0,1,2][Math.sign(b*b-4*a*c)+1];

// 223. Create a function that takes an array of names and returns an array with the first letter capitalized.

// Yellow - capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]
// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]


function capMe(arr) {
	return arr.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
}

function capMe(arr) {
	for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().substring(1);
  }
  return arr;
}

function capMe(arr) {
  var tempArr;
	for (i in arr){
    arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1).toLowerCase();
  }
  return arr;
}

function capMe(arr) {
	for(i = 0; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase();
  }
  
  return arr;
}

// 224. Return the total number of arrays inside a given array.

// Yellow - numOfSubbarrays([[1, 2, 3]]) ➞ 1
// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3
// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4
// numOfSubbarrays([1, 2, 3]) ➞ 0

function numOfSubbarrays(arr) {
	return arr.filter(x => x.length).length; 
}

function numOfSubbarrays(arr) {
	return arr.filter(a => a instanceof Array).length; 
}

function numOfSubbarrays(arr) {
	let count = 0; 
	for(let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) count++; 
	}
	return count; 
}

// 225. Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.

// White - uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
// uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]

function uniqueSort(arr) {
  return Array.from(new Set(arr)).sort((a,b) => a - b);
}

function uniqueSort(arr) {
	return [...new Set(arr)].sort((a,b) => a - b)
}

function uniqueSort(arr) {
	var used = [];
  arr.forEach(function(item){
    if (!used.includes(item)){
    	used.push(item);
    };
  });
  return used.sort(function(a, b){ return a-b; });
}

// 226. Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.

// White - "apples and bananas".vreplace("u") ➞ "upplus und bununus"
// "cheese casserole".vreplace("o") ➞ "chooso cossorolo"
// "stuffed jalapeno poppers".vreplace("e") ➞ "steffed jelepene peppers"

String.prototype.vreplace = function(vowel) {
	return this.replace(/[aeiou]/gi, vowel);
}

String.prototype.vreplace= function vreplace (vowel,str) {
	if(!str){
		str = this;
	}
  return str.replace(/[aeiou]/g,vowel);
}

String.prototype.vreplace = function(vowel) {
	return this.split('').map(x=>x.match(/[aeiou]/i) ? vowel : x).join('')
}

// 227. Create a function that takes a single word string and does the following:
// Concatenates inator to the end if the word ends with a consonant otherwise, concatenate -inator instead.
// Adds the word length of the original word to the end, supplied with '000'.

// White - inatorInator("Shrink") ➞ "Shrinkinator 6000"
// inatorInator("Doom") ➞ "Doominator 4000"
// inatorInator("EvilClone") ➞ "EvilClone-inator 9000"

const inatorInator = w => {
	let c = /[aeiou]/i.test(w[w.length - 1]) ? "-inator" : "inator";
	return `${w}${c} ${w.length}000`;
}

function inatorInator(w){
	let regex = /[aeiou]/i
	return w+(regex.test(w.slice(-1))?"-":"")+"inator "+ w.length*1000
}

function inatorInator(inv) {
	return /[aeiou]$/gi.test(inv)
				 ? inv + "-inator" + " " + inv.length + "000"
				 : inv + "inator"	 + " " + inv.length + "000"
}

// 228. Create a function that takes a number as its argument and returns an array of all its factors.

// White - factorize(12) ➞ [1, 2, 3, 4, 6, 12]
// factorize(4) ➞ [1, 2, 4]
// factorize(17) ➞ [1, 17]

function factorize(num) {
	let factors = []
	for (i = 1; i <= num; i++) {
		if (num % i === 0) {
			factors.push(i)
		}
	}
	return factors
}

function factorize(num) {
	return new Array(num).fill().map((x, i) => i + 1).filter(n => num % n === 0)
}

function factorize(num) {
	var r = [1];
	for (var i = 2; i <= num; i++) {
		if (num % i == 0) r.push(i);
	}
	return r;
}

function factorize(num) {
	let factors = []
	
	for(let i = 1; i <= num; i++) {
		if (num % i === 0) {
			factors.push(i)
		}
	}
	
	return factors
}

// 229. Create a function that takes a number as an argument and returns a string formatted to separate thousands.

// White - formatNum(1000) ➞ "1,000"
// formatNum(100000) ➞ "100,000"
// formatNum(20) ➞ "20"

function formatNum(num) {
	return num.toLocaleString();
}

function formatNum(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatNum(num) {
	let ar = [...(''+num)];
  let i = ar.length;
  while (i -= 3) {
    if (i < 0) break;
    ar.splice(i, 0, ',');
  }
  return ar.join('');
}

// 330. Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// White - removeDups([1, 0, 1, 0]) ➞ [1, 0]
// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

const removeDups = arr => [...new Set(arr)]

function removeDups(arr) {
  return [...new Set(arr)];
}

function removeDups(arr) {
  return arr.filter((x, i, a) => a.indexOf(x) === i);
}

// 331. Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

// White - sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7
// sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455
// sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8

function sumTwoSmallestNums(arr) {
	arr = arr.sort((a,b) => a - b).filter(x => x > 0);
	return arr[0] + arr[1];
}

function sumTwoSmallestNums(arr) {
  return arr.filter((item) => item >= 0)
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, item) => acc + item);
}

const sumTwoSmallestNums = (arr) => {
	let newArr=[];
	for(let i=0;i<arr.length;i++)
		{
			if(arr[i]>0)
				newArr.push(arr[i])
		}
	newArr.sort((a, b) => (a > b) ? 1 : -1)
	return newArr[0]+newArr[1]
}

// 332. Create a function that takes three integer arguments (a, b, c) and returns the number of equal values.

// White - equal(3, 4, 3) ➞ 2
// equal(1, 1, 1) ➞ 3
// equal(3, 4, 1) ➞ 0

function equal(a, b, c) {
	const size = (new Set([a, b, c])).size;
	return size === 3 ? 0 : 4 - size;
}

const equal = (a, b, c) => {
	var z = 4 - [... new Set([a, b, c])].length
	return z == 1 ? 0 : z;
}

function equal(a, b, c) {
	return new Set([a, b, c]).size === 3 ? 0 : (new Set([a, b, c]).size === 1 ? 3 : 2);
}

function equal(a, b, c) {
	set1 = new Set([a, b, c]);
	if (set1.size === 3) {
		return 0;
	} else {
	return (4-set1.size);
	}
}

// 333. Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

// White - makeTitle("This is a title") ➞ "This Is A Title"
// makeTitle("capitalize every word") ➞ "Capitalize Every Word"
// makeTitle("I Like Pizza") ➞ "I Like Pizza"
// makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"

function makeTitle(str) {
  return str.split(' ').map( w => w[0].toUpperCase() + w.slice(1)).join(' ');
}

let makeTitle = x => x.replace(/(^\w|\s\w)/g, x => x.toUpperCase());

const makeTitle = str => str.split(' ')
.map(x=> x.charAt(0).toUpperCase() + x.substring(1))
.join(' ');

function makeTitle(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  });
}

function makeTitle(str) {
  return str.split(' ').map(x => {
    const [ first, ...rest ] = x
    return first.toUpperCase() + rest.join('')
  }).join(' ')
}

// 334. Given two integers a and b, return how many times a can be halved while still being greater than b.

// White - halveCount(1324, 98) ➞ 3
// (1324 -> 662 -> 331 -> 165.5)

// halveCount(624, 8) ➞ 6
// (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)

// halveCount(1000, 3) ➞ 8
// (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)

function halveCount(a, b) {
	let count = -1;
	while (a > b) { a /= 2; count++; }
	return count;
}

function halveCount(a, b) {
	let count = 0;
	while(a>b){
		a/=2;
		count++;
	};
	return count-1;
}

function halveCount(a, b) {
	return a<=b?-1:1+halveCount(a/2,b);
}

function halveCount(a, b) {
	var count = 0;
	while (a > b){
		a = a / 2
		count++
		if (a <= b){
			count--
		}
	}
	 return count;
}

// 335. Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

// Return a boolean value (true or false).
// The string can contain any character.
// When no x and no o are in the string, return true.

// White - XO("ooxx") ➞ true
// XO("xooxx") ➞ false
// XO("ooxXm") ➞ true
// Case insensitive.
// XO("zpzpzpp") ➞ true
// Returns true if no x and o.
// XO("zzoo") ➞ false

function XO(str) {
  return str.replace(/[^x]/ig, '').length === str.replace(/[^o]/ig, '').length
}

function XO(str) {
  let x = str.toLowerCase().split('').filter(x => x === 'x').length;
  let o = str.toLowerCase().split('').filter(x => x === 'o').length;
  return x === o;
}

function XO(str) {
  return str.toLowerCase().split("x").length == str.split("o").length;
}

function XO(str) {
  var x = 0, o = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      x += 1;
    } else if (str[i].toLowerCase() == 'o') {
      o += 1;
    }
  }
  return x === o;
}

// 336. Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) 
// and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

// removeSpecialCharacters("The quick brown fox!") ➞ "The quick brown fox"
// removeSpecialCharacters("%fd76$fd(-)6GvKlO.") ➞ "fd76fd-6GvKlO"
// removeSpecialCharacters("D0n$c sed 0di0 du1") ➞ "D0nc sed 0di0 du1"

function removeSpecialCharacters(str) {
  return str.replace(/[^\w- ]/gi, "");
}

function removeSpecialCharacters(str) {
  var replaced = str.replace(/[^a-zA-Z0-9-_\s]/g, '');
	return replaced;
}

function removeSpecialCharacters(str) {
  return str.replace(/\?|\||{|}|<|>|,|`|~|\[|\]|\+|=|\.|\(|\)|!|@|#|\$|%|\^|&|\*/gi, '');
}

const removeSpecialCharacters = str =>
str.replace(/[!&\/\\#,+()$~%.'":*?<>{}`@^|'=[\]]/g, '');

// 337. Your job is to make a 'Twitter Link' regex expression rx. This regex searches a tweet to find the @handle and the #handle.
// The function is already written in the test tab, so you only provide the Regex variable.
// Only return the @ and # handles.

// White - tweet('Visit us at @edabit') ➞ '@edabit'
// tweet('Follow @JavaScript') ➞ '@JavaScript'
// tweet('#Honesty is the best @policy!!') ➞ '#Honesty @policy'

// The function is at the test tab, you only need to provide
// the Regex variable:

const rx = /[@#]\w+/gi

const rx = /[@#][a-z]+/gi;

const rx = /([@][A-z]+)|([#][A-z]+)/g;

// 338. An isogram is a word that has no repeating letters, consecutive or nonconsecutive. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

// Yellow - isIsogram("Algorism") ➞ true
// isIsogram("PasSword") ➞ false
// Not case sensitive.
// isIsogram("Consecutive") ➞ false

function isIsogram(str) {
  let strArr = str.toLowerCase().split('').sort();
  for (i = 0; i < strArr.length; i++) {
    if (strArr[i] == strArr[i+1])
      return false
  }
  return true
}

function isIsogram(str) {
	return !str.match(/(.).*\1/ig); 
 }

 function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

function isIsogram(str) {
  return str.length === (new Set(str.toLowerCase())).size;
}

// 339. Create a function that returns the mean of all digits.

// Yellow - mean(42) ➞ 3
// mean(12345) ➞ 3
// mean(666) ➞ 6

function mean(num) {
	return String(Math.abs(num)).split('').reduce((sum, val) => sum + Number(val),0) / String(Math.abs(num)).length
 }

 function mean(num) {
	var str = "" + Math.abs(num)
	var arr = str.split("")
	var sum = 0
	for(var i = 0; i < arr.length; i++)
		{
			sum += Number(arr[i])
		}
	return sum/arr.length
}

function mean(num) {
	num = Math.abs(num);
	let arr = String(num).split("");
	let nums = arr.map((val) => Number(val));
	return nums.reduce((acc, next) => acc + next) / nums.length;
}

// 440. Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

// Yellow - getMiddle("test") ➞ "es"
// getMiddle("testing") ➞ "t"
// getMiddle("middle") ➞ "dd"
// getMiddle("A") ➞ "A"

function getMiddle(str) {
  var start = Math.ceil(str.length / 2) - 1;
  var end = Math.floor(str.length / 2) + 1;
  return str.substring(start, end);
}

function getMiddle(str) {
  return str.length % 2 ? str[(str.length - 1) / 2] : str.substr((str.length - 2) / 2 , 2);
}

function getMiddle(str) {
  var length = Math.floor(str.length/2);
  if (str.length % 2 === 0){
    var newStr = '';
    return newStr += str[length-1] + str[length]
  } else {
    return str[length]
  }
}

const getMiddle = str => {
	const middle = str.length / 2 | 0;
	return str.slice(middle - (str.length % 2 ? 0 : 1), middle + 1);
}

// 441. To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. 
// He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

// Yellow - progressDays([3, 4, 1, 2]) ➞ 2
// There are two progress days, (3->4) and (1->2)
// progressDays([10, 11, 12, 9, 10]) ➞ 3
// progressDays([6, 5, 4, 3, 2, 9]) ➞ 1
// progressDays([9, 9])  ➞ 0

function progressDays(runs) {
	let days = 0; 
	for (let i = 1; i < runs.length; i++) {
		if (runs[i] > runs[i -1]){
			days++; 
		}
	}
	return days; 
}

function progressDays(runs) {
	var days=0;
	for(i =1; i<runs.length; i++){
		if(runs[i]>runs[i-1]){
			days++;
		} 
	}
	return days;
}

function progressDays(runs) {
	return runs.filter((e, i, a) => e < a [i + 1]).length; 
}

const progressDays = runs =>
  runs.slice(1).reduce((progress, runs, i) => {
		const prevRun = runs[i]; 
		return progress + (run > prevRun ? 1 : 0); 
	}, 0); 

// 442. Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

// Yellow - isAnagram("cristian", "Cristina") ➞ true
// isAnagram("Dave Barry", "Ray Adverb") ➞ true
// isAnagram("Nope", "Note") ➞ false

function isAnagram(s1, s2) {
  var str1 = s1.toLowerCase().split('').sort().join('').trim();
  var str2 = s2.toLowerCase().split('').sort().join('').trim();
  return str1===str2;
}

function isAnagram(s1, s2) {
  var t = s => s.toLowerCase().split('').sort().join('');
  return t(s1) === t(s2); 
}

function isAnagram(s1, s2) {
 
  s1 = s1.toLowerCase().trim().replace(/[^a-z]/, '');
  s2 = s2.toLowerCase().trim().replace(/[^a-z]/, '').split('');
  if (s1.length != s2.length || s1 == s2) {
    return false;
  }
  for (letter of s1.split('')) {
    letterIndex = s2.indexOf(letter);
    if (letterIndex == -1) {
      return false;
    }
    s2[letterIndex] = "#";
  }
  if (s2.join('').match(/[a-z]*/) == null) {
    return false;
  }
  return true;
}


// 443. Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

// Yellow - missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

function missingNum(arr) {
  var sum = arr.reduce((a, b) => a + b, 0);
  return 55 - sum;
}

const missingNum = (arr) => {
  for (let i = 1; i <= arr.length + 1; i++) {
    if (arr.indexOf(i) === -1) return i;
  }
}

function missingNum(arr) {
  for(var i = 1; i <= 10; i++){
    if(arr.indexOf(i) == -1) return i
  }
}

function missingNum(arr) {
	var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

return Number(arr1.filter(x => arr.indexOf(x) === -1 ));
}

function missingNum(arr) {
  for(i = 1; i <= 10; i++) {
    if(!arr.includes(i)) return i;
  }
}

// 444. ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.

function validatePIN(pin) {
  return (/^(\d{4}|\d{6})$/).test(pin);
}

function validatePIN(pin) {
  if (!parseInt(pin).isNaN){
    if (pin.length == 4 || pin.length == 6){
      return true;
    }
  }
  return false;
}

function validatePIN(pin) {
  var regex = /^(\d{4})$|^(\d{6})$/;
	return regex.test(pin);
}

function validatePIN(pin) {
  var regEx =  new RegExp(/^(\d{4}|\d{6})$/);
  return regEx.test(pin);
}

// 445. Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

// White - maskify("4556364607935616") ➞ "############5616"
// maskify("64607935616") ➞ "#######5616"
// maskify("1") ➞ "1"
// maskify("") ➞ ""

function maskify(str) {
  var mask = "";
  for (var i = 0; i < str.length-4; i++){
    mask += "#";
  }
  return mask += str.substring(str.length-4, str.length);
}

const maskify = str => str.replace(/.(?=.{4})/g, '#');

function maskify(str) {
  return str.split('').map((x, i, a) => i < a.length - 4 ? '#' : x).join('');
}

function maskify(str) {
  var dd = str.toString();
  return dd.replace(/.(?=.{4,}$)/g, '#');
}

// 446. Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.

// Yellow - incrementToTop([3, 4, 5]) ➞ 3
// 3 increments: 3 -> 4, 4 -> 5; 4 -> 5
// incrementToTop([4, 3, 4]) ➞ 1
// incrementToTop([3, 3, 3]) ➞ 0
// incrementToTop([3, 10, 3]) ➞ 14

function incrementToTop(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum = sum + (Math.max(...arr) - arr[i]);
	}
	return sum;
}

function incrementToTop(arr) {
	var mx = Math.max(...arr);
	return arr.map(a => mx-a).reduce((a,b) => a+b);
}

function incrementToTop(arr) {
	let biggestElem = Math.max(...arr);
	return arr.reduce((a,b) => { return a + (biggestElem - b) }, 0);
}

function incrementToTop(arr) {
	var counter = 0;
 
  for(var i = 0; i < arr.length; i++){
    for(var j = arr[i]; j < Math.max(...arr); j++) {
      counter++
    }
  }
  return counter;
}

// 447. Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.

// Yellow - uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]) ➞ [1, 3]
// uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]) ➞ [3, 5]
// uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]) ➞ [10, 6, 13, 5]

const uniqueArr = arr => [...new Set(arr.filter(v => v > 0))]

function uniqueArr(arr) {
	let set = Array.from(new Set(arr));
	return set.filter(x => x > 0);
}

function uniqueArr(arr) {
	return arr.filter(x => x > 0).filter((x, i, a)=> i == a.indexOf(x));
}

// 448. Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.

// Yellow - nextInLine([5, 6, 7, 8, 9], 1) ➞ [6, 7, 8, 9, 1]
// nextInLine([7, 6, 3, 23, 17], 10) ➞ [6, 3, 23, 17, 10]
// nextInLine([1, 10, 20, 42 ], 6) ➞ [10, 20, 42, 6]
// nextInLine([], 6) ➞ "No array has been selected"

function nextInLine(arr, num) {
	if(!Array.isArray(arr)) return 'No array has been selected';
		arr.push(num);
		arr.shift()
	return arr;
}

function nextInLine(arr, num) {
	if (Number.isNaN(arr)) return 'No array has been selected'; 
	arr.push(num); 
	arr.shift(); 
	return arr; 
}

function nextInLine(arr, num) {
	if(!arr) {return 'No arr has been selected'}
	arr.push(num)
	arr.shift()
	return arr
}

function nextInLine(arr, num) {
	return !arr.length ? 'No array has been selected' : [...arr].concat(num).slice(1)
}

// 449. Additional spaces have been added to a sentence. Return the correct sentence by removing them. All words should be separated by one space, and there should be no spaces at the beginning or end of the sentence.

// Yellow - correctSpacing("The film   starts       at      midnight. ")
// ➞ "The film starts at midnight."

// correctSpacing("The     waves were crashing  on the     shore.   ")
// ➞ "The waves were crashing on the shore."

// correctSpacing(" Always look on    the bright   side of  life.")
// ➞ "Always look on the bright side of life."

function correctSpacing(sentence) {
	return sentence.replace(/\s+/g,' ').trim();
}

function correctSpacing(sentence) {
  return sentence.split(" ").filter(a=>a!="").join(" ")
}

function correctSpacing(sentence) {
	let arr = sentence.match(/\S+/g);
	return arr.join(" ");
}

function correctSpacing(sentence) {
	return sentence.split(' ').filter(x => x != '').join(' ')
}

// 450. Return the smallest number of steps it takes to convert a string entirely into uppercase or
// entirely into lower case, whichever takes the fewest number of steps. A step consists of changing 
// one character from lower to upper case, or vice versa.

// stepsToConvert("abC") ➞ 1
// "abC" converted to "abc" in 1 step

// stepsToConvert("abCBA") ➞ 2
// "abCBA" converted to "ABCBA" in 2 steps

// stepsToConvert("aba") ➞ 0
// stepsToConvert("abaCCC") ➞ 3

function stepsToConvert(str) {
	const lower = str.replace(/[^a-z]/g, "").length;
	const upper = str.replace(/[^A-Z]/g, "").length;
	return Math.min(lower, upper);
}

function stepsToConvert(str) {
	if(str == '') { return 0}
	if(str == str.toUpperCase() || str == str.toLowerCase()){return 0}
	let a = str.match(/[a-z]/g).length;
	let b = str.match(/[A-Z]/g).length;
	return Math.min(a,b);
}

function stepsToConvert(string) {
	const upper = [...string].filter(char => char === char.toUpperCase())
	const lower = [...string].filter(char => char === char.toLowerCase())
	return Math.min(upper.length,lower.length)
}

function stepsToConvert(str) {
	return Math.min((str.match(/[a-z]/g) || []).length, (str.match(/[A-Z]/g) || []).length)
}

// 451. Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. 
// Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number. This is what a valid phone number looks like: (123) 456-7890

// Yellow - isValidPhoneNumber("(123) 456-7890") ➞ true
// isValidPhoneNumber("1111)555 2345") ➞ false
// isValidPhoneNumber("098) 123 4567") ➞ false

function isValidPhoneNumber(str) {
	return /^\(\d{3}\) \d{3}-\d{4}$/.test(str);
}

function isValidPhoneNumber(str) {
  var expr=/^\(\d{3}\)\s\d{3}\-\d{4}$/g;
	return expr.test(str);
}

function isValidPhoneNumber(str) {
	return str.match(/^\(\d{3}\)\s\d{3}-\d{4}$/) ? true : false;
}

// 452. Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".

// To illustrate, the day of the week for "12/07/2016" is "Wednesday".

// Yellow - getDay("12/07/2016") ➞ "Wednesday"
// getDay("09/04/2016") ➞ "Sunday"
// getDay("12/08/2011") ➞ "Thursday"

function getDay(day) {
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var date = new Date(day);
	return days[date.getDay()];
}

const getDay = day =>
new Date(day).toLocaleString('en-us', {weekday:'long'});

function getDay(day) {
	day = new Date(day).getDay()
	return switchDay(day)
}
function switchDay(num){
	switch (num){
		case 1:
			return 'Monday'
		case 2:
			return 'Tuesday'
		case 3:
			return 'Wednesday'
		case 4:
			return 'Thursday'
		case 5:
			return 'Friday'
		case 6:
			return 'Saturday'
		case 0:
			return 'Sunday'
	}
}

// 453. Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

// Yellow - The string must contain an @ character.
// The string must contain a . character.
// The @ must have at least one character in front of it.
// e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
// The . and the @ must be in the appropriate places.
// e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
// If the string passes these tests, it's considered a valid email address.

// validateEmail("@gmail.com") ➞ false
// validateEmail("hello.gmail@com") ➞ false
// validateEmail("gmail") ➞ false
// validateEmail("hello@gmail") ➞ false
// validateEmail("hello@edabit.com") ➞ true

function validateEmail(str) {
  return /.+@.+\..+/.test(str);
}

function validateEmail(str) {
  return (/[\w\.]+@(\w+\.)+\w+/).test(str);
}

function validateEmail(str) {
  var posAt = str.indexOf("@"),
      posDot = str.lastIndexOf(".");
  
  if (posAt > 0 && posDot > posAt) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(str) {
  if (str.indexOf('@') < 1 
     || str.indexOf('.') < 0
     || str.indexOf('@') > str.lastIndexOf('.')
     ) return false;
  return true;
}

function validateEmail(str) {
  return str.match(/\w+@\w+\.\w+/) ? true: false;
}

// 545. Write a function that returns the longest sequence of consecutive zeroes in a binary string.

// Yellow - longestZero("01100001011000") ➞ "0000"

// longestZero("100100100") ➞ "00"

// longestZero("11111") ➞ ""

function longestZero(s) {
	return s.split('1').sort().reverse()[0]
}

function longestZero(s) {
	return s.split('1').sort((a, b) => b.length - a.length)[0]
}

function longestZero(s) {
	return s.split('1').reduce((a, b) => a.length > b.length ? a : b); 
}

function longestZero(s) {
	return '0'.repeat(Math.max(...s.split('1').map(x => x.length))); 
}

// 546. Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

// White - mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
// mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
// mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }

function mapping(letters) {
	return letters.reduce((a, c) => (a[c] = c.toUpperCase(), a), {});
}

function mapping(letters) {
	var x = letters.map(m => [m, m.toUpperCase()]); 
	  return Object.formEntries(x); 
}

const mapping = arr => {
	const obj = {}
	arr.forEach(el => obj[el] = el.toUpperCase())
	return obj
}

function mapping(letters) {
	a = {}
	for (c of letters){
		a[c] = c.toUpperCase();
	}
	return a;
}

function mapping(letters) {
	return letters.reduce(function(obj, item) {
		obj[item] = item.charat().toUpperCase(); 
		return (obj); 
	}, {})
}

function mapping(arr){
	let obj = {}; 
		arr.forEach(a => obj[a] = a.toUpperCase()); 
	return obj; 
}

// 547. Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// White - reverse("Reverse") ➞ "esreveR"
// reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"
// reverse("The dog is big.") ➞ "The dog is big."

function reverse(str) {
  return str.split(' ').map(x => x.length > 4 ? x.split('').reverse().join('') : x).join(' ');
}

const reverse = str => str.replace(/(\S{5,})/gi, match =>
	[...match].reverse().join('')
)

function reverse(str) {
  return str.split(' ')
  	.map(a => a.length >= 5 ? a.split('').reverse().join('') : a)
    .join(' ');
}

function reverse(str) {
  var split = str.split(' ');
  split = split.map(function(el){
    if(el.length > 4){
      return el.split('').reverse().join('');
    }
    return el;
  });
  return split.join(' ');
}

// 548. Write a function that recursively determines if a string is a palindrome.

// White - isPalindrome("abcba") ➞ true
// isPalindrome("b") ➞ true
// isPalindrome("") ➞ true
// isPalindrome("ad") ➞ false

const isPalindrome = str => str.length < 2 ? true : str.endsWith(str[0]) ? isPalindrome(str.slice(1,-1)) : false;

function isPalindrome(str) {
  return str == str.split("").reverse().join("");
}

function isPalindrome(str) {
	return [...str].reverse().join('') === str
}

function isPalindrome(str) {
	return str[0] !== str[str.length-1] ? false : str.length< 3 ? true : isPalindrome(str.substring(1,str.length-1))
}

// 549. Create a function that takes an input (e.g. "5 + 4") and returns true if it's a mathematical expression or false if not.

// White - mathExpr("4 + 5") ➞ true
// mathExpr("4*6") ➞ true
// mathExpr("4*no") ➞ false

function mathExpr(expr) {
	return /^\d(\s)*[%+/*-](\s)*\d$/.test(expr);
}

function mathExpr(expr) {
  return /^\d\s?[-+*/%]\s?\d$/.test(expr);
}

function mathExpr(expr) {
  return (expr[0] > -1) ? true: false; 
}

// 550. Imagine a messaging device with only one button. For the letter A, you press the button one time, for E, you press it five times, for G, it's pressed seven times, etc, etc.

// Write a function that takes a string (the message) and returns the total number of times the button is pressed.

// Yellow - howManyTimes("abde") ➞ 12
// howManyTimes("azy") ➞ 52
// howManyTimes("qudusayo") ➞ 123

const howManyTimes = msg => [...msg].reduce((a,v) => a + v.charCodeAt()-96, 0);

function howManyTimes(msg) {
	return msg.toLowerCase().split("").reduce((a,b)=>a+b.charCodeAt(0)-96,0)
 }

 function howManyTimes(msg) {
	return new Array(msg.length).fill(0).reduce((r,v,i) => r + msg.charCodeAt(i) - 96, 0);
}

function howManyTimes(msg) {
	let total = 0
	const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 + 1
	for(i = 0; i<msg.length;i++){
		total+=alphaVal(msg[i])
	}
	return total
}

// 551. You have an array of item codes with the following format: "[letters][digits]"
// Create a function that splits these strings into their alphabetic and numeric parts.

// Yellow - splitCode("TEWA8392") ➞ ["TEWA", 8392]
// splitCode("MMU778") ➞ ["MMU", 778]
// splitCode("SRPE5532") ➞ ["SRPE", 5532]

function splitCode(item) {
	const arr = item.match(/([A-Z]+)(\d+)/);
	return [arr[1],+arr[2]];
}

function splitCode(item) {
	let index = item.split('').findIndex(c => !isNaN(c))
	return [item.substring(0, index), Number(item.substring(index))]
}

const splitCode = item => [
  item.match(/[a-z]+/i)[0],
  Number(item.match(/[0-9]+/)[0]),
];

function splitCode(item) {
	var reg1 = /[A-Za-z]/gi
	var reg2 = /[0-9]/gi
	return [item.match(reg1).join(''),parseInt(item.match(reg2).join(''))]
}

// 552. Create a function that takes two parameters (start, stop), and returns the sum of all even numbers in the range.

// Yellow - sumEvenNumsInRange(10, 20) ➞ 90
// 10, 12, 14, 16, 18, 20
// sumEvenNumsInRange(51, 150) ➞ 5050
// sumEvenNumsInRange(63, 97) ➞ 1360

function sumEvenNumsInRange(start, stop) {
	const a = Math.ceil(start /2); 
	const b = Math.floor(stop /2); 
	return (a + b) * (b - a + 1); 
}

function sumEvenNumsInRange(start,stop) {
	let sum = 0; 
	for (let i = start; i <= stop; i++) {
		if (i % 2 === 0) {
			sum += i; 
		}
	}
	return sum; 
}

function sumEvenNumsInRange(start, stop) {
	for (var i = start, box = []; i <= stop; i++) {
		if ( i % 2 == 0) {
			box.push(i)
		}
	}
	  return box.reduce((a, b) => a + b); 
}

function sumEvenNumsInRange(start, stop) {
	var arr = []; 
	for(let i = start; i < stop; i++){
		if(i % 2 == 0){
			arr.push(i); 
		}
	}
}

// 553. Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.

// Yellow - findZip("all zip files are zipped") ➞ 18
// findZip("all zip files are compressed") ➞ -1

function findZip(str) {
	let arr = str.match(/zip/g);
	if(arr.length < 2){
		return -1;
	}else{
		return str.lastIndexOf("zip");
	}
}

function findZip(str) {
	return str.indexOf("zip", str.indexOf("zip") + 1)
}

function findZip(str) {
	return str.indexOf('zip', str.indexOf('zip')+3)
}

// 554. Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

// x Number of subarrays contained within the main array.
// y Number of items contained within each subarray.
// z Item contained within each subarray.

function matrix(x, y, z) {
	return Array(x).fill(Array(y).fill(z)); 
}

const matrix = (x, y, z) => 
	Array.from({length: x}, () => 
		Array.from({length: y}, () => z)
	); 

function matrix(x, y, z) {
	return Array(x).fill().map(m => Array(y).fill(z)); 
}

function matrix(x, y, z)  {
	let arr = []; 
	for (let i = 0; i < x; i += 1) {
		let subarr = new Array(y); 
		subarr.fill(z, 0, y); 
		arr.push(subarr); 
	}
	return arr; 
}

// 555. Create a function that takes a string as an argument. The string is a random name.

// If the last character of the name is an 'n', return true.
// If the last character of the name is not an 'n', return false.

// Yellow - isLastCharacterN('Aiden') ➞ true
// isLastCharacterN('Piet')  ➞ false

function isLastCharacter(w) {
	return w[w.length-1] === 'n'; 
}

function isLastCharacterN(word) {
	return [...word].pop() == 'n'
}

function isLastCharacterN(word) {
	return word.toLowerCase().endsWith('n')
}

function isLastCharacterN(word) {
	if(word.slice(-1) === 'n') {
		return true; 
	} else {
		return false; 
	}
}

// 556. Write a function that returns the greatest common divisor (GCD) of two integers.

// White - gcd(32, 8) ➞ 8
// gcd(8, 12) ➞ 4
// gcd(17, 13) ➞ 1

const gcd = (n1, n2) => !n2 ? n1: gcd(n2, n1 % n2)

function gcd(n1, n2) {
	if (n2 == 0) return n1
	  return gcd(n2, n1 % n2); 
}

const gcd = (a, b) => (!b ? a : gcd(b, a % b)); 

function gcd(n1, n2) {
	let resolve = 0; 
	  for (let i = 0; i < Math.min(n1, n2); i++)
			if (n1% i == 0 && n2% i ==0) resolve = i; 
  return resolve
}

// 557. Suppose that you invest $10,000 for 10 years at an interest rate of 6% compounded monthly. What will be the value of your investment at the end of the 10 year period?
// Create a function that accepts the principal p, the term in years t, the interest rate r, and the number of compounding periods per year n. The function returns the value at the end of term rounded to the nearest cent.

// Yellow - compoundInterest(100, 1, 0.05, 1) ➞ 105.0

// compoundInterest(3500, 15, 0.1, 4) ➞ 15399.26

// compoundInterest(100000, 20, 0.15, 365) ➞ 2007316.26

const compoundInterest = (p, t, r, n) => {
	return Math.round(((p * (1 + r / n) ** (t * n)) * 100)) / 100;
}

function compoundInterest(p, t, r, n) {
	return +(p * (1 + r / n) ** (n * t)).toFixed(2);
}

function compoundInterest(p, t, r, n) {
	return Math.round(((p * (1 + r / n) ** (t * n)) * 100)) / 100;	
 }

//  558. Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].

// Write a function that returns true if the total area of chocolate is the same for each sister.

// Yellow - testFairness([[1, 2], [2, 1]], [[2, 2]]) ➞ true

// testFairness([[1, 2], [2, 1]], [[2, 2], [4, 4]]) ➞ false

// testFairness([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]]) ➞ true

// testFairness([[1, 5], [6, 3], [1, 1]], [[7, 1], [2, 2], [1, 1]]) ➞ false

function testFairness(agatha, bertha) {
	return agatha.reduce((a,c) => a += c[0] * c[1], 0) ==
         bertha.reduce((a,c) => a += c[0] * c[1], 0)
}

function testFairness(agatha, bertha) {
	const f = (c) => c.reduce((acc, cur) => acc + cur[0] * cur[1], 0)
	return f(agatha) === f(bertha)
}

function testFairness(agatha, bertha) {
	return agatha.map(a=>a[0]*a[1]).reduce((t,a)=>t+a) ==	bertha.map(a=>a[0]*a[1]).reduce((t,a)=>t+a)
}

function testFairness(agatha, bertha) {
	var aCount = 0;
	var bCount = 0;
	for(var i = 0; i < agatha.length; i++){
			var chocolateAmount = agatha[i][0] * agatha[i][1]
			aCount += chocolateAmount;
		}
	for(var i = 0; i < bertha.length; i++){
			var chocolateAmount = bertha[i][0] * bertha[i][1]
			bCount += chocolateAmount;
		}
	
	return aCount === bCount
	}

	// 559. Create a function that returns true if a number is prime and false if it's not. A prime number is any positive integer that is evenly divisible by only two divisors: 1 and itself. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// White - isPrime(7) ➞ true
// isPrime(9) ➞ false
// isPrime(10) ➞ false

function isPrime(num){
  for(let i = num-1; i > 1; i--) {
    if(num%i === 0) return false;
  }
  return true;
}

function isPrime(n) {
  for(let i = 2, s = Math.sqrt(n); i <= s; i++)
    if(n % i === 0) return false; 
  return n !== 1;
}

function isPrime(num){
  for(var i = 2;i<num;i++) if(num%i===0) return false;
  return true;
}

function isPrime(num){
  for (let n = 2; n < num; n++) {
    if (num % n === 0) return false;
  }
  return true;
}

// 560. Write a function that returns true if an integer is a power of 2, and false otherwise.

// White - powerOfTwo(32) ➞ true
// powerOfTwo(1) ➞ true
// powerOfTwo(-7) ➞ false
// powerOfTwo(18) ➞ false

function powerOfTwo(num) {
	return Number.isInteger(Math.log2(num));
}

function powerOfTwo(num) {
	if (num < 0) return false;
	if (num === 0) return true;
	for(let i = 0; Math.pow(2, i) <= num; i++) {
		if (Math.pow(2, i) === num) return true
	}
	return false;
}

function powerOfTwo(num) {
	while (((num % 2) == 0) && num > 1)
   num /= 2;
 return (num == 1);
}

function powerOfTwo(num) {
	return Number.isInteger(Math.log(num) / Math.log(2));
}

// 561. Create a function that returns TRUE when number1 = number2.

// White - AreNumbersSame(4, 8) ==> false
// AreNumbersSame(2, 2) ==> true
// AreNumbersSame(0, 6) ==> false

function AreNumbersSame(num1, num2) {
	return num1 == num2;
}

function AreNumbersSame(num1, num2) {
	if(num1==num2){
		return true;
		}
	else{
		return false;
	}
}

function AreNumbersSame(num1, num2) {
	return num1 === num2 ? true : false;
}

// 562. Make a program that converts kilometers into miles. Round the answer to the fifth decimal.

// White - kilometertomiles(2) ➞ 1.24274
// kilometertomiles(6) ➞ 3.72823
// kilometertomiles(8) ➞ 4.97097

function kmtomiles(kilometers){
	return parseFloat((kilometers * 0.62137119).toFixed(5))
}

const kmtomiles = kilometers => Number((kilometers * 0.621371).toFixed(5))

function kmtomiles(kilometers){
	return +(kilometers * 0.621371).toPrecision(6);
}

// 563. Create a function that returns true when num1 is equal to num2.

function isSameNum(num1, num2) {
	return num1 === num2;
}

function isSameNum(num1, num2) {
	if (num1 === num2) {
		return true;
	} else {
		return false;
	}
}

const isSameNum = (num1, num2) => {
	num1 === num2 ? true : false; 
}

// 563. A number is narcissistic when the sum of its digits, with each digit raised to the power of digits quantity, is equal to the number itself.

// Given a positive integer n, implement a function that returns true if the number is narcissistic, and false if it's not.

// Yellow - isNarcissistic(8208) ➞ true
// 8⁴ + 2⁴ + 0⁴ + 8⁴ = 8208

// isNarcissistic(22) ➞ false
// 2² + 2² = 8

// isNarcissistic(9) ➞ true
// 9¹ = 9

const isNarcissistic = n => {
	let array = n.toString().split('')
	let length = array.length;

	let result = 0

	for (let i = 0; i < array.length; i++) {
			result += Math.pow(Number(array[i]), length)
	}
	
	return result === n ? true : false;
}

function isNarcissistic(n) {
	const digits = [...String(n)];
	return digits.reduce((a, c) => a + c ** digits.length, 0) === n;
}

function isNarcissistic(n) {
	return n === n.toString().split('').map((d, _, arr) => Math.pow(parseInt(d), arr.length)).reduce((a, c) => a + c)
}

// 564. Write a function that takes a string, breaks it up and returns it with vowels first, consonants second. For any character that's not a vowel (like special characters or spaces), treat them like consonants.

// Yellow - split("abcde") ➞ "aebcd"
// split("Hello!") ➞ "eoHll!"
// split("What's the time?") ➞ "aeieWht's th tm?"

function split(str) {
	let [vowels, cons] = ['',''];
 str.split('').map(x=>/[aeiou]/gi.test(x)?vowels+=x:cons+=x);
 return vowels+cons;
}

function split(str) {
	let s1 = ''; 
	let s2 = ''; 
	let v = ['a', 'e', 'i', 'o', 'u'];
	let s = str.split(''); 

	for(let i = 0; i < s.length; i++) {
		v.includes(s[i]) ? s1 += s[i] : s2 +=s[i];  
	}
	return s1 + s2; 
}

function split(str) {
	let a = str.match(/[aeiou]/gi);
	let b = str.match(/[^aeiou]/gi);
		return a.concat(b).join('');
	}

// 565. Create a function that returns the sum of all even elements in a 2D matrix.

/*
	Yellow - sumOfEvens([
		[1, 0, 2],
		[5, 5, 7],
		[9, 4, 3]
	]) ➞ 6
	
	// 2 + 4 = 6
	
	sumOfEvens([
		[1, 1],
		[1, 1]
	]) ➞ 0
	
	sumOfEvens([
		[42, 9],
		[16, 8]
	]) ➞ 66
	
	sumOfEvens([
		[],
		[],
		[]
	]) ➞ 0

*/

function sumOfEvens(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].filter(x => x % 2 === 0).length > 0) {
			sum += arr[i].filter(x => x % 2 === 0).reduce((a, b) => a + b);
		}
	}
	return sum;
}

function sumOfEvens(arr) {
	return arr.map(x => x.filter(x => !(x % 2)).reduce((a, b) => a+b, 0)).reduce((a, b) => a+b, 0)
}

function sumOfEvens(arr) {
	let sum = 0;
	for (let subarr of arr) {
		for (let num of subarr) {
			if (num % 2 === 0)
				sum += num;
		}
	}
	return sum;
}

function sumOfEvens(arr) {
	let sum=0
  for (let i=0;i<arr.length;i++)
	{
		for (let j=0;j<arr[i].length;j++)
			{
				if (arr[i][j]%2===0) sum+=arr[i][j]
			}
	}
	return sum
}

// 566. Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

/*

Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}

Write a function that takes in a name and returns a name tag, that should read:

"Hi! I'm [name], and I'm from [country]."

If the name is not in the object, return:

"Hi! I'm a guest."

*/

// White - greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."

// greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."

// greeting("Monti") ➞ "Hi! I'm a guest."

const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	return GUEST_LIST[name]?`Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`:"Hi! I'm a guest."
}

const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

const greeting=name=>
	GUEST_LIST[name]?"Hi! I'm "+`${name}`+", and I'm from "+`${GUEST_LIST[name]}`+".":"Hi! I'm a guest."

	const countries = {
		Randy: 'Germany',
		Karla: 'France',
		Wendy: 'Japan',
		Norman: 'England',
		Sam: 'Argentina',
	};
	
	const greeting = name =>
		countries.hasOwnProperty(name)
			? `Hi! I'm ${name}, and I'm from ${countries[name]}.`
			: "Hi! I'm a guest.";

			const GUEST_LIST = {
				Randy: "Germany",
				Karla: "France",
				Wendy: "Japan",
				Norman: "England",
				Sam: "Argentina"
			}
			
			function greeting(name) {
				if(GUEST_LIST[name]){
					return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
				}
				return"Hi! I'm a guest."
			}

// 557. Create a function that takes the month and year (as integers) and returns the number of days in that month.

// Yellow - days(2, 2018) ➞ 28

// days(4, 654) ➞ 30
// days(2, 200) ➞ 28
// days(2, 1000) ➞ 28

function days(month, year) {
	return new Date(year, month, 0).getDate()
}

function days(month, year) {
	return new Date(year, month, 0).getDate();
}

function days(month, year) {
	return new Date(year, month, 0).getDate();
}

function days(month, year) {
	let x = new Date(year, month, 0);
 return x.getDate();
}

function days(month, year) {
	return new Date(year, month, 0).getDate();
}

// 558. Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".

// Yellow - flipEndChars("Cat, dog, and mouse.") ➞ ".at, dog, and mouseC"
// flipEndChars("ada") ➞ "Two's a pair."
// flipEndChars("Ada") ➞ "adA"
// flipEndChars("z") ➞ "Incompatible."
// flipEndChars([1, 2, 3]) ➞ "Incompatible."

function flipEndChars(str) {
	return typeof str != "string"  || str.length < 2 ? "Incompatible." : 
         str[0] == str[str.length - 1] ? "Two's a pair." : 
         str[str.length - 1] + str.slice(1,str.length - 1) + str[0] ;
}

const flipEndChars = str => (typeof str !== 'string' || str.length < 2)
  ? "Incompatible." : (str[0] === str.substr(-1))
		? "Two's a pair." : str.substr(-1) + str.slice(1,-1) + str[0];
		
		function flipEndChars(str) {

			if (typeof str !== 'string') {
				return 'Incompatible.'
			}
			if (str.length < 2) {
				return 'Incompatible.'
			}
			if (str[0] === str[str.length - 1]) {
				return `Two's a pair.`
			}
			return str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
		}

// 559. The Fibonacci Sequence is the sequence of numbers (Fibonacci Numbers) whose sum is the two preceding numbers (e.g. 0, 1, 1, 2, 3, etc). 
// Using 0 and 1 as the starting values, create a function that returns an array containing all of the Fibonacci numbers less than 255.

// Yellow - 0, 1 ➞ 1

// 1, 1 ➞ 2

// 1, 2 ➞ 3

function fibonacciSequence() {
	let arr = [0,1]
	 for (let i = 0; arr[i]<255; i++){
			 arr.push(arr[i]+arr[i+1])
	 }
	 return arr.slice(0,-2)
}

function fibonacciSequence() {
	result = [];
		for (i = 0; i < 14; i++) {
			if (i == 0) result.push(0);
			else if (i == 1) result.push(1);
			else result.push(result[i - 2] + result[i - 1]);
		}
	return result;
}

function fibonacciSequence() {
	let arr = [ 0, 1]
	while (arr[arr.length -1] < 255){
		arr.push(arr[arr.length - 1]+ arr[arr.length - 2])
	}
	return arr.filter(e=> e<255)
}

// 660.  Create a function that takes three numbers as arguments and returns true if it's a triangle and false if not.
// To build a triangle from three sections, the longest of them must be shorter than the sum of the length of the other two.

// isTriangle(2, 3, 4) ➞ true

// isTriangle(3, 4, 5) ➞ true

// isTriangle(4, 3, 8) ➞ false

function isTriangle(a, b, c) {
	if (a + b > c && b + c > a && c + a > b) {
		return true
	} else {
		return false
	}
}

function isTriangle(a, b, c) {
	return (a + b > c && a + c > b && b + c > a) ? true : false
}

const isTriangle = (...s) => s.sort((a,b) => a - b)[0] + s[1] > s[2];

// 661. In this challenge, you have to convert a weight weighed on a planet of the Solar System to the corresponding weight on another planet.

// To convert the weight, you have to divide it by the gravitational force of the planet on which is weighed and multiply the result (the mass) for the gravitational force of the other planet. See the table below for a list of gravitational forces:


// Planet	m/s²
// Mercury	3.7
// Venus	8.87
// Earth	9.81
// Mars	3.711
// Jupiter	24.79
// Saturn	10.44
// Uranus	8.69
// Neptune	11.15

// Given a weight weighed on planetA, return the converted value for planetB rounded to the nearest hundredth.

// White - spaceWeights("Earth", 1, "Mars") ➞ 0.38
// spaceWeights("Earth", 1, "Jupiter") ➞ 2.53
// spaceWeights("Earth", 1, "Neptune") ➞ 1.14

function spaceWeights(planetA, weight, planetB) {
	let Planet = {
		Mercury:	3.7,
		Venus:		8.87,
		Earth:		9.81,
		Mars:			3.711,
		Jupiter:	24.79,
		Saturn:		10.44,
		Uranus:		8.69,
		Neptune:	11.15
	}
	return +Number(weight / Planet[planetA] * Planet[planetB]).toFixed(2);
}

function spaceWeights(planetA, weight, planetB) {
	let obj = {"Mercury":	3.7,
		"Venus":	8.87,
		"Earth":	9.81,
		"Mars":	3.711,
		"Jupiter":	24.79,
		"Saturn":	10.44,
		"Uranus":	8.69,
		"Neptune":	11.15
	};
	let divided = weight / obj[planetA];
	return Math.round(divided * obj[planetB] * 100) / 100;
}

function spaceWeights(planetA, weight, planetB) {
	var planets = {
		'Mercury'	: 3.7,
		'Venus'	: 8.87,
		'Earth'	: 9.81,
		'Mars' :	3.711,
		'Jupiter' :	24.79,
		'Saturn' :	10.44,
		'Uranus' :	8.69,
		'Neptune' :	11.15,
	};
	return +(weight/planets[planetA]*planets[planetB]).toFixed(2);
}

function spaceWeights(planetA, weight, planetB) {
	var planets = {
		Mercury:3.7,
		Venus:8.87,
		Earth:9.81,
		Mars:	3.711,
		Jupiter:	24.79,
		Saturn:	10.44,
		Uranus:	8.69,
		Neptune:11.15
	};
	return Number((planets[planetB]*weight/planets[planetA]).toFixed(2));
}

function spaceWeights(planetA, weight, planetB) {
	
	function getPlanet(planet){
	
	switch(planet){
			
		case "Mercury": return 3.7 ;
				break;
		case "Venus": return 8.87;
				break;
		case "Earth": return 9.81 ;
				break;
		case "Mars": return 3.711 ;
				break;
		case "Jupiter": return 24.79;
				break;
		case "Saturn": return 10.44;
				break;
		case "Uranus": return 8.69;
				break;
		case "Neptune": return 11.15;
				break;
	}
}
	var divider = getPlanet(planetA);
	var multiplier = getPlanet(planetB);
	
	return (Math.round((100 * (weight / divider)) * multiplier)/100);
	
}


// 662. Write a function that calculates the nth Fibonacci number.

// Write a function that calculates the nth Fibonacci number.

// Yellow - fib(0) ➞ 0

// fib(1) ➞ 1
// fib(2) ➞ 1
// fib(8) ➞ 21

const fib = n => n <= 1 ? n : fib(n-1) + fib(n-2)

function fib(n) {
  if(n === 0) return 0;
	else if(n === 1) return 1;
	else {
		return fib(n - 1) + fib(n - 2);
	}
}

function fib(n) {
  const r = [0, 1];
  for (let i = 2; i <= n; i++) {
    r[i] = r[i - 2] + r[i - 1];
  }
  return r[n];
}

function fib(n) {
	if (n <= 1) return n;
	return fib(n-1) + fib(n-2);
}

function fib(n) {
	return n<2 ? n : fib(n-1)+fib(n-2);
}

// 663. Create a function that returns the amount of duplicate characters in a string. It will be case sensitive and spaces are included. If there are no duplicates, return 0.

function duplicates(str) {
	let letters = str.split('');
	let unique = new Set(letters);
	return letters.length - unique.size;
}

function duplicates(str) {
	return str.length - new Set(str).size 
}

function duplicates(str) {
	var x = new Set(str).size;
	return str.length - x;
}

const duplicates = str => str.length - new Set(str).size;

const duplicates = str => str.length - [...new Set(str.split(''))].length

// 664. Create a function that takes three numbers — the width and height of a rectangle, and the radius of a circle and returns true if the rectangle can fit inside the circle, false if it can't.

// Yellow - rectangleInCircle(8, 6, 5) ➞ true
// rectangleInCircle(5, 9, 5) ➞ false
// rectangleInCircle(4, 7, 4) ➞ false

function rectangleInCircle(w, h, radius) {
	let diag = w*w + h*h; 
	let c = 4 * (radius * radius);
	if (diag <= c)
	{
		return true;
	}
	return false;
}

function rectangleInCircle(w, h, radius) {
	let len = Math.hypot(w, h);
	return len <= 2*radius;
}

function rectangleInCircle(w, h, radius) {
	return radius <= Math.sqrt(w * w + h * h) / 2 ? false : true
}

function rectangleInCircle(w, h, radius) {
	return w*w+h*h <= Math.pow(radius*2, 2)
}

// 665. Create a function that determines if there is an upward trend.

// upwardTrend([1, 2, 3, 4]) ➞ true
// upwardTrend([1, 2, 6, 5, 7, 8]) ➞ false
// upwardTrend([1, 2, 3, "4"]) ➞ "Strings not permitted!"
// upwardTrend([1, 2, 3, 6, 7]) ➞ true

// 666. Write a function that returns the first n vowels of a string.

// Yellow - firstNVowels("sharpening skills", 3) ➞ "aei"
// firstNVowels("major league", 5) ➞ "aoeau"
// firstNVowels("hostess", 5) ➞ "invalid"

// 666. Write a function that returns the first n vowels of a string.

// firstNVowels("sharpening skills", 3) ➞ "aei"
// firstNVowels("major league", 5) ➞ "aoeau"
// firstNVowels("hostess", 5) ➞ "invalid"

const firstNVowels = (str, n) => {
  const vowels = str.match(/[aeiou]/gi) || [];
  return vowels.length < n ? 'invalid' : vowels.slice(0, n).join('');
};

function firstNVowels(s, n) {
	const v = s.match(/[aeiou]/gi).join("");
	return v.length >= n ? v.slice(0, n) : "invalid";
}

function firstNVowels(s, n) {
	const regex = /[aeiou]/g
	var arr = s.match(regex);
	if (arr.length<n) return 'invalid'
	arr.length=n
	return arr.join('')
}

function firstNVowels(s, n) {
	const vowels = s.match(/[aeiou]/g).join('').slice(0,n);
	return vowels.length == n? vowels:'invalid'
	
}

// 667. You will be creating a drink object with the following properties:

// name
// price

// The drink object has a method: getDrinkDetails. When the drink object's method is called it will output the following:
// drink.getDrinkDetails() ➞ 'Drink {name} has a price of {price}'

// printDrinkDetails() ➞ 'Drink Water has a price of 2'

function printDrinkDetails() {
	drink = {
    name: 'Cola',
    price: 0.50,
    getDrinkDetails(){
        return `Drink ${this.name} has a price of ${this.price}`;
    }
	};
	return drink.getDrinkDetails();
}

function printDrinkDetails() {
	drink = {
	  name : 'vodka',
	  price : 10,
	  }
  
  	return `Drink ${drink.name} has a price of ${drink.price}`
}

let drink = {
	name: "Water",
	price: 2,
	getDrinkDetails: function() {
		return `Drink ${this.name} has a price of ${this.price}`;
	},
};

function printDrinkDetails() {
	return drink.getDrinkDetails();
}

// 668. In BlackJack, cards are counted with -1, 0, 1 values:

// 2, 3, 4, 5, 6 are counted as +1
// 7, 8, 9 are counted as 0
// 10, J, Q, K, A are counted as -1

// Create a function that counts the number and returns it from the array of cards provided.

// Yellow - count([5, 9, 10, 3, "J", "A", 4, 8, 5]) ➞ 1
// count(["A", "A", "K", "Q", "Q", "J"]) ➞ -6
// count(["A", 5, 5, 2, 6, 2, 3, 8, 9, 7]) ➞ 5

function count(deck) {
	var card = {
		2 : 1,
		3 : 1,
		4 : 1,
		5 : 1,
		6 : 1,
		7 : 0,
		8 : 0,
		9 : 0,
		10 : -1,
		"J" : -1,
		"Q" : -1,
		"K" : -1,
		"A" : -1
	}
	return deck.reduce((a, b) => a + card[b], 0);
}

function count(deck) {
	let total = 0;
	 for(let i = 0; i < deck.length; i++){
		 switch(deck[i]){
			 case 2:		
			 case 3:		
			 case 4:		
			 case 5:		
			 case 6:		
				 total++;
			 break;
			 case 10:		
			 case "J":		
			 case "Q":		
			 case "K":		
			 case "A":		
				 total--;
		 }
	 }
	 return total;
 }

function count(deck) {
	return deck.reduce((a, c) => a + (c <= 6 ? 1 : c <= 9 ? 0 : -1), 0);
}

function count(deck) {
	var count = 0;
	for(var i=0; i<deck.length; i++){
		if(deck[i] == 2 || deck[i] == 3 || deck[i] == 4 ||  deck[i] == 5 || deck[i] == 6){
				count++;
			}
		else if(deck[i] == 10 || deck[i] == "J" || deck[i] == "Q" || deck[i] == "K" || deck[i] == "A"){
			count--;
		}
	}
	return count;
}

// 669. A palindrome is a word, phrase, number or other sequence of characters which reads the same backward or forward, such as madam or kayak.
// Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).

// White - isPalindrome("Neuquen") ➞ true
// isPalindrome("Not a palindrome") ➞ false
// isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!") ➞ true

function isPalindrome(string) {
  string = string.replace(/[^a-zA-Z]/g, '').toLowerCase()
  return string.split('').reverse().join('') === string
}

function isPalindrome(string) {
  var arr = string.toLowerCase()
    .split('')
    .filter(c=>/[a-z]/.test(c));
  
  return arr.join() == arr.reverse().join();
}

const isPalindrome = str => {
  const newStrArr = [...str.toLowerCase().replace(/[^\w]|_/gi, "")];
  
  return newStrArr.join("") === newStrArr.reverse().join("");
};

function isPalindrome(string) {
  var arr = string.toLowerCase().match(/[a-z]+/g).join('');
  
  return arr.split('').join('') == arr.split('').reverse().join('');
}

function isPalindrome(string) {
  var sanitized = string.toLowerCase().replace(/[^a-z]/g, "");
  var reversed = sanitized.split('').reverse().join(''); 
  return (reversed == sanitized);
}

// 670. Create a function that outputs true if a number is prime, and false otherwise.

// Yellow - isPrime(31) ➞ true
// isPrime(18) ➞ false
// isPrime(11) ➞ true

function isPrime(num) {
	if (num === 1) return false;
	if (num === 2) return true;
	if (!(num & 1)) return false;
	for (let i = 2; i <= num >> 1; i++) {
		if (!(num % i)) return false;
	}
	return true;
}

const isPrime = num => {
	for(let i = 2, s = Math.sqrt(num); i <= s; i++)
			if(num % i === 0) return false; 
	return num > 1;
}

function isPrime(num) {
	if (num == 1) return false;
  for (var i = 2; i < num; i++) {
		if (num % i == 0) return false;
	}
	return true;
}

function isPrime(num) {
	if (num === 1) return false;
  let n = 2;
	while (n < num) {
		if (num % n === 0) return false;
		n++;
	}
	return true;
}

const isPrime = (num) => {
	return ([...Array(num + 1).keys()].filter(n => num % n === 0).length) === 2
}

// 671. Write a function to return the city from each of these vacation spots.

// White - grabCity("[Last Day!] Beer Festival [Munich]") ➞ "Munich"
// grabCity("Cheese Factory Tour [Portland]") ➞ "Portland"
// grabCity("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]")

function grabCity(str) {
	return str.slice(str.lastIndexOf('[') + 1, str.lastIndexOf(']'))
}

function grabCity(str) {
	return str.match(/\[([\w\s]+)]$/)[1];
}

grabCity = str => str.slice(str.lastIndexOf("[")+1, -1);

function grabCity(str) {
	var a = str.split("[").pop();
	return a.slice(0,a.length-1);
}

function grabCity(str) {
	let bracketedWords = str.match(/\[[a-z\s]+\]/gi);
	return bracketedWords[bracketedWords.length-1].replace(/\[|\]/gi , "");
}

