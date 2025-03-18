// product name,description,rating price ,discount (boolean)

// const product ={
//     Product : "Iphone",
//     Description : " Brand new smart phone with AI",
//     Rating: 4.5,
//     Price : 89999,
//     Discount : false
// }
// console.log(product);
// console.log(typeof(product));

// 
// 1. Create an object using a constructor function and log all key-value pairs.
//    Define a constructor function named 'Employee' that takes three parameters: 'name', 'position', and 'salary'.    Use 'this' to assign these values to the object. Then, create an instance of 'Employee' and use a 'for...in' loop    to log each key and value in the console.
// 

// function Employee(name,position,salary){
//     this.name = name,
//     this.position = position,
//     this.salary = salary
// }
// const employee = new Employee("Niloy","Intern","1000")

// // console.log(employee)
// for (let key in employee) {
//     console.log(`${key}: ${employee[key]}`);
//   }
  

// Get user to input a number using prompt("Enter a number"). Check if the number is multiple of 7 or not.

// let num = parseFloat(prompt("Enter a Number"));

// if(num % 7 == 0){
//         console.log(num,"is multiple of 7")
//     }else{
//         console.log(num,"is not multiple of 7 ")
//     }
//Write a code which can give grades to students according to their scores.
// 80-100 - A
// 70-79 - B
// 60-69 -C
// 50-59 -D
// 0-49 - F

// let grade = parseFloat(prompt("Enter your grades percent!"));
// if(grade>=80 && grade<=100){
//     console.log("you have got A grade");
// }else if(grade>=70 && grade<=79){
//     console.log("you have got B grade");
// }else if(grade>=60 && grade<=69){
//     console.log("You have got C grade");
// }else if(grade>=50 && grade<=59){
//     console.log("You have got D grade");   
// }else if(grade>=0 && grade<=49){
//     console.log("Sorry!!You have failed the exam");
// }else{
//     console.log(grade,"is invalid!! check again a try.");
// }

// for (let i=1; i<=10 ;i++){
//     console.log(i=i+1);
// }







// 1. Write a program to print the first 10 numbers of the Fibonacci sequence using a loop.

    // let a = 0 , b = 1 ;
    // console.log(a);
    // console.log(b);

    // for(let i =0 ; i<=10 ; i++){
    //     let temp = a+b;
    //     console.log(temp);
    //     a = b;
    //     b = temp;
    // }


    // 2. Write a function that takes an array as input and returns the sum of all even numbers using a for...of loop.

    
//     let num =prompt("Enter number of element you want to add in array");
//     let arr = [];
//     for(let i = 1 ; i<=num ; i++ ) {
//         arr.push(prompt("Enter the element"));
//     }
//     console.log(arr);

//     sum =0;
//     for(let i = 0 ; i<arr.length; i++){
//         if(i % 2 == 0){
//         sum += i;
//     }
// }
//     console.log(sum);

// 3. Implement a program that finds the largest number in an array using a for loop.
// let num =prompt("Enter number of element you want to add in array");
//     let arr = [];
//     for(let i = 1 ; i<=num ; i++ ) {
//         arr.push(prompt("Enter the element"));
//     }
//     console.log(arr);

//     maximum = arr[0];

//     for(let i = 0 ; i<arr.length ; i++){
//         if(arr[i]>maximum){
//             maximum = arr[i];
//         }
//     }
//     console.log("The largest number in the array is",maximum);

// 4. Write a program to reverse a string using a for loop.

// let str = prompt("Enter a string");
// let rev = "";
// for(let i = str.length -1 ; i>=0 ; i--){
//     rev += str[i];
// }
// console.log(rev);

// 5. Create a program that prints numbers from 1 to 100, but for multiples of 3, print 'Fizz' and for multiples of 5, print 'Buzz'. For numbers which are multiples of both 3 and 5, print 'FizzBuzz'.
// for (i = 1 ; i<=100 ; i++){
//     if (i % 3 == 0 && i % 5 ==0){
//         console.log("FizzBuzz");
//     }
//     else if(i % 3 ==0){
//         console.log("Fizz");
//     }
//     else if(i % 5 ==0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }   
// }

// 6. Write a program that calculates the factorial of a given number using a while loop.
//  let num = prompt("Enter a number");
// let fact = 1;
//     while(num>1){
//         fact *= num;
//         num--;
//     }
//     console.log(fact);

