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

const { set } = require("mongoose");

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

// 18.>Reversearr

// function reversearr(str) {
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
// console.log(reversearr("abc"));

// 19.>>Inline reverse arr
// function reversearr(str) {
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
// console.log(reversearr("abc"));

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

// 27.>>Reverse words in a arr

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

// 28.>>>arr compress
// function compressarr(str) {
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
// console.log(compressarr("aabacccccb"));
// console.log(compressarr("aabaccccc"));
// tc: O(n);
// sc: O(n); //because arr is immutable and we are creating new every arr like 1st a2, 2nd:a2b1 and so on.

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

// 32.>>Natural sum

// function naturalSum(n){
//     if(n<1){
//         return 0
//     }
//     return n+naturalSum(n-1)

// }
// console.log(naturalSum(4))

// 33.>>Nth fibonacci number
// 1.Iteration method

// function fibonacci(n) {
//   let p1 = 0;
//   let p2 = 1;
//   let fib;
//   if (n <= 1) {
//     return n;
//   }
//   for (let i = 2; i <= n; i++) {
//     fib = p1 + p2;
//     p1 = p2;
//     p2 = fib;
//   }
//   return fib;
// }
// console.log(fibonacci(10));

// 2.print fibonacci Numbers

// function Fibonacci(n) {
//   let n1 = 0,
//     n2 = 1;
//   let next;
//   for (let i = 1; i <= n; i++) {
//     console.log(n1);
//     next = n1 + n2;
//     n1 = n2;
//     n2 = next;
//   }
// }
// Fibonacci(7);

// 3.>>Recurssion(find nth fibonacci number)

// function fibonacci(n){
//     if(n==0){
//         return 0
//     }
//     if(n===1){
//         return 1
//     }
//     return fibonacci(n-1)+ fibonacci(n-2)

// }
// console.log(fibonacci(6))

// 34.>>Tribonacci number
// function fibonacci(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1 || n === 2) {
//     return 1;
//   }

//   return fibonacci(n - 1) + fibonacci(n - 2) + fibonacci(n - 3);
// }
// console.log(fibonacci(7));

// 35.>>Factorial
// function factorial(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(0));

// ***************MAP************************************

// 35.Most Repeating word
// function MostRepeat(arr) {
//   let m = new Map();
//   arr.sort();
//   for (let i = 0; i < arr.length; i++) {
//     if (!m.has(arr[i])) {
//       m.set(arr[i], 1);
//     } else {
//       m.set(arr[i], m.get(arr[i]) + 1);
//     }
//   }
//   let max = -1;
//   let maxkey;
//   for (let [key, value] of m) {
//     if (max < value) {
//       max = value;
//       maxkey = key;
//     }
//   }
//   return maxkey;
// }
// console.log(MostRepeat(["hello", "world", "crio", "crio"]));
// console.log(MostRepeat(["hello", "hello", "world", "crio", "crio"]));

// 36.>>Find single number

// function findSingle(arr) {
//   let m = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (!m.has(arr[i])) {
//       m.set(arr[i], 1);
//     } else {
//       m.set(arr[i], m.get(arr[i]) + 1);
//     }
//   }
//   for (let [key, value] of m) {
//     if (value === 1) {
//       return key;
//     }
//   }
// }
// console.log(findSingle([2, 2, 3, 3, 1, 4, 4]));

// ****using forEach********

// function findSingle(arr) {
//   let m = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (!m.has(arr[i])) {
//       m.set(arr[i], 1);
//     } else {
//       m.set(arr[i], m.get(arr[i]) + 1);
//     }
//   }
//   let result;
//   m.forEach((key, value) => {
//     if (value === 1) {
//       result = key;
//     }
//   });
//   return result;
// }
// console.log(findSingle([2, 2, 3, 3, 1, 4, 4]));

