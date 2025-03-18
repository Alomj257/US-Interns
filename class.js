// const product={
// name:"samsung",
// moddel:"12pro",
// price: 120000,
// discount:false   
    
// }
// console.log(product)
// console.log(typeof(product))
//  console.log(typeof(product.name))


// function employee(name,position,salary) {
//  this.name = name,
//  this.position = position,   
//  this.salary  = salary
// }

// const Employee = new employee("saugata","intern",2000)
// console.log(Employee)


// Get user to input a number using prompt("Enter a number"). Check if the number is multiple of 7 or not.
//Write a code which can give grades to students according to their scores.
// 80-100 - A
// 70-79 - B
// 60-69 -C
// 50-59 -D
// 0-49 - F

// 1st 
// console.log("hi")
// let num = parseFloat(prompt("Enter a number"));

// if (num % 7 == 0) {
//     console.log(num, "is a multiple of 7");
// } else {
//     console.log(num, "is not a multiple of 7");
// }

// // 2nd 


// let grades = parseFloat(prompt("Enter your percent!"));
// if(grades>=80 && grades<=100){
//     console.log("you got A grades");
// }else if(grades>=70 && grades<=79){
//     console.log("you got B grades");
// }else if(grades>=60 && grades<=69){
//     console.log("You got C grades");
// }else if(grades>=50 && grades<=59){
//     console.log("You got D grades");   
// }else if(grades>=0 && grades<=49){
//     console.log("failed!! try harder");
// }else{
//     console.log(grades," invalid!! please check your grades and try again");
// }

// 3rd 

// Create an object using 'Object.create()', add a method, and override a property.
//    Define an object 'vehiclePrototype' with properties:    - 'type': 'Unknown'    - 'start()': A method that logs 
//    'Vehicle is starting'  Create a new object 'myBike' from 'vehiclePrototype' using 'Object.create()', then:  
// - Override the 'type' property with 'Bike'    - Add a new property 'brand' with any value  
//            - Log the entire 'myBike' object    - Call the 'start()' method from the prototype.



// const vehiclePrototype = {
//     type: 'Unknown',
//     start: function() {
//         console.log('Vehicle is starting');
//     }
// };
// const myBike = Object.create(vehiclePrototype);
// myBike.type = 'Bike';
// myBike.brand = 'Yamaha';
// console.log(myBike);
// myBike.start();


// // 4th 
//  Create a nested object and log a deeply nested value. Create an object 'company' that includes properties like 'name',
//   'location', and 'departments'.    Inside 'departments', include nested objects for 'engineering' and 'marketing',
//    each having properties for    'teamLead' and 'employees'. Write a script to log only the name of the engineering team lead in the console


//    const company = {
//     name 

//    }

// console.log("hi")



// 1. Write a program to print the first 10 numbers of the Fibonacci sequence using a loop. javascript

// let a = 0, b = 1;
// console.log(a);
// console.log(b);
// for (let i=0;i<=10;i++){
//     let temp = a + b;                                        
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

// let num = parseInt(prompt("Enter a number"));

// if (num < 2) {
//     console.log("Not a prime number");
// } else {
//     let isPrime = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             isPrime = false;
//             break; // Exit the loop if a divisor is found
//         }
//     }
//     if (isPrime) {
//         console.log("Prime number");
//     } else {
//         console.log("Not a prime number");
//     }
// }

// 8. Create a function that takes an array and a target number, and returns whether the target exists in the array using a for loop.

// function findTarget(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return true; // Found the target
//         }
//     }
//     return false; // Target not found
// }
// let noarray = prompt("enter the no of elements")
// let array = []
// for ( let i= 1; i<=noarray ; i++){
//     array.push(prompt("enter the elements"));
//     // return array;
// }
// let targetnum = prompt(parseInt("Enter the no u want to target"))
// console.log(array);
// findTarget(array,targetnum);


// 9. Write a program to generate the multiplication table of a given number using a for loop


// function multiplicationTable(num){
//     for(let i= 1; i<=10 ; i++){
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }
// let no = prompt("Enter the number");
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
// let num =prompt("Enter no. of element you want to add in array");
// let array = [];
//     for(let i = 1 ; i<=num ; i++ ) {
//         array.push(prompt("Enter the element"));
//     }
// console.log(duplicationofarray(array));

// 11 .Write a program that counts the number of vowels in a given string using a for...of loop

// function countVowels(str) {
// let vowel="aeiouAEIOU";
// let count = 0;

// for(char of str){
//     if(vowel.includes(char)){
//         count++;
//     }
// }
// return count;
// }

// let str = prompt("Enter a string");
// console.log(countVowels(str));


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

// 14. Create a program that finds the second largest element in an array using loops and conditional operators



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



// 15. Write a program that takes an integer input and prints whether it is a palindrome using loops.

// const findPlaindrom = (n) => {
//     let strN = n.toString();
//     let revN = '';
//     for(let i = strN.length-1 ; i>=0; i--){
//         revN = revN + strN.charAt(i);
//     }

//     // revN = strN.split('').reverse().join)('');
//     return strN === revN
// }

// let n = parseFloat(prompt("Enter number"))
// let result = findPlaindrom(n)
// console.log(result);

// 16.  Implement a function that sorts an array in ascending order using nested loops.


// function bubbleSort(arr){
//     let n = arr.length;
//     for(let i = 0 ; i<n-1 ; i++){
//         for(let j =0; j<n-1-i ; j++){
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// let num = prompt("Enter number of elements you want to add in array");
// let array = [];
// for(let i = 0 ; i < num ; i++ ) {
//     array.push(parseFloat(prompt("Enter the element")));
// }
// console.log("Original array:", array);
// console.log("Sorted array:", bubbleSort(array));


// 17. Create a program that prints all prime numbers between 1 and 100 using nested loops. 

// function printPrimes(start,end){
//     console.log(`Prime numbers betwen ${start} and ${end} are:`);

//     for(let num = start ; num<=end ; num++){
//         if (num < 2){
//             continue;
//         }
//         let isPrime = true;
//         for(let i = 2; i<=Math.sqrt(num); i++){
//             if(num % i == 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//         if(isPrime){
//             console.log(num);
//         }
//     }
// }
// num1 = parseInt(prompt("Enter the number you want to start"));
// num2 = parseInt(prompt("Enter the number you want to end"));
// printPrimes(num1,num2);

// 18. Write a program that checks if a given string is a palindrome using a for loop. 

// function isPalindrome(str) {
//     let len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// let str = prompt("Enter a string");
// if (isPalindrome(str)) {
//     console.log(`${str} is a palindrome`);
// } else {
//     console.log(`${str} is not a palindrome`);
// }

// 19. Implement a program that finds the sum of digits of a given number using a while loop


// function sumOfDigits(num) {
//     let sum = 0;
//     num = Math.abs(num); 
//     while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }

// let number = parseInt(prompt("Enter a number"));
// console.log(`The sum of digits of ${number} is ${sumOfDigits(number)}`);


// 20. Write a function that generates the first N numbers of the Fibonacci sequence using a loop and stores them in an array.


function generateFibonacci(n) {
    let fibSequence = [];
    let a = 0, b = 1;
    if (n >= 1) fibSequence.push(a);
    if (n >= 2) fibSequence.push(b);
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        fibSequence.push(temp);
        a = b;
        b = temp;
    }
    return fibSequence;
}

let num = parseInt(prompt("Enter the number of Fibonacci numbers to generate"));
console.log(generateFibonacci(num));