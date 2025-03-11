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


let a =0;
let b =1;

console.log(a);
console.log(b);
for(let i=2; i<10; i++){
    let temp = a+b;
    console.log(temp);
    a=b;
    b=temp;
}