// 37.>>>Intersection of arrays
// function Intersection(arr1, arr2) {
//   let map = new Map();
//   let arr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map.has(arr1[i])) {
//       map.set(arr1[i], 1);
//     } else {
//       map.set(arr1[i], map.get(arr1[i]) + 1);
//     }
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if (map.has(arr2[i])) {
//       let count = map.get(arr2[i]);
//       if (count > 0) {
//         arr.push(arr2[i]);
//         map.set(arr2[i], count - 1);
//       }
//     }

//   }
//   return arr;

// }
// console.log(Intersection([1, 2, 2, 3], [4, 2, 2]));

// 38.>>>Most Frequent
//You are given a arr which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and
// special characters like !,-.; etc.

// You are supposed to find out which character occurs the maximum number of times and the number of its occurrence, in the given arr. If two characters occur equal number of times, you have to output the character with the lower ASCII value.

// For example, if your arr was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.
// function mostFrequent(string) {
//   let arr = string.split("").sort();
//   let maxkey;
//   let max = -1;
//   let newmap = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (!newmap.has(arr[i])) {
//       newmap.set(arr[i], 1);
//     } else {
//       newmap.set(arr[i], newmap.get(arr[i]) + 1);
//     }
//   }
//   for (let [key, value] of newmap) {
//     if (value > max) {
//       max = value;
//       maxkey = key;
//     }
//   }
//   let result = `${maxkey} ${max}`;

//   return result;
// }
// console.log(mostFrequent("Statements are unique EEEE"));

// 39.>>>Distinct Numbers
// function DistinctNumbers(n, nums) {
//   let s = new Set();
//   for (let i = 0; i < n; i++) {
//     s.add(nums[i]);
//   }
//   console.log(s);
//   return s.size;
// }
// console.log(DistinctNumbers(5, [2, 3, 2, 2, 5]));

// 40.>>All Anagrams
//You are given a string str consisting of non-repeating lowercase English letters.
// Additionally, you have an array arr of strings, each containing non-repeating characters.
// Your task is to create a program that identifies and returns the strings from the arr that are
// anagrams of the given string str.

// The resulting array of strings should be in lexicographically sorted order.

// function isAnagram(s1, s2) {
//   if (s1.length !== s2.length) {
//     return false;
//   } else {
//     s1 = s1.split("").sort().join("");
//     s2 = s2.split("").sort().join("");
//     if (s1 === s2) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(isAnagram("abc", "bcd"));

// function allAnagrams(str, arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (isAnagram(str, arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res.sort()
// }
// console.log(allAnagrams("abc", ["bac", "cad", "acb"]));

// 2nd way

// function isAnagram(s1, s2) {
//   if (s1.length !== s2.length) {
//     return false;
//   } else {
//     let set1 = new Set(s1);
//     let set2 = new Set(s2);
//     for (let key of set1) {
//       if (!set2.has(key)) {
//         return false;
//       }
//     }
//   }
//   return true
// }
// console.log(isAnagram("abc", "bca"));

// function allAnagrams(str, arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (isAnagram(str, arr[i]) === true) {
//       res.push(arr[i]);
//     }
//   }
//   return res.sort();
// }
// console.log(allAnagrams("abc", ["bac", "cad", "acb"]));

// 41.>>>Find Unique words
// function uniqueWords(arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isunique = true;

//     for (let j = 0; j < newarr.length; j++) {
//       if (arr[i] === newarr[j]) {
//         isunique = false;
//         break;
//       }
//     }
//     if (isunique) {
//       newarr.push(arr[i]);
//     }
//   }

//   return newarr;
// }
// console.log(uniqueWords(["java", "is", "is", "Great", "for", "for"]));

// tc:0(N2)
// sc:0(N)

// 2nd method:Using Set

// function uniqueWords(arr) {
//   let s = new Set(arr);
//   return s.size;
// }
// console.log(uniqueWords(["java", "is", "is", "Great", "for", "for"]));

// 42.>>Union of two arrays
// function Union(arr1, arr2) {
//   let arr = [];
//   let s = new Set(arr1);
//   for (let i = 0; i < arr2.length; i++) {
//     s.add[arr2[i]];
//   }
//   for (let key of s) {
//     arr.push(key);
//   }
//   return arr.sort((a, b) => a - b);
// }
// console.log(Union([1, 2, 3, 4, 5,10,6,9], [1, 2, 3]));

// 43.>>>Prime Numbers

// function primeNumbers(N) {
//   if (N < 2) {
//     return false;
//   }
//   for (let i = 2; i <= Math.floor(Math.sqrt(N)); i++) {
//     if (N % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(primeNumbers(9));
// console.log(primeNumbers(5));
// console.log(primeNumbers(7));
// console.log(primeNumbers(10));
// console.log(primeNumbers(28));
//here we have taken till square root of N because if we do till squareroot of the number also, it is same.

// 44.>>HCF/GCD
//Euclidean method
// function GCD(n1, n2) {
//   if (n2 === 0) {
//     return n1;
//   }
//   return GCD(n2, n1 % n2);
// }
// console.log(GCD(24, 36));

// 45.>>GCD of array of numbers
// function gcd(n1, n2) {
//   if (n2 === 0) {
//     return n1;
//   }
//   return gcd(n2, n1 % n2);
// }
// console.log(gcd(24, 36));

// function gdcArray(arr) {
//   let res = gcd(arr[0], arr[1]);
//   for (let i = 2; i < arr.length; i++) {
//     res = gcd(res, arr[i]);
//   }
//   return res;
// }
// console.log(gdcArray([4, 6, 8, 16]));

// 46.>>Reverse a number
// function reverseNumber(N) {
//   let rev = 0;
//   while(N>0){
//     rev = rev * 10 + (N % 10);
//     N=Math.floor(N/10)
//   }

//   return rev;
// }
// console.log(reverseNumber(715));

// 47.>>Find pair with given sum in unsorted array
// Given a sorted array of integers and a target, find if there’s
// a pair of elements that add up to the target. Return true if such a pair can be found, and false otherwise.
// function findPair(arr, target) {
//   let copyarr = [...arr];
//   let sorted = arr.sort((a, b) => a - b);
//   let left = 0,
//     right = arr.length - 1;
//   while (left < right) {
//     let sum = sorted[left] + sorted[right];
//     if (sum === target) {
//       break;
//     } else if (sum > target) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   let indx1 = copyarr.indexOf(sorted[left]);
//   let startpos = 0;
//   if (sorted[left] == sorted[right]) {
//     startpos = indx1 + 1;
//   }
//   let indx2 = copyarr.indexOf(sorted[right], startpos);
//   return [Math.min(indx1, indx2), Math.max(indx1, indx2)];
// }
// console.log(findPair([2, 5, 9, 6, 3], 12));

//Another Approach
// function twoSum(nums, target) {
//   let arr_pair = [];
//   for (let i = 0; i < nums.length; i++) {
//     arr_pair.push([nums[i], i]);
//   }
//   console.log(arr_pair);
//   arr_pair.sort((a, b) => a[0] - b[0]);
//   console.log(arr_pair);

//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     let sum = arr_pair[left][0] + arr_pair[right][0];
//     if (sum > target) {
//       right--;
//     } else if (sum < target) {
//       left++;
//     } else {
//       return [arr_pair[left][1], arr_pair[right][1]].sort((a, b) => a - b);
//     }
//   }
//   return [];
// }
// console.log(twoSum([1, 2, 4, 6, 3, 5], 9));

//sorter[left]==sorted[right] is used to tackle the duplicate number because if it is say [2,5,9,6,3,2] (2 is at left
// and also t right so when we do index of we will get 0 as index which is not correct so we search from 0+1 )
//this all is done because of unsorted array
// TC:(nlogn)
// SC: O(n)

// 48.>>>Merge Two sorted Arrays;
// function mergeSorted(n, arr1, m, arr2) {
//   let left = 0,
//     right = 0;
//   let c = [];
//   while (left < n && right < m) {
//     if (arr1[left] <= arr2[right]) {
//       c.push(arr1[left]);
//       left++;
//     } else {
//       c.push(arr2[right]);
//       right++;
//     }
//   }
//   while (left < n) {
//     c.push(arr1[left]);
//     left++;
//   }
//   while (right < m) {
//     c.push(arr2[right]);
//     right++;
//   }
//   return c;
// }
// console.log(mergeSorted(4,[1, 2, 3, 4], 3,[2, 5, 6]));

// 49.>>>Remove Duplicates such that element occurs only tice max
// Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice,
// and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1)
// extra memory.

// function removeDuplicatesFromSortedArrayII(n, arr) {
//   let j = 0;
//   for (let i = 0; i < n; i++) {
//     if (j < 2 || arr[i] > arr[j - 2]) {
//       arr[j] = arr[i];
//       j++;
//     }
//   }
//   console.log(arr);
//   return j;
// }
// console.log(removeDuplicatesFromSortedArrayII(9, [2, 2, 2, 3, 4, 4, 4, 5, 5]));

// 50.>>>Triplet with maximum sum
//Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k].
// If no such triplet exists print 0.

// function findithitem(arr, j, n) {
//   let ans = 0;
//   for (let i = 0; i < j; i++) {
//     if (arr[i] < arr[j]) {
//       ans = Math.max(ans, arr[i]);
//     }
//   }
//   return ans;
// }
// console.log(findithitem([3, 7, 4, 2, 5, 7, 5], 1, 7));

// function findkthitem(arr, j, n) {
//   let ans = 0;
//   for (let k = j + 1; k <= n - 1; k++) {
//     if (arr[k] > arr[j]) {
//       ans = Math.max(ans, arr[k]);
//     }
//   }
//   return ans;
// }
// console.log(findkthitem([3, 7, 4, 2, 5, 7, 5], 3, 7));

// function findTriplet(arr, n) {
//   let maxsum = 0;
//   for (let j = 1; j < n - 1; j++) {
//     let ithitem = findithitem(arr, j, n);
//     let kthitem = findkthitem(arr, j, n);
//     if (arr[j] + ithitem + kthitem > maxsum && ithitem > 0 && kthitem > 0) {
//       maxsum = Math.max(maxsum, arr[j] + ithitem + kthitem);
//     }
//     console.log(ithitem, arr[j], kthitem);
//   }

//   return maxsum;
// }
// console.log(findTriplet([3, 7, 4, 2, 5, 7, 5], 7));

// 51.>>>Find the container that holds the most water
// function mostwater(height) {
//   let ans = 0;
//   let left = 0;
//   let right = height.length - 1;

//   while (left < right) {
//     let area = Math.min(height[left], height[right]) * (right - left);

//     ans = Math.max(ans, area);
//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return ans;
// }
// console.log(mostwater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(mostwater([1, 8, 6, 2, 5, 4, 8, 9, 7]));

//we can also use area as under to arrive at answer
// function maxArea(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let max = 0;

//   while (left < right) {
//     let gap = right - left;
//     let h = Math.min(height[left], height[right]);
//     let water = gap * h;

//     if (water > max) {
//       max = water;
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return max;
// }
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7, 10]));

