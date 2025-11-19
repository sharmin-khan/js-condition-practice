// 1. Write a program to check whether a number is even or odd.
// let number = 7;
// if (number % 2 === 0){
//     console.log("Even Number")
// }
// else{
//     console.log("Odd Number")
// }

// // 2. Check whether a given number is positive, negative, or zero.
// let number = -3;
// if (number > 0) {
//   console.log("Number is positive");
// } else if (number < 0) {
//   console.log("Number is Negative");
// } else {
//   console.log("Zero");
// }

// // 3. If age is 18 or above, print "You can vote"; otherwise, print "You cannot vote."
// let age = 16;
// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("You cannot vote");
// }

// // 4. Find the largest of three numbers.
// let a = 5;
// let b = 10;
// let c = 3;
// if (a > b) {
//   console.log("a is Largest");
// } else if (b > c) {
//   console.log("b is Largest");
// } else {
//   console, log("c is largest");
// }
// // 5.Print the grade based on marks: 80 and above → A, 60–79 → B,40–59 → C, Below 40 → F
// let marks = 72;
// if(marks >= 80){
//     console.log("Grade A");
// }
// else if(marks >= 60){
//     console.log('Grade B');
// }
// else if(marks >= 40){
//     console.log("Grade C");
// }
// else{
//     console.log("Grade F")
// }

// //squre of number
// let numbers =[1,2,3];
// let squares = numbers.map(num=>num*num)
// console.log(squares);

//odd even in num
// let number = 4
// console.log(number%2===0 ? "Even":"odd");
// //odd r even arr
// let num =[1,2,3,4,5,5,6]
// let resut =num.filter(num=>num%2!==0)
// console.log(resut);

//print all elements
// let numbers = [1,2,3,4,5]
// numbers.forEach(num =>{
//   console.log(num);
// })

// //palindrome
// let string = "level"
// let reversed = string.split().reverse().join('')
// if(string === reversed){
//   console.log("palindrom");
// }
// else{
//   console.log("not palindrom");
// }

//number plaindrome
let number = 2344;
let strNum= number.toString();
let reversedNumber= strNum.split("").reverse('').join("");
if(strNum === reversedNumber){
  console.log("palindrom");
}
else{
  console.log("not palindrom");
}
