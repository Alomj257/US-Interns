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

function Employee(name,position,salary){
    this.name = name,
    this.position = position,
    this.salary = salary
}
const employee = new Employee("Niloy","Intern","1000")

// console.log(employee)
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
  }
  