// 52.>>>Find minimum number of meeeting rooms required
// function minRooms(meetings) {
//   const list = [];
//   for (let meeting of meetings) {
//     list.push({ timestamp: meeting[0], RoomChange: +1 });
//     list.push({ timestamp: meeting[1], RoomChange: -1 });
//   }
//   list.sort((a, b) => a.timestamp - b.timestamp);
//   console.log(list);
//   let minrooms = 0;
//   let meetinginprogresss = 0;
//   for (let p of list) {
//     meetinginprogresss += p.RoomChange;
//     minrooms = Math.max(minrooms, meetinginprogresss);
//   }
//   return minrooms;
// }
// console.log(
//   minRooms([
//     [0, 20],
//     [5, 10],
//     [10, 15],
//   ])
// );

// 2nd way
// function meetingRooms(meetings) {
//   let newarr1 = [];
//   let newarr2 = [];
//   for (let i = 0; i < meetings.length; i++) {
//     newarr1.push(meetings[i][0]);
//     newarr2.push(meetings[i][1]);

//   }
//   newarr1.sort((a, b) => a - b);
//   newarr2.sort((a, b) => a - b);

//   let rooms = 0;
//   let end = 0;
//   let count = 0;
//   for (let i = 0; i < meetings.length; i++) {
//     if (newarr1[i] < newarr2[end]) {

