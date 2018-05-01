// Find Unique number in array
// var arr = [1, 3, 3, 3, 3];

// function findUniq(arr) {
//   var x = arr[0];
//   for(i=0; i < arr.length; i++){
//     if( x != arr[1] && arr[1] === arr[2]){
//       return x;
//     } else if (arr[i] != x){
//       return arr[i];
//     }
//   }
// }

// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). 
// Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). 
// Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.
// var array = [[10,0],[3,5],[5,8]];
// var array = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];
// var number = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];
// console.log(array[0][0]);

// function  busStops () {
//   var passengers = 0;
//   for(i=0; i<array.length; i++){
//     // debugger
//     passengers += array[i][0];
//     passengers -= array[i][1];
//   }
//   return passengers
// }

// Make string upper case
// var str = 'hello'
// function makeUpperCase(str) {
//   var sol = str.toUpperCase();
//   return sol;
// }

// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// function bmi(w, h) {
//   var bmi = (w/(h*h));
//   if (bmi <= 18.5){
//     return "Underweight"
//   } else if (bmi <= 25.0){
//     return "Normal"
//   } else if (bmi <= 30.0){
//     return "Overweight"
//   } else {
//     return "Obese"
//   }
// }

// Your online store likes to give out coupons for special occasions. 
// Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Your mission: 
// Write a function called checkCoupon to verify that a coupon is valid and not expired. 
// If the coupon is good, return true. Otherwise, return false.
// A coupon expires at the END of the expiration date. 
// All dates will be passed in as strings in this format: "June 15, 2014"


// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   var cd = Date.parse(currentDate);
//   var ed = Date.parse(expirationDate);
//   if (enteredCode === correctCode && cd <= ed){
//     return true;
//   } else {
//     return false;
//   }
// }

// converting a string to a number
// var stringToNumber = function(str){
//    var s = parseInt(str)
//   return s;
// }

// Testing football first downs	


// function chains(down, distance, yards_gained) {
//   if (yards_gained < distance && down === 4){
//   	return "Turnover on downs"
//   } else if (down ===1 && yards_gained < distance){
//   	return [(down+1)+ "nd and " +(distance-yards_gained)].toString();
//   } else if ( down === 2 && yards_gained < distance){
// 	return [(down+1)+ "rd and " +(distance-yards_gained)].toString();
//   }	else if ( down === 3 && yards_gained < distance){
// 	return [(down+1)+ "th and " +(distance-yards_gained)].toString();
//   } else if (yards_gained >= distance){
//   	return "First down";
//   } 
// }

// Add the value of an array
// test = [1, 1, 3, 1];
// // expected anser 6
// var sum = 0;

// function add(x){
// 	for(i=0; i<x.length; i++) {
// 		sum += x[i];
// 	} 
// 	console.log(sum)
// }

// // Add the value of an array nested in an object
// var obj = {
//     name: 'torture',
//     miniObj: {
//         name: 'Minitorture',
//         array: [{
//             numbers: [['a', 'b', 'c'], [1,2,3,4,5,6,7,8,9],             ['fun']]
//         }]
//     }
// }
// // expected answer 45

// var x = obj.miniObj.array[0].numbers[1];
// var sum = 0;

// function addObj(x){
// 	for( i=0; i<x.length;i++){
// 		sum += x[i];
// 	}
// 	console.log(sum)
// }

//  write a function that takes an array as an argument and 
// returns the highest number of this array

// var test3 = [5000, 4]
// var test2 = [70, 80, 900, 700]
// var test = [1, 3, 2, 7, 15, 9, 11]; 
// var test4 = [-33, -44, -55, 6]

// function largest (x){
// 	// set variable to first number in an array
// 	num = x[0];
// 	// for loop through the argument
// 	for (i=0; i<x.length;i++){
// 		// if current number in loop is greater than the first number in array, set that as the new number thus the highest.
// 		if(x[i]>num){
// 			num = x[i];
// 		}
// 	}
// 	console.log(num);
// }

// / 1.  Write a function that takes an array of numbers and creates a new array with 
// only the even numbers from the first array. For instance, 
// if you pass your function an array of [1, 3, 4, 6, 9], your function should return [4, 6].

// var test = [1, 3, 4, 6, 9];
// var arr = [];

// function findEven(x){
// 	for (i=0; i<x.length;i++){
// 		if (x[i]%2 === 0){
// 			arr.push(x[i]);
// 		}
// 	}
// 	console.log(arr);
// }


// 2.  Write a program that prints the numbers from 1 to 100. 
// For multiples of three print “Rick” instead of the number and for the multiples of five print “Roll”. 
// For numbers which are multiples of both three and five print "RickRoll".

