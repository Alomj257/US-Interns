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



const vehiclePrototype = {
    type: 'Unknown',
    start: function() {
        console.log('Vehicle is starting');
    }
};
const myBike = Object.create(vehiclePrototype);
myBike.type = 'Bike';
myBike.brand = 'Yamaha';
console.log(myBike);
myBike.start();