//       rooms++;
//       count += 1;
//     } else {
//       end++;
//     }
//   }
//   return rooms;
// }

// 53.>>Merge Overlapping intervals
// function mergeOverlappingIntervals(intervals) {
//   let arr = [];
//   let arr1 = [];
//   let arr2 = [];
//   for (let i = 0; i < intervals.length; i++) {
//     arr1.push(intervals[i][0]);
//     arr2.push(intervals[i][1]);
//   }
//   arr1.sort((a, b) => {
//     a - b;
//   });
//   arr2.sort((a, b) => {
//     a - b;
//   });
//   console.log(arr1);
//   console.log(arr2);
//   let startA = arr1[0];
//   let endA = arr2[0];
//   for (let i = 1; i <= intervals.length; i++) {
//     let startB = arr1[i];
//     let endB = arr2[i];
//     if (startB <= endA) {
//       endA = Math.max(endA, endB);
//     } else {
//       arr.push([startA, endA]);
//       // startA = startB;
//       // endA = endB;
//     }
//   }
//   return arr;
// }
// console.log(
//   mergeOverlappingIntervals([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );

// 54.>>Find the equal partition index
// function equalPartition(arr, n) {
//   const pre = [];
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += arr[i];
//     pre.push(sum);
//   }
//   for (let i = 1; i < n - 1; i++) {
//     const leftsum = pre[i - 1];
//     const rightsum = pre[n - 1] - pre[i];
//     if (leftsum === rightsum) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(equalPartition([1, 4, 2, 5], 4));

