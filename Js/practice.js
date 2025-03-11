// Febnacci series.

// 0 1 1 2 3 5 8 13 21

// const febo = (n) => {
//     let feb = [0,1] // initilize first two number index = 0,1, 2,3,4,5,... 9 
//     // 0 - 0th index, 1- 1st index , 2- 0th index + first index = 1, 

//     for(let i =2; i<n; i++){ //3
//         feb[i] = feb[i-1] + feb[i-2];
//     }
//     console.log(feb.join(","));

// }

// febo(10);


// let a =0;
// let b =1;

// console.log(a);
// console.log(b);
// for(let i=2; i<10; i++){
//     let temp = a+b;
//     console.log(temp);
//     a=b;
//     b=temp;
// }


// 2. Probelm 2

// const sumOfEven = (arr) => {
//     let sum = 0;
//     for(let i =0; i< arr.length; i++){
//         if(arr[i]%2 === 0){
//             sum = sum + arr[i]
//         }
//     }
//     return sum;
// }

// let array = [1,2,3,4,5,6,7,8,9];
// let result = sumOfEven(array);
// console.log(result);


// 3. Problem 3

// let arr = [1,3,65,6,87,90,23, 121, 56, 987, 90, 1];

// max = arr[0];
// // max =90;
// for(let i =1; i<arr.length; i++){
//     if(arr[i]>max){ //23>90 ?
//         max = arr[i];
//     }
// }
// console.log(max);


// 4. Problem 

let str = "hello india"; //aidni olleh
let result = "";

for(let i = str.length-1; i>=0; i--){
    result= result+str[i]
}
console.log(result);
