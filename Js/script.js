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



const Employee = {
    id: "EMP01",
    name: "Employee",
    salary: 500000,
}

console.log(Employee);
// console.log(Employee.id, Employee.name, Employee.salary);

Employee.name = "jahangir";
Employee["name"] = "NILOY";
console.log(Employee.id);

console.log(Employee["id"]);