// 55.>>Find maximum sum contageous {very IMp}
// function maxSubarraySum(arr) {
//   let res = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       res = Math.max(res, sum);
//     }
//   }
//   return res;
// }

// const arr = [2, 3, -8, 7, -1, 2, 3];
// console.log(maxSubarraySum(arr));

// above using ***************kadane's algorithm****************
// function maxSum(arr) {
//   let res = Number.MIN_SAFE_INTEGER;
//   let sum = 0;
//   //we use minsafe because -infinity may gives incarrute value in js
//   further, with the-ve number initialization, we can find the non empty array which would not be possible with 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum > res) {
//       res = sum;
//     }
//     if (sum < 0) {
//       sum = 0;
//     }
//   }
//   return res;
// }
// console.log(maxSum([-2, -3, 4, -1, -2, 1, 5, -3]));

// 56.>>>Finding all subarrays of an array
// function findAllsubarrays(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let arrays = [];
//     for (let j = i; j < arr.length; j++) {
//       arrays.push(arr.slice(i, j + 1));
//     }
//     res.push(arrays);
//   }
//   return res;
// }
// console.log(findAllsubarrays([1, 2, 3, 4, 5]));

// 57.>>Find if there exists a subarray of sum 0
// function subArray(arr) {
//   let sum = 0;
//   let newset = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if(sum===0 ||newset.has(sum)){
//       return true
//     }
//     else{
//       newset.add(sum)
//     }
//   }
//   return false;
// }
// console.log(subArray([4, 2, -2, 5]));

// 58.>>Find longest subarray with sum 0
// Given an integer array, find the largest subarray with sum 0 . If there is more than one subarray with the largest length,
// return the subarray with the lowest starting index.

// If there is no such sub-array print -1.

// function longestSubarray(arr) {
//   let leftans = -1,
//     rightans = -2;

//   let sum = 0;
//   let newmap = new Map();
//   newmap.set(0, -1); //to handle edge case i.e if sum itself becomes zero
//   for (let right = 0; right < arr.length; right++) {
//     sum += arr[right];
//     if (newmap.has(sum)) {
//       let left = newmap.get(sum) + 1;
//       if (right - left + 1 > rightans - leftans + 1) {
//         rightans = right;
//         leftans = left;
//       }
//     } else {
//       newmap.set(sum, right);
//     }
//   }
// }
// console.log(longestSubarray(2, 3, 1, -4, 0, 6));

// 59.>>
// Maximum sum possible out of all subarrays of size k
// Given an array of integers and a number k, find the maximum sum of a subarray of size k.
// Input format
// Sample Input 1
// 4 2
// 100 200 300 400
// Sample Output 1
// 700

// function maximumSubarraySumSizeK(N, A, K) {
//   let left = 0,
//     right = K - 1,
//     maxsum = -Infinity;
//   let sum = 0;
//   for (let i = left; i <= right; i++) {
//     sum = sum + A[i];
//   }
//   maxsum = Math.max(sum, maxsum);
//   left++;
//   right++;

//   while (right < N ) {
//     sum = sum - A[left - 1] + A[right];
//     maxsum = Math.max(maxsum, sum);
//     left++;
//     right++;
//   }
//   return maxsum;
// }
// console.log(maximumSubarraySumSizeK(4, [100, 200, 300, 400], 2));

