// What is js?
// Js is programming language. we use it to give instruction to the computer.

// our 1st js code.
// console.log();


// let a =30;
// console.log(a);
// let b =20;
// console.log(b);


// Variables in js
// Variables are containers for data.

// let r =14;

// Variables rules
// 1. "a", "A"
// let a = 10;
// let A = 10;
// console.log(a);
// console.log(A);

// let C =20;
// let d =10;
// let sum = C +d;
// console.log(sum);


// let a3 ="abc";
// console.log(a3)

// let a_2 = "23";
// let $abc = "45";
// let d = 21;
// console.log(d)
// console.log($abc);


// let, const and var

// var a = 10;
// let a = 10;
// const a =10;


// var abc;
// var abc = "niloy";
// var abc = "puja";
// abc = "alom"

// function hello(){
//     var abc = "saugata";
//     var abc = "arindram";
//     console.log(abc);
// }
// hello();
// console.log(abc);


// let a = "jahangir";
// a = "Niloy"
// console.log(a)

// function first(){
//     let a = "23";
//     a = "54";
//     console.log(a);
// }
// first();


// const 
// const a = "abcd";
// console.log(a)
// function callMe(){
//     const a = 45;
//     console.log(a);
// }
// callMe()


// let a = 100;
// console.log(typeof(a))
// let b = "Niloy";
// console.log(typeof(b))
// let c = true;
// console.log(typeof(c))
// let d;
// console.log(typeof(d))
// let e = null;
// console.log(typeof(e))
// let f = 653658372686458675984795;
// console.log(typeof(f));



// const student = {
//     name: "JAHANGIR",
//     roll_no: "ECE194008",
//     age: 27,
//     department: "IT",
//     isEmpoyee: true
// }

// console.log(student);
// console.log(typeof(student));
// console.log(typeof(student.name));
// console.log(typeof(student.age));


// Object in js

// Create an object using object literal syntax

// const Person = {
//     fullName : "Niloy",
//     age: 25,
//     gender: "Male",
//     profession: "Developer",
//     array: [1,2,3,4],
//     chield: {
//         name: "Alom",
//         age: 23
//     }
// };

// console.log(Person)
// console.log(typeof(Person));
// console.log(typeof(Person.chi))


// Using new Object() syntax

// const Person = new Object();
// Person.name = "Jahangir",
// Person.age = 25,
// Person.gender = "Male",
// Person.profession = "Developer",
// Person.isEmployee = true

// console.log(Person);
// console.log(typeof(Person.isEmployee))


// Using constructor

// function Person(name, age, profession){
// this.name = name,
// this.age = age,
// this.profession = profession
// }

// const person = new Person("Suagata", 23, "Developer")

// console.log(typeof(person));
// console.log(person);



// const Employee = {
//     id: "EMP01",
//     name: "Employee",
//     salary: 500000,
// }

// console.log(Employee);
// // console.log(Employee.id, Employee.name, Employee.salary);

// Employee.name = "jahangir";
// Employee["name"] = "NILOY";
// console.log(Employee.id);

// console.log(Employee["id"]);


// Comments in js

// let a = 10; 
// let b = 20;
// let c = a+b;
// let d ;
// // d = a+b;
// console.log(c);
// console.log(d);

// Operatos in js

// 1. Arithmatic operator
// +, -, *, /, %, Exponential (**), increment(--), decrement(**)
// let a = 10;
// let b =5;

// console.log("Addition", a +b);
// console.log("Substraction", a-b);
// console.log("Multiplication", a*b);
// console.log("Division", a/b);
// console.log("Expo", a**b);
// console.log("Modulas", a%b);

// console.log("Increment", ++a);

// console.log("Decrement", --a);
// console.log(a);


// 2. Assignment operators
// = +=, -=, *=, %=, **=

// let x = 10;
// console.log(x);

// x += 5;
// // x = x+ 5;
// console.log(x);

// x -= 3;
// // x = x-3
// // x = 15-3 = 12
// console.log(x)

// x *= 2;
// // x = x*2;
// // x = 12*2;
// console.log(x);

// x /=4;
// // x = x/4;
// // x = 24/4;
// console.log(x);

// x %= 2;
// // x = 6%2;
// console.log(x);