// No argument needed
// function rickRoll(){
// 	// Call rickRoll, starting with the phrase RickRoll as 0, and console log number 1-100
// 	for(i=0; i<101;i++){
// 		if (i%3 === 0 && i%5 === 0){
// 			console.log("RickRoll")
// 		} else if ( i%3 === 0){
// 			console.log("Rick")
// 		} else if (i%5 === 0){
// 			console.log("Roll")
// 		} else {
// 			console.log(i)
// 		}
// 	}
// }

// 1. write a function that takes an array of names and returns a whole string of these names with comma and the word 'and' before the last name;
// ["John", "George", "James", "Anna"] ---> "John, George, James, and Anna";

// var names = ["John", "George", "James", "Anna"];

// function addAnd(x){
// 	// set last name in array to variable
// 	var replace = x[x.length-1];
// 	// take off the last name in the array
// 	x.splice(-1,1)
// 	// add "and" and the last name in the array" to the last spot in the array
//   	x.push("and " + replace);
//   	// join the values of the array into one string but separate with a comma
//   	x = x.join(', ');
//   	return x;
// }

// a) Write a method that gives you the sum of all numbers that are mulitpliers of 3 and 4 under 1000

// var result = 0;
// // expected result with 30 is 36

// function under(){
// 	// for loop going up to 1000
// 	for(i=0; i<=1000;i++){
// 		// find numbers both divisble by 3 and 4,
// 		if(i%3 === 0 && i%4 === 0){
// 			// add those numbers to blank results array
// 			result += i; 
// 		}
// 	}
// 	console.log(result);
// }

// b) Write a function that takes in one parameter "length" and prints out that many stars - example:
//  3 --> ***
//  5 --> *****

// function star(x){
// 	// set result to an empty quote
// 	var result="";
// 	// for loop through the value of the argument
// 	for(i=0; i<x; i++){
// 		// add a * for every loop through
// 		result += '*';
// 	}
// 	return result;
// }

// d) Write a function that takes a number and gives the factorial of this number. Example:
// 5 -> 120
// 6 - 720

// function factorial(x){
// 	if (x < 0){
// 		return -1;
// 	} else if (x === 0 ){
// 		return 1;
// 	} else {
// 		return (x * factorial(x-1));
// 	}
// }

// 1. Write a function (try to use filter function in JS) that fiters only the positive odd numbers from an array. For example,
// array = [1,2,3,-5,-6,-7,4] -> [1,3]
// var array = [1,2,3,-5,-6,-7,4,222, 333, -400, -455];  /*[1,3,33]*/
// var solution = [];

// function findPosOdd(x){
// 	for(i=0; i<x.length; i++){
// 		if(x[i] > 0 && x[i]%2 != 0){
// 			solution.push(x[i])
// 		}
// 	}
// 	return solution;
// }


// Palindrome
// string = "racecar"

// function palindrome(x){
// 	// break the string into individual letters, reverse them, join them into one string.
// 	var a = x.split("").reverse().join('')
// 	// compare the result to the original value
// 	if(a === string){
// 		console.log(a + ' is a palindrome!')
// 	} else{
// 		console.log(a + ' is not a palindrome!')
// 	}
// }

// Write a function that prints all the numbers from 1 to 100; if a number is divisible by 7 add the line 'this is divisible by 7'.
// function divis7(){
// 	for(i=0; i<=100; i++){
// 		if(i%7 === 0){
// 			console.log(i + " is divisible by 7")
// 		} else {
// 			console.log(i);
// 		}
// 	}
// }

// 1. Write a function that takes an array as an argument and returns the array in reverse order e.g.
// [2,3,4,5,6,7]  ----> [7, 6, 5, 4, 3, 2]

// var array1 = [2,3,4,5,6,7]

// function reverse(x){
// 	// set variable to reverse of the argument.reverse
// 	y = x.reverse();
// 	console.log(y);
// }

// 1. given a string, create a function that returns the last character in that string. In JS
// examples:
// "morning" --> g
// "winter" --> r

// var morn = 'morning';
// var wint = 'winter';
// var blank = [];

// function lastLetter(x){
// 	// split the string to a blank array
// 	blank=x.split('');
// 	// remove the last value in the array
// 	ans=blank.pop()
// 	return ans;
// }


// 2. given two arrays that contain integers with no duplicates, create a function that determines
// whether they contain the exact same elements.
// examples:
//  [1, 2, 3], [3, 2, 1] --> true
//  [1, 2, 3], [2, 3, 4] --> false


// a = [1,2,3];
// b = [3,2,1];

// c = [3,4,5]
// d = [1,2,3]

// function compare(x,y){
// 	num1 = x.sort().join('');
// 	num2 = y.sort().join('');
// 	if (num1 === num2){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }

