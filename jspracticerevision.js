// 1.// function findQuadrant(x, y) {
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

// 2.// console.log(findQuadrant(-2, -4));

// function naturalNumbers(N) {
//   let sum = 0;
//   for (let i = 0; i <= N; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(naturalNumbers(10));

// 3.// function leapYear(year) {
//   if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else return false;
// }
// console.log(leapYear(1800));

// 4.// function fizzBuzz(N) {
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

// 5.// function findElement(n, arr, x) {
//   return arr.indexOf(x);
//   //   for (let i = 0; i < n; i++) {
//   //     if (arr[i] === x) {
//   //       return i;
//   //     }
//   //   }
//   //   return -1;
// }
// console.log(findElement(5, [1, 2, 4, 3, 4], 0));

// 6.// function leftRotation(arr) {
//   let shifted = arr.shift();
//   arr.push(shifted);
//   return arr;
// }
// console.log(leftRotation([1, 2, 3, 4, 5]));

7; //
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

// 8.// **********Find Local Peak***********

// function localPeak(N, arr) {
//   let peak = [];
//   if (arr[0] > arr[1]) {
//     peak.push(arr[0]);
//   }
//   if (arr[N - 1] > arr[N - 2]) {
//     peak.push(arr[N - 1]);
//   }
//   for (let i = 0; i < N; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//       peak.push(arr[i]);
//     }
//   }
//   return peak;
// }

// console.log(localPeak(7, [4, 2, 3, 1, 5, 6, 4]));

// 9.// ***factorialNumber**

// function factorialNumber(n) {
//   let number = 1;
//   for (let i = 1; i <= n; i++) {
//     number = number * i;
//   }
//   return number;
// }
// console.log(factorialNumber(5));

// 10.Primenumber
// function checkForPrime(n) {
//   let flag = true;
//   if (n == 0 || n == 1) {
//     flag = false;
//   } else {
//     for (let i = 2; i <= n - 1; i++) {
//       if (n % i == 0) {
//         flag = false;
//         break;
//       } else {
//         flag = true;
//       }
//     }
//   }
//   if (flag == false) {
//     return "is not prime";
//   } else {
//     return "is prime";
//   }
// }
// console.log(checkForPrime(9));

// 11.>

// function removeFalsyvalues(arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       parseInt(arr[i]) !== 0 &&
//       arr[i] !== false &&
//       arr[i] !== NaN &&
//       arr[i] !== "" &&
//       arr[i] !== undefined
//     ) {
//       newarr.push(arr[i]);
//     }
//   }
//   return newarr;
// }
// console.log(removeFalsyvalues(["7", "ate", "", false, 9]));

// 12.>
// function findele(arr, n, x) {
//   return arr.indexOf(x);
// }
// console.log(findele([1, 2, 3, 4], 4, 5));

// 13.>>
// let val = "crio";
// console.log(parseInt(val));

// 14.>>
// capitalize first character of the word
// function uppercase(str) {
//   result = str[0].toUpperCase() + str.slice(1);
//   return result;
// }
// console.log(uppercase("the"));

// function capitalize(str1) {
//   let arr1 = [];
//   const arr = str1.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     let capitalizedarr = uppercase(arr[i]);
//     arr1.push(capitalizedarr);
//   }
//   return arr1.join(" ");
// }
// console.log(capitalize("the quick Brown fox jumps over The lazy dog."));

// 15.>>
// function palindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   if (str === reversed) {
//     return "Palindrome";
//   } else {
//     return "Not palindrome";
//   }
// }
// console.log(palindrome("madam"));
// console.log(palindrome("ashish"));

// 16.>>Two Pointer
// function isArrsorted(arr) {
//   let left = 0,
//     right = 1;
//   while (right < arr.length) {
//     if (arr[left] > arr[right]) {
//       return false;
//     }
//     left++;
//     right++;
//   }
//   return true;
// }

// console.log(isArrsorted([1, 3, 4, 2, 0]));

// 17.>>
// function palindrome(str) {
//   let arr = str.split("");
//   let left = 0,
//     right = arr.length - 1;
//   while (left < right) {
//     if (arr[left] !== arr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(palindrome("madam"));
// console.log(palindrome("ashish"));

// 18.>ReverseString

// function reverseString(str) {
//   let arr = str.split("");

//   let left = 0,
//     right = arr.length - 1;
//   let newarr = [];
//   while (right >= left) {
//     if (right < left) {
//       return false;
//     }
//     newarr.push(arr[right]);

