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

// If there is a string element in the array, return "Strings not permitted!".
// The numbers don't have to be consectutive (e.g. [1, 3, 5] should still return true).

// upwardTrend([1, 2, 3, 4]) ➞ true
// upwardTrend([1, 2, 6, 5, 7, 8]) ➞ false
// upwardTrend([1, 2, 3, "4"]) ➞ "Strings not permitted!"
// upwardTrend([1, 2, 3, 6, 7]) ➞ true

const upwardTrend = arr => 
	arr.some(x => typeof x === "string")? "Strings not permitted!" 
	: arr.slice(1).every((x, i) => x > arr[i]);

function upwardTrend(arr) {
	return arr.some(x=>typeof x == 'string')?'Strings not permitted!':arr.toString()==arr.sort((a,b)=>a-b).toString()
}

function upwardTrend(arr) {
	let last = 0
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'string') {
			return 'Strings not permitted!'
		}
		if (arr[i] < last) return false
		last = arr[i]
	}
	return true
}

function upwardTrend(arr) {
	return arr.some(e=>typeof e=='string')?"Strings not permitted!":arr.every((a,i,ar)=>i==arr.length-1?true:a<ar[i+1]);
}

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

// 672. Create a function that takes a string of four numbers. These numbers represent two separat points on a graph known as the x-axis (horizontal axis) and y-axis (vertical axis). Each number corresponds as follows: "x1, y1, x2, y2". Calculate the distance between x and y.

// Yellow - shortestDistance("1,1,2,1") ➞ 1
// shortestDistance("1,1,3,1") ➞ 2
// shortestDistance("-5,1,3,1") ➞ 8
// shortestDistance("-5,2,3,1") ➞ 8.06

function shortestDistance(str) {
	let [x1,y1,x2,y2] = str.split(",").map(a => Number(a));
	return Number(Math.hypot(x1 - x2, y1 - y2).toFixed(2));
};

function shortestDistance(str) {
	var arr = str.split(",").map(e => parseFloat(e));
	return parseFloat(Math.sqrt((Math.pow(arr[0]-arr[2], 2)+Math.pow(arr[1]-arr[3], 2))).toFixed(2));
};

function shortestDistance(s) {
	s = s.split(",")
	return parseFloat((Math.sqrt(Math.pow(s[0]-s[2], 2) + Math.pow(s[1] - s[3], 2))).toFixed(2));
};

shortestDistance = s => (
	[a,b,c,d] = s.split`,`,
	+Math.sqrt(Math.pow(a-c,2) + Math.pow(b-d,2)).toFixed(2)
)

// 673. Create a function that takes a string and returns a string with spaces in between all of the characters.

// White - spaceMeOut('space') ➞ 's p a c e'
// spaceMeOut('far out') ➞ 'f a r  o u t'
// spaceMeOut('elongated musk') ➞ 'e l o n g a t e d   m u s k'

const spaceMeOut = str => str.split('').join(' '); 

function spaceMeOut(str) {
	return str.split('').join(' '); 
}

// 674. Create a function that takes in a string and returns the string but with words over four characters to be censored with *.

// Yellow - censor('The code is fourty') ➞ 'The code is ******'
// censor('Two plus three is five') ➞ 'Two plus ***** is five'
// censor('aaaa aaaaa 1234 12345') ➞ 'aaaa ***** 1234 *****'

function censor(str) {
	return str.split(' ').map(word => word.length < 5 ? word : '*'.repeat(word.length)).join(' '); 
}

function censor(str) {
	return str.split(' ').map( e => e.length > 4 ? '*'.repeat(e.length) : e).join(' '); 
}

const censor = str => {
	return str
		.split(" ")
		.map(wrd => wrd.length > 4 ? "*".repeat(wrd.length) : wrd)
		.join(" ");
}

// 675. Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.

// White - addUpTo(3) ➞ 6
// 1 + 2 + 3 = 6
// addUpTo(10) ➞ 55
// 1 + 2 + 3 + ... + 10 = 55
// addUpTo(7) ➞ 28
// 1 + 2 + 3 + ... + 7 = 28

const addUpTo = n => n * (n + 1) / 2; 

function addUpTo(n) {
	let x = n * (n + 1); 
	let y = x / 2; 
	return y; 
}

function addUpTo(n) {
	return (n * (n + 1)) / 2; // 3 --> 6
}

function addUpTo(n) {
	return n == 0 ? 0 : n + addUpTo(n - 1); 
}

// 676. Create a function which outputs the result of a math expression in words.

// Yellow - wordedMath('One plus one') ➞ 'Two'
// wordedMath('zero Plus one') ➞ 'One'
// wordedMath('one minus one') ➞ 'Zero'

function wordedMath(expr) {
	
  if((eval(expr.replace(/two/gi, 2).replace(/one/gi, 1)
    .replace(/zero/gi, 0).replace(/minus/i, "-").replace(/plus/i, "+"))) === 1){
    return 'One';
  } else if ((eval(expr.replace(/two/gi, 2).replace(/one/gi, 1)
    .replace(/zero/gi, 0).replace(/minus/i, "-").replace(/plus/i, "+"))) === 2){
    return 'Two';
  } else if ((eval(expr.replace(/two/gi, 2).replace(/one/gi, 1)
    .replace(/zero/gi, 0).replace(/minus/i, "-").replace(/plus/i, "+"))) === 0){
    return 'Zero';
  }  
}

// 777. Create a function which takes in year and months as input, then return what year it would be after n-months has elapsed.

// Yellow - afterNMonths(2020, 24) ➞ 2022
// afterNMonths(1832, 2) ➞ 1832
// afterNMonths(1444, 60) ➞ 1449

function afterNMonths(year, months) {
  return !year
    ? "year missing"
    : !months
    ? "month missing"
    : year + Math.floor(months / 12);
}

function afterNMonths(year, months) {
	if (year === undefined)return 'year missing';
	if (months === undefined) return 'month missing';
	return Math.floor(months/12) + year;
}

function afterNMonths(year, months) {
	if (!year){ 
		return 'year missing'
	} else if (!months) {
		return 'month missing'
	} else {
		if (months >= 12) {
			while(months >= 12){
				year += 1;
				months -= 12;
			}
		}
		
		return year
	}
}

function afterNMonths(year, months) {
	if(!year) return 'year missing';
	if(!months) return 'month missing';
	return year + Math.floor(months / 12);
}

// 778. Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

// Yellow - freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
// freeShipping({ "Flatscreen TV": 399.99 }) ➞ true
// freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true

function freeShipping(order) {
	let totalCost = 0.00; 
	for(item in order) {
		totalCost += order[item]; 
	}
	return totalCost >= 50.00; 
}

function freeShipping(order) {
	let keys = Object.keys(order); 
	let vals = []; 
	for (let i = 0; i < keys.length; i++) {
		vals.push(order[keys[i]])
	}
	return vals.reduce((a,b) => a + b) >= 50
}

function freeShipping(order) {
	let mapData = []
	Object.keys(order).map(function (key) {
		mapData.push(order[key]); 
	}); 
	return mapData.reduce((a,b) => a + b) >= 50; 
}

function freeShipping(order) {
	var names = Object.keys(order)
	var total = 0
	names.forEach(function(val) {
		total += order[val] 
	})
	return (total > 50) 
}

// 779. Create a function that takes a sequence of either strings or numbers, 
// removes the surrounding duplicates and returns an array of items without any 
// items with the same value next to each other and preserves the original order 
// of items.

// Yellow - uniqueInOrder("AAAABBBCCDAABBB") ➞ ["A", "B", "C", "D", "A", "B"]
// uniqueInOrder("ABBCcAD") ➞ ["A", "B", "C", "c", "A", "D"]
// uniqueInOrder([1, 2, 2, 3, 3]) ➞ [1, 2, 3]

// Example - Array.from 
// console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

function uniqueInOrder(sequence) {
  return Array.from(sequence).filter((x,i,a) => x !== a[i-1]);
}

function uniqueInOrder(sequence) {
	return [...sequence].filter((a, i) => a !== sequence[i+1])
}

function uniqueInOrder(s) {
  if (typeof s == 'string') s = s.split('');
  return s.filter((x, i, a) => {
    if (i === a.length - 1) return true;
    else return x !== a[i + 1]
  });
}

function uniqueInOrder(sequence) {
  var arr=[sequence[0]];
 for (var i=1;i<sequence.length;i++){
   if (sequence[i]!==sequence[i-1]){
     arr.push(sequence[i]);
   }
 }
  return arr
}

// 880. Create a function that takes two numbers as arguments and returns the GCD of the two numbers.

// White - gcd(3, 5) ➞ 1
// gcd(14, 28) ➞ 14
// gcd(4, 18) ➞ 2

function gcd(a,b){
	return b == 0 ? a : gcd(b, a % b);
};

const gcd = (a, b) => !b ? a : gcd(b, a % b);

function gcd(a, b) {
	var c=[]
		for(var i=1;i<=Math.max(a,b);i++){
		if(a%i===0&&b%i===0){
			c.push(i)
		}	
		}
		return Math.max(...c)	
	}

	function gcd(a, b) {
		let min = Math.min(a, b),
				max = Math.max(a, b);
		return max % min === 0 ? min : gcd(min, max % min);
	}

// 881. A museum wants to get rid of some exhibitions. Katya, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and removes the one with the lowest rating. Just as she finishes rating the exhibitions, she's called off to an important meeting. She asks you to write a program that tells her the ratings of the items after the lowest one is removed.

// Create a function that takes an array of integers and removes the smallest value.

function removeSmallest(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr;
}

function removeSmallest(arr) {
  let lowest = Math.min(...arr);
  arr.splice(arr.indexOf(lowest), 1);
  return arr;
}

function removeSmallest(arr) {
  let tmp = arr.slice(0);
  tmp.sort((a, b) => a - b)
  arr.splice(arr.indexOf(tmp[0]), 1)
  return arr
}
 // 882. Create a function that takes an array of booleans that represent whether or not a player has logged into a game that day. Output the longest streak of consecutive logged in days.

//  Yellow - dailyStreak([True, True, False, True]) ➞ 2
//  dailyStreak([False, False, False]) ➞ 0
//  dailyStreak([True, True, True, False, True, True]) ➞ 3

function dailyStreak(arr) {
	let num = 0;
	let count = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			num++;
			count.push(num);
		} else {
			num = 0;
		}
	}
	return count.length < 1 ? 0 : Math.max(...count);
}

function dailyStreak(arr) {
	var c = arr.reduce((a, b) => (b ? a[a.length-1]++ : a.push(0), a), [0]);
	return c.sort((a,b) => b-a)[0];
}

function dailyStreak(arr) {
	let res =Math.abs(0 - arr.indexOf(false))
	let res1 =Math.abs((arr.length-1) - arr.indexOf(false))
	if(arr.indexOf(true) === -1) {return 0}
	return res1 > res ? res1 : res
}

// 883. Write a function that recursively returns the number of vowels in a string.

// Yellow - countVowels("apple") ➞ 2

// countVowels("cheesecake") ➞ 5
// countVowels("bbb") ➞ 0
// countVowels("") ➞ 0

function countVowels(str) {
	let reg = /[aeiou]/i;
	if (str.length < 1) return 0;
	return (reg.test(str[str.length - 1]) ? 1 : 0) + countVowels(str.slice(0, str.length - 1));
}

function countVowels(str) {
	return str.split('').filter(x=>(/[aeiou]/ig).test(x)).length;
}

function countVowels(str) {
	return [...str].filter(x=> x.match(/[aeiou]/ig)).length		
}

// 884. Create a function that capitalizes the last letter of every word.

// Yellow - capLast("hello") ➞ "hellO"
// capLast("My Name Is Edabit") ➞"MY NamE IS EdabiT"
// capLast("HELp THe LASt LETTERs CAPITALISe") ➞ "HELP THE LAST LETTERS CAPITALISE"

function capLast(txt) {
	const cap = s => s.slice(0,-1) + s.slice(-1).toUpperCase();
	return txt.split(' ').map(cap).join(' ');
}

function capLast(txt){
	return txt.split(' ').map(word => word.slice(0, -1) + word[word.length-1].toUpperCase()).join(' ')
}

function capLast(txt){
	let arr = txt.split(' ')
	return arr.map(word => word.slice(0, word.length-1) + word.charAt(word.length-1).toUpperCase()).join(' ')
}

// 885. Given an array of ingredients and a string flavour as input, create a function that returns the array but with the elements bread around the selected ingredient.

// Yellow - makeSandwich(['tuna', 'ham', 'tomato'], 'ham') ➞ ['tuna', 'bread', 'ham', 'bread', 'tomato']
// makeSandwich(['cheese', 'lettuce'], 'cheese') ➞ ['bread', 'cheese', 'bread', 'lettuce']
// makeSandwich(['ham', 'ham'], 'ham') ➞ ['bread', 'ham', 'bread', 'bread', 'ham', 'bread']

function makeSandwich(ingredients, flavour) {
	return ingredients.map(e => e==flavour ? ["bread", e, "bread"] : e).flat();
}

function makeSandwich(ingredients, f) {
	return ingredients.join(" ").split(f).join(`bread ${f} bread`).split(" ")
}

function makeSandwich(i, f) {
	return i.join(" ")
					.split(f)
					.join("bread,bread")
					.replace(/[,]/g," "+f+" ")
					.split(" ");
 }

 function makeSandwich(ingredients, flavour) {
	let arr = [];
	let mapArr = ingredients.map((cur, i) => {
		if (cur === flavour) {
				arr.push('bread', cur, 'bread');
		} else {
			 arr.push(cur);
		}
	});
	return arr;
}

// 886. Create a function that takes width and height and finds the perimeter of a rectangle.

// Yellow - findPerimeter(6, 7) ➞ 26
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22

function findPerimeter(height,width){
	return (height + width) * 2;
}

function findPerimeter(height,width){
	return 2 * (height + width)
}

function findPerimeter(height,width){
	const perimeter = (height + width) * 2
	return perimeter
}

// 887. Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.

// White - probability([5, 1, 8, 9], 6) ➞ 50.0
// probability([7, 4, 17, 14, 12, 3], 16) ➞ 16.7
// probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6) ➞ 70.0

const probability = (arr, num) =>
	Number(((arr.filter(n => n >= num).length / arr.length) * 100).toFixed(1));
	
function probability(arr, num) {
		return +((arr.filter( x => x >= num).length / arr.length) * 100).toFixed(1);
}

function probability(arr, num) {
  var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] >= num){
			count++;
		}
	}
	return Number(((count/arr.length)*100).toFixed(1));
}

// 888. Create a function that takes an array of factorial expressions and returns their sum.

// Yellow - evalFactorial(["2!", "3!"]) ➞ 8
// evalFactorial(["5!", "4!", "2!"]) ➞ 146
// evalFactorial(["0!", "1!"]) ➞ 2

function evalFactorial(arr) {
	const getFact = x => {
		x = +x.slice(0, -1);
		if (x === 0 || x === 1) return 1;
		for (let i = x - 1; i >= 2; i--) x *= i;
		return x;
	}
	return arr.map(getFact).reduce((a,b) => a + b, 0);
}

function evalFactorial(lst) {
	return lst.join(' ').match(/\d+/g).map(x => {
	let calck = 1;
	for(let i = 1; i <= x; i++) calck *= i;
		return calck;
}).reduce((c,i) => c + i, 0);
}

const evalFactorial = N => (
	f = x => +x ? x * f(--x) : 1,
	eval(`${N}`.match(/\d+/g).map(f).join`+`)
)

function evalFactorial(lst) {
	r=0;function f(n){return n===0?1:n*f(n-1)}
	lst.forEach(i=>r+=f(parseInt(i)))
	return r;
}

// 889. Create a function that takes a single string as argument and returns an ordered array containing the indices of all capital letters in the string.

// Yellow - indexOfCaps("eDaBiT") ➞ [1, 3, 5]
// indexOfCaps("eQuINoX") ➞ [1, 3, 4, 6]
// indexOfCaps("determine") ➞ []
// indexOfCaps("STRIKE") ➞ [0, 1, 2, 3, 4, 5]
// indexOfCaps("sUn") ➞ [1]

function indexOfCaps(str) {
  var res = [];
  for(var i = 0; i < str.length; i++){
    if (/[A-Z]/.test(str[i])){
      res.push(i);
    }
  }
  return res;
}

function indexOfCaps(str) {
  return str.split('').reduce((arr, c, i) => /[A-Z]/.test(c) ? arr.concat(i) : arr, [])
}

const indexOfCaps = str => str.split('').map((v,k) => k).filter(i => str[i].match(/[A-Z]/))

// 890. Create the function that takes an array with objects and returns the sum of people's budgets.

// Yellow - getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600

function getBudgets(arr) {
	const budgets = arr.reduce((total, person) => total + person.budget, 0);
	return budgets;
}

function getBudgets(arr) {
	return arr 
		.map(obj => Object.values(obj) [2])
		.reduce((acc, curr) => acc + curr); 
}

function getBudgets(arr) {
	return arr.reduce((sum, x) => sum + x.budget, 0); 
}

const getBudgets = arr => arr.reduce((a, v) => a + v.budget, 0); 

function getBudgets(arr) {
	return arr.map(elem => elem.budget).reduce((acc, inx) => acc += idx); 
}

// 891. Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

// Yellow - inkLevels({
//   "cyan": 23,
//   "magenta": 12,
//   "yellow": 10
// }) ➞ 10

// inkLevels({
//   "cyan": 432,
//   "magenta": 543,
//   "yellow": 777
// }) ➞ 432

// inkLevels({
//   "cyan": 700,
//   "magenta": 700,
//   "yellow": 0
// }) ➞ 0

function inkLevels(inks) {
	return Math.min(...Object.values(inks)); 
}

const inkLevels = this => Math.min(...Object.values(inks)); 

function inkLevels(inks) {
	return Math.min(inks.cyan, inks.magenta, inks.yellow)
}

// 892. Create a function that counts the number of times a particular letter shows up in the word search.

// letterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D") ➞ 3

// // "D" shows up 3 times: twice in the first row, once in the third row.

// Yellow - letterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "H") ➞ 2

function letterCounter(arr, letter) {
	var c = 0;
	for (var i in arr) {
		for (var j in arr[i]) {
  		if (arr[i][j] == letter) c++
		}
	}
	return c;
 }

 function letterCounter(arr, letter) {
	return arr.map(a=>a.reduce((acc,next)=>next==letter?acc+1:acc+0,0))
		.reduce((acc,next)=>acc+next)
}

function letterCounter(arr, letter) {
	return arr.reduce((acc, a) => {
		return acc + a.filter(b => b === letter).length;
	}, 0)
}

// 893. Create a function that returns the array of numbers from a given range. But for multiples of three, 
// return “Eda” instead of the number and for the multiples of five, return “Bit”. For numbers which are 
// multiples of both three and five, return “EdaBit”.

// Yellow - edaBit(0, 10) ➞ ["EdaBit", 1, 2, "Eda", 4, "Bit", "Eda", 7, 8, "Eda", "Bit" ]
// edaBit(14, 20) ➞ [14,  "EdaBit", 16, 17,  "Eda", 19, "Bit" ]
// edaBit(99, 106) ➞ ["Eda", "Bit", 101, "Eda", 103, 104, "EdaBit", 106 ]

function edaBit(start, end) {
	let res = []
	for(let i = start; i < end +1 ; i++){
		i%5==0 && i%3==0? res.push("EdaBit"):i%3==0 ? res.push("Eda"): i%5==0?
			res.push("Bit"): res.push(i)}
	return res

ffunction edaBit(start, end) {
	let range = [];
	for (let i = start; i <= end; i++) {
		if (i % 5 == 0 && i % 3 == 0) {
			range.push('EdaBit');
		} else if (i % 3 == 0) {
			range.push ('Eda');
		} else if (i % 5 == 0) {
			range.push ('Bit');
		} else {
			range.push(i);
		}
	}
	return range;
}


function edaBit(start, end) {
	var arr =  Array.from({ length: (end+1 - start)}, (_, i) => start + (i));
	return arr.map(num =>{
		if(num % 3 === 0 && num % 5 === 0){
			return 'EdaBit';
		}
		if(num % 3 === 0){
			return 'Eda';
		}
		if(num % 5 === 0){
			return 'Bit';
		}
		return num;
	})
}


function edaBit(start, end) {
	const arr = [];
	while(start <= end) {
		if ((start % 3 == 0 && start % 5 == 0) || start == 0) {
			arr.push("EdaBit");
		} else if (start % 3 == 0) {
		  arr.push("Eda");
		} else if (start % 5 == 0) {
			arr.push("Bit");
		} else {
			arr.push(start);
		}
		start ++;
	}
	
	return arr;
}

// 894. Create a function that takes a string and returns a new string with each new character accumulating by +1. Separate each set with a dash.

// accum("abcd") ➞ "A-Bb-Ccc-Dddd"
// accum("RqaEzty") ➞ "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") ➞ "C-Ww-Aaa-Tttt"

function accum(str) {
  return 	str.split('').map((x, i) => x.toUpperCase() + x.repeat(i).toLowerCase()).join('-');
}

function accum(str) {
  var s = Array.from(str).reduce((acc, ch, i) => acc + '-' + ch.toUpperCase() + ch.toLowerCase().repeat(i));
  return s[0].toUpperCase() + s.slice(1);
}

function accum(str) [
	return str.split('').map((el, idx) => {
		return el.toUpperCase() + el.toLowerCase().repeat(idx)
	}).join('-')
]

// 895. Create a function that takes a number as input and returns true if the sum of its digits has the same parity as the entire number. Otherwise, return false.     

// parityAnalysis(243) ➞ true
// 243 is odd and so is 9 (2 + 4 + 3)

// parityAnalysis(12) ➞ false
// 12 is even but 3 is odd (1 + 2)

// parityAnalysis(3) ➞ true
// 3 is odd and 3 is odd and 3 is odd (3)

function parityAnalysis(num) {
	let sum = num.toString().split('').map(el => + el)
		.reduce((acc, idx) => acc += idx); 
	return num % 2 === sum % 2; 
}

function parityAnalysis(num) {
	let sum = num.toString().split('').reduce((a, b) => Number(a) + Number(b)); 
}

function parityAnalysis(num) {
	return (Array.from(String(num), Number).reduce((a, b) => a + b)) % 2 == num % 2; 
}

// 886. An overlapped clap is a clap which starts but doesn't finish, as in 'ClaClap' (The first clap is cut chort and there are overall 2 claps)
// Given a string of what the overlapping claps sounded like, return how many claps were made in total

// White - countClaps('ClaClaClaClap!') ➞ 4
// countClaps('ClClClaClaClaClap!') ➞ 6
// countClaps('CCClaClClap!Clap!ClClClap!') ➞ 9

function countClap(txt) {
	return text.split('').filter(i => i == 'C').length; 
}

function countClaps(txt) {
	return txt.match(/[C]/gi).length; 
}

function countClaps(txt) {
	return txt.split('C').length - 1; 
}

// 887. Create a function that calculates the profit margin given costPrice and salesPrice. Return the result as a percentage formated string, and rounded to one decimals. To calculate profit margin you subtract the cost from the sales price, then divide by salesprice.

// Yellow - profitMargin(50, 50) ➞ "0.0%"
// profitMargin(28, 39) ➞ "28.2%"
// profitMargin(33, 84) ➞ "60.7%"

function profitMargin(costPrice, salesPrice) {
  return (((salesPrice - costPrice)/salesPrice) * 100).toFixed(1) + '%'; 
}

function profitMargin(costPrice, salesPrice) {
	return ((1 - (costPrice / salesPrice)) * 100).toFixed(1) + '%'
}

const profitMargin = (cost, sale) => (100*(sale-cost)/sale).toFixed(1)+'%';

// 888. Create a function which replaces the last n words with "blah". Add "..." to the last blah.

// White - blahBlah("A function is a block of code which only runs when it is called",  5) ➞ "A function is a block of code which only blah blah blah blah blah..."
// blahBlah("one two three four five", 2) ➞ "one two three blah blah..."
// blahBlah("Sphinx of black quartz judge my vow", 10) ➞ "blah blah blah blah blah blah blah..."

function blahBlah(str, n) {
	return str.split(' ').length > n ? (str.split(' ').slice(0, str.split(' ')
				 .length-n)).join(' ')  + ' blah'.repeat(n) + '...' 
				 : 'blah '.repeat(str.split(' ').length-1) + 'blah...
}

function blahBlah(str, n) {
	let arr = str.split(' ')
	if(n > arr.length)
		return 'blah '.repeat(arr.length - 1) + 'blah...'
	for(i = 0; i < n; i++)
		arr.pop()
	str = arr.join(' ') + ' blah'.repeat(n - 1) + ' blah..'
	return str
}

const blahBlah = (str, n) => 
	str.split(' ')
	.map(w, i, a) => a.length - 1 <= n ? 'blah' : 2) 
	.join(' ')
	.concat('...'); 

// 890. When creating variables, the variable name must always start with a letter, though numbers and underscores are allowed to be contained in it also.
// Create a function which returns true if a given variable name is valid, otherwise return false.