// 3. write a function that takes in a math operator as a string followed by two parameters, x and y, then
//  return the result of that math operation applied to the two parameters.
//  examples:
//  math("*", 2, 3) ---> 6
//  math("+", 4, 5) ---> 9

//  math("/", 5, 5) ---> 1

//  math("*", 4, 5) ---> 20


// function math(a, b, c){
// 	if ( a == "*"){
// 		return b * c
// 	}
// 	else if ( a == "+"){
// 		return b + c
// 	}
// 	else if ( a == "-"){
// 		return b - c
// 	}
// 	else if (a == "/"){
// 		return b/c
// 	}
// }

// 2.  Write a function that takes in an array of strings and returns all of them
// concatenated together. You may not use any String functions.
// example:
// ["abra", "cadabra"] returns "abracadabra"
// ["a", "b", "c"] returns "abc"
// var abra = ["abra", "cadabra"]
// var letters = ["a","b","c"]
// var solution = '';

// function joiner (x){
// 	for (i = 0; i < x.length; i++){
// 		solution+=x[i]
// 	}
// 	return solution
// }

// var arr = [1,2,3]
// result = 0;

// function add (x){
// 	for (i=0;i<x.length;i++){
// 		result += x[i];
// 	}
// 	return result
// }

// write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'. the string should start with a 1. a string with size 6 should return :'101010'. with size 4 should return : '1010'. with size 12 should return : '101010101010'. The size will always be positive and will only use whole numbers.

// var solution='';

// function stringy(x){
// 	for(i=0; i<x; i++){
// 		if (i%2 !== 1){
// 			solution += "1"
// 		} else if (i%2 === 1){
// 			solution += "0"
// 		}
// 	}
// 	return solution
// }

// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.

// var solution = [];
// function maxMultiple(a, b){
//   for(i=1; i<=b; i++){
//   	c = a*[i]
//   	console.log(c)
//   	if (a>b){
//   		return 0;
//   	} else if(c < b || c == b){
//   		solution.push(c);
//   	}
//   }
// return solution.pop(); 
// }


// Given two numbers x and n, calculate the (positive) nth root of x.

// function root(x, n) {
//   return Math.pow(x, 1/n);
// }

// find smallest integer
// arr = [78,56,8,232,12,]

// function smallest (arr){
// 	small = arr[0];
// 	for (i=0; i<arr.length;i++){
// 		if(arr[i]<small){
// 			small = arr[i];
// 		}
// 	}
// 	return small;
// }

// twoOldestAges( [1, 2, 10, 8] )  should return [8, 10]
// 1,5,87,45,8,8 should return 45,87
// arr = [87,1,5,45,8,8]
// sol = [,]
// function oldest(arr){
// 	if(arr[0]>arr[1]){
// 		sol[0]=arr[1];
// 		sol[1]=arr[0];
// 	} else if (arr[1]>arr[0]){
// 		sol[0]=arr[0];
// 		sol[1]=arr[1];
// 	} for (i=2;i<arr.length;i++){
// 		if(arr[i]<sol[1] && arr[i]>sol[0]){
// 			sol[0]=arr[i];
// 		} else if (arr[i]>sol[1] && arr[i]>sol[0]){
// 			sol[0]=sol[1];
// 			sol[1]=arr[i];
// 		}
// 	}
// 	return sol;
// }


// arr = [-8,0,2,5];


// function indexEqualsValueSearch(arr) {
// 	var sol;
// 	for (i=0; i< arr.length; i++){
//   		if(arr[i]==i){
//   			sol = i;
//   			break;
//   		} else {
//   			sol = -1;
//   		}
// 	}
// 	return sol;
// }

// The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he made a mistake. Could you help him?
// if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149

// The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.
// Should the last donation be a non positive number (<= 0) John wants us to throw an error
// (return Nothing in Haskell, return None in F# and Ocaml, return -1 in C, Fortran, Nim, echo ERRORin Shell)
// so that he clearly sees that his expectations are not great enough.
// Notes:
// all donations are numbers (integers or floats depending on the language), arr can be empty.
// See examples below to see which error is to be thrown.

// arr = [14, 30, 5, 7, 9, 11, 15]
// newavg = 30

// function newAvg(arr, newavg) {
//   sum = 0;
//   donors = arr.length +1;
//     for(i=0; i < arr.length; i++){
//       sum += arr[i];
//     }
//     var needed = ((donors)*(newavg));
//     sol = ((needed)-(sum));
//     if (sol <= 0){
//       return ERROR
//     } else {
//     return Math.ceil(sol);
//   }
// }


// Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: The numeric values represent the occurance of each letter preceding that numeric value. There should be no numeric characters in the final string. Empty strings should return an empty string.

// The first occurance of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.

