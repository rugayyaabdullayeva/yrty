// ! TASK 1
// let numArr = [5, 10, 2, 8, 12]
// let evenSum = 0
// let oddSum = 0
// for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i] % 2 === 0) {
//         evenSum += numArr[i]
//     }
//     else {
//         oddSum += numArr[i];
//     }

// }
// let difference = evenSum - oddSum;
// console.log(difference)


// ! TASK 2
// let numArr = [12,45,10,876,243]
// let sum1 = 0
// let sum2 = 0

// for (let i=0 ; i < numArr.length; i++){
//   if(numArr[i] >= 100 && numArr[i] <= 999){
//    sum1 += numArr[i];
//   }
//   else{
//     sum2 += numArr[i];
//   }
// }
// console.log(sum1 - sum2);

// ! TASK 3
// let numArr = [10,45,32,48,72]
// let reversedArr = []
// for(let i = numArr.length-1 ; i>=0 ; i--){
//     reversedArr.push(numArr[i])
// }
// console.log(reversedArr)

// ! TASK 4
// let numArr1 = [4,5,2,6,4,3];
// let numArr2 = [7,4,2,76,45,65];
// let isEqual = false 
// for (let i = 0 ; i < numArr1.length ; i ++){
//     for (let j = 0 ; j < numArr2.length ; j ++){
//         if 
//     }
// }


// ! TASK 5
// let n = 5;
// let string = [""]
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         string += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//         string += "*";
//     }
//     string += "/n";
// }
// console.log(string);


// ! TASK 6
let a = prompt("birinci terefi daxil et")
let b = prompt("ikinci terefi daxil et")
let c = prompt("ucuncu terefi daxil et")

if (b - c < a && a < b + c && a - c < b && b < a + c && a - b < c && c < a + b) {
    console.log("true");
}
else console.log("false") 