// Yellow - variableValid("result") ➞ true
// variableValid("odd_nums") ➞ true
// variableValid("2TimesN") ➞ false

function variableValid(variable) {
	return /^[0-9]|\s/g.test(variable) ? false:true;
}

function variableValid(variable) {
	for(let i=0; i<=variable.length; i++) {
		if (variable[i] ==== ''){
			return false
		}
	}
	return (/^[a-zA-Z]/i).test(variable)
}

// 891. Something which is not true is false, but something which is not not true is true! Create a function where given n number of "not", evaluate whether it's true or false.

// notNotNot(1, true) ➞ false
// Not true.

// notNotNot(2, false) ➞ false
// Not not False.

// notNotNot(6, true) ➞ true
// Not not not not not not True.

function noNotNot(n, bool) {
	return n % 2 == 1 ? !bool : bool; 
}

function notNotNot(n, bool) {
	return n%2 === 0 ? bool : !bool;
}

function notNotNot(n, bool) {
	let arr = []; 
	for (let n=1; n <= n; n++) {
		arr.push('!');
	}
	return arr
}

function notNotNot(n, bool) {
	if (n % 2 == 0) {
		return bool
	}
	return !bool
}

// 892. Create a function that takes an array like the one above and transforms it into the same format as the one below:

// Yellow - tidyBooks([
//   "     The Catcher in the Rye - J. D. Salinger    ",
//   "    Brave New World - Aldous Huxley   ",
//   "    Of Mice and Men - John Steinbeck    "
// ]) ➞ [
//   "The Catcher in the Rye", "J. D. Salinger",
//   "Brave New World", "Aldous Huley",
//   "Of Mice and Men", "John Steinbeck"
// ]

function tidyBooks(arr) {
	return arr.map(s => s.split(' - ').map(a => a.trim()))
}

function tidyBooks(arr) {
	arr = arr.map(x => x.trim(x)).map(x => x.split(' - ')); 
	return arr; 
}

function tidyBooks(arr) {
	return arr.map(nameArr => nameArr[0].trim().split('-').map(name => name.trim())); 
}

// 893. Create a function that accepts an array of two strings and checks if the letters in the second string are present in the first string.

// Yellow - letterCheck(["trances", "nectar"]) ➞ true
// letterCheck(["compadres", "DRAPES"]) ➞ true
// letterCheck(["parses", "parsecs"]) ➞ false

function letterCheck(arr) {
	let strOne = arr[0].toLowerCase(); 
	let strTwo = arr[1].toLowerCase(); 
	for(i = 0; i < strTwo.length; i++){
		if(strOne.indexOf(strTwo.charAt(i)) == -1) {
			return false; 
		}
	}
	return true; 
}

function letterCheck(arr) {
	return arr[1].split('').reduce(function(present, char) {
    if (arr[0].toLowerCase().indexOf(char.toLowerCase()) === -1) {
			present = false;
		}
		return present; 
	}, true); 
}			

function letterCheck(arr) {
	let arr = [arr[0].toLowerCase(), arr[1].toLowerCase()]; 
	let s1 = new Set(arr[0]); 
	return arr[1].split('').map(c => {
		return s1.has(c); 
	}).reduce((a, b) => a && b, true); 
}

// 894. Write a function that returns the smallest N-digit number which is a multiple of the specified value.

smallest(3, 8) ➞ 104
// Smallest 3-digit integer that is a multiple of 8
smallest(5, 12) ➞ 10008
smallest(7, 1) ➞ 1000000
smallest(2, 3) ➞ 12

function smallest(digits, value) {
	small = Math.pow(10, digits, value) {
	while (small % value != 0) {
		small++
	}
	return small; 
}

function smallest(digits, value) {
	let n=Math.pow(10, digits - 1); 
	while (n % value !=0) {
		n++
	}
	return n
}

function smallest(digits, value) {
	let res = null;
	for (let i = Math.pow(10,digits-1);; i ++){
		if (i % value == 0){
			return i;
		} 
	}
}

// 895. Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.

// Yellow - unstretch("ppoeemm") ➞ "poem"
// unstretch("wiiiinnnnd") ➞ "wind"
// unstretch("ttiiitllleeee") ➞ "title"
// unstretch("cccccaaarrrbbonnnnn") ➞ "carbon"

function unstretch(word) {
	let arr = []; 
	for(let i = 0, len = word.length; i < len; i++) {
		if (word[i] !=== word[i + 1]) {
			arr.push(word[i]); 
		  } else {
		    continue; 
		  }
		}
		return arr.join(''); 
}

function unstretch(word) {
	let hold = 0; 
	return word.split('').filter((x, y, y) => hold != x ? hold = x : false).join(''); 
}

function unstretch(word) {
	let a = [word[0]]; 
	for(let i = 0; i < word.length; i++){
		if(a[a.length - 1] !== word[i]) {
			a.push(word[i]); 
		}
	}
	return a.join(''); 
}

const unstretch = word => word.replace(/(.)\1+/g, '$1'); 

// 896. Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.

// White - The first object parameter.

// {
//   name: "Benny",
//   phone: "3325558745",
//   email: "benny@edabit.com"
// }

// // The second object parameter.

// {
//   name: "Jason",
//   phone: "9853759720",
//   email: "jason@edabit.com"
// }


// ➞ false

function isEqual(objOne, objTwo) {
	return JSON.stringify(objOne) === JSON.stringify(objTwo);
}

function isEqual(objOne, objTwo) {
	return JSON.stringify(objOne) == JSON.stringify(objTwo);
}

// 897. Create a function which returns the original value from a matrix with too many sub arrays.

// deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3

// deNest([[[[[[[true]]]]]]]) ➞ true

// deNest([[[[[[[[[[[[[[[[['edabit']]]]]]]]]]]]]]]]]) ➞ 'edabit'

function deNest(arr) {
	return arr.flat(Infinity)[0]; 
}

function deNest(arr) {
	let x = arr.flat(Infinity)
	return x[0]; 
}

const deNest = arr => {
	let n = 20;
	while(n != 0) {
		arr = arr.flat(); 
		n--;
	}
	return arr.pop(); 
}

// 898. This Triangular Number Sequence is generated from a pattern of dots that form a triangle. 
// The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. Write a function that converts 
// n number of places with its corresponding number.

// Yellow - triangle(1) ➞ 1
// triangle(6) ➞ 21
// triangle(215) ➞ 23220

const triangle = num => (num <= 1 ? 1 : triangle(num - 1) + num);

function triangle(n) {
	return n * (n + 1) / 2;
}

function triangle(n) {
	return n*(++n)/2;
}

function triangle(n) {
	let s = 0 ;
	for (let i=0 ; i<n ; i++){
		s += (i+1) ;
	}
	return s ;
}

function triangle(n) {
	let result = 1;
	for (let i=1;  i < n; i++) {
		result += (i+1);
	}
	return result
}

// 899. Create a function that flips M's to W's (all uppercase).

// White - wumbo("I LOVE MAKING CHALLENGES") ➞ "I LOVE WAKING CHALLENGES"
// wumbo("MEET ME IN WARSAW") ➞ "WEET WE IN WARSAW"
// wumbo("WUMBOLOGY") ➞ "WUWBOLOGY"

function wumbo(words) {
	return words
		.split('')
		.map(x => (x === "M" ? "W" : x))
		.join(''); 
}

function wumbo(words) {
	return words.replace(/M/g, 'W'); 
}

function wumbo(words) {
	let i = 0; 
	let newstr = ''; 
	while(i < words.length) {
		newstr ++ words[i].replace('M', 'W')
		i++; 
	}
	return newstr; 
}

// 900. Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
// Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.

// Yellow - rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]) ➞ 3
// rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]) ➞ 2.5
// rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]) ➞ 2

function rogerShots(arr) {
	return arr.filter(word => word === "Bang!" || word === "BangBang!")
		.length * 0.5;
}

function rogerShots(arr) {
	return arr.filter(x => /^(Bang){1,2}\!$/.test(x)).length * 0.5;
}

function rogerShots(arr) {
	time = 0;
	result = arr.map(x => x === "Bang!" ? time+=0.5 : x === "BangBang!" ? time+=0.5 : true);
	return time;
}

const rogerShots = arr =>
	arr.reduce((a,v) => a + (['Bang!','BangBang!'].includes(v) ? .5 : 0), 0)

	// 901 Given an array with an odd number of elements, return whether the scale will tip "left" 
	// or "right" based on the sum of the numbers. The scale will tip on the direction of the largest total. 
	// If both sides are equal, return "balanced".

	// Ex. 
// The middle element will always be "I" so you can just ignore it.
// Assume the numbers all represent the same unit (kilograms for example).
// Both sides will have the same number of elements.
// There are no such things as negative weights in both real life and the tests!

// scaleTip([0, 0, "I", 1, 1, ]) ➞ "right"
// 0 < 3 so it will tip right

// scaleTip([1, 2, 3, "I", 4, 0, 0]) ➞ "left"
// 6 > 4 so it will tip left

// scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1]) ➞ "balanced"
// 15 = 15 so it will stay balanced

function scaleTip(arr) {
	let mid = arr.indexOf('I'); 
	let left = arr.slice(0, mid).reduce((a, b) => a + (+b), 0); 
	let right = arr.slice(mid+1).reduce((a,b) => a + (+b), 0); 
	return left === right ? 'balanced' : (left > right) ? 'left' : 'right'; 
}

const scaleTip = arr => {
	const sum = a => a.reduce((a, b) => a + b, 0); 
		lft = sum(arr.slice(0, arr.length / 2)), 
		rgt = sum(arr.slice(arr.length / 2 + 1)); 
	return ['left', 'return', 'balance']
	  [[lft > rgt, rgt > lft, true].indexOf(true)]; 
}

function scaleTip(arr) {
	let sum1 = arr.slice(0,arr.indexOf('I')).reduce((sum,x) => sum + +x, 0);
	let sum2 = arr.slice(arr.indexOf('I')+1).reduce((sum,x) => sum + +x, 0);
  return sum1 === sum2? 'balanced' : sum1 > sum2 ? 'left': 'right';
}

// 902. The digit distance between two numbers is the absolute value of the difference of each digit.

// Yellow - digitDistance(121, 599) ➞ 19
// digitDistance(12, 12) ➞ 0
// digitDistance(10, 20) ➞ 1

function digitDistance(num1, num2) {
	let result = num2 - num1; 
return result.toString().split('').reduce((acc, cv) => += Number(cv), 0); 
}

function digitDistance(num1, num2) {
	return String(num1).split('')
		.reduce((a, c, i) => a + Math.abs(c - String(num2)[i]), 0)
}

function digitDistance(num1, num2) {
	return num1.toString().split('').reduce((a, b, i) => a + Math.abs(b - num2.toString().split('')[i]), 0)
}

// 903. Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. In other words, determine if the second array is the first array shifted to the right by 1.

// simonSays([1, 2], [5, 1]) ➞ true
// simonSays([1, 2], [5, 5]) ➞ false
// simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]) ➞ true
// simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3]) ➞ false

function simonSays(arr1, arr2) {
	return arr1.slice(-1) - arr2.slice(-1)  === 1 ? true : false
}

function simonSays(arr1, arr2){
	
	for(let i = 1; i < arr2.length; i++) {
			if(arr2[i] != arr1[i - 1]) {
					return false;
			}
	}
	return true;
}

function simonSays(arr1, arr2) {
	return arr1.slice(0, -1).every((el, i) => el === arr2[i+1]);
}

// 904. A repdigit is a positive number composed out of the same digit.
// Create a function that takes an integer and returns whether it's a repdigit or not.

// isRepdigit(66) ➞ true
// isRepdigit(0) ➞ true
// isRepdigit(-11) ➞ false

function isRepdigit(num) {
	return new Set('' + num).size === 1
}

const isRepdigit = n => [...''+n]
	.filter((x, i, a) => !i ? true : x !== a[0]).length === 1;

function isRepdigit(num) {
	if(num < 0) return false;
	num = num.toString().split("");
	num = new Set(num);
	if(num.size === 1) return true
	return false
}

// 905. Create a function, that takes an array as argument and returns the sum of all numbers in this array.

// Yellow - [2, 7, 4] ➞ 13
// [45, 3, 0] ➞ 48
// [-2, 84, 23] ➞ 105

function getSumItems(arr) {
	let sum = 0; 
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum
}

function getSumOfItems(arr) {
	let sum = 0; 
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]; 
	}
	return sum; 
}
function getSumOfItems(arr) {
	return arr.reduce((sum, v) => sum + v, 0)
}

function getSumOfItems(arr) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue
	return arr.reduce(reducer)
}

// 906. Write a function that changes every letter to the next letter:

// White - move("hello") ➞ "ifmmp"
// move("bye") ➞ "czf"
// move("welcome") ➞ "xfmdpnf"

function move(word) {
	return [...word].map(a => String.fromCharCode(a.charCodeAt(0) + 1)).join(''; )
}

function move(word) {
	return word.split('').map(x => x.charCodeAt(0) + 1).map(x => String.fromCharCode(x)).join(''); 
}

function move(word) {
	return word.split('')
		.map(x => x.charCodeAt(0) + 1)
		.map(x => String.fromCharCode(x))
		.join(''); 
}

function move(word) {
	let out = ''; 

	for(let i = 0; i < word.length; i++) {
		out += String.fromCharCode(word[i].charCodeAt() + 1); 
	}
	return out; 
}

// 907. Javascript has a String prototype default in the language which contains properties and methods such as .length and .toLowerCase(). Extend the String prototype by creating two new methods:

// .consonants(), which returns the number of consonants in a word when called.
// .vowels(), which returns the number of vowels in a word when called.

// "hello".consonants() ➞ 3
// "hello".vowels() ➞ 2

// "greatly".consonants() ➞ 5
// "greatly".vowels() ➞ 2

// "Smithsonian".consonants() ➞ 7
// "Smithsonian".vowels() ➞ 4

String.prototype.constants = function() {
	return this.match(/[^aeiou]/gi).length
}

String.prototype.vowels = function() {
	return this.match(/[^aeiou]/gi).length
}


String.prototype.consonants = function() {
	return this.match(/[^aeiou\W\d]/g).length
}

String.prototype.vowels = function() {
	return this.match(/[aeiou]/g).length
}

String.prototype.consonants = function() {
	return this.match(/[^(a|e|i|o|u)]/gi).length
}

String.prototype.vowels = function() {
	return this.match(/[a|e|i|o|u]/gi).length
}

// 908. Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

afterNYears({
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}, 1) ➞ {
  "Joel" : 33,
  "Fred" : 45,
  "Reginald" : 66,
  "Susan" : 34,
  "Julian" : 14
}

afterNYears({
  "Baby" : 2,
  "Child" : 8,
  "Teenager" : 15,
  "Adult" : 25,
  "Elderly" : 71
}, 19) ➞ {
  "Baby" : 21,
  "Child" : 27,
  "Teenager" : 34,
  "Adult" : 44,
  "Elderly" : 90
}

afterNYears({
  "Genie" : 1000,
  "Joe" : 40
}, 5) ➞ {
  "Genie" : 1005,
  "Joe" : 45
}

const afterNYears = (list, n) => {
	for (left person in list) list[person] += Math.abs(n); 
	return list; 
}

function afterNYears(names, n) {
	for (var k in names) {
		nes[k] += Math.abs(n); 
	}
	return names; 
}

function afterNYears(names, n) {
	for (const prop in names) {
		names[props] += Math.abs(n); 
	}
	return names; 
}

// 908. Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.

// White - getDecimalPlaces("43.20") ➞ 2
// getDecimalPlaces("400") ➞ 0
// getDecimalPlaces("3.1") ➞ 1

function getDecimalPlaces(num) {
	return num.slice(num.indexOf('.')).length - 1; 
}

function getDecimalPlaces(num) {
	let arr = num.split('.');
	if(arr[1] == undefined) {
		return 0; 
	  } else {
		return arr[1].length; 
	  }
  }
}

function getDecimalPlaces(num) {
	return num.split('.').length === 1 ? 0 : split('.')[1].length; 
}

function getDecimalPlaces(num) {
	if (num.indexOf('.') === -1) {
		return 0; 
	} else {
		let nuewNum = num.split('.'); 
		return newNum[1].length; 
	}
}

// 909. Create a function that converts dates from one of five string formats:

// "January 9, 2019" (MM D, YYYY)
// "Jan 9, 2019" (MM D, YYYY)
// "01/09/2019" (MM/DD/YYYY)
// "01-09-2019" (MM-DD-YYYY)
// "01.09.2019" (MM.DD.YYYY)
// The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers. Using the examples above:

// Yellow - convertDate("January 9, 2019") ➞ [1, 9, 2019]
// convertDate("Jan 9, 2019") ➞ [1, 9, 2019]
// convertDate("01/09/2019") ➞ [1, 9, 2019]
// convertDate("01-09-2019") ➞ [1, 9, 2019]
// convertDate("01.09.2019") ➞ [1, 9, 2019]

function convertDate(date) {
	let d = new Date(date); 
	return [].concat(d.getMonth() + 1, d.getDate(), d.getFullYear())
}

function convertDate(date) {
	let result = new Date(date); 
	result [result.getMonth() + 1, result.getDate(), result.getFullYear()]; 
}

function convertDate(date) {
	let d = new Date(date), 
	MM = d.getMonth() + 1, 
	DD = d.getDate(), 
	YY = d.getFullYear()
	return [MM, DD, YY]
}

// 910. Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// White - getMultipliedArr([2, 5, 3]) ➞ [4, 10, 3]
// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]
// getMultipliedArr([5, 382, 0]) ➞ [10, 464, 0]

const getMultipliedArr = arr => arr.map(el => el * 2)

function getMultipliedArr(arr) {
	for(var i=0;i<arr.length;i++){
		arr[i]*=2;
	}
	return arr;
}

function getMultipliedArr(arr) {
	for(let num = 0; num < arr.length; num++)
	{
		arr[num] = arr[num]*2;
	}
	return arr;
}

function getMultipliedArr(arr) {
	for(i = 0; i < arr.length; i++){
		arr[i] *= 2;
	}
	return arr;
}

function getMultipliedArr(arr) {
	return arr.map(x => x * 2);
}

// 911. Create a function that returns the data type of a given variable. 
// These are the eight data types this challenge will be testing for:

// Array
// Object
// String
// Number
// Boolean
// Null
// Undefined
// Date

// Yellow - dataType([1, 2, 3, 4]) ➞ "array"
// dataType({key: "value"}) ➞ "object"
// dataType("This is an example string.") ➞ "string"
// dataType(new Date()) ➞ "date"

function dataType(value) {
	return Object.prototype.toString.call(value).slice(8, -1).toLowerCase(); 
}

function dataType(value) {
  if (value === null)
    return "null";
  if (Array.isArray(value))
    return "array";
  if (value instanceof Date)
    return "date";
  return typeof(value);
}

const dataType = v => v ? v.constructor.name.toLowerCase() : String(v)

// 912. Write a function that takes an integer and:

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".

// White - helloWorld(3) ➞ "Hello"
// helloWorld(5) ➞ "World"
// helloWorld(15) ➞ "Hello World"

const helloWorld = n => n % 3 == 0 && n % 5 == 0 ? "Hello World" :
 n % 3 == 0 ? "Hello" : "World";

 const helloWorld = (num) => {
	return num%5 === 0 && num%3 === 0 ? 'Hello World' :
		num%3 === 0 ? 'Hello' : 
			num%5 === 0 ? 'World' : null
}

function helloWorld(num) {
	if (num % 15 === 0) {
		return "Hello World";
	} else if (num % 5 === 0) {
		return "World";
	} else if (num % 3 === 0) {
		return "Hello";
	}
}

function helloWorld(num) {
	switch(true) {
		case (num % 3 === 0 && num % 5 === 0):
			return 'Hello World';
			break;
		case num % 3 === 0:
			return 'Hello';
			break;
		case num % 5 === 0:
			return 'World';
			break;
		default:
			return num;
			break;
	}
}

// 913. You will be given an array of drinks, with each drink being an object with two properties: 
// name and price. Create a function that has the drinks array as an argument and return the drinks 
// object sorted by price in ascending order.

// Yellow - drinks = [
// 	{name: 'lemonade', price: 50},
// 	{name: 'lime', price: 10}
// ];

// sortDrinkByPrice(drinks) ➞ [{name: 'lime', price: 10}, {name: 'lemonade', price: 50}]


function sortDrinkByPrice(drinks) {
	const sorted = drinks.sort(function(a, b){
		return a.price - b.price; 
	}); 
	return sorted; 
}

function sortDrinkByPrice(drinks){
	return drinks.sort((a, b) => a.price - b.price)
}

function sortDrinkByPrice(drinks){
	return drinks.sort((a, b) => (a.price > b.price) ? 1 : -1); 
}

// 914.  Create a function that outputs the results of a flashcard. 
// A flashcard is an array of three elements: a number, an operator symbol, and another number. 
// Return the mathematical result of that expression.
// There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division). 
// If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined. 
// For division, round to the hundredths place. So [10, "/", 3] should return 3.33.

// flash([3, "x", 7]) ➞ 21
// flash([5, "+", 7]) ➞ 12
// flash([10, "-", 9]) ➞ 1
// flash([10, "/", 0]) ➞ undefined
// flash([10, "/", 3]) ➞ 3.33

function flash([num1, op, num2]) {
  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'x':
      return num1 * num2;
    case '/':
      const result = num1 / num2;
      return Number.isFinite(result) ? Number(result.toFixed(2)) : undefined;
  }

  return undefined;
}

function flash([num1, op, num2]) {
	let fix = 0
	if(op==="x"){
		return num1*num2
	}else if(op==="+"){
		return num1+num2
	}else if(op==="-"){
		return num1-num2
	}else if(op==="/" && num2!==0){
		fix = num1/num2
		return +fix.toFixed(2)
	}else{
		return undefined
	}
}

function flash([num1, op, num2]) {
	let res = 0;
	switch(op) {
  case '+':
    res = num1 + num2;
    break;
  case '-':
    res = num1 - num2;
    break;
	case 'x':
    res = num1 * num2;
    break;
	case '/':
    if (num2 === 0) {
			res = undefined;
		} else {
			res = num1 / num2;
			if (res % 1 !== 0) res = Number(res.toFixed(2));
		}
    break;
	}
	return res;
}

function flash([num1, op, num2]) {
	return op == 'x'? num1 * num2: op == '+'? num1 + num2: op == '-'? num1 - num2: op == '/' && num2 > 0? Number((num1 / num2).toFixed(2)): undefined
}

// 915. Create a function that takes a string as the first argument, 
// and a (string) specification as a second argument. 
// If the specification is "word", return a string with each word reversed 
// while maintaining their original order. If the specification is "sentence", 
// reverse the order of the words in the string, while keeping the words intact.

// yellow - str = "There's never enough time to do all the nothing you want"
// flip("Hello", "word") ➞ "olleH"
// flip("Hello", "sentence") ➞ "Hello"
// flip(str, "word") ➞ "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw"
// flip(str, "sentence") ➞ "want you nothing the all do to time enough never There's"

function flip(str, spec) {
	let arr=str.split(' ')
	
	if (spec==="word"){
		return arr.map(el=>[...el].reverse().join('')).join(' ')
	}
	if (spec==="sentence" && arr.length>1){
		return arr.reverse().join(' ')
	}
	else return str
}

function flip(str, spec) {
	if (spec == "sentence"){
		return str.split(" ").reverse().join(" ")
}
	if (spec == "word"){
		return str.split(" ").map(x => x.split("").reverse().join("")).join(" ")
	}
}

function flip(str, spec) {
	return spec === 'word' ? str.split(' ').map(e => [...e].reverse().join('')).join(' ') :
	str.split(' ').reverse().join(' ');
}

function flip(str, spec) {
	switch(spec){
		case 'word':
			return /\s/.test(str) ?
				str.split(' ').map(w => w.split('').reverse().join('')).join(' ')
				:
				str.split('').reverse().join('')
		case 'sentence':
			return str.split(' ').reverse().join(' ')
	}
}

// 916 Given an array of integers, find the pair of adjacent elements that have the largest product and return that product.

// yellow - adjacentProduct([3, 6, -2, -5, 7, 3] ) ➞ 21
// adjacentProduct([5, 6, -4, 2, 3, 2, -23]) ➞ 30
// adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10]) ➞ 80

function adjacentProduct(arr) {
	return Math.max(...arr.slice(1).map((num,i) => num * arr[i]))
}

function adjacentProduct(arr) {
	var a =arr[0]*arr[1];
	for(var i = 0; i < arr.length-1; i++){
		if(arr[i]*arr[i+1] > a){
			a = arr[i]*arr[i+1];
		}
	}
	return a;
}

function adjacentProduct(arr) {
	let biggest = arr[0]*arr[1];
	for(i = 1; i < arr.length; i++){
		let temp = arr[i-1]*arr[i];
		if(temp > biggest){
			biggest = temp;
		}
	}
	return biggest;
}

function adjacentProduct(arr) {
	let s = -100
	arr.map((x,i,a) => (x*a[i+1]) > s ? s = (x*a[i+1]) :x)
	return s
}