// 60.>>>Find the longest substring with the at most k distinct characters
// function kDistinctcharacters(s, k) {
//   let left = 0,
//     right = 0;
//   let ans = 0;
//   let mp = new Map();
//   while (right < s.length) {
//     if (mp.has(s[right])) {
//       mp.set(s[right], mp.get(s[right]) + 1);
//     } else {
//       mp.set(s[right], 1);
//     }
//     while (mp.size > k) {
//       mp.set(s[left], mp.get(s[left]) - 1);
//       if (mp.get(s[left]) === 0) {
//         mp.delete(s[left]);
//       }
//       left++;
//     }
//     ans = Math.max(ans, right - left + 1);
//     right++
//   }
//   return ans;
// }
// console.log(kDistinctcharacters("Xyyzya", 3));

// 61.>>Find the longest substring without a repeating character
// function longestWithoutRepeat(s) {
//   let left = 0;
//   ans = 0;
//   let map = new set();
//   for (let right = 0; right < s.length; right++) {
//     if (map.has(s[right])) {
//       map.delete(s[left]);
//       left++;
//     }
//     map.set(s[right]);
//     ans = Math.max(ans, right - left + 1);
//   }
//   return ans;
// }
// console.log(longestWithoutRepeat("aabcccbcb"));

// 62.>>Print matrix in spiral order
// function spiralMatrix(n) {
//   let arr = new Array(n);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(n);
//   }
//   let leftmostcol = 0,
//     rightmostcol = n - 1,
//     topmostrow = 0,
//     bottommostrow = n - 1,
//     num = 1;
//   while (num <= n * n) {
//     for (let i = leftmostcol; i <= rightmostcol; i++) {
//       arr[topmostrow][i] = num;
//       num++;
//     }
//     topmostrow++;
//     for (let i = topmostrow; i<=bottommostrow; i++) {
//       arr[i][rightmostcol] = num;
//       num++;
//     }
//     rightmostcol--;
//     for (let i = rightmostcol; i >= leftmostcol; i--) {
//       arr[bottommostrow][i] = num;
//       num++;
//     }
//     bottommostrow--;
//     for (let i = bottommostrow; i >= topmostrow; i--) {
//       arr[i][leftmostcol] = num;
//       num++;
//     }
//     leftmostcol++;
//   }
//   return arr;
// }
// console.log(spiralMatrix(3));

// 63.>>Best time to buy and sell stock
// You have an array in which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit by buying a share on one day and selling it on another day.
// You may repeat this across the days (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again)

// function bestTime(stocks) {
//   let buyingprice = stocks[0];
//   let profit = 0;
//   for (let i = 1; i < stocks.length; i++) {
//     let currentprice = stocks[i];
//     if (buyingprice > currentprice) {
//       buyingprice = currentprice;
//     }
//     if (currentprice > buyingprice) {
//       profit = profit + currentprice - buyingprice;
//       buyingprice = currentprice;
//     }
//   }
//   return profit
// }
// console.log(bestTime([7, 1, 5, 3, 6, 4]));

// 64.>>Find if the string permutation can form a palindrome
// function ispermutationPalindrome(string) {
//   let map = new Map();
//   for (let i = 0; i < string.length; i++) {
//     map.set(string[i], (map.get(string[i]) || 0) + 1);
//   }
//   let oddcount = 0;
//   for (let value of map.values()) {
//     if (value % 2 === 1) {
//       oddcount++;
//     }
//   }
//   if (oddcount <= 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(ispermutationPalindrome("nnaammed"));