//     right--;
//   }
//   return newarr.join("");
// }
// console.log(reverseString("abc"));

// 19.>>Inline reverse String
// function reverseString(str) {
//   let arr = str.split("");

//   let left = 0,
//     right = arr.length - 1;

//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
//   }
//   return arr.join("");
// }
// console.log(reverseString("abc"));

// 20.Find minimum and maximum element in an array:
// function minMax(N, arr) {
//   let min = arr[0];
//   let max = arr[0];
//   for (let i = 0; i < N; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   for (let i = 0; i < N; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return min + max;
// }
// console.log(minMax(5, [2, 4, 3, 10, 1]));

// 22.>>Diagonal print(from last to first)

// function printDiagonal(matrix, N) {
//   let newarr = [];
//   let col = matrix[0].length - 1;
//   for (let row = 0; row < N; row++, col--) {
//     newarr.push(matrix[row][col]);
//   }
//   return newarr;
// }
// console.log(
//   printDiagonal(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     3
//   )
// );

// 23.>>Magic square or not?
//Given a matrix of dimension nxn having elements 1 to nxn distinct elements. Check whether the matrix is magic square
//  or not.
// Magic square is a square that has the same sum of rows, columns and diagonals.

// function leftDiagonal(matrix) {
//   let sum = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     sum = sum + matrix[i][i];
//   }
//   return sum;
// }
// console.log(
//   leftDiagonal([
//     [4, 9, 2],
//     [3, 5, 7],
//     [8, 1, 6],
//   ])
// );
// function rightDiagonal(matrix) {
//   let sum = 0;
//   let col = matrix.length - 1;
//   for (let i = 0; i < matrix.length; i++, col--) {
//     sum = sum + matrix[i][col];
//   }
//   return sum;
// }
// console.log(
//   rightDiagonal([
//     [4, 9, 2],
//     [3, 5, 7],
//     [8, 1, 6],
//   ])
// );
// function iteraterow(matrix, row) {
//   let sum = 0;
//   for (let i = 0; i < matrix[row].length; i++) {
//     sum += matrix[row][i];
//   }
//   return sum;
// }
// console.log(
//   iteraterow(
//     [
//       [4, 9, 2],
//       [3, 5, 7],
//       [8, 1, 6],
//     ],
//     0
//   )
// );
// function rowSum(matrix) {
//   let sumR0 = iteraterow(matrix, 0);
//   for (let i = 0; i < matrix.length; i++) {
//     let tempsum = iteraterow(matrix, i);
//     if (sumR0 !== tempsum) {
//       return -1;
//     }
//   }
//   return sumR0;
// }
// function iterateCol(matrix, col) {
//   let sum = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     sum = sum + matrix[i][col];
//   }
//   return sum;
// }
// console.log(
//   sumCol(
//     [
//       [4, 9, 2],
//       [3, 5, 7],
//       [8, 1, 6],
//     ],
//     0
//   )
// );
// function sumCol(matrix) {
//   let sumC0 = iteraterow(matrix, 0);
//   for (let i = 0; i < matrix.length; i++) {
//     let tempsum = iterateCol(matrix, i);
//     if (sumC0 !== tempsum) {
//       return -1;
//     }
//   }
//   return sumC0;
// }

// function magicSquare(matrix, N) {
//   let diag1 = rightDiagonal(matrix);
//   let diag2 = leftDiagonal(matrix);
//   let sum1 = rowSum(matrix);
//   let sum2 = sumCol(matrix);
//   if (diag1 === diag2 && sum1 === sum2 && diag1 === sum1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(
//   magicSquare(
//     [
//       [4, 9, 2],
//       [3, 5, 7],
//       [8, 1, 6],
//     ],
//     3
//   )
// );

// 24.>>Binary Search(Applicable only if sorted array)
// function binarySearch(N, arr, target) {
//   let left = 0,
//     right = N - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = arr[mid] - 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch(5, [1, 3, 5, 7, 13], 7));

// 25. Rotate a matrix