// 917. Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.

// Create a function that takes two parameters and, if both parameters are strings,
// add them as if they were integers or if the two parameters are integers, 
// concatenate them.

// Yellow - stupidAddition(1, 2) ➞ 12
// stupidAddition("1", "2") ➞ 3
// stupidAddition("1", 2) ➞ null

function stupidAddition(a, b) {
	if (typeof a !== typeof b) {
		return null;
	} else {
		if (typeof a === "string" && typeof b === "string")
			return parseInt(a) + parseInt(b);
		else
			return a.toString() + b.toString();
	}
}

const stupidAddition = (a, b) =>
 typeof a == 'string' && typeof b == 'string' ? +a + +b :
 typeof a == 'number' && typeof b == 'number' ? '' + a + b : null;

function stupidAddition(a, b) {
	if (typeof a == 'number' && typeof b == 'number') {
		return a + '' + b; 
	} else if (typeof a == 'string' && typeof b == 'string') {
		return parseInt(a) + parseInt(b); 
	} else {
		return null; 
	}
}


// 918. Create a function that takes an array of numbers and return its median. If the input array is even length, take the average of the two medians, else, take the single median.

// ywllow - median([2, 5, 6, 2, 6, 3, 4]) ➞ 4
// median([21.4323, 432.54, 432.3, 542.4567]) ➞ 432.4
// median([-23, -43, -29, -53, -67]) ➞ -43

function median(arr) {
  var sorted = arr.sort(function(a, b){ return a - b; });
  var idx = Math.round(arr.length/2) - 1;
  return (arr.length % 2 !== 0) ? sorted[idx] : (sorted[idx] + sorted[idx + 1]) / 2;
}

const median = arr => {
  arr.sort((a, b) => a - b);
	return (arr[(arr.length - 1) >> 1] + arr[arr.length >> 1]) / 2
}

function median(arr) {
  const sorted = arr.sort((a, b) => a - b);
  if (sorted.length % 2 === 0) {
    return sorted.slice(sorted.length / 2 - 1, sorted.length / 2 + 1).reduce((acc, el) => acc + el) / 2;
  }
  return sorted[Math.floor(sorted.length / 2)];
}

function median(arr) {
  var N = arr.length;
  arr.sort( (a, b) => a - b)
  return N % 2 === 0 ? (arr[Math.floor(N/2)] + arr[Math.floor(N/2) - 1]) / 2 : arr[Math.floor(N/2)];
}

// 919. Create a function that applies a discount d to every number in the array.

// White - getDiscounts([2, 4, 6, 11], "50%") ➞ [1, 2, 3, 5.5]
// getDiscounts([10, 20, 40, 80], "75%") ➞ [7.5, 15, 30, 60]
// getDiscounts([100], "45%") ➞ [45]

function getDiscounts(nums, d) {
	return nums.map(x => x * (parseInt(d) / 100));
}

function getDiscounts(arr,val) {
	let percent = Number(val.replace("%", ""));
    let ans =[]
    for(let i=0;i<arr.length;i++){
        ans.push((percent / 100) * arr[i]);
    }
    return ans;
}

function getDiscounts(nums, d) {
	const newD = d.slice(0, -1);
	return nums.map(x => x * newD / 100);
}

// 920. Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

// White - greaterThanOne("1/2") ➞ false
// greaterThanOne("7/4") ➞ true
// greaterThanOne("10/10") ➞ false

function greaterThanOne(frac) {
	return (eval(frac) > 1); 
}

function greaterThanOne(frac) {
	let g = frac.split('/').map(v => Number(v)); 
	return (g[0] > g[1]); 
}

function greaterThanOne(frac) {
	let fraction = frac.split('/')
	return fraction[0] / fraction[1] > 1
}

// 921. Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.

// Yellow - cumulativeSum([1, 2, 3]) ➞ [1, 3, 6]
// cumulativeSum([1, -2, 3]) ➞ [1, -1, 2]
// cumulativeSum([3, 3, -2, 408, 3, 3]) ➞ [3, 6, 4, 412, 415, 418]

function cumulativeSum(arr) {
	let sum = 0; 
	return arr.map(x => (sum += x))
}

const cumulativeSum = arr => {
  return arr.map((x, i) => {
    return arr.reduce((acc, y, j) => i > j ? acc += y : acc, x);
  });
}

function cumulativeSum(arr) {
	for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[ i - 1]; 
	}
	return arr; 
}

function cumulativeSum(arr) {
	let newArr = []; 
	let sum = 0; 
	for (let i = 0; i < arr.length; i++)
	  {
			sum = sum + arr[i]; 
			newArr.push(sum); 
		}
	return newArr; 
}

// 922. Write a function that takes an array of elements and returns only the integers.

// Yellow - returnOnlyInteger([9, 2, "space", "car", "lion", 16]) ➞  [9, 2, 16]
// returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]) ➞ [81, 123]
// returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"])  ➞ [10, 56, 20, 3]
// returnOnlyInteger(["String",  true,  3.3,  1]) ➞ [1]

function returnOnlyInteger(arr) {
	return arr.filter(x => Number.isInteger(x));
}

function returnOnlyInteger(arr) {
	return arr.filter(x => typeof x=='number' && Math.floor(x)==x);
}

function returnOnlyInteger(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
			if (Number.isInteger(arr[i]) === true) {
					newArr.push(arr[i]);
			}
	}
	return newArr;
}

// 923. Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.5mm.

// White - numLayers(1) ➞ "0.001m"
// Paper folded once is 1mm (equal to 0.001m)

// numLayers(4) ➞ "0.008m"
// Paper folded 4 times is 8mm (equal to 0.008m)

// numLayers(21) ➞ "1048.576m"
// Paper folded 21 times is 1048576mm (equal to 1048.576m)

const rnd = n => n > 1e16 ? n.toExponential() :
	(Number.isInteger(n) && !(''+n).includes('+')) ? n+'.0' : n;
const numLayers = n => rnd(2**n / 2000) + 'm';

// 924. Create a function that counts the number of adverbs in a sentence. An adverb is a word that ends with ly.

// countAdverbs("She ran hurriedly towards the stadium.") ➞ 1
// countAdverbs("She ate the lasagna heartily and noisily.") ➞ 2
// countAdverbs("He hates potatoes.") ➞ 0
// countAdverbs("He was happily, crazily, foolishly over the moon.") ➞ 3

function countAdverbs(sentence) {
	return sentence.split(/[^a-zA-Z]/).filter(word => word.endsWith("ly")).length;
}

function countAdverbs(sentence) {
	return (sentence.match(/[a-z]+ly/g)||[]).length;
}

function countAdverbs(sentence) {
	return sentence.split(' ').filter(word => word.match(/ly\b/g)).length
}

function countAdverbs(sentence) {
	return sentence.split(/ly\b/).length - 1;
}


// 924.  The 2nd of February 2020 is a palindromic date in both dd/mm/yyyy and mm/dd/yyyy format (02/02/2020). Given a date in dd/mm/yyyy format, return true if the date is palindromic in both date formats.

// Yellow - palindromicDate("02/02/2020") ➞ true

// palindromicDate("11/12/2019") ➞ false

// palindromicDate("11/02/2011") ➞ false
// Although 11/02/2011 is palindromic in dd/mm/yyyy format,
// it isn't in mm/dd/yyyy format (02/11/2011)

function palindromicDate(date) {
	const arr = date.split('/')
	return arr[0] === arr[1] && arr[2].slice(0, 2) === arr[2].slice(2, 4)
}

function palindromicDate(date) {
	var newDate = date.split("/")[1] + "/" + date.split("/")[0] + "/" + date.split("/")[2];
	return date === newDate && date.replace("/","") === date.replace("/","").split("").reverse().join("");
}

function palindromicDate(date) {
	return date.slice(0,5) == ([...date.slice(6,8)].reverse().join('') + '/' + [...date.slice(8)].reverse().join('') )
};

// 925. Assume a program only reads .js or .jsx files. Write a function that accepts a file path and returns true if it can read the file and false if it can't.

// Yellow - isJS("/users/user.jsx") ➞ true
// isJS("/users/user.js") ➞ true
// isJS("/users/user.ts") ➞ false

function isJS(path) {
	return /jsx?$/.test(path)
}

const isJS = path => /\.jsx * $/i.test(path); 

function isJS(path) {
	let ext = path.split('.').pop(); 
	if(ext == 'jxs' || ext == 'js') {
		return true; 
	} else {
		return false; 
	}
}

function isJS(path) {
	re = /.(js|jsx)/
	return re.test(path)
}

// 926. You can assign variables from nested arrays like this:

// let trans1 = arr[0]  
// let trans2 = arr[1]  
// let trans3 = arr[2][0]  
// let trans4 = arr[2][1][0] 

// console.log(trans1) // outputs "cars"
// console.log(trans2) // outputs "planes"
// console.log(trans3) // outputs "trains"
// console.log(trans4) // outputs "motorcycles"

const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
let [ trans1, trans2, [trans3, [trans4]] ] = arr

const arr = ["cars", "planes", ["trains", ["motorcycles"]]];
const [trans1, trans2, [trans3, [trans4]]] = arr;

const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
let trans1 = arr[0]
let trans2 = arr[1]
let trans3 = arr[2][0]
let trans4 = arr[2][1][0]

// 927. You are give an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.

// Yellow - accepted(["Ducks", "Bears",  "Cats"]) ➞ ["Ducks", "Bears"]
// accepted(["cars", "trucks", "planes"] ➞ ["cars", trucks", "planes"]
// accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]) ➞ ["Worms", "Bugs", "Beans"]

function acceptedWords(list) {
	return list.filter(x => /^[^C]/.test(x))
}

function acceptedWords(list) {
	return list.filter(x => x.charAt(0) !='C'); 
}

function acceptedWords(list) {

	let newList = []; 

	for(let i = 0; i < list.length; i++) {
		let char = list[i]; 
		if(char.charAc(0) != 'C') {
			newList.push(char); 
		}
	}

	return newList; 
}

// 928. You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2

// Yellow - Create variables a and b from the given array using es6 array destructuring,
// where a === 1 and b === 2

const arr = [1, 2, 3, 4, 5, 6]
let [a, b] = arr

const arr = [1, 2, 3, 4, 5, 6]

let a = arr[0]
let b = arr[1]

// 929. Using the test method in your function, return whether a string contains the characters a and c (in that order) with any number of b characters (including zero) between them.

// Yellow - asterisk("account") ➞ true
// asterisk("abccount") ➞ true
// asterisk("abbbccount") ➞ true
// asterisk("bbbccount") ➞ false

function asterisk(string) {
	return /ab*c/.test(string)
}

function asterisk(string) {
	return /ab*c/i.test(string)
}

function asterisk(string) {
	return	/ab*c/gi.test(string)
}

function asterisk(string) {
	var desired = /ab*c/;
	var result = desired.test(string)
	if (result===true) {
		return true;
	}
	else {
		return false;
	}
}

// 930. Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

// Yellow - maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43
// maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100
// maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40

const maxTotal = numbers => {
	return numbers
    .sort((a, z) => z - a).slice(0, 5).reduce((a, b) => a + b, 0) 
}

function maxTotal(nums) {
	let sortmax = nums.sort((a, b) => b - a); 
	let total = 0; 

	for(let i = 0; i < 5; i++) {
		total += sortmax[i]; 
	}
	return total; 
}

// 931. Given an array of numbers and a positive value for n, return the sum of every nth number in the array.

// White - sumEveryNth([4, 8, 6, 6, 7, 9, 3], 1) ➞ 43
// 4+8+6+6+7+9+3 = 43

// sumEveryNth([7, 3, 10, 4, 5, 8, 4, 9, 6, 9, 10, 1, 4], 4) ➞ 14
// 4+9+1 = 14

// sumEveryNth([10, 6, 5, 4, 5, 2, 3, 3, 8, 10, 7, 2], 8) ➞ 3
// 3

// sumEveryNth([6, 8, 9, 4, 6, 4, 7, 1, 5, 6, 10, 2], 13) ➞ 0
// only 12 numbers in array

function sumEveryNth(numbers, n) {
	return numbers.map((x,i)=>(i+1)%n?0:x).reduce((a,b)=>a+b,0)
}

function sumEveryNth(numbers, n) {
	var m = 0;
	for (var i = n-1; i < numbers.length; i += n) {
		m += numbers[i];
	}
	return m;
}

function sumEveryNth(numbers, n) {
	let result = 0;
	for(let i = n-1; i < numbers.length; i += n){
		result += numbers[i];
	}
	return result;
}

function sumEveryNth(numbers, n) {
	let sum = 0;
	for (let i = n - 1; i < numbers.length; i += n) sum += numbers[i];
	return sum;
}

// 932. 

// The function skipTooMuchSugarDrinks() takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.

// Drinks that contain too much sugar (in this challenge) are:

// Cola
// Fanta

// Yellow - sskipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ [water]

// skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []

// skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]

function skipTooMuchSugarDrinks(drinks) {
	return drinks.filter(x !== 'cola' && x !=='fanta'); 
}

function skipTooMuchSugarDrinks(drinks) {
	return drinks.filter(x => !/fanta|cola/.test(x))
}

function skipTooMuchSugarDrinks(drinks) {
	return drinks.filter(x => !['cola', 'fanta'].includes(x))
}

function skipTooMuchSugarDrinks(drinks) {

	let newarr= []; 

	for (let i = 0; i < drinks.length; i++) {
		if ((drinks[i] != 'cola') && (dinks[i] != 'fanta')) {
			newarr.push(drinks[i]); 
		}
	}
  return newarr; 
}

function skipTooMuchSugarDinks(drinks) {
	return drinks.filter((item) => {
		return item !== 'cola' && item !== 'fanta'; 
	})
}

// 933. Create a function which takes in a sentence str and a string of characters chars and return the sentence but with all the specified characters removed.

// Yellow - stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") ➞ "th qck brwn fx jmps vr th lzy dg"
// stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s") ➞ "the hiing nake initerly lither acro the rutling leave"
// stripSentence("gone, reduced to atoms", "go, muscat nerd") ➞ ""

function stripSentence(str, chars) {
	let regex = new RegExp('[' + chars + ']', 'g');
	return str.replace(regex, '');
}

function stripSentence(str, chars) {
	let characters = chars.split('')
	return str.split('')
		.filter(x => !characters.includes(x))
		.join(''); 
}

const stripSentence = (str, ch) => str.replace(RegExp(`[${ch}]`,`gi`),``)

// 934. Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:

// "{fraction} rounded to {n} decimal places is {answer}"

// Yellow - fracRound("1/3", 5) ➞ "1/3 rounded to 5 decimal places is 0.33333"
// fracRound("2/8", 4) ➞ "2/8 rounded to 4 decimal places is 0.2500"
// fracRound("22/7", 2) ➞ "22/7 rounded to 2 decimal places is 3.14"

function fracRound(frac, n) {
	return `${frac} rounded to ${n} decimal places is ${eval(frac).toFixed(n)}`;
}

const fracRound = (frac, n) => {
	const res = frac.split('/');
	const round = (res[0] / res[1]).toFixed(n);
	return `${frac} rounded to ${n} decimal places is ${round}`;
}

// 935. Create a function that sums the total number of digits between two numbers, inclusive. For example, between the numbers 19 and 22 we have:

// Yellow - sumDigits(7, 8) ➞ 15
// sumDigits(17, 20) ➞ 29
// sumDigits(10, 12) ➞ 6

function sumDigitals(a, b) {
	let arr = []; 
	for (let i = a; i <= b; i++) {
		arr.push(i); 
	}
	return arr.join('').split('').reduce(function(a, b) {return Number(a) + Number(b)}); 
}

function sumDigits(a, b) {
	let res = []; 
	for(let i = a; i <= b; i++) {
		res.push(String(i).split('').reduce((x, y) => Number(x) + Number(y))); 
	}
	return res.reduce((a, b) => Number(a) + Number(b))
}

function sumDigitals(a, b) {
	let count = 0, j = 0; 
	for(let i = a; i <= b; i++) {
		j = i; 
		while(j > 0) {
			count += j % 10; 
			j= Math.trunc(j / 10); 
		}
	}
	return count; 
}

// 936. Create a function that takes an array of strings and return the number of smiley faces contained within it. These are the components that make up a valid smiley:

// A smiley has eyes. Eyes can be : or ;.
// A smiley has a nose but it doesn't have to. A nose can be - or ~.
// A smiley has a mouth which can be ) or D.

// Yellow - countSmileys([":)", ";(", ";}", ":-D"]) ➞ 2
// countSmileys([";D", ":-(", ":-)", ";~)"]) ➞ 3
// countSmileys([";]", ":[", ";*", ":$", ";-D"]) ➞ 1

function countSmileys(arr) {
	return arr.filter(x => /(\;|\:)(\-|\~){0,1}(\)|D)/.test(x)).length;

} }

function countSmileys(arr) {
	let count = 0; 
	let regex = /[:;][-~]?[)D]/i
	if (arr.length === 0) {
		return 0; 
	} else {
		arr.forEach(e => {
			if (regex.test(e) === true) {
				count++; 
			}
		})
		return count; 
	}
}

const countSmileys = a => {
	let x = a.join``.match(/[:;][-~]?[\)D]/g);
	return x === null ? 0 : x.length;
}

// 936. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// White - addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

function addUp(num) {
  return (num * (num + 1))/2;
}

function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
}

function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

const addUp = n => Array
	.from({ length: n + 1 }, (v, i) => i)
	.reduce((a, b) => a + b);

// 937. Create a function that takes a string and replaces each letter with its appropriate position in the alphabet. "a" is 1, "b" is 2, "c" is 3, etc, etc.

// alphabetIndex("Wow, does that work?")
// ➞ "23 15 23 4 15 5 19 20 8 1 20 23 15 18 11"

// alphabetIndex("The river stole the gods.")
// ➞ "20 8 5 18 9 22 5 18 19 20 15 12 5 20 8 5 7 15 4 19"

// alphabetIndex("We have a lot of rain in June.")
// ➞ "23 5 8 1 22 5 1 12 15 20 15 6 18 1 9 14 9 14 10 21 14 5"

function alphabetIndex(str) {
	const letters = 'abcdefghijklmnopqrstuvwxyz'; 
	return [...str.toLowerCase()]
	.filter(s => letters.includes(s))
	.map(s => letters.indexOf(s) + 1)
	.join(' '); 
}

function alphabetIndex(str) {
  str.split('').filter( ch => /[a-zA-Z]/.test(ch) ).map( ch => ch.toLowerCase().charCodeAt() - 96 ).join(' ');
}

function  alphabetIndex(str) {
	return str.toLowerCase().match(/[a-z]/g).map(c => c.charCodeAt(0) - 96).join(' ');
}

// 938. Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.

// Yellow - countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }
// countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }
// countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }

function countAll(str) {
	return {
		'LETTERS': (str.match(/[a-z]/gi) || []).length), 
		'DIGITS' : (str.match(/\d/gi) ||).length
	}
}

function countAll(str) {
	let strings = 0, numbers = 0;
	for (let char of str) {
		if (char != ' ') {
			if (isNaN(char))
				strings++;
			else
				numbers++;		
		}
	}
	return {"LETTERS": strings, "DIGITS": numbers};
}

function countAll(str) {
	let letters = [...str].filter(item => /[a-zA-Z]/.test(item));
	let digits = [...str].filter(item => /[0-9]/.test(item));
	return {"LETTERS" : letters.length, "DIGITS" : digits.length}
}

// 939. replace("abcdef", "c-e") ➞ "ab###f"

// replace("rattle", "r-z") ➞ "#a##le"
// replace("microscopic", "i-i") ➞ "m#croscop#c"
// replace("", "a-z") ➞ ""

// White - replace("abcdef", "c-e") ➞ "ab###f"
// replace("rattle", "r-z") ➞ "#a##le"
// replace("microscopic", "i-i") ➞ "m#croscop#c"
// replace("", "a-z") ➞ ""

function replace(str, r) {
	var reg = new RegExp("[" + r + "]", "gi")
	return str.replace(reg, "#")
}

function replace(str, r) {
	return str.replace(new RegExp(`[${r}]`, 'g'), '#')
}

function replace(str, r) {
	var replace=r.split('');
	return str.split('')
	.map((i,index) => i >= replace[0] && i <= replace[2] ? '#' : i)
	.join('');
}

// 940. You are given the length of a video in minutes. The format is mm:ss (Example: '02:54'). Create a function which takes the video length and return it in seconds.

// Yellow - minutesToSeconds('01:00') ➞ 60
// minutesToSeconds('13:56') ➞ 836
// minutesToSeconds('10:60') ➞ false

function minutesToSeconds(time) {
	let mass = time.split(':'); 
	if (mmss[1] >= 60) return false; 
	return parseInt(mmss[0] * 60) + parseInt(mmss[1]); 
}

function minutesToSeconds(time) {
	let arr = time.split(':'); 
	return (arr[1] >= 60) ? false : arr[0] * 60 + +arr[i]; 
}

function minutesToSeconds(time) {
	const [minutes, seconds] = time.split(':').map(Number);
	return (seconds >=  60) ? false : seconds + minutes * 60;
};

// 941. The arrays may be of different lengths, with at least one character / digit.
// The first array will contain string characters (lowercase, a-z).
// The second array will contain integers (all positive).

// Yellow - The arrays may be of different lengths, with at least one character / digit.
// The first array will contain string characters (lowercase, a-z).
// The second array will contain integers (all positive).

function mergeArrays(a, b) {
  return a.reduce((arr, c, i) => {
    return arr.concat(c).concat(b.slice(i, i+1))
  }, []).concat(b.slice(a.length))
}

function mergeArrays(a, b) {
  let result = [];
  while (a.length + b.length > 0) {
    if (a.length > 0) result = [...result, a.shift()];
    if (b.length > 0) result = [...result, b.shift()];
  }
  return result;
}

function mergeArrays(a, b) {
	return [].concat(...a.map((v,i)=>(b[0])?[v,b.shift()]:v),b)
}

function mergeArrays(a, b) {
  var newArray = [];
  for (i = 0; i < a.length; i++) { 
    a.push( b[i + 1] );
	}
}

// 942. You will be given a number and you will need to return it as a string in Expanded Form.

// Yellow - console.log( expandedForm(12) ); // Should return '10 + 2'
// console.log( expandedForm(42) ); // Should return '40 + 2'
// console.log( expandedForm(70304) ); // Should return '70000 + 300 + 4'
// console.log( expandedForm(9000000) );

function expandedForm(num) {
	// Convert num to a string array
	let numStringArray = String(num).split('');
	// Get length ofstring array
	let len = numStringArray.length; 
	let result = '';  

	// For each digit in array
	numStringArray.map( (n, index) => {
		// Perform only if n > 0
		if ( n > 0) {
			// Add plus sign if result is not empty (for the next digits)
			if (result) { result += ' + '}

			// Pad zeros the right limited to array length minus current index
			result += n.padEnd(len - index, '0'); 
		}
	}); 
	return result; 
}

function expandedForm(num) {
	return String(num)
					// split the number
					.split("")
					// go over each index and subtract the length by 1 
					.map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
					// filter out the zero 
					.filter((num) => Number(num) != 0)
					// last, add the char together
          .join(" + ")
}

function expandedForm(num) {
  var arr = num.toString().split('').reverse();
  var result = [];
  for(var i = 0; i < arr.length; i++){
    arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
  }
  return result.reverse().join(' + ')
}

// 943. Your goal in this kata is to implement an difference function, which subtracts one list from another.
// It should remove all values from list a, which are present in list b.
// If a value is present in b, all of its occurrences must be removed from the other:

// Yellow - console.log( array_diff([1,2],[1]) ); //== [2]
// console.log( array_diff([1,2,2,2,3],[2]) ); //== [1,3]

function array_diff(a, b) {
	// use array filter to check if every num in array a can be found in array b
	return a.filter(function(num) {
		// If num is not found in array b, return num
		if (!b.includes(num)) {
			return num; 
		}
	}); 
}

// 944. Object destructuring and new variable names

// const obj =  { one : 1, two : 2 }
// var { one, two } = obj

// Yellow - Use es6 object destructuring to assign obj.one to the variable anotherOne.
// Variable two needs to remain assigned to obj.two
// Ignore the .toString() function (used for validation)

// let str = `({ one, two } = { one : 1, two : 2}).toString()`

let str = `({ one: anotherOne, two } = { one : 1, two : 2}).toString()`

// 945. You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task: Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// console.log(isSquare(-1)); // => false
// console.log(isSquare( 3)); // => false
// console.log(isSquare( 4)); // => true
// console.log(isSquare(25)); // => true
// console.log(isSquare(26)); // => false

let isSquare = function(n) {
// Numbers less than 0 are not square
	if (n < 0) { 
		return false 
	}
	
	// Get square root of number
	x = Math.sqrt(n); 

	// Check if sqrt is an integer
	if (Number.isInteger(x)) {
		return true; 
	}
	else return false;
}

