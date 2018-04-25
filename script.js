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
//   var bmi = (w/(h^2));
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

function star(x){
	// set result to an empty quote
	var result="";
	// for loop through the value of the argument
	for(i=0; i<x; i++){
		// add a * for every loop through
		result += '*';
	}
	return result;
}
