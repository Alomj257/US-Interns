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

for (let i=1; i<=10 ;i++){
    console.log(i=i+1);
}