// 946. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, except in C, where, to keep the difficulty at the level of the kata, you are given two parameters, the first a buffer with length exactly the same as the second parameter, the original string. You don't have to worry with strings with less than two characters.

// console.log( removeChar('Hello') );

function removeChar(str) {
	// Convert string to array
	str_array = str.split(''); 
	// Remove first letter from array
	str_array[0] = ''; 
	// Remove last letter from array
	str_array[str.length - 1] = ''; 

	return str_array.join(''); 
}; 

// 947. Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// White - console.log( descendingOrder(21445) ); // Output: 54421
// console.log( descendingOrder(145263) ); // Output: 654321
// console.log( descendingOrder(1254859723) ); // Output: 9875543221

function descendingOrder(n) {
	return parseInt(n.toString().split('').sort().reverse().join(''));
}
// 948. Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
	findSmallestInt(args) {
		// sort function searches for the smallest integer in decedent order
		return args.sort(function(a, b) {
			return a - b})[0]; 
		}
	}

	let finder = new SmallestIntegerFinder();
	console.log( finder.findSmallestInt( [34, 15, 88, 2]) );
	console.log( finder.findSmallestInt( [34, -345, -1, 100]) );

// 949. You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// Yellow - console.log( findNextSquare(121) );// --> returns 144
// console.log( findNextSquare(625) );// --> returns 676
// console.log( findNextSquare(114) );// --> returns -1 since 114 is not a perfect

function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  let square = Math.sqrt(sq);
  // If number is not a decimal
  if (Number.isInteger(square)) {
    // Increament square root of input number by 1
    square+=1;
    // Return the new number's value raise to 2
    return Math.pow(square,2);
  }
  else {
    return -1;
  }
  return Math.sqrt(sq);
}

// 950. You will be given a number and you will need to return it as a string in Expanded Form.

// Yellow - console.log( expandedForm(12) ); // Should return '10 + 2'
// console.log( expandedForm(42) ); // Should return '40 + 2'
// console.log( expandedForm(70304) ); // Should return '70000 + 300 + 4'
// console.log( expandedForm(9000000) );

function expandedForm(num) {
	// Convert num to a string array
	let numStringArray = String(num).split(''); 
	// Get length of string array
	let len = numStringArray.length; 
	let result = ''; 

	// For each digit in array
	numStringArray.map( (n, index) => {
		// Perform only if n > 0
		if(n > 0) {
			// Add plus sign if result is not empty (for the next digits)
			if(result) {result += ' + '}; 

			// Pad zeros the right limited to array length minus current index
			result += n.padEnd(len - index, '0'); 
		}
	}); 
	return result; 
}

// 951. Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

// console.log(multiplicationTable(2, 2)); // [[1,2],[2,4]])
// console.log(multiplicationTable(3, 3)); // [[1,2,3],[2,4,6],[3,6,9]])
// console.log(multiplicationTable(3, 4)); // [[1,2,3,4],[2,4,6,8],[3,6,9,12]])
// console.log(multiplicationTable(4, 4)); // [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]])
// console.log(multiplicationTable(2, 5)); // [[1,2,3,4,5],[2,4,6,8,10]])

function multiplicationTable(row, col) {
	let rows = []; 
	// If inputs are less than 1, return empty array
	if (row < 1 && col < 1) 
	  return []; 
	for (let i = 1; i <= row; i++) {
		// For every row
		let cols = []; // Reset columns 
		for (let j = 1; j <= col; j++) {
			// For every col
			col.push(j * i); // Multiply j and i, then push a new column
		}
		rows.push(cols) // Push columns to row
	}
	return rows; 
}

// 952. 

/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
    
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

const unique = xs => [...new Set(xs)]; // using ES6 set

function isPangram(string) {
	// Check if all unique characters are >= the 26 letters of the alphabet
  return unique(string.toLowerCase()).join('').trim().replace(/\W+/g,'').length>=26;
}

let string = 'The quick brown fox jumps over the lazy dog.'
console.log(isPangram(string)); //, true)
string = 'This is not a pangram.'
console.log(isPanagram(string)); //, false)

// 953. 

/*
A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.
He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore the percent of loss increases by a fixed 0.5 percent at the end of every two months.
Can you help him? Our man finds it difficult to make all these calculations.
How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?
*/

/* 
console.log( nbMonths(2000, 8000, 1000, 1.5) );// should return [6, 766] or (6, 766)
console.log( nbMonths(12000, 8000, 1000, 1.5) ); // [0, 4000]
console.log( nbMonths( 8000, 12000, 500, 1 ) ); //[8, 597]
*/

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
	if (startPriceOld > startPriceNew) return [0, startPriceOld-startPriceNew]; // If no need to save 

	let month = 1;
  let monthlyLoss = percentLossByMonth / 100;
  let monthlySavings = savingperMonth;
  let oldCarValue = startPriceOld - (startPriceOld * monthlyLoss);
  let newCarValue = startPriceNew - (startPriceNew * monthlyLoss);
  let totalSavings = oldCarValue + monthlySavings;
	let totalRemaining = newCarValue - totalSavings;
	
	while(totalRemaining > 0) {
		month++; 
		if (month % 2 == 0) monthlyLoss += 0.005; // At the end of every 2nd month, increase lost by 0.5%; 
		monthlySavings += savingperMonth; // Earn money every month
		oldCarValue = oldCarValue - (oldCarValue * monthlyLoss); // Reduce value of old car every month 
		newCarValue = newCarValue - (newCarValue * monthlyLoss); // Reduce value of old car every month
		totalSavings = oldCarValue + monthlySavings; 
		totalRemaining = newCarValue - totalSavings;
	}

	  // Return number of months saved and rounded absolute value of excess money
		return [month, Math.round(Math.abs(totalRemaining))]; 
}

// 954. Return the num in the array with the highest

// Yellow - console.log(solve("gh12cdy695m1")); //,695);
// console.log(solve("2ti9iei7qhr5")); //,9);
// console.log(solve("vih61w8oohj5")); //,61);
// console.log(solve("f7g42g16hcu5")); //,42);
// console.log(solve("lu1j8qbbb85")); //,85);

function solve(s) {
	// Remove all non-numbers in the string and convert to array of numbers
	numbers = s.replace(new RegExp("[^0-9]+", "g"), ' ').split(' '); 
	// Find the biggest number in the array
	let biggestNumber = 0; 
	for (n in numbers) {
		// Convert number to integer
		currentNumber = parseInt(numbers[n]); 
		// If biggest number is lower than current number, overwrite biggest number
		if (biggestNumber < currentNumber) {
			biggestNumber = currentNumber; 
		}
	}
	return biggestNumber; 
}

// 955. Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

// Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
// Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).

// Yellow - removeLeadingTrailing("230.000") ➞ "230"
// removeLeadingTrailing("00402") ➞ "402"
// removeLeadingTrailing("03.1400") ➞ "3.14"
// removeLeadingTrailing("30") ➞ "30"

function removeLeadingTrailing(n) {
	return Number(n)
}

function removeLeadingTrailing(n) {
	return Math.abs(n); 
}

function removeLeadingTrailing(n) {
	return parseFloat(n).toString(); 
}

// 956. Two strings a and b are called isomorphic if there is a one to one mapping possible for every character of a to every character of b. And all occurrences of every character in a map to same character in b.

function isomorph(a, b) {
  if( a.length !== b.length ) return false  // a and b should be of the same length
  
  // Every letter in word1 should be unique to word2
  function checkUniqueMapping(word1, word2) {
    let words = {}
    return word1.split('').map( (letter, i) => {
      // If letter is not found in words, create new mapping
      if ( !(letter in words) ) {
        words[letter] = word2.charAt(i)
        return true
      }
      // If a mapping has been done before, ensure that it is the same mapping
      else if( letter in words && words[letter] == word2.charAt(i)) return true
      // Otherwise, the mapping is not unique
      else return false
    })
  }

  if(checkUniqueMapping(a, b).indexOf(false)>-1) return false // Check a against b
  if(checkUniqueMapping(b, a).indexOf(false)>-1) return false // Check b against a
  else return true
}

console.log( isomorph('CBAABC', 'DEFFED') )
console.log( isomorph('RAMBUNCTIOUSLY', 'THERMODYNAMICS') )
console.log( isomorph('AB', 'CC') )
console.log( isomorph('ABAB', 'CD') )
console.log( isomorph("SEE", "SAW") )

// 957. // const {assert} = require("chai");

// describe("sumNested", function() {
//   it("should handle non-nested lists", function() {
//     assert.strictEqual(sumNested([1]), 1);
//     assert.strictEqual(sumNested([1, 2, 3, 4]), 10);
//     assert.strictEqual(sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 55);
//   });
//   it("non-nested edge case", function() {
//     assert.strictEqual(sumNested([]), 0);
//   });
//   it("should handle simple nestings", function() {
//     assert.strictEqual(sumNested([[1], []]), 1);
//     assert.strictEqual(sumNested([[1, 2, 3, 4]]), 10);
//   });
//   it("should handle more complex nestings", function() {
//     assert.strictEqual(sumNested([1, [1], [[1]], [[[1]]]]), 4);
//     assert.strictEqual(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]]), 8);
//   });
//   it("complex nesting edge case", function() {
//     assert.strictEqual(sumNested([[[[], [], [[[[[[[[[[]]]]]]]]]]], [], [], [[[], [[]]]]], []]), 0);
//   });
// });

// Yellow - console.log(sumNested([1, [2, [3, [4]]]]))

const sumNested = arr => {
  // Flatten array until every element is not an array
  arr = flatten(arr)
  // Return the sum of the array
  return arr.reduce( (sum,value) => sum + value, 0 )
};

// Flatten array until every element is not an array
function flatten(arr) {
  const flattened = arr.reduce( (a, b) => a.concat(b), [] );
  if (objectInArray(flattened)) return flatten(flattened)
  return flattened
}

// Return true if there is an array in the array
function objectInArray(arr) {
  let objectFound = false
  arr.map( a => { if(typeof a==='object') objectFound = true })
  return objectFound
}

// 958. Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

// White - reverseAndNot(123) ➞ 321123
// reverseAndNot(123456789) ➞ 987654321123456789

function reverseAndNot(i) {
	return parseInt(i.toString().split('').reverse().join('') + i); 
}

function reverseAndNot(i) {
	return parseInt(i.toString().split('').reverse().join('').concat(i)); 
}

function reverseAndNot(i) {
	Number(i.toString().split('').reverse().join('').concat(i.toString()))
}

// 959. Create a function that takes an array of words and transforms it into an array of each word's length.

// White - ['hello', 'world'] ➞ [5,5]
// ['Halloween', 'Thanksgiving', 'Christmas'] ➞ [9,12,9]
// ['She', 'sells', 'seashells', 'down', 'by', 'the', 'seashore']➞ [3,5,9,4,2,3,8]

function wordLengths(array) {
	return array.map(x => x.length); 
}

function wordLengths(array) {
	let arrayLength = []
	for (i = 0; i < array.length; i++) {
		arrayLength.push(array[i].length)
	}
	return arrayLength
}

function wordLength(array) {
	let result = []; 
	array.forEach((e) => {result.push(e.length)});
	return result; 
}

// 960. 

/* Captain Hook and his crew are currently resting at Origin Shore. They are about to embark on their next adventure to an undisclosed location (x, y) to find treasure.
Captain Hook's ship can only move exactly north, south, east or west. It takes exactly 1 day for the ship to travel 1 unit in one of the four cardinal directions.
After every 5 days, the crew will take one day of rest.
Given the location of the treasure, find out how long it takes for Captain Hook and his crew to find the treasure. The ship is currently at coordinate (0, 0). */

// Yellow - numberOfDays([3, 5]) => 9 days
// Since: 3 days east + 2 days north (5 days passed) + 1 day of rest + 3 days north

// numberOfDays([-4, -1]) => 5 days
// Since 4 days west + 1 day south

// Yellow numberOfDays([10, 10]) ➞ 23

// numberOfDays([3, 3]) ➞ 7
// numberOfDays([-10, -9]) ➞ 22
// numberOfDays([-1, -2]) ➞ 3

const numberOfDays = ([x, y]) => {
  const travelDays = Math.abs(x) + Math.abs(y);
  const restDays = Math.floor((travelDays - 1) / 5);
  return travelDays + restDays;
};

function numberOfDays(coordinate) {
	var go = Math.abs(coordinate.reduce((a, b) => a + b), 0)
	return go + Math.ceil(go / 5) - 1
}

function numberOfDays(coordinate) {
	let t = Math.abs(coordinate[0]) + Math.abs(coordinate[1]);
	return t + Math.floor((t-1)/5)
}

// 961. You've just webscraped a web page and stored it in a string. In the string there is a bullet list of states that voted for President Trump's impeachment:

// const str = `
// * Texas = no
// * California = yes
// * Florida = yes
// * Michigan = no
// `
// Add a positive lookahead assertion so a regex match would output the states that voted yes

const REGEXP = /(\w+)(?=\s\=\syes)/g

const REGEXP = /(\w+)(?= = yes)/g

const REGEXP = /(?<=\* )\w*(?= [\=] yes)/g

// 962. Create a function that replaces "the" in the sentence with "an" or "a". Remember that if the next word begins with a vowel, use "an". In the case of a consonant, use "a".

// Yellow - replaceThe("the dog and the envelope") ➞ "a dog and an envelope"
// replaceThe("the boy ran at the wall") ➞ "a boy ran at a wall"
// replaceThe("the egg, the spoon and the espionage") ➞ "an egg, a spoon and an espionage"

function replaceThe(str) {
	let vowel = /[aeiou]/g; 
	var col = str.split(' '); 

	return col.map(function(elem, i) {
		if (elem === 'the')
		  return col[i + 1][0].match(vowel) ? 'an' : 'a'; 
		else 
			return elem; 
	}).join(' '); 
}

function replaceThe(str) {
	const a = [];
	for (let i = 0; i < str.split(" ").length; i++) {
		if (str.split(" ")[i] === "the" && /[aeiou]/.test(str.split(" ")[i+1][0])) {
			a.push("an");
		} else if (str.split(" ")[i] === "the" && /([b-df-hj-np-tv-z])/.test(str.split(" ")[i+1][0])) {
			a.push("a");
		} else a.push(str.split(" ")[i])
	}
	return a.join(" ");
}

function replaceThe(str) {
	str.replace(/the(?= [^aeiou])/g, 'a')
	.replace(/the(?= [aeiou])/g, 'an')
}

// 963. Write a function that reverses the subarray between the start and end index (inclusive). The rest of the array should be kept the same.

// Yellow - rangedReversal([1, 2, 3, 4, 5, 6], 1, 3) ➞ [1, 4, 3, 2, 5, 6]
// rangedReversal([1, 2, 3, 4, 5, 6], 0, 4) ➞ [5, 4, 3, 2, 1, 6]
// rangedReversal([9, 8, 7, 4], 0, 0) ➞ [9, 8, 7, 4]

function rangedReversal(arr, start, end) {
	return arr.slice(0, start)
	.concat(arr.slice(start, end + 1).reverse())
	.conconat(arr.slice(end + 1)); 
}

function rangedReversal(arr, start, end) {
	var a = arr.slice(start, end+1).reverse();
	arr.splice(start, end-start+1, a).reverse();
	var r = [];
	for (var i in arr) {
		if (arr[i] instanceof Array) {
			for (var j in arr[i]) {
				r.push(arr[i][j]);
			}
		} else {
			r.push(arr[i]);
		}
	}
	return r;
}

function rangedReversal(arr, start, end) {
	const subArr = arr.slice(start, end + 1).reverse(); 
	return arr.map((x, i) => (i >= start) && (i <= end) ? subArr[i - start] : x); 
}

// The median of a group of numbers is the middle number when the group is sorted. 
// If the size of the group is even, the median is the average of the middle two numbers. 
// Given a sorted array of numbers, return the median (rounded to one decimal place if the median isn't an integer).

// Yellow - median([1, 2, 4, 5, 6, 8, 8, 8, 10]) ➞ 6
// median([2, 2, 6, 8, 8, 10, 10]) ➞ 8
// median([1, 2, 2, 4, 7, 8, 9, 10]) ➞ 5.5

function median(nums) {
	if(nums.length % 2 == 0) {
		let b = nums.length / 2 - 1
		return (nums[b] + nums[b + 1]) / 2
	} else {
		return nums[Math.floor(nums,length / 2)]
	}
}

function median(nums) {
	let len = nums.length; 
	let mid = Math.floor(len / 2); 
	return len % 2 === 1 ? nums[mid] : +(((nums[mid] + nums[mid-1]) / 2).toFixed(1));
}

function median(nums) {
	let len = nums.length
	if(len % 2 === 0) {
		return (nums[len / 2] + nums[len / 2 - 1]) / 2
	} else {
		return nums[Math.floor(len / 2)]
	}
}

// 964. Create a function that takes a phrase and transforms each word using the following rules:

// Keep first and last character the same.
// Transform middle characters into a dash -.

// Yellow - partiallyHide("skies were pretty") ➞ "s---s w--e p----y"
// partiallyHide("red is not my color") ➞ "r-d is n-t my c---r"
// partiallyHide("She rolled her eyes") ➞ "S-e r----d h-r e--s"
// partiallyHide("Harry went to fight the basilisk") ➞ "H---y w--t to f---t t-e b------k"

function partiallyHide(phrase) {
	const pat = /(\B.)(?=\B)/g
  return phrase.replace(pat, '-')
}

function partiallyHide(phrase) {
	return phrase.replace(/\B\w\B/g, "-");
}

function partiallyHide(phrase) {
	return phrase.split(' ')
	.map(word => word.slice(0, 1) + 
	word.slice(1, -1).replace(/[a-z]/gi, '-')
	+ word.slice(-1)).join(' '); 
}

function partiallyHide(phrase) {
  const words = phrase.split(" ")
  const coded = words.map(word => word[0] + "-".repeat(word.length - 2) + word[word.length - 1])
  return coded.join(" ")
}

function partiallyHide(phrase) {
	phrase.split(' ').map(word => word.split(''))
	.map((char, i, arr) => (i === 0 || i === arr.length - 1 ? char : '-').join('')).join(' '); 
}

// 965. Create a function where given the number n, return the sum of all square numbers up to and including n.

// Yellow - squaresSum(3) ➞ 14
// squaresSum(12) ➞ 650
// squaresSum(13) ➞ 819

function squareSum(n) {
	let m = 0; 
	if (n > 1) {
		m = squareSum(n - 1); 
	}
	return n * n + m; 
}

function squareSum(n) {
	let j = 0; 
	for (i = 1; i <=  n; i++) {
		j = j * i; 
	}
	return j
}

function squareSum(n) {
	n ** 2 + (n ? squareSum(n - 1) : 0); 
}

function squaresSum(n) {
	var total = 0;
	for(var i = 1;i <= n; i++) {
		total+=Math.pow(i,2);
	}
	return total;
}

function squareSum(n) {
	let arr = []
	for (let i = 0; i <= n; i++) {
		arr.push(Math.pow(i, 2))
	}
	return arr.reduce((x, y) => x + y)
}

// 966. Create a function that squares every digit of a number.

function squareDigits(n) {
	let arr = []
	for(let i = 0; i < n.toString().length; i++) {
		let sqt = Math.pow(Number(n.toString().charAt(i)), 2)
		arr.push(sqt)
}
  return Number(arr.join('')); 
}

function squareDigits(n) {
	let str = String(n).split('').map(item => Number(item))
	return Number(Array.from(str, x => x * x).join(''))
}

function squareDigits(n) {
	return + String(n).split('').map(x => x * x).join('')
}

function squareDigits(n) {
	res = []
	n. n.toString().split('')
	n.forEach(item => res.push(Math.pow(item, 2)))
	return parseInt(res.join('')); 
}

function squareDigits(n) {
	return Number(String(n).split('').map(x=> Math.pow(x, 2)).join(''));
}

// 967. The facts are:

// You've just finished dinner.
// You love spicy food but your friend hates it.
// Given your friend's unfortunate taste preferences, you decide to split the bill only for non-spicy items. You will pay in full for the spicy dishes.
// Given two ordered arrays, one classifying the dishes as spicy vs. non-spicy and the other listing their prices, write a function that outputs an array where the first element is how much you pay and the second element is how much your friend pays.

// billSplit(["S", "N", "S", "S"], [13, 18, 15, 4]) ➞ [41, 9]

// Since:
// You pay: [13, 9, 15, 4] = 41
// Friend pays: [0, 9, 0, 0] = 9

// billSplit(["N", "S", "N"], [10, 10, 20]) ➞ [25, 15]
// You pay for half of both "N" dishes (5 + 10) and entirely pay for the "S" dish (10).

// billSplit(["N", "N"], [10, 10]) ➞ [10, 10]
// billSplit(["S", "N"], [41, 10]) ➞ [46, 5]

function billSpit(spicy, cost) {
	let s = 0
	let n = 0
	spicy.map((x, i) => x == 'S' ? s += cost[i]: n += cost[i])
  return [s + n / 2, n / 2]
}

function billSplit(spicy, cost) {
	return [spicy.map((x,i) => x == 'N'? cost[i]/2: cost[i]).reduce((a,b)=> a+b),
					spicy.map((x,i) => x == 'N'? cost[i]/2: 0).reduce((a,b)=> a+b)]
}

function billSplit(spicy, cost) {
	let you = spicy.map((x,i) => x === 'S'? cost[i]: cost[i]/2).reduce((a,b)=>a+b);
	let friend = spicy.map((x,i) => x === 'S'? 0: cost[i]/2).reduce((a,b) => a+b);
	return [you, friend];	
}

function billSplit(spicy, cost) {
	let frCst = spicy.map( (el, i) => (el === 'N')? cost[i] / 2 : 0 ).reduce( (t, c) => t + c )
	let myCst = spicy.map( (el, i) => (el === 'N')? cost[i] / 2 : cost[i] ).reduce( (t, c) => t + c )
	return [myCst, frCst];
}

// 968. Given a random number, return the digits of the number in reverse order inside of an array.

// Yellow - 1485979 ➞  [9,7,9,5,8,4,1]
// 623478 ➞ [8,7,4,3,2,6]
// 12345 ➞ [5,4,3,2,1]

function reverseArr(num) {
	return String(num).split('').reverse().map(x => +x); 
}

function reverseArr(num) {
	var snum = num.toString();
	var array = [];
	for(var i = 0; i<snum.length; i++) {
		array.push(+snum.charAt(i));
	}
	return array.reverse();
}

function reverseArr(num) {
	return String(num).split('').reverse().map(Number)
 }

 // 968. Create two functions: a left-shift function and a right-shift function. Each function will take in an array and a single parameter: the number of shifts.

//  [1, 2, 3, 4, 5]

//  [2, 3, 4, 5, 1]  // left shift of 1
//  [5, 1, 2, 3, 4]  // left shift of 4
 
//  [5, 1, 2, 3, 4]  // right shift of 1
//  [3, 4, 5, 1, 2]  // right shift of 3

// leftShift([1, 2, 3, 4], 1) ➞ [2, 3, 4, 1]

// rightShift([1, 2, 3, 4], 1) ➞ [4, 1, 2, 3]

// leftShift([1, 2, 3, 4, 5], 3) ➞ [4, 5, 1, 2, 3]

// leftShift([1, 2, 3, 4, 5], 5) ➞ [1, 2, 3, 4, 5]
// You have fully shifted the array, you end up back where you began.

// leftShift([1, 2, 3, 4, 5], 6) ➞ [2, 3, 4, 5, 1]
// You should be able to take in numbers greater than the length.
// Think of the length of the array as a modulo.

function leftShift(arr, num) {
	
}

function rightShift(arr, num) {
	
}

function leftShift(arr, num) {
	if (num <= 0) {
		return arr;
	}
	
	arr.push(arr.shift());
	
	return leftShift(arr, num - 1);
}

function rightShift(arr, num) {
	if (num <= 0) {
		return arr;
	}
	
	arr.unshift(arr.pop());
	
	return rightShift(arr, num - 1);
}

function leftShift(arr, num) {
	for (let i = 0; i < num; i++) {
		arr.push(arr[0])
		arr = arr.splice(1)
	}
	
	return arr
}

function rightShift(arr, num) {
	for (let i = 0; i < arr.length - 1; i++) {
		arr = leftShift(arr, num)
	}
	
	return arr
}

function leftShift(arr, num) {
	
	for (i = 0; i < num; i++){
		arr.push(arr.shift());
	}
	return arr;
}

function rightShift(arr, num) {
	for (i = 0; i < num; i++){
		arr.unshift(arr.pop());
	}
	return arr;
}

function leftShift(arr, num) {
	var arr1;
	for(var i = 0; i < num; i++){
		arr1 = arr.shift(0);
		arr.push(arr1);
	}
	return arr;
}

function rightShift(arr, num) {
	for(var i = 0; i < num; i++){
		arr1 = arr.pop(0);
		arr.unshift(arr1);
	}

	return arr;
} 

// 969. You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Create a function that takes an array of integers and returns an array of the products.

// Yellow - getProducts([1, 7, 3, 4]) ➞ [84, 12, 28, 21]
// getProducts([1, 7, 3, 4]) ➞ [84, 12, 28, 21]
// getProducts([1, 2, 3, 0, 5]) ➞ [0, 0, 0, 30, 0]