// 65.>>set matrix rows and columns to zero
// function setToZero(matrix) {
//   let n = matrix.length;
//   let m = matrix[0].length;
//   const row = new Array(n);
//   for (let i = 0; i < n; i++) {
//     row.push(false);
//   }
//   const col = new Array(m);
//   for (let j = 0; j < m; j++) {
//     row.push(false);
//   }
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (matrix[i][j] == 0) {
//         row[i] = true;
//         col[j] = true;
//       }
//     }
//   }
//   for(let i=0; i<n; i++){
//     for(let j=0; j<m; j++){
//         if(row[i]===true || col[j]===true){
//             matrix[i][j]=0
//         }
//     }
//   }
//   return matrix
// }
// console.log(
//   setToZero([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5],
//   ])
// );

// 66.>>First missing positive Number
// function missingPositive(arr) {
//   let sorted = arr.sort((a, b) => a - b);
//   console.log(sorted);
//   let ans = 0;
//   for (let i = 1; i < sorted.length; i++) {
//     if (i !== sorted[i]) {
//       ans = i;
//     }
//   }
//   return ans;
// }
// console.log(missingPositive([5, 3, 1, 2, 7, -3, 0, 4]));

//Another Approach

// function missingPositive(arr) {
//   let set = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     set.add(arr[i]);
//   }
//   console.log(set)
//   for (let i = 1; i <= arr.length; i++) {
//     //loop run from 1 to n because we need to check for positive number only
//     if (!set.has(i)) {
//       return i;
//     }
//   }
// }
// console.log(missingPositive([5, 3, 1, 2, 7, -3, 0, 4]));
// console.log(missingPositive([3, 4, -1, 1]));

// 67.>>Matrix multiplication
// Note: The number of columns in the first matrix will always be equal to the number of rows in the second matrix
// function matrixMultiplication(n1, m1, n2, m2, matrix1, matrix2) {
//   let grid3 = new Array(n1);
//   for (let i = 0; i < n1; i++) {
//     grid3[i] = new Array(m2).fill(0);
//   }
//   for (let r = 0; r < n1; r++) {
//     for (let c = 0; c < m2; c++) {
//       for (let k = 0; k < m1; k++) {
////we can keep n2 also here in place of m1 coz row and column is equal that is 2
//         grid3[r][c] += matrix1[r][k] * matrix2[k][c];
//       }
//     }
//   }
//   return grid3;
// }
// console.log(
//   matrixMultiplication(
//     2,2,2,5,
//     [
//       [1, 4],
//       [5, 9],
//     ],
//     [
//       [1, 2, 8, 8, 4],
//       [3, 3, 6, 5, 2],
//     ]
//   )
// );

// 68.>>String Permutation
// function StringPermutation(n, s, permutation) {
//   let arr = new Array(n).fill(0);
//   //creating new array and filling with zero. we can also do arr=[], but this shall be filled with the loop
//   for (let i = 0; i < n; i++) {
//     //iterating over the sting
//     let ch = s.charAt(i);
//     //storing character in ch
//     let idx = permutation[i] - 1;
//     //reducing the index to fit the character properly
//     arr[idx] = ch;
//   }
//   return arr;
// }
// console.log(StringPermutation(4, "abcd", [2, 4, 3, 1]));

// **********************************************sorting*********************************************

// 69.>>Bubble Sort
// function BubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(BubbleSort([8, 4, 2, 6]));

// 70.>>Merge sort
// function Merge(A, B) {
//   let n = A.length,
//     m = B.length;
//   let arr = [];
//   let left = 0;
//   let right = 0;
//   while (left < n && right < m) {
//     if (A[left] <= B[right]) {
//       arr.push(A[left]);
//       left++;
//     } else {
//       arr.push(B[right]);
//       right++;
//     }
//   }
//   while (left < n) {
//     arr.push(A[left]);
//     left++;
//   }
//   while (right < m) {
//     arr.push(B[right]);
//     right++;
//   }

//   return arr;
// }
// console.log(Merge([3, 4, 5, 7, 8], [1, 3, 6, 7, 9, 11]));

// function mergeSort(n, newarr) {
//   while (n <= 1) {
//     return newarr;
//   }
//   let mid = Math.floor(n / 2);
//   let left = mergeSort(mid, newarr.slice(0, mid));
//   let right = mergeSort(n - mid, newarr.slice(mid));
//   return Merge(left, right);
// }
// console.log(mergeSort(5, [12, 8, 3, 0, 7]));

// 71.>>Find next greater number with same set of digits
// function reverse(arr, start, end) {
//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }

//   return arr;
// }
// console.log(reverse([1, 2, 4, 3], 0, 3));

// function nextGreater(n) {
//   let arr = n.toString().split("");
//   console.log(arr);
//   let i=arr.length-2;
//   while (i > 0) {
//     if (arr[i] < arr[i + 1]) {
//       break;
//     }
//     i--
//   }
//   if (i < 0) {
//     return -1;
//   }
//   let j = arr.length - 1;
//   while (j > 0) {
//     if (arr[j] > arr[i]) {
//       break;
//     }
//     j--;
//   }
//   [arr[i], arr[j]] = [arr[j], arr[i]];
//   reverse(arr, i + 1, arr.length-1);
//   return parseInt(arr.join(""))
// }
// console.log(nextGreater(1243));
