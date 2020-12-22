/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */
console.log("js file is linked");
/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
// function sayHello() {
//   console.log("hello world");
// }
// sayHello();
/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
// function print(message) {
//   console.log(message);
// }

// print("console.log");

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
// function printMessage(message) {
//   console.log(`Today's message is: ${message}`);
// }

// printMessage("hello world");

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Original Problem - do not modify */
// function (a) {
//   return a ** 2
// }

/** Your Solution */
// function name(a) {
//   return a ** 2;
// }

/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */

// solution found at https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
// function reverseMessage(message) {
//   const splitString = message.split("");
//   const reverseArray = splitString.reverse();
//   const joinArray = reverseArray.join("");

//   console.log(joinArray);
// }

// reverseMessage("Reverse!");

/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */
// function multiply(a,b) {

//   if (isNaN(b)) {
//     console.log(2*a);
//     return (2*a);
//   }
//   console.log(a * b);
// }
// multiply(3,3);

/*
 * Prompt 7:
 *
 * Write a function that is passed an array: ["Casey", "A", "Suresh", "B", "Isha", "A+", "Mike", "C"]
 * and iterates over the array printing out a list of name: grade: for each value in the array.
 *
*/
// myArr = ["Casey", "A", "Suresh", "B", "Isha", "A+", "Mike", "C"];
// function myFunc(inputArray) {
//   for (let i = 0; i < inputArray.length; i++) {
//     if (i % 2 == 0) {
//       console.log(`name: ${inputArray[i]}`);
//       console.log(`grade: ${inputArray[i+1]}`);
//     }
//   }
// }
// myFunc(myArr);

 /*
 * Prompt 8:
 *
 * Write a function that returns an array. The array can be of anything.
 */
function myFunc() {
  return ["hey", "look", "it's", "an", "array"];
}

console.log(myFunc());


/*
 * Prompt 9:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Your Solution */
let sum = 0


/*
 * Prompt 10:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */


/*
 * Prompt 11:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string. (Hint, look up the .split method...)
 */

/*
 * BONUS
 * Write a few functions that 'mimic' a bank account.
 * Have whatever functions you think are necessary (checkBalance, deposit, withdraw, etc)
 * and then create fictional bank account balances that utilize
 * the various functions
*/