function getProducts(arr) {
  return arr.map((x, i) => arr.reduce((y, z, j) => (i === j ? y : y * z) , 1));
}

const getProduct = arr => {
	return arr.map((item, index, arr) => {
		return arr.reduce((acc, item, i, arr) => {
			return acc *= (i !== index ? item : 1); 
		}, 1); 
	}); 
}

function getProducts(arr) {
	arr.map((i,k) => arr.filter((val,key) => key !== k).reduce((a,b) => a * b))
}

function getProducts(arr) {
  var res = []
  for(i=0; i < arr.length; i++){
    res[i] = arr.filter(item => item != arr[i]).reduce((acc, el) => acc * el);  
  }
  return res;
}

// 970. Write a function that calculates the GCD (Greatest Common Divisor) of two numbers recursively.

// Yellow - gcd(10, 20) ➞ 10
// gcd(1, 3) ➞ 1
// gcd(5, 7) ➞ 1
// gcd(2, 6) ➞ 2

function gcd(a, b) {
	!b ? a : gcd(b, a % b);
}

function gcd(a, b) {
	for (let i = Math.max(a, b); i > 0; i--) {
		if (a % i == 0 & b % i == 0) {
			return i;
		}
	}
}

function gcd(a, b) {
	if (b == 0) {
		return a;
	} else {
		return gcd(b, (a % b)); 
	}
}

// 971. Create a function that takes in an array and returns an array of the accumulating sum.

// accumulatingArray([1, 2, 3, 4]) ➞ [1, 3, 6, 10]
// [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]

// accumulatingArray([1, 5, 7]) ➞ [1, 6, 13]
// accumulatingArray([1, 0, 1, 0, 1]) ➞ [1, 1, 2, 2, 3]
// accumulatingArray([]) ➞ []

function accumulatingArray(arr) {
	let sum = 0; 
	return arr.map(val => (sum += val)); 
}

function accumulatingArray(arr) {
	return arr.map((x, i) => 
	arr.slice(0, i+1).reduce((acc, val) => acc + val, 0));
}

function accumlatingArray(arr) {
	let total = 0; 
	for (i = 0; i < arr.length; i++) {
		total += arr[i]
		arr[i] = total
	}
	return(arr)
}

function accumulatingArray(arr) {
	let acc = 0; 
	return arguments.length === 0 ? [] : arr.map(val => acc += val); 
}

// 972. Write a regular expression that matches any valid Canadian postal code with any of the following formats:

// A1A 1A1
// A1A-1A1
// A1A1B1

// Yellow - "M3M 0A9" ➞ true
// "m4c-1t1" ➞ true
// "m45 1t1" ➞ false
// "M4C-1T1Z" ➞ false

let x = /^[A-Z]\d[A-Z][- ]?\d[A-Z]\d$/i

let x = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/

let x = /[a-zA-Z]\d[a-zA-Z][ |-]?\d[a-zA-Z]\d$/

// 973. Create a function that, given a number, returns the corresponding Fibonacci number. 

// Yellow - fibonacci(3) ➞ 3
// fibonacci(7) ➞ 21
// fibonacci(12) ➞ 233
// return the index
// 1,1,2,3,5,8,13,21

// if number is less than or equal to 1, return 1
function fibonacci(num) {
	if(num <= 1) {
		return 1
	} else {
		return fibonacci(num - 1) + fibonacci(num - 2); 
	}
}

function fibonacci(num) {
	let res=[1,1]
	for(let i=1;i<num;i++){
		res.push(res[res.length-1]+(res[res.length-2]))
	}
	return res[num]
}

const fibonacci = num => {
	let sequence = [0, 1];
	for (let i = 0; i < num; i++) {
		sequence.push(sequence[i] + sequence[i+1]);
	}
	return sequence[sequence.length - 1];
}

function fibonacci(num) {
	let fib = [1,1];
	for (let i = 2; i <= num; i ++){
		fib.push(fib[i-1] + fib[i-2]);
	}
	return fib[num];
}

// 974. Create a function that takes two numbers as arguments and returns the first number rounded to the nearest number, or a multiple of that number.

// Yellow - roundNearest(17, 10) ➞ 20
// roundNearest(36.3) ➞ 36
// roundNearest(123, 5) ➞ 125

function roundNearest(num, nearest) {
	 Math.round(num / nearest) * nearest
}

function roundNearest(num, nearest) {
	if (nearest == undefined) {nearest = 1}
	return Math.round(num / nearest) * nearest;
}

function roundNearest(num, nearest) {
	return nearest && nearest * Math.round(num/nearest) || Math.round(num)
}

// 975. Write a function that takes an array of 10 integers (between 0 and 9) and returns a string in form of a phone number.

// Yellow - createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
// createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) ➞ "(111) 111-1111"
// createPhoneNumber([8, 7, 4, 1, 2, 5, 6, 5, 8, 2]) ➞ "(874) 125-6582"

function createPhoneNumber(arr) {
	return `(xxx) xxx-xxxx`.replace(/x/g, v => arr.shift()); 
}

function createPhoneNumber(numbers) {
	let number = '(xxx) xxx-xxxx'; 
	for(let i = 0; i < numbers.length; i++) {
		number = number.replace('x', numbers[i]); 
	}
	return number; 
}

function createPhoneNumber(n) {
	return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
}

// 976. reate a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

// Yellow - moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday("sad") ➞ "Today, I am feeling sad"
// moodToday() ➞ "Today, I am feeling neutral"

function moodToday(mood) {
	return `Today, I am feeling ${mood || 'neutral'}`
}

function moodToday(mood = 'neutral') {
	return `Today, I am feeling ${mood}`; 
}

function moodToday(mood) {
	if (arguments.length === 0) {
		return "Today, I am feeling neutral";
	} else {
		return `Today, I am feeling ${mood}`;
	}
}

Test.assertEquals(moodToday("very happy"), "Today, I am feeling very happy")
Test.assertEquals(moodToday("rather empty inside"), "Today, I am feeling rather empty inside")
Test.assertEquals(moodToday("confused"), "Today, I am feeling confused")
Test.assertEquals(moodToday(), "Today, I am feeling neutral")

// 977. Create a function that turns an array of words into a comma separated list, where the last word is separated by the word "and".

// Yellow - wordsToSentence(["edabit"]) ➞ "edabit"
// wordsToSentence(["Hello", "", "Bye"]) ➞ "Hello and Bye"
// wordsToSentence(["Hello", "Bye", "See you soon"]) ➞ "Hello, Bye and See you soon"

const wordsToSentence = words =>
	!words ? '' : words
		.filter(word => word)
		.join(', ')
		.replace(/,(?= \w+$)/, ' and')

function wordsToSentence(words) {
	if (words === null) return '';
	return words.filter((x) => x.trim()).join(', ').replace(/,([^,]*)$/, ' and$1');
}

function wordsToSentence(words) {
	let a = [];
	if (words !== null) a = words.filter(x => x.length > 0);
	return a.length > 1 ? a.slice(0, -1).join(", ").trim() + " and " +  a.slice(-1): a.length === 1 ? a[0] : "";
}

// 978. Suppose that you add all of the page numbers in a book. If the total is 21, the book would have only 6 pages because 1 + 2 + 3 + 4 + 5 + 6 = 21. If I had said the total is 25, that would be impossible because the next number in the series is 28 (21 + 7).

// Create a function that has as it's argument the sum of all the page numbers and returns true if it is a valid number and false if it is not.

function pagesInBook(total) {
	var sum = 0;
	for(var i = 0; ; i++){
		sum +=i;
	if(sum>=total){break;}
	}
	return sum===total;
	}


function pagesInBook(total) {
	let arr = [1];
	for(let i = 1; ; i++){
		arr[i] = arr[i-1] + i + 1;
		if(arr[i] >= total) break;
	}
	return total === arr[arr.length-1];
}

// 979. Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

// Yellow - countSyllables("Hehehehehehe") ➞ 6
// countSyllables("bobobobobobobobo") ➞ 8
// countSyllables("NANANA") ➞ 3

function countSyllables(str) {
	return str.length / 2;
}

const countSyllables = str => str.match(/[aeiou]/gi).length

function countSyllables(str) {
	let count = 0;
	let string = Array.from(str);
	
	string.forEach(i => {
		count ++;
	})

	return count / 2;
}

// 980. Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

// White - getCase("whisper...") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"
// getCase("Indoor Voice") ➞ "mixed"

function getCase(str) {
	if (str.toUpperCase() === str) {
		return "upper"
	} else if (str.toLowerCase() === str) {
		return "lower"
	} else {
		return "mixed"
	}
}

const getCase = s => s === s.toUpperCase() ? 'upper' :
 s === s.toLowerCase() ? 'lower' : 'mixed';

 // 981. Create a function that divides a string into parts of size n.

//  White - partition("chew", 2) ➞ ["ch", "ew"]
//  partition("thematic", 4) ➞ ["them", "atic"]
//  partition("c++", 2) ➞ ["c+", "+"]

function divideByN(str, n) {
	let result = []; 
	for(let i = 0; i < str.length; i += n) {
		result.push(str.substring(i, i + n)); 
	}
	return result; 
}

function divideByN(str, n) {
	if (n === 2) {
		return a = str.match(/.{1, 2}/g)
	}
	if (n == 4) {
	return a = str.match(/.{1, 4}/g)}
	}

	function divideByN(str, n) {
		let newStr = [...str]; 
		let arr = []; 
		while(newStr.length > 0) {
			arr.push(newStr.splice(0, n).join('')); 
		}
	return arr; 
}

// 982. Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

// Yellow - hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") ➞ false
// hasHiddenFee(["$1", "$2", "$3"], "$6") ➞ false
// hasHiddenFee(["$1"], "$4") ➞ true

function hasHiddenFee(prices, t) {
	return prices.reduce((a, c) => a + parseInt(c.slice(1)), 0) < parseInt(t.slice(1));
}

function hasHiddenFee(prices, t) {
	return prices.map(x => Number(x.replce('$', ''))).reduce((a, b) => a + b, 0) == t.slice(1) ? false : true; 
}

function hasHiddenFee(prices, t) {
	let sum = prices.map(el => + el.slice(1))
	.reduce((acc, i) => acc += i); 
	t = +t.slice(1); 
	return sum < t
}

// 983. Callbacks are first-class functions. This means they have first-class characteristics, like being able to be passed to other functions. There was a time when callbacks were used to handle async operations, but we needed something better because of a few shortcomings (like problems with nested callbacks).

// Ex cb

function asyncFunc(cb) {
  let result = ""
  // After some time the result of an async opertion comes back and is put in the "result" variable.  We'll use a string for this example.   
  result = "hello"
  cb(result)
}

function callback(str) {
  console.log(str)
}

asyncFunc(callback)
console.log("goodbye")

// goodbye
// hello

// "goodbye" appears before "hello" because the async operation in asyncFunc() is non-blocking, meaning that it is set aside until it finishes but in the meantime we go ahead and call the next function.

// function anotherFunc() {
// 	let str = "bye"
// 	setTimeout(() => {
// 	}, 100)
// }

// var doc = "hello"

// function callback(str) {
// 	doc = str
// }

function anotherFunc(cb) {
	let str = "bye"
	setTimeout(() => {
		cb(str)
	}, 100)
}

var doc = "hello"

function callback(str) {
	doc = str
}

function anotherFunc() {
	let str = "bye"
	setTimeout(() => { callback(str); }, 100)
}

var doc = "hello"

function callback(str) {
	doc = str
}

// 984. Write a function that takes in a word and splits the consonants one by one, but keeps the vowels in a cluster.

// Yellow - split("beautifully") ➞ ["b", "eau", "t", "i", "f", "u", "l", "l", "y"]
// split("spoonful") ➞ ["s", "p", "oo", "n", "f", "u", "l"]
// split("swimming") ➞ ["s", "w", "i", "m", "m", "i", "n", "g"]

function split(word) {
	return word.match(/([^aeiou] | [aeiou]+)/g)
}

function split(word) {
	return word.split(/([aeiou]*)/g).filter(x => x !=='')
}

function split(word) {
	word.replace(/[^aeiou]|[aeiou]+/g, v => `.${v}`).slice(1).split('.');
}

// 985. Create a function that determines whether elements in an array can be re-arranged to form a consecutive list of numbers where each number appears exactly once.

// cons([5, 1, 4, 3, 2]) ➞ true
// Can be re-arranged to form [1, 2, 3, 4, 5]

// cons([5, 1, 4, 3, 2, 8]) ➞ false

// cons([5, 6, 7, 8, 9, 9]) ➞ false
// 9 appears twice



function cons(arr) {
	let newArr = arr.sort((a,b)=> a-b)
	return newArr.slice(1).every((x,i)=> x - newArr[i] === 1)
}

function cons(arr) {
	arr = arr.sort(function(a,b){return a-b});
	for (var i = 1; i < arr.length; i++){
		if(arr[i-1] + 1 !== arr[i]){
			return false;
		}
	}
	return true;
}

function cons(arr) {
	let sorted = arr.sort( (a, b) => a - b );
	return new Set(sorted.map( (el, i) => el - i )).size === 1;
}

// 986. Create a function that splits a string into an array of identical clusters.

Yellow - splitGroups("555") ➞ ["555"]

// splitGroups("5556667788") ➞ ["555", "666", "77", "88"]
// splitGroups("aaabbbaabbab") ➞ ["aaa", "bbb", "aa", "bb", "a", "b"]
// splitGroups("abbbcc88999&&!!!_") ➞ ["a", "bbb", "cc", "88", "999", "&&", "!!!", "_"]

function splitGroups(str) {
	return str.match(/(.)\1*/g)
}

function splitGroups(str) {
	return str.match(/([a-z\d&!_])\1*/gi);
}

// 987. Shift Validator: When each element is translated (added or subtracted) by a constant.
// Multiple Validator: When each element is multiplied (by a positive or negative number) by a constant.

// isShifted([1, 2, 3], [2, 3, 4]) ➞ true
// Each element is shifted +1

// isShifted([1, 2, 3], [-9, -8, -7]) ➞ true
// Each element is shifted -10

// isMultiplied([1, 2, 3], [10, 20, 30]) ➞ true
// Each element is multiplied by 10

// isMultiplied([1, 2, 3], [-0.5, -1, -1.5]) ➞ true
// Each element is multiplied by -1/2

// isMultiplied([1, 2, 3], [0, 0, 0]) ➞ true
// Each element is multiplied by 0

// sol1
function isShifted(rr1, arr2) {
	return arr2.every((x, i) => x - arr[i] - arr[0]); 
}

function isMultiplied(arr1, arr2) {
	return arr2.every((x, i) => x / arr1[i] == arr2[2] / arr1[0]); 
}

// sol2
function isShifted(arr1, arr2) {
	let a = arr2.map((x, i) => x - arr1[i]); 
	return a[1] == a[2]
}

function isMultiplied(arr1, arr2) {
	let a = arr2.map((x, i) => x / arr[i]); 
	return a[1] == a[2]
}

// 988. Create a function that takes an array of students and returns an array of their top notes. If student does not have notes then let's assume their top note is equal to 0.

// getStudentTopNotes([
//   {
//     id: 1,
//     name: "Jacek",
//     notes: [5, 3, 4, 2, 5, 5]
//   },
//   {
//     id: 2,
//     name: "Ewa",
//     notes: [2, 3, 3, 3, 2, 5]
//   },
//   {
//     id: 3,
//     name: "Zygmunt",
//     notes: [2, 2, 4, 4, 3, 3]
//   }
// ]) ➞ [5, 5, 4]

function getStudentTopNotes(students) {
	return students.map(x => Math.max(...x.notes, 0))
}

function getStudentTopNotes(students) {
	return students.map(s => s.notes.length ? Math.max(...s.notes) : 0)
}

function getStudentTopNotes(students) {
  let result = students.map(student => student = student.notes);
	return result.map(function(item) {
		if (item.length === 0) {
			return item = 0;
	} else { 
		 return Math.max(...item);
	}
	});
}

// 989. Create a function that tests whether or not an integer is a perfect number. A perfect number is a number that can be written as the sum of its factors, excluding the number itself.
// For example, 6 is a perfect number, since 1 + 2 + 3 = 6, where 1, 2, and 3 are all factors of 6. Similarly, 28 is a perfect number, since 1 + 2 + 4 + 7 + 14 = 28.

// Yellow - checkPerfect(6) ➞ true
// checkPerfect(28) ➞ true
// checkPerfect(496) ➞ true
// checkPerfect(12) ➞ false
// checkPerfect(97) ➞ false

function checkPerfect(num) {
	let factors = []; 
	for(let i = i; i < num - 1; i ++) {
		if (num % i === 0) {
			factors.push(i); 
		}
	}
	return factors.reduce((accum, current) => accum + current) === num;
}

function checkPerfect(num) {
	let factors = []; 
	for(let i = 1; i < num; i++) {
		if (num % i == 0) {
			factors.push(i)
		}
	}
	return factors.reduce((a, b) => a + b) == num
}

function checkPerfect(num) {
	let sum = 0
	for (let i = 1; i < num; i++) {
		if ((num % i) === 0) {
			sum += i
		}
	}
	return sum === num
}

// 990. Write a function that retrieves all words that begin with a vowel.

// retrieve("A simple life is a happy life for me.") ➞ ["a", "is", "a"]

// retrieve("Exercising is a healthy way to burn off energy."
// ➞ ["exercising", "is", "a", "off", "energy"]

// retrieve("The poor ostrich was ostracized.")
// ➞ ["ostrich", "ostracized"]

// retrieve("")
// ➞ []

function retrieve(str) {
	return str.replace(/[.]/g, '')
	.toLowerCase()
	.split(/\s/)
	.filter(x=>/[aeiou]/.test(x.charAt(0)));
}

function retrieve(str) {
	return str ? str.match(/\b[aeiou]\w*/ig).map(e => e.toLowerCase()) : []; 
}

function retrieve(str) {
	str = str.slice(0, -1); 
	return str.toLowerCase().split(' ').filter(a => /^[aeiou]/i.test(a));
}

// 991. Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.

// Yellow - addOddToN(5) ➞ 9
// 1 + 3 + 5 = 9

// addOddToN(13) ➞ 49
// addOddToN(47) ➞ 576

function addOddToN(n) {
	Math.ceil(n / 2) ** 2; 
}

function addOddToN(n) {
	if (n === 1) return 1
  return n + addOddToN(n - 2)
}

function addOddToN(n) {
	let a = 0; 
	for (let i = i; i <= n; i += 2) {
		a += i;  
	}
	return a; 
}

// 992. Create a function that takes a string and returns the number of alphanumeric characters that occur more than once.

// Yellow - duplicateCount("abcde") ➞ 0
// duplicateCount("aabbcde") ➞ 2
// duplicateCount("Indivisibilities") ➞ 2
// duplicateCount("Aa") ➞ 0
// Case sensitive

function duplicateCount(str) {
  return ([...str].sort().join("").match(/([a-z0-9])\1+/gi)||[]).length
}

function duplicateCount(str) {
  return str.toLowerCase().split("")
    .filter( (x, i, a) => a.indexOf(x) !== i )
    .filter( (x, i, a) => a.indexOf(x) === i ).length;
}

const duplicateCount = str => (str.split('').sort().join('').match(/(.)\1+/g) || []).length

// 993. Create a function that takes an array and returns an array of the accumulating product.

// accumulatingProduct([1, 2, 3, 4]) ➞ [1, 2, 6, 24]
// // [1, 2, 6, 24] can be written as [1, 1 x 2, 1 x 2 x 3, 1 x 2 x 3 x 4]

// accumulatingProduct([1, 5, 7]) ➞ [1, 5, 35]
// accumulatingProduct([1, 0, 1, 0]) ➞ [1, 0, 0, 0]
// accumulatingProduct([]) ➞ []

const accumulatingProduct = arr => {
  let product = 1;
  return arr.map(num => (product *= num));
};

function accumulatingProduct(arr) {
	return arr.map((n,i)=>arr.slice(0,i+1).reduce((a,b)=>a*b))
}

function accumulatingProduct(arr) {
	var r = [];
	if (arr.length > 0) {
		r[0] = arr[0];
  	for (var i = 1; i < arr.length; i++) {
	  	r[i] = arr[i]*r[i-1];
	  }
	}
	return r;
}

function accumulatingProduct(arr) {
	var res = [];
	for(var i = 0; i < arr.length; i++) {
   res.push(arr.slice(0,i+1).reduce((a,b) => a * b) )
  }
  return res;
}

// 994. What's the probability of someone making a certain amount of free throws in a row given their free throw success percentage? If Sally makes 50% of her free shot throws. Then Sally's probability of making 5 in a row would be 3%.

// Yellow - freethrows(75%, 5) ➞ 24% 
// freethrows(25%, 3) ➞ 2% 
// freethrows(90%, 30) ➞ 4%

const freeThrows = (sucess, rows) => Math.round(
	100 * (parseInt(success) / 100) ** rows
) + '%'; 

function freeThrows(success, rows) {
	return Math.round(Math.pow(+success.slice(0, -1) / 100, rows) * 100) + "%";
}

function freeThrows(success, throws) {
	return Math.pow(success.slice(0, -1)/100, throws).toFixed(2) * 100 + '%'
}

// 995. Create a function that takes an array of card numbers and checks if the sum of their value exceeds 21. If the sum exceeds 21, return true and if the sum is under or equal to 21, return false. Values of the cards are as follows:

// 2-10 are their value.
// J-K (face cards) count as 10.
// Aces count either as 1 or 11 - play conservatively, so that if giving an ace a value of 11 causes you to lose and 1 allows you to win, then go with 1.

// Yellow - overTwentyOne([2, 8, "J"]) ➞ false
// overTwentyOne(["A", "J", "K"]) ➞ false
// overTwentyOne([5, 5, 3, 9]) ➞ true
// overTwentyOne([2, 6, 4, 4, 5]) ➞ false
// overTwentyOne(["J", "Q", "K"]) ➞ true

const overTwentyOne = cards => {
	return cards.reduce((total, card) => {
		if (['J', 'Q', 'K'].includes(card)) card = 10; 
		if (card === 'A') card = 1; 
		return total + card; 
	}, 0) > 21; 
}; 

function overTwentryOne(cards) {
  return cards.reduce((a, b) => {
		if (b === 'A') {
			return a + 1
		} else if (b === 'J' || b === 'Q' || b === 'K') {
			return a + 10
		} else {
			return a + b 
		}
	}, 0) > 21
}

function overTwentyOne(cards) {
	return cards
	.map(x => x == 'A' ? 1 : typeof x == 'string' ? 10 : x)
	.reverse()
	.reduce((a,c) => c == 1 && a + 11 < 21 ? a + 11 : a + c,0 )
> 21;
}

// 996. Each number in the Perrin sequence is created by summing the numbers two positions and three positions before it. The first three numbers are (3, 0, 2), and the sequence is extended as follows:

// P(0) P(1) P(2) P(3) P(4) P(5) P(6) P(7) ... P(n)
// 3, 0, 2, 3, 2, 5, 5, 7, ...

// Yellow - perrin(1) ➞ 0
// perrin(8) ➞ 10
// perrin(26) ➞ 1497

const perrin = n => !n ? 3 : n==1 ? 0 : n==2 ? 2 : perrin(n-3) + perrin(n-2);

function perrin(n) {
	var arr = [3, 0, 2];
	var k = arr.length;
	while(n >= k){
		arr[k] = arr[k - 3] + arr[k -2];
		console.log(arr[k]);
		k++;
	}
	return arr[n];	
}

function perrin(n) {
	let arr = [3, 0, 2];
	if (n > 2) {
		for (let i = 3; i <= n; i++) {
			arr.push(arr[i - 3] + arr[i - 2]);
		}
	}
	return arr[n];
}

function perrin(n) {
	let arr = [3, 0, 2]; 
	if ( n > 2) {
		for (let i = 3; i <= n; i++) {
			arr.push(arr[i - 3] + arr[i - 2]); 
		}
	}
	return arr[n]; 
}

// 997 A Sudoku is a 9x9 grid that is completed when every 3x3 square, row and column consist of the numbers 1-9.
// For this task, you will be given a completed 3x3 square, in the form of a two-dimensional array. Create a function that checks to make sure this 3x3 square contains each number from 1-9 exactly once. Make sure there are no duplicates, and no numbers outside this range.

// isMiniSudoku([[1, 3, 2], [9, 7, 8], [4, 5, 6]]) ➞ true

// isMiniSudoku([[1, 1, 3], [6, 5, 4], [8, 7, 9]]) ➞ false
// The 1 is repeated twice 

// isMiniSudoku([[0, 1, 2], [6, 4, 5], [9, 8, 7]]) ➞ false
// The 0 is included (outside range)

// isMiniSudoku([[8, 9, 2], [5, 6, 1], [3, 7, 4]]) ➞ true 


function isMiniSudoku(square) {
	let a = square.join(); 
	for (let i = 1; i <= 9; i++) {
		if (a.indexOf(i) == -1) {
			return false; 
		} else {
			return true; 
		}
	}
}

