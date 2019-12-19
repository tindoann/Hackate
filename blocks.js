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