// function transposeMatrix(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < i; j++) {
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
//   }
//   return matrix;
// }
// console.log(
//   transposeMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
// function reverseMatrix(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     let start = 0;
//     let end = matrix[0].length - 1;
//     while (start < end) {
//       let temp = matrix[i][start];
//       matrix[i][start] = matrix[i][end];
//       matrix[i][end] = temp;
//       start++;
//       end--;
//     }
//   }
//   return matrix;
// }
// console.log(
//   reverseMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// function rotateMatrix(matrix) {
//   transposeMatrix(matrix);
//   reverseMatrix(matrix);
//   return matrix;
// }
// console.log(
//   rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// 26.>>>Pyramid Printing
// function patternPrintingI(n) {
//   let newarr = [];
//   for (let i = 0; i < n ; i++) {
//     let newstr = "";

//     for (let j = 0; j <= i; j++) {
//       newstr = newstr + "* ";
//     }
//     newarr.push(newstr);
//   }
//   return newarr;
// }
// console.log(patternPrintingI(5));

// 27.>>Reverse words in a string

// function reverseWords(sentense) {
//   let arr = sentense.trim().split(" ");
//   let reversedarr = arr.reverse();
//   let newarr = [];
//   for (let i = 0; i < reversedarr.length; i++) {
//     if (reversedarr[i] !== "") {
//       newarr.push(reversedarr[i]);
//     }
//   }
//   return newarr;
// }
// console.log(reverseWords(" hello   Ashish Bhattarai "));

// 28.>>>String compress
// function compressString(str) {
//   let compressed = "";
//   let count = 1;
//   let left = str[0];
//   for (let i = 1; i < str.length; i++) {
//     if (left === str[i]) {
//       count++;
//     } else {
//       compressed += left + count;
//       count = 1;
//       left = str[i];
//     }
//   }
//   //we still have b and 1 in the left and count , check by console. Kindly add that also;
//   console.log(left);
//   console.log(count);
//   compressed += left + count;
//   return compressed.length<str.length?compressed:str;
// }
// console.log(compressString("aabacccccb"));
// console.log(compressString("aabaccccc"));
// tc: O(n);
// sc: O(n); //because string is immutable and we are creating new every string like 1st a2, 2nd:a2b1 and so on.

// 29.>>Reverse letters of words in a sentence with words
// function reverseletters(word) {
//   let arr = word.split("");
//   let left = 0,
//     right = arr.length - 1;
//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
//   }
//   return arr.join("");
// }
// console.log(reverseletters("abc"));

// function ReverseLetters(sentence) {
//   let newarr = sentence.split(" ");
//   let reversedarr = [];
//   console.log(newarr);
//   for (let i = 0; i < newarr.length; i++) {
//     reversedwords = reverseletters(newarr[i]);
//     reversedarr.push(reversedwords);
//   }
//   return reversedarr.join(" ")
// }
// console.log(ReverseLetters("abc def ghi"));

// 30.>>>max Product
//Given the array of integers nums of size n, you will choose two different indices i and j of that array.
// Return the maximum value of (nums[i]-1)*(nums[j]-1).

// function maxProduct(arr) {
//   let sortedarr = arr.sort((a, b) => b - a);
//   console.log(arr);
//   maximum = (sortedarr[0]-1) * (sortedarr[1]-1);
//   return maximum
// }
// console.log(maxProduct([3, 4, 5, 2]));

// TC:O(nlogn)

// 2nd Approach

//note that when we use index, we have to choose higher number as max already.
//when we use value as max and min both as -1, that time we can just proceed

// function maxProduct(arr) {
//   let max = 1;
//   let secondmax = 0;
//   for (let i = 2; i < arr.length - 1; i++) {
//     if (arr[i] >= arr[max]) {
//       arr[secondmax] = arr[max];
//       arr[max] = arr[i];
//     } else if (arr[i] >= arr[secondmax]) {
//       arr[secondmax] = arr[i];
//     }
//   }
//   return (arr[max] - 1) * (arr[secondmax] - 1);
// }
// console.log(maxProduct([3, 4, 5, 2]));

// 31.>>>Robert movement

// function Robert(moves) {
//   let start = (0, 0);
//   let finishposition = 0;
//   for (let i = 0; i < moves.length; i++) {
//     if (moves[i] === "L") {
//       finishposition += 1;
//     } else if (moves[i] === "R") {
//       finishposition -= 1;
//     } else if (moves[i] === "U") {
//       finishposition += 1;
//     } else if (moves[i] === "D") {
//       finishposition -= 1;
//     }
//   }
//   console.log(start);
//   if (finishposition === start) {
//     return true
//   }else{
//     return false
//   }
// }
// console.log(Robert("LRLRUD"));