function isMiniSudoku(square) {
	return square[0].concat(square[1],square[2]).sort().join() == '1,2,3,4,5,6,7,8,9'
}

function isMiniSudoku(square) {
	let arr = []; 
	square.forEach(a => arr = arr.concat(a)); 
	return arr.sort().every((entry, id, array) => entry === id + 1); 
}

// 998. Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Yellow - frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000

function frames(minutes, fps) {
	const fpsRes = fps * 60; 
	return minutes * fpsRes; 
}

function frames(minutes, fps) {
	return minutes * (fps * 60)
}

function frames(x, y)  {
	return x * y * 60; 
}

// 999. Given a simple math expression as a string, neatly format it as an equation.

// Yellow - formatMath("3 + 4") ➞ "3 + 4 = 7"
// formatMath("3 - 2") ➞ "3 - 2 = 1"
// formatMath("4 x 5") ➞ "4 x 5 = 20"
// formatMath("6 / 3") ➞ "6 / 3 = 2"

function formatMath(expr) {
	return expr + " = " + eval(expr.replace("x", "*"))
}

function formatMath(expr) {
	return expr.includes('+') ? `${expr} = ${eval(expr)}`
				:expr.includes('-') ? `${expr} = ${eval(expr)}`
				:expr.includes('/') ? `${expr} = ${eval(expr)}`
				:`${expr} = ${eval(expr.replace(regex='x','*'))}`
}

const formatMath = expr => {
	expr = expr.split(' ')
	let result
	switch (expr[1]) {
		case 'x':
			result = expr[0] * expr[2]
			break
		case '/':
			result = expr[0] / expr[2]
			break
		case '-':
			result = expr[0] - expr[2]
			break
		default:
			result = +expr[0] + +expr[2]
			break
	}
	return `${expr.join(' ')} = ${result}`
}

// 1000. Create a function that transforms sentences ending with multiple question marks ? or exclamation marks ! into a sentence only ending with one.

// Yellow - noYelling("What went wrong?????????") ➞ "What went wrong?"

// noYelling("Oh my goodness!!!") ➞ "Oh my goodness!"
// noYelling("I just!!! can!!! not!!! believe!!! it!!!") ➞ "I just!!! can!!! not!!! believe!!! it!"
// // Only change repeating punctuation at the end of the sentence.
// noYelling("Oh my goodness!") ➞ "Oh my goodness!"
// // Do not change sentences where there exists only one or zero exclamation marks/question marks.
// noYelling("I just cannot believe it.") ➞ "I just cannot believe it."

function noYelling(phrase) {
	return phrase.replace(/([?!])+$/g, '$1')
}

function noYelling(phrase) {
	phrase = phrase.replace(/\?{2,}$/g, '?');
	phrase = phrase.replace(/\!{2,}$/g, '!');
	return phrase;
}

function noYelling(phase) {
	return phrase.replace(/([!?])+$/g, "$1");
}

function noYelling(phrase) {
	return String(phrase.match(/\b.+\w+[^a-z]{1}/))
}

// 1001. Create a function that takes an array of numbers and return the number that's unique.

// White - unique([3, 3, 3, 7, 3, 3]) ➞ 7
// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

function unique(arr) {
	return arr.filter(x => arr.lastIndexOf(x) === arr.indexOf(x))[0];
}

unique = a => a.find(x => a.indexOf(x) == a.lastIndexOf(x))

function unique(arr) {
	var unique = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(i == arr.length - 1) {
			return arr[i];
		}
		if(unique != arr[i]) {
			if(unique != arr[i+1]) {
				return unique;
			} else {
				return arr[i];
			}
		}
	}
}

// 1002. Create the instance properties fullname and email in the Employee class. Given a person's first and last names:
// Form the fullname by simply joining the first and last name together, separated by a space.
// Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure everything is in lowercase.

// emp1 = Employee('John', 'Smith')
// emp1.fullname ➞ 'John Smith'

// emp2 = Employee('Mary',  'Sue')
// emp2.email ➞ 'mary.sue@company.com'

// emp3 = Employee('Antony', 'Walker')
// emp3.firstname ➞ 'Antony'

class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		// Complete the code!
		this.fullname = `${firstname} ${lastname}`;
		this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
	}
}

class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.fullname = firstname + ' ' + lastname
		this.email = (firstname + '.' + lastname + '@company.com').toLowerCase()
	}
}

// 1003. This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.
// Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.

// Yellow - "A4B5C2" ➞ "AAAABBBBBCC"
// "C2F1E5" ➞ "CCFEEEEE"
// "T4S2V2" ➞ "TTTTSSVV"
// "A1B2C3D4" ➞ "ABBCCCDDDD"

function mysteryFunc(str) {
	return str.match(/.{2}/g)
	.map(x => x[0].repeat(x[1]))
	.join(''); 
}

function mysteryFunc(str) {
	let result = ''
	for (let i = 0; i < str.length - 1; i += 2) {
		result += str[i].repeat(str[i + 1])
	}
	return result
}

function mysteryFunc(str) {
	n=str.match(/\d/g)
	ret=[]
	n.forEach((a,b)=>ret=ret.concat(str[b*2].repeat(Number(a))))
	return ret.join('')
}

// 1004. Create a function that takes an array and finds the integer which appears an odd number of times.

// Yellow - findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) ➞ -1
// findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]) ➞ 5
// findOdd([10]) ➞ 10

function findOdd(arr) {
	return arr.find(n => arr.filter(n2 => n == n2).length % 2); 
}

function findOdd(arr) {
	arr.reduce((a, b) => a ^ b, 0)
}

function findOdd(arr) {
	arr = arr.sort((a, b) => a - b); 
	for(let i = 0, l = arr.length; i < l; i++) {
		if(arr[i] === arr[i + 1]) {
			i++; 
		} else {
			return arr[i]; 
		}
	}
}

// 1005. A man named Thomas Malthus described what is now called a Malthusian Catastrophe. According to him, food production grows by a fixed amount, but population grows by a percentage. So, the food supply would soon be insufficient for the population.

// Your job is to find out when that will occur. For this challenge, assume 1 population needs 1 unit of food production. Food production & population both start at 100. The year starts at 0.
// The catastrophe happens when the population is larger than food production.
// The function will pass:
// foodGrowth ⁠— an integer - Food production increase per year.
// popMult ⁠— a floating-point number - The population growth multiplier per year.

// Yellow- malthusian(4255, 1.41) ➞ 20
// { foodProd: 85,200, pop: 96,467.77..., year: 20 }

// malthusian(9433, 1.09) ➞ 107
// { foodProd: 1,009,431, pop: 1,010,730.28..., year: 107 }

// malthusian(5879, 1.77) ➞ 12
// { foodProd: 70,648, pop: 94,553.84..., year: 12 }

const malthusian = (f, p, F = 100, P = 100, Y = 0) => (
	P > F ? Y : malthusian(f, p, f + F, p * P, ++Y)
);

const malthusian = (f, p) => {
	let n = 1
	while (100 + f*n > 100*p**n) n++
	return n
}

function malthusian(foodGrowth, popMult) {
	let year = 0;
	let food = 100;
	let pop = 100; 
	
	while (food >= pop){
		food += foodGrowth;
		pop *= popMult;
		year++;
	}
	return year;
}

function malthusian(foodGrowth, popMult) {
	let foodProd = 100
	let population = 100
	let year = 0
	
	for (let i = 0 ; foodProd >= population ; i++){
		foodProd += foodGrowth
		population *= popMult
		year++
	}
	
	return year
}

// 1006. Create a function that takes two numbers as arguments and return their sum.

// White - addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

function addition(a, b) {
	return a + b; 
}

function addition(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
			return "Sorry but you didn't pass two numbers.";
	}
	return a + b;
}

function addition(a, b) {
	const addition = a+b
	return (addition)
}

// 1007. Dividing by 0 is a huge mistake and should be avoided at all costs.
// Create a function that when given a math expression as a string, return True if at any point, the expression involves dividing by 0.

// Yellow - catchZeroDivision('2 / 0') ➞ true
// catchZeroDivision('4 / (2 + 3 - 5)') ➞ true
// catchZeroDivision('2 * 5 - 10') ➞ false

function catchZeroDivision(expr) {
	return !isFinite(eval(expr));
}

function catchZeroDivision(expr) {
	return ! Number.isFinite(eval(expr));
}

function catchZeroDivision(expr) {
	if (!expr.includes('/')) return false;
  const divisor = expr.split('/')[1]
		return !Number(`${divisor}`)
}

// 1008. Given a two digit number, return true if that number contains one even and one odd digit.

// White - oneOddOneEven(12) ➞ true
// oneOddOneEven(55) ➞ false
// oneOddOneEven(22) ➞ false

function oneOddOneEven(n) {
	if (n % 2 == 0)
	return "false"
}
return "true"

const oneOddOneEven = n => +String(n)[0] % 2 != +String(n)[1] % 2

const oneOddOneEven = n => (
	Boolean(`${n}`[0] % 2) !== Boolean(`${n}`[1] % 2)
);

function oneOddOneEven(num) {
	let [a,b] =  [ +(String(num)[0]) , num%10  ]
	return (a+b) %2 != 0 ;
}

// 1009. A number can considered slidey if for every digit in the number, the next digit from that has an absolute difference of one. Check the examples below.

// White - isSlidey(123454321) ➞ true
// isSlidey(54345) ➞ true
// isSlidey(987654321) ➞ true
// isSlidey(1123) ➞ false
// isSlidey(1357) ➞ false

function isSlidey(n) {
	n = n.toString();
	return [...n].slice(1).every((x, i) => Math.abs(x - n[i]) === 1);
}

function isSlidey(n) {
	let arr = [...n.toString()];
	return arr.every((x, id) => Math.abs(x - arr[id+1]) == 1 || id == arr.length-1);
}

function isSlidey(n) {
	const num = n.toString();
	for (let i = 1; i < num.length; i++) {
		if (Math.abs(num[i] - num[i - 1]) !== 1) return false;
	}
	return true;
}

// 1010. Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:
// {other person name} is {older than / younger than / the same age as} me.

// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)

// Yellow - p1.compareAge(p2) ➞ "Joel is older than me."
// p2.compareAge(p1) ➞ "Samuel is younger than me."
// p1.compareAge(p3) ➞ "Lily is the same age as me."

class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
		
	compareAge(other) {
		let i = Math.sign(other.age - this.age),
				x = ["the same age as", "older than"][i] || "younger than";
		return `${other.name} is ${x} me.`;
	}
}

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
		
	compareAge(other) {
		if (this.age < other.age){
			return `${other.name} is older than me.`
		}else if (this.age > other.age){
			return `${other.name} is younger than me.`
		}else{
			return `${other.name} is the same age as me.`
		}
	}
}

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
		
	compareAge(other) {
		if (this.age > other.age) return `${other.name} is younger than me.`;
		if (this.age < other.age) return `${other.name} is older than me.`;
		return `${other.name} is the same age as me.`;
	}
}

// 1011. Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// Yellow - addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]
// addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]
// addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]

function addIndexex(arr) {
	return arr.map((val, i) => val + i); 
}

function addIndexes(arr) {
	let result = []; 
	for(let i = 0; i < arr.length; i++) {
		result.push(i + arr[i])
	}
	return result;
}

function addIndexes(arr) {
	for(var i = 0; i < arr.length; i++) {
		arr[i] += i
	}
  return arr
}

// 1012. Given a sentence spelling out a word, return true if the spelled letters match the word at the end of the string, or false otherwise.

// Yellow - validateSpelling("C. Y. T. O. P. L. A. S. M. Cytoplasm?") ➞ true
// validateSpelling("P. H. A. R. A. O. H. Pharaoh!") ➞ true
// validateSpelling("H. A. N. K. E. R. C. H. E. I. F. Handkerchief.") ➞ false

const validateSpelling = txt => {
	let arr = txt.toUpperCase().match(/\w+/g);
	return arr.slice(0, -1).join("") === arr.slice(-1)[0];
}

function validateSpelling(txt) {
	let t = txt.toLowerCase().match(/\w+/g);
	return t.slice(0, -1).join('') === t[t.length - 1];
}

function validateSpelling(txt) {
	txt = txt.split('. ').map(el => el.replace(/\W/g, ''));
	return txt.splice(-1).join('').toUpperCase() === txt.join('');
}

// 1013. Create a function which simulates the game "rock, paper, scissors". The function takes the input of both players (rock, paper or scissors), first parameter from first player, second from second player. The function returns the result as such:

// "Player 1 wins"
// "Player 2 wins"
// "TIE" (if both inputs are the same)
// The rules of rock, paper, scissors, if not known:

// Both players have to say either "rock", "paper" or "scissors" at the same time.
// Rock beats scissors, paper beats rock, scissors beat paper.

// Yellow - rps("rock", "paper") ➞ "Player 2 wins"

// rps("paper", "rock") ➞ "Player 1 wins"

// rps("paper", "scissors") ➞ "Player 2 wins"

// rps("scissors", "scissors") ➞ "TIE"

// rps("scissors", "paper") ➞ "Player 1 wins"

const rps = (s1, s2) => {
	if (s1 === s2) return "TIE";
	let res = {p: "rock", s: "paper", r: "scissors"};
	return res[s1[0]] === s2 ? "Player 1 wins" : "Player 2 wins";
}

function rps(s1, s2) {
	if(s1 == s2) return 'TIE'
	else if(s1 == 'rock' && s2 == 'paper' || s1 == 'paper' && s2 =='scissors' || s1 == 'scissors' && s2 == 'rock')	return 'Player 2 wins'
	else if(s2 == 'rock' && s1 == 'paper' || s2 == 'paper' && s1 =='scissors' || s2 == 'scissors' && s1 == 'rock') return 'Player 1 wins'	
}

function rps(s1, s2) {
	const check = val => s2===val? "Player 1 wins": "Player 2 wins"
	if(s1===s2) return "TIE"
	if(s1==="rock") return check("scissors")
	if(s1==="scissors") return check("paper")
	return check("rock")
}

function rps(s1, s2) {
	const res = {
		rock: {rock:0, paper:-1, scissors:1},
		paper: {rock:1, paper:0, scissors:-1},
		scissors: {rock:-1, paper:1, scissors:0},
	};
	return ['Player 2 wins','TIE','Player 1 wins'][res[s1][s2] + 1];
}

// 1114. Given a pH value, return whether that value is 'alkaline', 'acidic', or 'neutral'. Return 'invalid' if the value given is less than 0 or greater than 14.

// Yellow - pHName(5) ➞ "acidic"
// pHName(8.7) ➞ "alkaline"
// pHName(7) ➞ "neutral"

function phName(ph) {
	if (ph > 14) return 'invalid'; 
	if (ph < 7) return 'acidic'; 
	if (ph > 7) return 'alkaline'; 
	return 'neutral'; 
}

function pHName(pH) {
	if (pH < 0 || pH > 14) {
		return 'invalid';
	}
	return (pH < 7 && pH >= 0) ? 'acidic' : (pH <= 14 && pH > 7) ? 'alkaline' : 'neutral'
}

function pHName(pH) {
	if( (pH <0) || (pH> 14)){
		return 'invalid'
	} else if (pH <7){
		return 'acidic'
	}else if (pH >7){
		return 'alkaline'
	}else{
		return "neutral"
	}
}

function phName(ph) {
	return ph < 0 || ph > 14 ? 'invalid' : ph === 7 ? 'neutral' : ph <= 6 ? 'acidic' : 'alkaline'
}

// 1015. Given an integer, return "odd" if the sum of all odd digits is greater than the sum of all even digits. Return "even" if the sum of even digits is greater than the sum of odd digits, and "equal" if both sums are the same.

// White - oddsVsEvens(97428) ➞ "odd"
// odd = 16 (9+7)
// even = 14 (4+2+8)

// oddsVsEvens(81961) ➞ "even"
// odd = 11 (1+9+1)
// even = 14 (8+6)

// oddsVsEvens(54870) ➞ "equal"
// odd = 12 (5+7)
// even = 12 (4+8+0)

const sum = arr => arr.reduce((total, num) => total + num, 0);

const oddsVsEvens = num => {
  const digits = String(num).split('').map(Number);
  const evens = sum(digits.filter(digit => digit % 2 === 0));
	const odds = sum(digits.filter(digit => digit % 2 !== 0));
	
	return evens === odds ? 'equal' : evens > odds ? 'even' : 'odd'; 
}; 

function oddsVsEvens(num) {
	let even = 0, odd = 0; 
	num.toString().split('')
  .map((x) => Number(x) % 2 == 0 ? even += Number(x) : odd += Number(x));
	return even == odd ? "equal" : even > odd ? "even" : "odd";
}

function oddsVsEvens(num) {
  
  let odd = [0];
  let even = [0];

  num.toString().split('').map(x => Number(x) % 2 === 0 ? even.push(Number(x)) : odd.push(Number(x)));

  let oddSum = odd.reduce((a, b) => a + b);
  let evenSum = even.reduce((a, b) => a + b);

  return oddSum > evenSum ? 'odd' :
    oddSum === evenSum ? 'equal' :
    'even';
}

// 1016. The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.

// White - Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456.
// In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result.
// The regexp should not match 123:456.

const REGEXP = /\d\d:\d\d/
const REGEXP = /\b\d\d:\d\d\b/
const REGEXP = /\b\d+:\d+\b/

// 1017. Create a function that takes a string of words and return a string sorted alphabetically by the last character of each word.

// Yellow - sortBWyLast("herb camera dynamic") ➞ "camera herb dynamic"
// sortByLast("stab traction artist approach") ➞ "stab approach traction artist"
// sortByLast("sample partner autonomy swallow trend") ➞ "trend sample partner swallow autonomy"

function sortByLast(str) {
	return str.split(' ').sort(function(a,b){
		if(a[a.length - 1] > b[b.length - 1]){
			return true
		}
		else return false
	}).join(' ')
}

function sortByLast(str) {
	return str.split(' ').sort((a,b)=>a[a.length-1]>b[b.length-1] ? 1:-1).join(' ')
}

function sortByLast(str) {
		return str
			.split(' ')
			.map(e => e.split('').reverse())
			.sort((a,b) => a[0] == b[0] ? 0 : a > b )
			.map(e => e.reverse().join(''))
			.join(' ')
}

// 1018. Given an array of math expressions, create a function which sorts the array by their answer. It should be sorted in ascending order.

// White - sortByAnswer(["1 + 1", "1 + 7", "1 + 5", "1 + 4"]) ➞ ["1 + 1", "1 + 4", "1 + 5", "1 + 7"
// sortByAnswer(["4 - 4", "2 - 2", "5 - 5", "10 - 10"]) ➞ ["4 - 4", "2 - 2", "5 - 5", "10 - 10"]
// sortByAnswer(["2 + 2", "2 - 2", "2 x 1"]) ➞ ["2 - 2", "2 x 1", "2 + 2"]

const sortByAnswer = arr => {
	const re = s => s.replace("x", "*");
	return arr.sort((a,b) => eval(re(a)) - eval(re(b)));
}

function sortByAnswer(arr) {
  const calc = exp => eval(exp.replace("x", "*"));
  return arr.sort((a, b) => calc(a) - calc(b));
}

const sortByAnswer = arr =>
			arr.sort((a,b) => eval(a.replace('x','*')) - eval(b.replace('x', '*')));

// 1019. Given a number, return the difference between the maximum and minimum numbers that can be formed when the digits are rearranged.

// rearrangedDifference(972882) ➞ 760833
// 988722 - 227889 = 760833

// rearrangedDifference(3320707) ➞ 7709823
// 7733200 - 23377 = 7709823

// rearrangedDifference(90010) ➞ 90981
// 91000 - 19 = 90981

function rearrangedDifference(num) {
	min = +[...''+num].sort((a,b) => a-b).join('')
	max = +[...''+num].sort((a,b) => b-a).join('')
	return max - min
}

function rearrangedDifference(num) {
  let min = num.toString().split("").sort((a,b) => a - b).join("")
  let max = num.toString().split("").sort((a,b) => b - a).join("")
  return max - min
}

function rearrangedDifference(num) {
	num = [...''+num].sort();
	let min = +num.join('')
	let max = +num.reverse().join('');
	return max - min;
}

// 1020. Create a function that takes a number as an argument and returns n instances of the Fibonacci sequence as an array.
// Fibonacci numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. So the easy explanation is: The next element is the sum of the two previous elements.

// White - fibSeq(4) ➞ [0, 1, 1, 2]
// fibSeq(7) ➞ [0, 1, 1, 2, 3, 5, 8]
// fibSeq(0) ➞ []

function fibSeq(end) {
	results = []
	for (i = 0; i < end; i++) {
		i == 0 ? results.push(0) : i == 1 ? results.push(1) : results(results[i - 2] + results[i - 1])
	}
	return end > - 1 ? results : undefined
}

function fibSeq(end) {
	if (end == null) { return }
	return new Array(end).fill(0).map((_,i) => Math.round((Math.pow((1 + Math.sqrt(5))/2, i) - Math.pow((1 - Math.sqrt(5))/2, i))/Math.sqrt(5)));
}

function fibSeq(end) {
	let arr = [0,1];
	for (let i = 2; i < end; i ++){
		arr.push(arr[i-1] + arr[i-2]);
	}
	return end == 0 ? [] : end == 1 ? [0] : !end ? undefined : arr;
}

// 1021. Create a regular expression to find all (opening and closing) HTML tags with their attributes
// Assume that tag attributes may not contain < and > (inside quotes too)

// Yellow - const REGEXP = /your regexp/g;
// let str = '<> <a href="/"> <input type="radio" checked> <b>';
// str.match(REGEXP) ➞  '<a href="/">', '<input type="radio" checked>', '<b>'\

const REGEXP = /<[^>]+>/g

