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

// let num = prompt("Enter a number");
// if(num < 2){
//     console.log("Not a prime number");
// }
// for(let i = 2; i<num; i++){
//     if(num % i == 0){
//         console.log("Not a prime number");
//     }else{
//         console.log("Prime number");
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

// 10.Write a program that counts the number of vowels in a given string using a for...of loop