// Comparison operator
// ==(Equal to), ===(Equal & type), !=(Not equal to), !==(Not equal & type), >, >=, <, <=

// let a = 5; // Number
// let b = 10; // String

// console.log(a == b); // True
// console.log( a===b); // False

// console.log( a!= b); //False
// console.log( a!==b); // True

// console.log(a>b); //False
// console.log(a>=b); //True
// console.log(a<b); //False
// console.log(a<=b); //True


// 4. Logical operator
// Logiacl AND (&&), Logical OR (||), Logical not (!)

// let p =true; let q = false;
// console.log("Logical AND",p&&q);

// console.log("Logical OR",p||q);

// console.log("Logical NOT", !p );
// console.log("Logical NOT", !q);


// 5. Termary operator
// condition ? true output : false output
// let age = 30;
// // if(age>=18){ //10>=18
// //     console.log("Adult")
// // }else{
// //     console.log("Minor")
// // }
//                         //true: //false
// let status = (age>=18)? "Adult":"Minor";
// console.log(status)


// Conditional statement
// To implement some condition in the code.
// If statement
// let color;
// mode = "dark-mode"
// if(mode === "dark-mode"){
//     color = "black"
// }
// console.log(color)


// If-Else statement
// let color;
// mode = "light-mode"
// if(mode === "dark-mode"){
//     color = "black"
// }else{
//     color = "white"
// }
// console.log(color)


// Else-if statement

// let age = 23;
// if (age < 18) {
//     console.log("Junior");
// } else if (age > 60) {
//     console.log("Senior");
// } else {
//     console.log("Middle");
// }


// let a = parseFloat(prompt("Enter a number"));
// console.log(a);

//Question 

// Get user to input a number using prompt("Enter a number"). Check if the number is multiple of 7 or not.
//Write a code which can give grades to students according to their scores.
// 80-100 - A
// 70-79 - B
// 60-69 -C
// 50-59 -D
// 0-49 - F




// Loops in js

// for(initilization; condition; increment){
//     // Code block to be execute.
// }


// // 1 to 20
// for(let i=1; i<=20; i++){
//     console.log(i);
// }

// // 1+2+3+......+10;
// let sum =0;
// for(let i =1; i<=3; i++){ //1, 0+1 =1, 2, 1+2 =3, 3, 3+3=6 , 4, 6+4 =10, 5, 10+5=15,
//     sum = sum +i;
// }
// console.log(sum);


// While loop

// // syntax
// initilization
// while(condition){
//     //code excute.
//     ++. --
// }


// for(let i=0; i<5; i++){
//     console.log(i)
// }

// let k =0;
// while(k<5){
//     console.log(k);
//     k++;
// }

// let j =1;
// let sum =0;
// while(j<=10){
//     sum = sum +j;
//     j++;
// }
// console.log(sum);


// Do while loop

// do {
//     // Execute code
// }while(condition)

// let i =0;
// do{
//     console.log(i);
//     i++;
// }while(i<0)

// for(let j=0; j<0; j--){
//     console.log(j);
// }



// for in loop.
// the for .... in loop iterates over the properties of an object.

// const person = {
//     name: "Jahangir",
//     age: 23,
//     city: "kolkata",
//     emp_id: "WIP0012"
// }

// // for(let key in Object){

// // }

// for(let key in person){
//     console.log(person[key]);


// for of loop

const numbers = [1,34, 56,6,7,78,9,7];
for(let number of numbers){
    console.log(number)
}

const array = [20, 25, 35, 45];
let sum =0;
for(let arr of array){
    sum = sum + arr;
}
console.log(sum)


const fruits = ["apple", "banana", "guava", "pineapple"];
for(let fruit of fruits){
    console.log(fruit)
}


const students = [{
    name: "jaha",
    age: 26
},{
    name: "rahu",
    age: 24
},{
    name: "kalu",
    age: 19
}];

let ageSum =0;
for(let key in students ){
    console.log(students[key])
    ageSum = ageSum +students[key]["age"];
}
console.log(ageSum)

let sum1 =0;
for(let student of students){
    console.log(student.name)
    console.log(student.age);
    sum1 = sum1 + student.age;
}
console.log(sum1)