// 7. Implement a program that checks if a number is prime using a for loop and conditional operators.
// let num = prompt("Enter a number");
// if(num < 2){
//     console.log("Not a prime number");
// }
// else if(num ==2){
//     console.log("Prime number");
// }
// else{
// for(let i = 2; i<Math.sqrt(num); i++){
//     if(num % i != 0){
//         console.log("Not a prime number");
//     }else{
//         console.log("Prime number");
//     }
// }
// }

// 8. Create a function that takes an array and a target number, and returns whether the target exists in the array using a for loop.


// for taking the array 

// function for  array target 

// function containsTarget(arr, target){
//     for(let i = 0 ; i<=arr.lenght  ; i++){
//         if(arr[i] === target){
//             console.log("The target number is in the array");
//             break;
//         }
//         else{
//             console.log("The target number is not in the array");
//          }
//     }
// }
// // let num =prompt("Enter number of element you want to add in array");
// // let array = [];
// //     for(let i = 1 ; i<=num ; i++ ) {
// //         array.push(prompt("Enter the element"));
// //     }
// // let targetno = prompt("Enter the target number");
// let a = prompt("Enter the no");
// let result = containsTarget([5,6,56,6,5,4], a);
// console.log(result);


// 9. Write a program to generate the multiplication table of a given number using a for loop


// function multiplicationTable(num){
//     for(let i= 1; i<=10 ; i++){
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }
// let no = prompt("Enter a number");
// multiplicationTable(no);

// 10. Implement a function that removes duplicate elements from an array using a loop.


// function duplicationofarray(arr){
//     let unique =[];
//     for(let i = 0 ; i<arr.length ; i++){
//         if(!unique.includes(arr[i])){
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// let num =prompt("Enter number of element you want to add in array");
// let array = [];
//     for(let i = 1 ; i<=num ; i++ ) {
//         array.push(prompt("Enter the element"));
//     }
// console.log(duplicationofarray(array));

// 11. Write a program that counts the number of vowels in a given string using a for...of loop.

function countVowels(str) {
let vowel="aeiouAEIOU";
let count = 0;

for(char of str){
    if(vowel.includes(char)){
        count++;
    }
}
return count;
}

let str = prompt("Enter a string");
console.log(countVowels(str));


// 12. Write a function that takes a number and prints if it is positive, negative, or zero using conditional operators.

// function checkNumber(num){
//     if (num >0){
//         comnsole.log(num,"is apositive number");
//     }
//     if(num < 0){
//         console.log(num,"is a negetive number");
//     }
//     if(num == 0){
//         console.log(num,"is zero");
//     }
// }

// let number = prompt(parseInt("Enter a number"));
// checkNumber(number);


// 13. Implement a switch case statement that takes a day number (1-7) and prints the corresponding day of the week.

// function dayOfWeek(day){
//     let input = prompt(parseInt("Enter a day number"));
//     day = parseInt(input);
//     switch(day){
//         case 1:
//             console.log("Sunday");
//             break;
//         case 2:
//             console.log("Monday");
//             break;
//         case 3:
//             console.log("Tuesday");
//             break;
//         case 4:
//             console.log("Wednesday");
//             break;
//         case 5:
//             console.log("Thursday");
//             break;
//         case 6:
//             console.log("Friday");
//             break;
//         case 7:
//             console.log("Saturday");
//             break;
//         default:
//             console.log("Invalid day");
//     }
// }

// dayOfWeek();

// 14. Create a program that finds the second largest element in an array using loops and conditional operators.

// function findsecondlargest(arr){
//     if(arr.length < 2){
//         return " atleast type 2 elements";
//     }

//     let largest = -Infinity;
//     let secondLargest = -Infinity;

//     for(let i = 0 ; i < arr.length ; i++){
//        if(arr[i] > largest){
//               secondLargest = largest;
//               largest = arr[i];
//        }
//        else if(arr[i] > secondLargest && arr[i] != largest){
//            secondLargest = arr[i];
//        }
//     }
//     return secondLargest === -Infinity ? "No second largest element." : secondLargest;

// }

// let num =prompt("Enter number of element you want to add in array");    
// let array = [];
//     for(let i = 1 ; i<=num ; i++ ) {
//         array.push(prompt("Enter the element"));
//     }
// console.log(findsecondlargest(array));


// 15. Write a program that takes an integer input and prints whether it is a palindrome using loops.