const REGEXP = /<[ \w'"\/=]+>/g

const REGEXP = /<[^<>]+>/g;

// 1022. Write a function that returns true if all subsets in a list belong to a given set.

// White - validateSubsets([[1, 2], [2, 3], [1, 3]], [1, 2, 3]) ➞ true
// validateSubsets([[1, 2, 3], [2], [3], []], [1, 2, 3]) ➞ true
// validateSubsets([[1, 2], [2, 3], [1, 4]], [1, 2, 3]) ➞ false
// validateSubsets([[1, 2, 3, 4]], [1, 2, 3]) ➞ false

function validateSubsets(subsets, set) {
	return subsets.every(a => | a.length === 0 || a.every(e => set.includes(e)))
}

function validateSubsets = (subsets, set) {
	subsets.every(e => [...e].every(x => new Set(set).has(x)));
}

function validateSubsets(subsets, set) {
	return subsets.every(a => a.every(b => set.includes(b)));
}

// 1023. Given a number, n, return a function which adds n to the number passed to it.

// White - add(10)(20) ➞ 30
// High Order Function 
// add(0)(20) ➞ 20
// add(-30)(80) ➞ 50

function add(n) {
	return function(x) {
		return x + n
	}; 
}

function add(n) {
	let sum = function(num) {
		return n + num; 
	}
	return sum; 
}

function add(n) {
	return function(m) {
		return n + m;
	};
}

// 1024. Create a function that takes in an array of full names and returns the initials.

// White - initialize(["Stephen Hawking"]) ➞ ["S. H."]
// initialize(["Harry Potter", "Ron Weasley"]) ➞ ["H. P.", "R. W."]
// initialize(["Sherlock Holmes", "John Watson", "Irene Adler"]) ➞ ["S. H.", "J. W.", "I. A."]

function initialize(names) {
	return names.map(name => {
		const split = name.split(' ')
		return `${split[0][0]}. ${split[1][0]}.`
	})
}

function initialize(names) {
	return names.map(v => v.match(/(^|\s)[A-Z]/g).join('.')+'.'); 
}

function intialize(names) {
	fullname 
		.split(' ')
		.map(name => `${name[0]}.`)
		.join(' ')
	}

function intialize(names) {
	return names.map(x => x.split(' ').map(k => k.charAt(0) + '.').join(' ')); 
}

// 1025. Create a function that takes a number steps as an argument and returns the amount of rectangles you can count in a matrix.

// White - rectangle(1) ➞ 1
// rectangle(2) ➞ 9
// rectangle(3) ➞ 36

function rectangles(steps) {
	let formula = ( step * (step + 1)) /2; 
	return Math.pow(formula, 2); 
}


function rectangles(step) {
	var res = 0
	for(let i = 1; i <= step; i++) {
		res += Math.pow(i, 3)
	}
	return res
}

function rectangles(step){
	return Math.pow(step*(step+1)/2, 2)
}

// 1026. In this challenge, you have to obtain a sentence from the elements of a given matrix. In the matrix, each word of the sentence follows a columnar order from the top to the bottom, instead of the usual left-to-right order: it's time for transposition!
// Given a matrix mtx, implement a function that returns the complete sentence as a string, with the words separated by a space between them.

// transposeMatrix([
//   ["Enter"],
//   ["the"],
//   ["Matrix!"]
// ]) ➞ "Enter the Matrix!"

// transposeMatrix([
//   ["The", "are"],
//   ["columns", "rows."]
// ]) ➞ "The columns are rows."

// transposeMatrix([
//   ["You", "the"],
//   ["must", "table"],
//   ["transpose", "order."]
// ]) ➞ "You must transpose the table order."

function transposeMatrix(mtx) {
	return mtx[0].map((c,i) => mtx.map(r => r[i])).flat().join(' ')
}

function transposeMatrix(mtx) {
	return mtx[0].map((x, i) => mtx.map(x => x[i]).join(' ')).join(' ');
}

function transposeMatrix(mtx) {
	var a = [];
for(var i = 0; i < mtx[0].length; i++){
	mtx.reduce((acc,cur)=>{
		a.push(cur[i]);
		return acc;
	},[])
}
	return a.join(" ");
}

// 1027. Create a function that takes a number as an argument and return the a string like square.

// createSquare(-1) ➞ ""
// createSquare(0) ➞ ""
// createSquare(1) ➞ "#"
// createSquare(2) ➞ "##\n##"
// createSquare(3) ➞ "###\n# #\n###"
// createSquare(4) ➞ "####\n#  #\n#  #\n####"

function createSquare(length){
  var squareCharacter = '#';
  if (length === 1) {
    return '#';
  } else if (length > 1) {
    return squareCharacter.repeat(length) + ('\n' + squareCharacter + ' '.repeat(length - 2) + squareCharacter).repeat(length - 2) + '\n' + squareCharacter.repeat(length)
  } else {
    return ''
  }
}

function createSquare(length){
	let res = [];
	for (let i = 1; i <= length; i++) {
		if (i == 1 || i == length)
			res.push("#".repeat(length));
		else
			res.push("#" + " ".repeat(length - 2) + "#");
	}
	return res.join("\n");
}

// 1028. Create a function that takes an array and determines whether it's strictly increasing, strictly decreasing, or neither.

// White - check([1, 2, 3]) ➞ "increasing"
// check([3, 2, 1]) ➞ "decreasing"
// check([1, 2, 1]) ➞ "neither"
// check([1, 1, 2]) ➞ "neither"

function check(arr) {
	return arr.slice(1).every((x, i) => x > arr[i]) == true? 'increasing': arr.slice(1).every((x, i) => x < arr[i]) == true? 'decreasing':'neither'
}

function check(arr) {
	let newArr = arr.slice(1)
	return	newArr.every((x,i)=> x - arr[i] > 0) ? 'increasing' :
					newArr.every((x,i)=> x - arr[i] < 0) ? 'decreasing'	: 'neither'
}

function check(arr) {
	var c;
	if (arr[1] - arr[0] > 0) c = true;
	if (arr[1] - arr[0] < 0) c = false;
	for (var i = 1; i < arr.length-1; i++) {
		if (c && arr[i+1] - arr[i] <= 0) return 'neither';
		if (!c && arr[i+1] - arr[i] >= 0) return 'neither';
	}
	return c ? 'increasing' : 'decreasing';
}

// 1029. Create a function that returns the indices of all occurrences of an item in the array.

// White - getIndices(["a", "a", "b", "a", "b", "a"], "a") ➞ [0, 1, 3, 5]
// getIndices([1, 5, 5, 2, 7], 7) ➞ [4]
// getIndices([1, 5, 5, 2, 7], 5) ➞ [1, 2]
// getIndices([1, 5, 5, 2, 7], 8) ➞ []

function getIndices(arr, el) {
	var indxArr = [];
 arr.map(function(val,idx,arr){
		
		if(val === el){
			indxArr.push(idx);
	 
		}
 })
 return indxArr;
}

const getIndices = (arr, el) => 
arr.map((x, i) => x === el ? i : '#').filter(x => x !== '#');

function getIndices(arr, el) {
	return arr.map((e, i) => {
		return e === el ? i : null
	}).filter(e => e !== null)
}

function getIndices(arr, el) {
  let indices = [];
  arr.map((x, i) => x == el ? indices.push(i) : false);
  return indices;
}

function getIndices(arr, el) {
	return arr.map((c, i) => c === el ? i : undefined)
		.filter(x => x === 0 ? true : x);
}

// 1030. Create two functions toCamelCase() and toSnakeCase() that each take a single string and convert it into either camelCase or snake_case.

// White - toCamelCase("hello_edabit") ➞ "helloEdabit"
// toSnakeCase("helloEdabit") ➞ "hello_edabit"
// toCamelCase("is_modal_open") ➞ "isModalOpen"
// toSnakeCase("getColor") ➞ "get_color"

toSnakeCase = s => s.replace(/[A-Z]/g, x => '_' + x.toLowerCase())
toCamelCase = s => s.replace(/_\w/g, x => x[1].toUpperCase())

toSnakeCase = s => s.replace(/([A-Z])/g, '_$1').toLowerCase()
toCamelCase = s => s.replace(/_./g, v => v[1].toUpperCase())

function toSnakeCase(str) {
	return str.replace(/([A-Z])/g, match => {
		return '_' + match.toLowerCase();
	});
}

function toCamelCase(str) {
	return str.replace(/(_[a-z])/g, match => {
		return match.slice(1).toUpperCase();
	});
}

function toSnakeCase(str) {
	return str.replace(/[A-Z]/g, (match) => ("_" + match.toLowerCase()));
}

function toCamelCase(str) {
		return str.replace(/(_)([a-z])/g, (match, p1, p2) => p2.toUpperCase());
}

// 1031. Create a function that takes a string str and censors any word from a given array arr. The text removed must be replaced by the given character char.

// White - censorString("Today is a Wednesday!", ["Today", "a"], "-") ➞ "----- is - Wednesday!"
// censorString("The cow jumped over the moon.", ["cow", "over"], "*"), "The *** jumped **** the moon.")
// censorString("Why did the chicken cross the road?", ["Did", "chicken", "road"], "*") ➞ "Why *** the ******* cross the ****?"

function censorString(str, arr, char) {
	arr = arr.map(v => v.toLowerCase());
	return str.replace(/\S+/gi, s => arr.includes(s.toLowerCase()) ? char.repeat(s.length) : s)
}

function censorString(str, arr, char) {
	let re = new RegExp(arr.join('|'), 'gi');
	return str.replace(re, v => char.repeat(v.length));
}

function censorString(str, arr, char) {
	let regex = new RegExp(arr.join('|'), 'g');
	return str.replace(regex, x => char.repeat(x.length));
}

function censorString(str, arr, char) {
	arr.forEach(x => str = str.replace(x, char.repeat(x.length)));
	return str;
}

function censorString(str, arr, char) {
	return str.split(" ")
					  .map(x => arr.includes(x) ? char.repeat(x.length):x)
						.join(" ");
}

//1032. Create a function that takes a string of 1's and 0's (binary) as an argument and return the equivalent decoded ASCII text. Characters can be in the range of "00000000" to "11111111", which means every eight digits of binary input represents a single character.

// a = 01100001
// b = 01100010
// c = 01100011
// If you were to combine these characters into the string "abc", the corresponding binary would be 011000010110001001100011. Use the resources tab for more info on how to approach this.

// White - binaryConversion("011001010110010001100001011000100110100101110100") ➞ "edabit"
// binaryConversion("001100010011001000110011") ➞ "123"
// binaryConversion("010010000110010101101100011011000110111100111111") ➞ "Hello?"

function binaryConversion(str) {
	return str.replace(/([0-1]{8})/g,x=>String.fromCharCode(parseInt(x,2)));
}

function binaryConversion(str) {
  return str.replace(/[01]{8}/g, function(v) { 
      return String.fromCharCode( parseInt(v,2) ); 
  });
}

function binaryConversion(str) {
  if (str.length === 0) return str;
  var ret = "";
  for (var i = 0; i < str.length; i += 8) {
    ret += String.fromCharCode( parseInt(str.substr(i, 8), 2) ); 
  }
  return ret;
}

// 1033. If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph then their average speed traveled was 30mph.

// Write a function that returns the average speed traveled given an uphill time, uphill rate and a downhill rate
// Uphill time is given in minutes
// Return the rate as an integer (mph)
// No rounding is necessary

// White - aveSpd(18, 20, 60) ➞ 30 

function aveSpd(upTime, upSpd, downSpd) {
	return (2 * upTime * upSpd)/((upTime * upSpd/downSpd) + upTime);
}

function aveSpd(upTime, upRate, downRate) {
  const distance = (upTime / 60) * upRate;
  const upTimeHrs = upTime / 60;
  const downTimeHrs = (distance / downRate);
  return (distance * 2) / (upTimeHrs + downTimeHrs);
}

function aveSpd(uT, upSpd, dS) {
	uT /= 60;
	let tD = uT * upSpd * 2;
	let tT = (tD/2)/dS + uT;
	return tD/tT;
}

// 1034. Create a function that converts color in RGB format to Hex format.

// White - rgbToHex("rgb(0, 128, 192)") ➞ "#0080c0"
// rgbToHex("rgb(45, 255, 192)") ➞ "#2dffc0"
// rgbToHex("rgb(0, 0, 0)") ➞ "#000000"

const rgbToHex = color => {
	return "#" + color
		.match(/\d+/g)
		.map(v => (+v).toString(16).padStart(2, "0"))
		.join("");
}

const rgbToHex = str => {
  const hex = str
    .match(/rgb\((.+)\)/)[1]
    .split(',')
    .map(channel =>
      Number(channel)
        .toString(16)
        .padStart(2, '0'),
    )
    .join('');

  return `#${hex}`;
};

function rgbToHex(col) {
	return '#' + col
		.slice(4, col.length - 1)
		.split(', ')
		.map(item => parseInt(item).toString(16).padStart(2, '0'))
		.join('')
}

function rgbToHex(col) {
	let arr = col.match(/\d+/g).map(x => {
		let num = (+x).toString(16);
		return num < 10 ? "0"+num : num;
	});
	return "#" + arr.join("");
}

// 1035. Create a function that accepts a string as an argument and returns the first non-repeated character.

// White - firstNonRepeatedCharacter("g") ➞ "g"
// firstNonRepeatedCharacter("it was then the frothy word met the round night") ➞ "a"
// firstNonRepeatedCharacter("the quick brown fox jumps then quickly blows air") ➞ "f"
// firstNonRepeatedCharacter("hheelloo") ➞ false
// firstNonRepeatedCharacter("") ➞ false

function firstNonRepeatedCharacter(str) {
  var arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
  return false;
  
}

function firstNonRepeatedCharacter(str) {
  str = str.replace(' ', '');
  
  for (let i = 0; i < str.length; i++) {
    let re = new RegExp(str[i], 'g');
    if (str.match(re).length == 1) return str[i];
  }
  
  return false;
}

// 1036. Given an object containing the names and ages of a group of people, return the name of the oldest person.

// White - oldest({
//   Emma: 71,
//   Jack: 45,
//   Amy: 15,
//   Ben: 29
// }) ➞ "Emma"

// oldest({
//   Max: 9,
//   Josh: 13,
//   Sam: 48,
//   Anne: 33
// }) ➞ "Sam"

function oldest(people) {
	var result = 0;
	var name = "";
	for(var k in people){
		if(people[k] > result){
			result = people[k];
			name = k;
		}
	 }
		return name;
	}

function oldest(people) {
	return Object.keys(people)
		.sort((a,b) => people[b] - people[a])[0]
}

const oldest = people =>
  Object.keys(people).reduce((a,b)=> people[a] > people[b] ? a : b);

// 1037. Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.
// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// Yellow - chosenWine([
//   { name: "Wine A", price: 8.99 },
//   { name: "Wine 32", price: 13.99 },
//   { name: "Wine 9", price: 10.99 }
// ]) ➞ "Wine 9"

// chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

// chosenWine([]) ➞ null

function chosenWine(wines) {
	if (wines.length === 0) return null;
	if (wines.length === 1) return wines.sort((a,b) => a.price - b.price)[0].name;
	return wines.sort((a,b) => a.price - b.price)[1].name;
}

function chosenWine(wines) {
	if (wines.length == 1){ 
		return wines[0].name
	} else if (wines.length > 1){
		var sorted = wines.sort(function(a,b){return a.price-b.price});
		return sorted[1].name;
	}
	return null;
}

function chosenWine(wines) {
	if(!wines.length){return null;}
	let w = wines.sort((a,b) => a.price - b.price);
	return ([... w, w[w.length-1]])[1].name;
}

// 1038. Create a function that finds a target number in a list of prime numbers
// Implement a binary search algorithm in your function
// The target number will be from 2 through 97
// If the target is prime then return yes else return no

// Yellow - var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// isPrime(primes, 3) -> "yes"
// isPrime(primes, 4) -> "no"
// isPrime(primes, 67) -> "yes"
// isPrime(primes, 36) -> "no"

function isPrime(primes, num) {
	//primes.includes(num)? "yes":"no"
	let half = Math.floor(primes.length/2)+1
	for(var i=0;i<half;i++){
		if(primes[i]===num) return "yes"
		if(primes[i+half]===num)return "yes"
	}
	return "no"
}

function isPrime(primes, num) {
	for(let i=0;i<primes.length;i++){
		if(num === primes[i]){
			return 'yes';
		}
	}
	return 'no';
}

// 1039. Create a left rotation and a right rotation function that returns all the left rotations and right rotations of a string.

// White - leftRotations("abc") ➞ ["abc", "bca", "cab"]

// rightRotations("abc") ➞ ["abc", "cab", "bca"]

// leftRotations("abcdef") 
// ➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]

// rightRotations("abcdef") 
// ➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]

function leftRotations(str) {
	return str.split("").map((a,i)=>str.slice(i)+str.slice(0,i))
}

function rightRotations(str) {
	return str.split("").map((a,i)=>str.slice(-i)+str.slice(0,-i))
}

function leftRotations(str) {
	return [...str].map( (it, i) => (i === 0)? str : it + str.slice(i + 1) + str.slice(0, i) );
}

function rightRotations(str) {
	return [...str].map( (it, i) => (i === str.length - 1)? str : str.slice(i + 1) + str.slice(0, i) + it ).reverse();
}

// 1040. Carlos is a huge fan of something he calls smooth sentences. A smooth sentence is one where the last letter of each word is identical to the first letter the following word.
// To illustrate, the following would be a smooth sentence: "Carlos swam masterfully."
// Since "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m"

// White - isSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true
// isSmooth("Someone is outside the doorway") ➞ false
// isSmooth("She eats super righteously") ➞ true

function isSmooth(sentence) {
	sentence = sentence.split(' ')
	for (var i = 0; i < sentence.length - 1; i++){
		lastElement = sentence[i].length-1
		if(!(sentence[i][lastElement].toLowerCase() == sentence[i+1][0].toLowerCase())){
			return false
		}
	}
	return true
}

function isSmooth(sentence) {
	const words = sentence.split(' ')
	let smooth = false
	for (let i = 0; i < words.length - 1; i++) {
		smooth = words[i].endsWith(words[i + 1][0])
	}
	return smooth
}

function isSmooth(sentence) {
	sentence = sentence.split(" ")
	for (i=0;i<sentence.length-1;i++){
		if (sentence[i][sentence[i].length-1].toLowerCase()!=sentence[i+1][0].toLowerCase()){return false}
	}
	return true
}

// 1041. Abigail and Benson are playing Rock, Paper, Scissors.

// Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

// Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

// R stands for Rock
// P stands for Paper
// S stands for Scissors

// calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"

// Ben wins the first game (Paper beats Rock).
// Abigail wins the second game (Rock beats Scissors).
// Abigail wins the third game (Scissors beats Paper). 
// Abigail wins 2/3.

// Yellow - calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"

// calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"

function calculateScore(games) {
	let scores = [0, 0]
	for (i of games) {
		if (i[0] === i[1]) continue
		if (i.includes('R') && i.includes('P')) scores[i.indexOf('P')] += 1
		if (i.includes('R') && i.includes('S')) scores[i.indexOf('R')] += 1
		if (i.includes('P') && i.includes('S')) scores[i.indexOf('S')] += 1
	}
	if (scores[0] === scores[1]) return 'Tie'
	return scores[1] > scores[0] ? 'Benson' : 'Abigail'
}

function calculateScore(games) {
	let aCount = 0
	let bCount = 0
	games.map(arr => arr.reduce((a,v)=>{
		if( a === "R" && v === "P"){
			bCount+=1
		}else if(a === "P" && v === "R"){
			aCount+=1
		}else if(a === "S" && v === "P"){
			aCount+=1
		}else if(a === "S" && v === "R" ){
			bCount+=1
		}else if(a === "P" && v === "S"){
			bCount+=1
		}else if(a === "R" && v === "S"){
			aCount+=1
		}
	}))
	 return aCount > bCount ? "Abigail" : bCount > aCount ? "Benson" : "Tie" 
}

function calculateScore(games) {
  const chart = {
    P: {
      wins: 'R',
      loses: 'S'
    },
    S: {
      wins: 'P',
      loses: 'S'
    },
    R: {
      wins: 'S',
      loses: 'P'
    }
  }
  
   
  const a = games.map(g => g[0] === g[1] ? 'Tie' : chart[g[0]].wins === g[1] ? 'Abigail' : 'Benson').reduce(function(obj, b) {
  obj[b] = ++obj[b] || 1;
  return obj;
}, {});
  return a.Abigail > a.Benson ? 'Abigail' : a.Benson > a.Abigail ? 'Benson' : 'Tie'
  
}

// 1042. Create a function that takes two integers and returns true if a number repeats three times in a row at any place in num1 AND that same number repeats two times in a row in num2.

// Yellow - trouble(451999277, 41177722899) ➞ true
// trouble(1222345, 12345) ➞ false
// trouble(666789, 12345667) ➞ true
// trouble(33789, 12345337) ➞ false

function trouble(num1, num2) {
  return /(\d)(\1\1|\1).* .*(\1\1)/.test(num1+" "+num2)
}

function trouble(num1, num2) {
  return /([0-9])\1{2}([^\1]|$)/.test(num1) && /([0-9])\1([^\1]|$)/.test(num2)
}

function trouble(num1, num2) {
  return ((''+num1).match(/(\d)\1\1/g) || [false]).map(x => {
    return !!(''+num2).match(new RegExp(x[0]+'{2}', 'g'));
  }).reduce((x, y) => x || y);
}

// 1043. Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// White - halfQuarterEighth(6) ➞ [3, 1.5, 0.75]
// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]
// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]

const halfQuarterEighth = (n) => {
	return [n/2, n/4, n/8];
}

const halfQuarterEighth = n => [n / 2, n / 4, n / 8];

const halfQuarterEighth = n => [n/2, n/4, n/8];

// 1043. Write a function that divides an array into chunks of size n, where n is the length of each chunk.

// Yellow - chunkify([2, 3, 4, 5], 2) ➞ [[2, 3], [4, 5]]
// chunkify([2, 3, 4, 5, 6], 2) ➞ [[2, 3], [4, 5], [6]]
// chunkify([2, 3, 4, 5, 6, 7], 3) ➞ [[2, 3, 4], [5, 6, 7]]
// chunkify([2, 3, 4, 5, 6, 7], 1) ➞ [[2], [3], [4], [5], [6], [7]]
// chunkify([2, 3, 4, 5, 6, 7], 7) ➞ [[2, 3, 4, 5, 6, 7]]



const chunkify = (arr, size) => {
  const result = [];

  for (let i = 0; i < arr.length; i += size)
    result.push(arr.slice(i, i + size));

  return result;
};

const chunkify = (a, s) => {
	let r = [];
	while(a.length){r.push(a.splice(0, s))};
	return r;
}

function chunkify(arr, size) {
	var z=[];
for(i =0; i< arr.length; i += size){
	z.push(arr.slice(i,i+size));
}
	return z;
}

// 1044. Given an array of users, each defined by an object with the following properties: name, score, reputation create a function that sorts the array to form the correct leaderboard.
// The leaderboard takes into consideration the score of each user of course, but an emphasis is put on their reputation in the community, so to get the trueScore, you should add the reputation multiplied by 2 to the score.
// Once you know the trueScore of each user, sort the array according to it in descending order.


// White - leaderboards([
//   { name: "a", score: 100, reputation: 20 },
//   { name: "b", score: 90, reputation: 40 },
//   { name: "c", score: 110, reputation: 30 },
// ]) ➞ [
//   { name: "c", score: 115, reputation: 30 }, // trueScore = 175
//   { name: "b", score: 90, reputation: 40 },  // trueScore = 170
//   { name: "a", score: 100, reputation: 20 }  // trueScore = 140
// ]

function leaderboards(users) {
	return users.sort((a,b) => (b.score + (b.reputation*2)) - (a.score + (a.reputation*2)))
}

function leaderboards(users) {
	return users.sort((u1, u2) => {
		return (u2.score + u2.reputation * 2) - (u1.score + u1.reputation * 2);
	});
}

function leaderboards(users) {
	return users
		.sort((a, b) => (b.score + b.reputation * 2) - (a.score + a.reputation * 2))
}

// 1045. Given an array of users, each defined by an object with the following properties: name, score, reputation create a function that sorts the array to form the correct leaderboard.

// The leaderboard takes into consideration the score of each user of course, but an emphasis is put on their reputation in the community, so to get the trueScore, you should add the reputation multiplied by 2 to the score.
// Once you know the trueScore of each user, sort the array according to it in descending order.

// leaderboards([
//   { name: "a", score: 100, reputation: 20 },
//   { name: "b", score: 90, reputation: 40 },
//   { name: "c", score: 110, reputation: 30 },
// ]) ➞ [
//   { name: "c", score: 115, reputation: 30 }, // trueScore = 175
//   { name: "b", score: 90, reputation: 40 },  // trueScore = 170
//   { name: "a", score: 100, reputation: 20 }  // trueScore = 140
// ]

function leaderboards(users) {
	return users.sort((a,b) => (b.score + (b.reputation*2)) - (a.score + (a.reputation*2)))
}

function leaderboards(users) {
	return users.sort((a, b)=>(b.score+b.reputation*2)-(a.score+a.reputation*2))
}

// 1046. Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).
// If there are no missing letters in the string, return "No Missing Letter".

// Yellow - missingLetter("abdefg") ➞ "c"
// missingLetter("mnopqs") ➞ "r"
// missingLetter("tuvxyz") ➞ "w"
// missingLetter("ghijklmno") ➞ "No Missing Letter"

function missingLetter(str) {
	for (let i = 1; i < str.length; i++) {
		if (str[i].charCodeAt() - str[i - 1].charCodeAt() !== 1) {
			return String.fromCharCode(str[i - 1].charCodeAt() + 1)
		}
	}
	return 'No Missing Letter'
}

const missingLetter = str => {
	const codes = [...str].map(char => char.charCodeAt());
	const miss = codes.slice(1).find((el, i) => el - 1 !== codes[i]);
	return !miss? "No Missing Letter" : String.fromCharCode(miss - 1);
}

function missingLetter(str) {
	return str.split('').map(e=>e.charCodeAt(0)).filter((e,i,ar)=>e-ar[i+1]==-2).map(e=>String.fromCharCode(e+1))[0]||'No Missing Letter';
}

// 1047. When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

// Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:

// It takes 1 second to switch between pencils.
// It takes 2 seconds to color a square.
// See the example below for clarification.

// color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14

// White - colorPatternTimes(["Blue"]) ➞ 2
// colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11
// colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13

function colorPatternTimes(cols) {
	let count = 0;
	cols.forEach((val, i) => val !== cols[++i] ? count++ : '');
	return (cols.length * 2) + (count - 1);
}

function colorPatternTimes(cl) {
	return cl.length*2 + cl.slice(1).reduce((a,c,i)=>c===cl[i]?a:a+1,0)
}

function colorPatternTimes(cols) {
	return cols.slice(1).filter((x,i)=> x!==cols[i]).length +cols.length*2
}

// 1048. Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology. The machines now interpret a series of consecutive dance moves in place of a PIN number.
// Create a program that converts a customer's PIN number to its dance equivalent. There is one dance move per digit in the PIN number. A list of dance moves is given in the code.

// Yellow - danceConvert("0000") ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]
// danceConvert("3856") ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]
// danceConvert("9999") ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]
// danceConvert("32a1") ➞ "Invalid input."

const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step",  "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceConvert(pin){
	if (pin.length !== 4 || typeof(pin) !== "string" || pin.match(/\D/)) return "Invalid input."
  return pin.split("").map((n, i) => MOVES[((parseInt(n) + parseInt(i)) % 10)])
}

const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];
			 
function danceConvert(pin){
  var result = pin.split('').map((x, i) => MOVES[(parseInt(x) + i) % 10]);
  return result.every(x => !Number.isNaN(x) && x !== undefined) && result.length === 4 ? result : "Invalid input.";
}

// 1049. Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.

// Yellow - textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"
// textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"
// textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"
// textToNumberBinary("zero one zero one zero one zero three") ➞ ""
// textToNumberBinary("one one") ➞ ""

function textToNumberBinary(str) {
  str = str.replace(/one/gi, '1').replace(/zero/gi,'0').match(/[0-1]/g).join('');
  return str.substr(0,str.length - str.length % 8); 
}

