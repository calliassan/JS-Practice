// function findQuadrant(x, y) {
//   if (x > 0 && y > 0) {
//     return 1;
//   } else if (x < 0 && y > 0) {
//     return 2;
//   } else if (x < 0 && y < 0) {
//     return 3;
//   } else {
//     return 4;
//   }
// }

// console.log(findQuadrant(-2, -4));

// function naturalNumbers(N) {
//   let sum = 0;
//   for (let i = 0; i <= N; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(naturalNumbers(10));

// function leapYear(year) {
//   if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else return false;
// }
// console.log(leapYear(1800));

// function fizzBuzz(N) {
//   for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// console.log(fizzBuzz(25));

// function findElement(n, arr, x) {
//   return arr.indexOf(x);
//   //   for (let i = 0; i < n; i++) {
//   //     if (arr[i] === x) {
//   //       return i;
//   //     }
//   //   }
//   //   return -1;
// }
// console.log(findElement(5, [1, 2, 4, 3, 4], 0));

// function leftRotation(arr) {
//   let shifted = arr.shift();
//   arr.push(shifted);
//   return arr;
// }
// console.log(leftRotation([1, 2, 3, 4, 5]));

// function extractNumbers(arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof parseInt(arr[i]) === "number" && !isNaN(parseInt(arr[i]))) {
//       newarr.push(parseInt(arr[i]));
//     }
//   }
//   return newarr;
// }
// console.log(extractNumbers(["a", "1", "bag", "2", "crio", "3"]));