// stringExpansion('3D2a5d2f') === 'DDDaadddddff'
// stringExpansion('3abc') === 'aaabbbccc'      // correct
// stringExpansion('3abc') !== 'aaabc'          // wrong
// stringExpansion('3abc') !== 'abcabcabc'      // wrong
// If there are two consecutive numeric characters the first one is ignored.

// stringExpansion('3d332f2a') === 'dddffaa'
// If there are two consecutive alphabetic characters then the first character has no effect on the one after it.

// stringExpansion('abcde') === 'abcde'
// Your code should be able to work for both lower and capital case letters.

// stringExpansion('') === ''

// var s = '3az4B2d'
// var s = 'a2bcde'

// function stringExpansion(s) {
// 	// set a blank string
// 	var result="";
// 	for(i=0; i< s.length; i++){
// 		// if s[i] is
// 		// console.log(!isNaN(s[i]))
// 		if (!isNaN(s[i]) == true && !isNaN(s[i+1]) == false){
// 			x = s[i+1].repeat(s[i])
// 			// console.log(x)
// 			result += x
// 		} else if (!isNaN(s[i]) == false && !isNaN(s[i+1]) == true){
// 			z = s[i]
// 			result += z
// 		}
// 	}
// 	return result
// }

// function doris(i){
// 	// for(i=0;i<=100; i++){
// 		if (i%2 !== 0){
// 			console.log(i +'weird')
// 		} else if (i%2 === 0 && i>=2 && i<=5){
// 			console.log(i +'Not weird')
// 		} else if (i%2 === 0 && i>=6 && i<=20){
// 			console.log(i +'Weird')
// 		}else if (i%2 === 0 && i>20){
// 			console.log(i + 'Not Weird')
// 		}
// 	// }
// }

// var array = [[10,0],[3,5],[5,8]]
// 5
// var array = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]
// 17
// var array =[[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]
// // 21
// var passengersOn = [];
// var passengersOff = [];
// var on = 0;
// var off = 0;

// function  busStops (array) {
//  	for(i=0; i<array.length; i++){
//     	passengersOn.push((array[i][0]))
//     	passengersOff.push((array[i][1]))
// 	}
//     for(j=0; j<passengersOn.length; j++){
//     	// console.log(passengersOn[j])
//     	on += passengersOn[j];
//     	// console.log(on)
//     }
//      for(k=0; k<passengersOff.length; k++){
//     	// console.log(passengersOn[j])
//     	off += passengersOff[k];
//     	// console.log(off)
//     }
//   return on-off
// }

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// haystack = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

// function findNeedle(haystack) {
// 	for (i=0; i<haystack.length; i++){
//   		if (haystack[i] === 'needle'){
//     		return ("Found the needle at position " + [i]);
//   		}
// 	}
// }


// answer = []
// expected [1,2,4]

// function powersOfTwo(n){
// 	var answers = [];
// 	for(var i=0; i<= n; i++){
// 		answers.push(Math.pow(2, i));
// 	}
// 	return answers
// }

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// str = "xxOo"
// function XO(str) {
// 	xs = []
// 	os = []
// 	string = str.split('');
// 	for(i=0;i<string.length; i++){
// 		if(string[i] == 'X' || string[i] == 'x'){
//   			xs.push(string[i])
// 		} else if (string[i] == 'O' || string[i] == 'o'){
// 			os.push(string[i])
// 		}
//  	} if (xs.length == os.length){
//   		return true
//  	} else {
//   		return false
//   	}
// }

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// More generally given parameters:
// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)
// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

p0 = 1500
percent = 5
aug = 100
p = 5000

// function nbYear(p0, percent, aug, p) {
//     var currPop = p0;
//     Year = 0;
//     while(currPop < p){ 
//     	Year++; 
//     	currPop = currPop + (currPop * (percent/100)) + aug; 
//     }
//     return Year
// }

function nbYear(p0, percent, aug, p) {
	for(i=0; p0<p;i++){
		p0 = p0+(p0*(percent/100))+aug;
	}
	return i
}


// week = [[100,75,49],[20,15,20],[10,15,10],[50,50,20],[20,15,10],[20,15,10],[20,15,10],1]

// console.log(week[week.length-1])
// // iron = 0;
// // steel = 0;
// // chrom = 0;
// function deathStar(week){
// 	iron = 0;
// 	steel = 0;
// 	chrom = 0;
// 	for(i=0; i<(week[week.length-1]); i++){
// 		iron += week[i][0];
// 		steel += week[i][1];
// 		chrom += week[i][2];
// 	} if (iron > 100 && steel > 75 && chrom >50){
// 		return "The station is completed!"
// 	} else {
// 		return ("The station is destroyed! It needed " + (100-iron) + " iron, " + (75-steel) + " steel and " + (50-chrom) + " chromium for completion.")
// 	}
// }