function textToNumberBinary(str) {
  var zoStr = str.replace(/zero/ig, "0").replace(/one/ig, "1").replace(/[^0-1]/g, "");
  return zoStr.slice(0, 8*(Math.floor(zoStr.length/8))) || "";
}

const textToNumberBinary = s => {
	let r = "";
	for(w of s.toLowerCase().split(" ")){
		r += w == "one" ? 1 : w == "zero" ? 0 : "";
	}
	let l = r.length;
	return l%8 ? r.slice(0, l-l%8): r;
}

// 1050. You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

// Here are a list of the characters classes in JavaScript:

// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]

// White -  const str = "123 Redding Dr. 1560 Knoxville Ave. 3030 Norwalk Dr. 5 South St."
// ["123 Redding Dr.", "1560 Knoxville Ave", "3030 Norwalk Dr.", "5 South St."]

const REGEXP = /\d+.+?\./g

const REGEXP = /\d+ \w+ \w+\./g

const REGEXP = /\d{1,4} [a-z]+ [a-z]+\./gi

// 1051. If today was Monday, in two days, it would be Wednesday.
// Create a function that takes in an array of days as input and the number of days to increment by. Return an array of days after n number of days has passed.

// White -afterNDays(["Thursday", "Monday"], 4) ➞ ["Monday", "Friday"]
// afterNDays(["Sunday", "Sunday", "Sunday"], 1) ➞ ["Monday", "Monday", "Monday"]
// afterNDays(["Monday", "Tuesday", "Friday"], 1) ➞ ["Tuesday", "Wednesday", "Saturday"]

const afterNDays = (days, n) => {
	let lst = ["Sunday", "Monday", "Tuesday", "Wednesday",
						 "Thursday", "Friday", "Saturday"];
	return days.map(v => lst[(lst.indexOf(v) + n) % 7]);
}

function afterNDays(days, n) {
	let  d = {"Monday":1,
					 "Tuesday":2,
					 "Wednesday":3,
					 "Thursday":4,
					 "Friday":5,
					 "Saturday":6,
					 "Sunday":0};
	return days.map(x => Object.keys(d).find(y => d[y]==(d[x]+n) % 7))
}

function afterNDays(days, n) {
	var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
	return days.map(function(e){
		var i = weekdays.indexOf(e);
		while (n > 7) { n-=7; }
		return i+n>6 ? weekdays[i+n-7] : weekdays[i+n];
	});
}

// 1052. Create a function that takes two numbers as arguments and return the LCM of the two numbers.

// White - lcm(3, 5) ➞ 15
// lcm(14, 28) ➞ 28
// lcm(4, 6) ➞ 12

function lcm(a, b) {
	let num = Math.max(a, b);
	while (num >= Math.max(a, b)) {
		if (num % a === 0 && num % b === 0) {
			return num;
		}
		num++;
	}
}

function lcm(a, b) {
	for(var i = 1; i <= a* b;i++){
		if(i % a == 0 && i % b == 0){
			return i;
		}
	}
}

function lcm(a, b) {
	for(i=Math.max(a,b); i>0; i--) {
		if(!(a % i) && !(b % i))
			return a / i * b
	}
}

// 1053. Your function will get an array with a number sequence. However, one item will be missing. It's your job to find out which one is not in the array.
// To illustrate, given the array [1, 3, 4, 5], 2 is missing so the output must be 2.

// White - missing([1, 3, 4, 5]) ➞ 2
// missing([2, 4, 6, 8, 10, 14, 16]) ➞ 12
// missing([1.5, 2, 3]) ➞ 2.5

function missing(arr) {
	var sum = (arr.length + 1) * (arr[0] + arr[arr.length - 1]) / 2;
	return sum  - arr.reduce((x,y) => x + y);
}

const missing = arr => {
	const r = (arr[arr.length - 1] - arr[0] )/ arr.length;
	let narr = [];
	arr.map((el,i) => el - arr[i - 1] === r ? el : narr.push(el))
	return narr[1] - r
}

const missing = arr => {
	const seq = (arr[arr.length - 1] - arr[0]) / arr.length
	return arr.slice(1).find((el, i) => el - arr[i] !== seq) - seq
}

// 1054. Reject the promise with the simple string "It's not a dog!".

let promise = new Promise( (resolve, reject) => {
  setTimeout(( ) => {
    /* something went wrong */
     reject('oops!')
  }, 1000)
})

// Code 

let promise = new Promise( (resolve) => {
	let animal = "cat"
  setTimeout(() => {
		if(animal === "dog") {
			resolve("It's a dog!")
		} 
	  if(animal !== "dog") {
			/* need something here, you might also need to pass
			something else besides the resolve callback */
		}
  }, 1000)
})
let promise = new Promise( (resolve) => {
	let animal = "cat"
  setTimeout(() => {
		if(animal === "dog") {
			resolve("It's a dog!")
		} 
	  if(animal !== "dog") {
			/* need something here, you might also need to pass
			something else besides the resolve callback */
			reject("It's not a dog!");
		}
  }, 1000)
})

// 1055. Write a regular expression that checks if a string is a valid initial. Valid initials either look like (ex. for Chandler Muriel Bing):

// C. B.
// C. M. B.
// Rules for a valid initial:

// Each letter must be upper case.
// Each letter must be immediately followed by a period.
// There must be exactly one space separating each letter-period pair.
// Leading or trailing whitespaces are valid.

// Yellow -  "C. B." ➞ true

// "    C. B." ➞ true
// Leading and trailing spaces are OK!

// "C. B. k." ➞ false
// One of the initials is lower cased 

// "C B" ➞ false
// Missing a dot to immediately follow. 

// let x = /* Fill in regular expression */

let x = /^ *([A-Z]\.)( [A-Z]\.){1,2} *$/

let x = /^ *[A-Z]\.( [A-Z]\.){1,2} *$/

// 1056. Given a number n, return a sentence which describes the number in the following ways.

// describeNum(13) ➞ "The most brilliant number is 13!"
// 13 is evenly divisble by 1 only

// describeNum(4) ➞ "The most brilliant exciting virtuous number is 4!"
// 4 is evenly divisible by 1, 2 and 4

// describeNum(21) ➞ "The most brilliant fantastic beautiful number is 21!"
// 21 is evenly divisible by 1, 3 and 7

// describeNum(60) ➞ "The most brilliant exciting fantastic virtuous heart-warming tear-jerking inspiring number is 60!"
// 60 is evenly divisible by 1, 2, 3, 4, 5, 6 and 10

function describeNum(n) {
	let arr = ["The most"];
	n % 1 === 0 ? arr.push("brilliant") : null;
	n % 2 === 0 ? arr.push("exciting") : null;
	n % 3 === 0 ? arr.push("fantastic") : null;
	n % 4 === 0 ? arr.push("virtuous") : null;
	n % 5 === 0 ? arr.push("heart-warming") : null;
	n % 6 === 0 ? arr.push("tear-jerking") : null;
	n % 7 === 0 ? arr.push("beautiful") : null;
	n % 8 === 0 ? arr.push("exhilarating") : null;
	n % 9 === 0 ? arr.push("emotional") : null;
	n % 10 === 0 ? arr.push("inspiring") : null;
	arr === arr.push(`number is ${n}!`);
	return arr.join(' ');
}

function describeNum(n) {
  const map = [
    "brilliant",
    "exciting",
    "fantastic",
    "virtuous",
    "heart-warming",
    "tear-jerking",
    "beautiful",
    "exhilarating",
    "emotional",
    "inspiring"
  ];
	return `The most ${[1,2,3,4,5,6,7,8,9,10].map((v, i) => n % v === 0 ? map[i] : null).filter(f => !!f).join(" ")} number is ${n}!`;
}

function describeNum(n) {
	let words= ["no", "brilliant ", "exciting ", "fantastic ", "virtuous ", "heart-warming ", "tear-jerking ", "beautiful ",
		 "exhilarating ", "emotional ","inspiring "]; 
	var result= "The most ";
		for (let i=1; i<words.length; i++) {
			if (n%i===0) {result= result+ words[i];}
			} return result+ "number is "+n+"!";
	}

	// 1057. Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.

	function parent(x) {
		return function closure() {    // Closure is declared here.
			return x
		}
	}
	
	const remember = parent("remembers me")
	// Seems like the variable x would be gone after
	// parent is executed, but it's not.
	
	closure()
	// Returns "remembers me" because the inner
	// function remembers x.


// White - 	const greeting = greetingMaker("Hello")
// greeting("James") ➞ "Hello, James"

function greetingMaker() {
	function closure(name) {
	  return salutation + ", " + name 	
	}
}

// solution 

function greetingMaker(salutation) {
	return function closure(name) {
	  return salutation + ", " + name 	
	}	
}

const greetingMaker = salutation => name => salutation + ", " + name;

// 1058. Create a function that takes an array containing nested arrays as an argument. Each subarray has 2 elements. The first element is the numerator and the second element is the denominator. Return the sum of the fractions rounded to the nearest whole number.

// Yellow - sumFractions([[18, 13], [4, 5]]) ➞ 2
// sumFractions([[36, 4], [22, 60]]) ➞ 9
// sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]) ➞ 11

function sumFractions(list) {
	return Number(list.reduce((t,[a,b])=> t+a/b, 0).toFixed())
}

function sumFractions(lst) {
	return Math.round(lst.map(f => f[0]/f[1]).reduce((a,b) => a+b));
}

function sumFractions(lst) {
	let sum=0;
		for(let i=0;i<lst.length;i++){
			sum+=lst[i][0]/lst[i][1];
		}
		return parseInt(sum)
	}

// 1059. Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.

// White - primeFactorize(25) ➞ [5, 5]
// primeFactorize(19) ➞ [19]
// primeFactorize(77) ➞ [7, 11]

function primeFactorize(num) {
  let factors = [];
  for(let i = 2; i <= num; i++) {
    while(!(num%i)) {
      factors.push(i);
      num /= i;
    }
  }
  return factors;
}

function primeFactorize(num) {
  const result = [];
  let i = 2;
	for (let i = 2; i <= num; i += 1) {
  	if (num % i === 0) {
      result.push(i);
      num /= i;
      i -= 1;
    }
  }
  return result;
}

// 1060. Create a function that converts Celcius to Fahrenheit and vice versa.

// White - convert("35°C") ➞ "95°F"
// convert("19°F") ➞ "-7°C"
// convert("33") ➞ "Error"

function convert(deg) {
	let num = +deg.match(/\-?\d+/).join("");
	let c = '°C', f = '°F';
	if (deg.endsWith(c)){
		num = Math.round(num * 9 / 5 + 32);
		return num + f;
	}else if(deg.endsWith(f)){
		num = Math.round((num - 32) * 5 / 9);
		return num + c;
	}
	return 'Error';
}

function convert(deg) {
	if (deg.endsWith('°C')) {
		return `${Math.round((Number(deg.slice(0, deg.length - 2)) * 9 / 5) + 32)}°F`;
	} else if (deg.endsWith('°F')) {
		return `${Math.round((Number(deg.slice(0, deg.length - 2)) - 32) * 5 / 9)}°C`;
	} else {
		return 'Error'
	}
}

function convert(deg) {
	var res = 'Error'
	if (deg.indexOf('F') > 0) {
		res = Math.round((parseFloat(deg) - 32) / 1.8) + '°C'
	} else if (deg.indexOf('C') > 0) {
		res = Math.round(parseFloat(deg) * 1.8 + 32) + '°F'
	}
	return res
}

const convert = d => (a = d.split`°`)[1] == `C` ?
Math.round(+a[0] * 9 / 5 + 32) + `°F` : a[1] == `F` ?
Math.round((+a[0] - 32) * 5 / 9) + `°C` : `Error`;

// 1061. Given an array of integers arr, implement a function that returns the index of the number nearest to the given value n. If two numbers equally distant from n are found, the function will return the greatest of them.

nearestElement(10, [1, 100, 1000]) ➞ 0
// White - 1 is the number nearest to 10.

nearestElement(50, [100, 49, 51]) ➞ 2
// 49 and 51 are equally distant from 50, with 51 being the greatest.

nearestElement(-20, [-50, -10, -30]) ➞ 1
// -10 and -30 are equally distant from -20, with -10 being the greatest.

function nearestElement(n, arr) {
  const nearest = arr.concat().sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || b - a)[0];
  return arr.indexOf(nearest);
}

function nearestElement(n, arr) {
	let min = Math.min(...arr.map(x=> Math.abs(x-n)))
	let value = Math.max(...arr.filter(x=> Math.abs(x-n)==min))
	return arr.indexOf(value)
}

// 1062. Create a function that, given a string with at least three characters, returns an array of its:

// Length.
// First character.
// Last character.
// Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
// Index of the second occurrence of the second character in the format "@ index #" and "not found" if the second character doesn't occur again.

// White - allAboutStrings("LASA") ➞ [4, "L", "A", "AS", "@ index 3"]
// allAboutStrings("Computer") ➞ [8, "C", "r", "pu", "not found"]
// allAboutStrings("Science") ➞ [7, "S", "e", "e", "@ index 5"]

function allAboutStrings(str) {
	const size= str.length;
	const second= str.indexOf(str[1],2);
	return [size, str[0], 
					str[size-1], 
					size%2==0? str[size/2-1]+str[size/2] : str[Math.ceil(size/2-1)],
					second>-1 ? `@ index ${second}` : "not found"];
}

function allAboutStrings(str) {
	return [str.length,
					str[0],
					str[str.length-1],
					(str.length%2 ? '': str[str.length/2-1]) + str[Math.floor(str.length/2)],
				 	str.indexOf(str[1], 2) == -1 ? `not found` : `@ index ${str.indexOf(str[1], 2)}`];
}

// 1063. Write a function that returns true if every consecutive sequence of ones is followed by a consecutive sequence of zeroes of the same length.

// sameLength("110011100010") ➞ true
// sameLength("101010110") ➞ false
// sameLength("111100001100") ➞ true
// sameLength("111") ➞ false

function sameLength(s) {
	let zeroes = s.match(/0+/g).map(x=>x.length);
	let ones = s.match(/1+/g).map(x=>x.length);
	return (zeroes.length === ones.length) ? zeroes.every((v,i)=> v===ones[i]) : false;
}

function sameLength(s) {
	return JSON.stringify(s.match(/1+/g)) ===
				JSON.stringify(s.match(/0+/g).map(el => el = el.replace(/0/g, '1')));
}

function sameLength(s) {
	const arr = s.match(/(1+|0+)/g);
  return arr.every((a, index) => index % 2 !== 0 ? a.length === arr[index - 1].length: true) && arr.length % 2 === 0;
}

// 1064. Create a function that takes four arrays as arguments and returns a count of the total number of identical arrays.

// countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]) ➞ 2
// countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]) ➞ 0
// countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]) ➞ 3

function countIdenticalArrays(arr1, arr2, arr3, arr4) {
	var originalArr = [arr1,arr2,arr3,arr4].map(x => x.toString())
	var compArr = [...new Set(originalArr)]
	var difference = originalArr.length - compArr.length
	
	return difference === 0 ? 0 : difference + 1
}

function countIdenticalArrays(arr1, arr2, arr3, arr4) {
	let args = Array.from(arguments).map(x => x.join("")),
			set = Array.from(new Set(args)),
			num = set.map(x => args.filter(c => c === x).length),
			max = Math.max(...num);
	return max === 1 ? 0 : max;
}

function countIdenticalArrays(...arr) {
	const uniq = new Set(arr.map(v => v.toString())).size;
	return uniq === 4 ? 0 : 5 - uniq;
}

// 1065. Create a function where given the number n to count down from, and some words str, return a countdown sequence as a string leading up to the words at the end.
// Put a full stop after each number and capitalize and add an exclamation mark to the word. See the examples below for clarification!

// White - countdown(10, "Blast Off") ➞ "10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!"
// countdown(3, "go") ➞ "3. 2. 1. GO!"
// countdown(5, "FIRE") ➞ "5. 4. 3. 2. 1. FIRE!"

function countdown(n, str) {
	var output = ''
	for(var i = n; i > 0; i--){
		output += i + '. '
	}
	return output + str.toUpperCase() + '!'
}

function countdown(n, str) {
	var output = ''
	for(var i = n; i > 0; i--){
		output += i + '. '
	}
	return output + str.toUpperCase() + '!'
}

function countdown(n, str) {
	var nArr = Array.from({length: n}, (v,i) => i+1)
		.map(elem => elem + ".").reverse();

	return nArr.join(" ") + ` ${str.toUpperCase()}!`
}

// 1066. A positive number's population is the number of 1s in its binary representation. An evil number has an even numbered population, whereas an odious number has an odd numbered population. Moreover, a number is pernicious if its population is a prime number.
// Create a function that takes a number as an argument and returns a sorted array of all its descriptors ("Evil", "Odious", or "Pernicious").

// Yellow - howBad(7) ➞ ["Odious", "Pernicious"]
// binary = 111

// howBad(17) ➞ ["Evil", "Pernicious"]
// binary = 10001

// howBad(23) ➞ ["Evil"]
// binary = 10111

function howBad(num) {
	return pop=[...(num >>> 0).toString(2)].filter(x=>x=='1').length,['Evil,Odious,'.repeat(100).split(',')[pop]].concat(pop>=2?Object.keys([...Array(pop)]).slice(2).some(x=>Number.isInteger(pop/x))?null:['Pernicious']:null).filter(Boolean)
}

function howBad(num) {
	const value = num.toString(2).split('')
									 .reduce((a, c) => a + Number(c), 0)
	function isPrime(n) {
		if (n < 2) { return false }
		for (let i=2;i<n;i++) {
			if(n%i === 0) { return false }
		}
		return true
	}
	const result = value % 2 ? ['Odious'] : ['Evil']
	return isPrime(value) ? [...result, 'Pernicious'] : result
}

const isPrime = num => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const howBad = num => {
  const ones = (num.toString(2).match(/1/g) || []).length;
  return [ones % 2 === 0 ? 'Evil' : 'Odious'].concat(
    isPrime(ones) ? 'Pernicious' : []
  );
};

// 1067. Every quadratic curve y = a x² + b x + c has a vertex point: the turning point where the curve stops heading down and starts going up.
// Given the values a, b and c, you need to return the coordinates of the vertex. Return your answers rounded to 2 decimal places.

// Yellow - findVertex(1, 0, 25)  ➞ [0, 25]
// The vertex of y=x²+25 is at (0, 25).

// findVertex(-1, 0, 25) ➞ [0, 25]
// The vertex of y=-x²+25 is at (0, 25).

// findVertex(1, 10, 4) ➞ [-5, -21]
// The vertex of y=x²+10x+4 is at (-5, -21).

function findVertex(a, b, c) {
  let x = -b / (2 * a);
  let y = a * (x * x) + (b * x) + c;
  return [x, y];
}

const findVertex = (a, b, c) => {
  const x = -b / (2 * a);
  return [x, a * Math.pow(x, 2) + b * x + c];
};

// 1067. Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

// White - sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"

function sevenBoom(arr) {
	return arr.join("").includes("7") ? "Boom!" : "there is no 7 in the array";
}

function sevenBoom(arr) {
	return(arr.join().includes(7) ? 'Boom!' : 'there is no 7 in the array')
}

function sevenBoom(arr) {
	return arr
		.join('')
		.split('')
		.includes('7') ? "Boom!" : "there is no 7 in the array"
}

// 1068. In this challenge, you have to find the numeric value of a given word. Instead of the usual sum of Unicode values, you have to convert the whole word into a decimal number from a base equal to ten plus the position in the alphabet of the "highest" letter of the word (counting from a = 1 to z = 26).
// Given a string word, implement a function that returns an integer being the decimal value obtained after the conversion from the word specific base, accordingly to the instructions above.

wordToDecimal("Edabit") ➞ 351010469
// The highest letter of "Edabit" in the alphabet is "T"
// "T" is the 20th letter of the alphabet: adding 10 the result is 30
// "Edabit" in base30 is equal to 351010469 in base10

wordToDecimal("JavaScript") ➞ 680575028284221
// The highest letter of "JavaScript" in the alphabet is "v"
// "v" is the 22th letter of the alphabet: adding 10 the result is 32
// "JavaScript" in base32 is equal to 680575028284221 in base10

const wordToDecimal = word => {
	let base = [...word.toLowerCase()].sort()[word.length - 1];
	return parseInt(word, base.charCodeAt(0) - 86);
}

const wordToDecimal = str => {
	let base = str.toLowerCase().split('').sort()[str.length-1].charCodeAt()-96+10;
	 return parseInt(str, base)
 }

 // 1069. In this challenge, the goal is recomposing scrambled strings made of two or more words.
// Every string has to be reversed not in its totality, but by vowels or consonants clusters in the order they are found; after splitting the string in groups, and reversing every group with more than a letter, you'll obtain the correct sequence:

// String = "KiKdaola"
// Separation vowels/consonants = K  i  Kd  ao  l  a
// Reversing the groups = K  i  dK  oa  l  a
// New string = KidKoala

// String = "KidKoala"

// Result = "Kid Koala"

recompose("KiKdaola") ➞ "Kid Koala"

recompose("BaosdrOCfanada") ➞ "Boards Of Canada"
// B  ao  sdr  O  Cf  a  n  a  d  a
// B  oa  rds  O  fC  a  n  a  d  a

recompose("hCemicarBlohtesr") ➞ "Chemical Brothers"
// hC  e  m  i  c  a  rBl  o  ht  e  sr
// Ch  e  m  i  c  a  lBr  o  th  e  rs

function recompose(string) {
	return string.match(/[aeiou]+|[^aeiou]+/gi)
	  					.map(letters => letters.split("").reverse().join(""))
							.join("")
							.match(/[A-Z][a-z]*/g)
							.join(" ");
}

const recompose = string => {
	return string
		.match(/[aeiou]+|[^aeiou]+/gi)
		.map(v => [...v].reverse().join(""))
		.join("").match(/[A-Z][a-z]+/g).join(" ");
}

function recompose(string) {
	return string.match(/([aeiou])+|([^aeiou])+/gi)
								.map(x=>x.length > 1 ? x.split("").reverse().join(""):x)
								.map((x,i)=>i !==0 ? x.replace(/([A-Z])/g," $1"):x)
								.join("");
}

// 1070. Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// White - oddishOrEvenish(43) ➞ "Oddish"
// oddishOrEvenish(373) ➞ "Oddish"
// oddishOrEvenish(4433) ➞ "Evenish"

function oddishOrEvenish(num) {
	return [...String(num)].map(Number).reduce((a,v) => a + v) % 2 ? 'Oddish' : 'Evenish'
}

function oddishOrEvenish(num) {
	return `${num}`.split('').reduce((a, b)=>a*1+b*1)%2==0?'Evenish':'Oddish'
 }

 // 1071. The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

 // [1, [2, 3]]
// 2 elements, number 1 and array [2, 3]

// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.

// getLength([1, [2, 3]]) ➞ 3
// getLength([1, [2, [3, 4]]]) ➞ 4
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
// getLength([1, [2], 1, [2], 1]) ➞ 5

function getLength(arr) {
	return arr.flat(Infinity).length;
}

function getLength(arr) {
  return arr.length === 0 ? 0 : JSON.stringify(arr).match(/\w/g).length || 0;
}

function getLength(arr) {
	let count = 0;
	arr.forEach(item => {
		if (Array.isArray(item)) {
			count += getLength(item);
		} else {
			count++;
		}
	});
	return count;
}

// 1072. Create a function that takes two dates and returns the number of days between the first and second date.

// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// ) ➞ 6

// getDays(
//   new Date("December 29, 2018"),
//   new Date("January 1, 2019")
// ) ➞ 3

// getDays(
//   new Date("July 20, 2019"),
//   new Date("July 30, 2019")
// ) ➞ 10

function getDays(date1, date2) {
  return Math.ceil((date2 - date1) / 8.64e7);
}

function getDays(date1, date2) {
	return new Date(date2 - date1).getDate() - 1
}

function getDays(date1, date2) {
	return Math.round((date1 - date2) / -86400000)
}

// 1073. Create a function which returns the number of true values there are in an array.

// White - countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

function count_true(lst){
	return lst.filter(function(value){
    return value === true;
	}).length    
}

function count_true(list){
	return list.filter(x => x === true).length;
}

function countTrue(arr) {
	let total = 0;
	arr.map(x => x === true ? total += 1 : x);
	return total;
}

// 1074. Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.

// reversedBinaryInteger(10) ➞ 5
// 10 = 1010 -> 0101 = 5

// reversedBinaryInteger(12) ➞ 3
// 12 = 1100 -> 0011 = 3

// reversedBinaryInteger(25) ➞ 19
// 25 = 11001 -> 10011 = 19

// reversedBinaryInteger(45) ➞ 45
// 45 = 101101 -> 101101 = 45

function reversedBinaryInteger(num) {
	return parseInt(num.toString(2).split('').reverse().join(''), 2);
}

function reversedBinaryInteger(num) {
	return parseInt([...num.toString(2)].reverse().join(''), 2)
}

function reversedBinaryInteger(num) {
	let str = num.toString(2).split("").reverse().join("");
	return Number.parseInt(str, 2);
}
