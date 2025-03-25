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

// let str = "hello india"; //aidni olleh
// let result = "";

// for(let i = str.length-1; i>=0; i--){
//     result= result+str.charAt(i);
// }
// console.log(result);


// 5. Problem

// for(let i =1; i<100; i++){
//     if(i%3 == 0 && i%5 === 0){
//         console.log("FIZZBUZZ")
//     }else if(i%3 === 0){
//         console.log("FIZZ")
//     }else if(i%5 === 0){
//         console.log("Buzz")
//     }else{
//         console.log(i);
//     }
// }


// 6. Problem
// let n=5;
// let fact = 1;
// while(n>0){
//     fact *= n;
//     n--;
// }
// console.log(fact)


// let flag = 1;

// let n = parseFloat(prompt("Enter a number"));
// for(let i =2; i<n; i++){
//     if(n === 2){
//         console.log(`${n} is a prime number`);
//     }else if(n%i === 0){
//         flag = 0;
//         break;
//     }else{
//         flag = 1;
//         break;
//     }
// };

// if(flag === 1){
//     console.log("Prime");
// }else{
//     console.log("Not Prime")
// }


// 8. Problem


// function findEle(arr, n) {
//     let flag;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             flag = 1;
//             break;
//         } else {
//             flag = 0;
//         }
//     }
//     return flag;
// }

// let n = parseFloat(prompt("Enter a number"));
// let arr = [1, 2, 3, 4, 5, 6];
// let result = findEle(arr, n);
// if (result === 1) {
//     console.log("Yes Found ");
// } else {
//     console.log("Not found");
// }



// const findTarget = (arr, n) => {
//     let flag;
//     for(let i =0; i<arr.length; i++){
//         if(arr[i] === n){
//             flag = true;
//             break;
//         }else{
//             flag = false;
//         }
//     }
//     return flag;
// }

// let array = [1,2,3,4,5,6,7];
// let n = 3;
// let result = findTarget(array, n);
// if(result === true){
//     console.log("Element found")
// }else{
//     console.log("Not Found")
// }


// 10.

// Multiplication of 3

// let n = parseFloat(prompt("Enter a number to create multiplication table")); 
// for(let i =1; i<=10; i++){
//     console.log(`${n}*${i} = ${n*i}`);
// }


// 15.

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

// Reverse string

// const revString = (str) => {
//     let revString = "rigna.j";
//     for(let i = str.length; i>=0; i--){
//         revString = revString + str.charAt(i);
//     }
//     console.log(revString)
// }

// let str = "Jahangir";
// revString(str);


// function reverseString (str){
//     let rev = "";
//     for(let i = str.length-1; i>=0; i--){
//         rev += str[i]; // str.chatAt(i), str[i]
//     }
//     return rev;
// }

// console.log(reverseString("JavaScript"))



// Count ecah character in a string

function countEcahCharacter(str) {
    let count = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    return count;
}
console.log(countEcahCharacter("aaaaabbbbddd"));