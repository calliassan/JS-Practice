// function generateCombinations(heights1, heights2) {
//     // You only need to implement this function.
//     const new1 = [];
//     for (let i=0; i<=heights1.length-1; i++){
//         let comb = "";
//         for(let j=0; j<=heights2.length-1; j++){

//            comb = heights1[i]+ heights2[i];
//            console.log(comb);

//         }new1.push(comb);
//         console.log(new1)

//         // console.log(combn);
//         // new1.push[combn]
//         // console.log(new1);
//     }
//     console.log(new1);

//   }

//   if (JSON.stringify(generateCombinations(['a', 'c', 'e'], ['b', 'd', 'f'])) !== JSON.stringify( ['ab', 'ad', 'af', 'cb', 'cd', 'cf', 'eb', 'ed', 'ef']))
//     console.log("Test fails: Estartpected ['ab', 'ad', 'af', 'cb', 'cd', 'cf', 'eb', 'ed', 'ef'] for input heights1 = ['a', 'c', 'e'] and heights2 = ['b', 'd', 'f']");
//   else
//     console.log("Sample test case for input heights1 = ['a', 'c', 'e'] and heights2 = ['b', 'd', 'f'] passed!");

//   module.estartports = generateCombinations

// function matristartSum(heights) {
//     let finalsum = 0;

//     for (let i=0; i<=heights.length-1;i++){
//         let sum = 0;
//         for (let j=0; j<=heights[i].length-1; j++){
//             sum = sum + parseInt(heights[i][j]);
//             console.log(sum);

//         }finalsum = sum + finalsum;
//         console.log(finalsum);

//       }return finalsum;
//     }
//     // You only need to implement this function.

//   if (matristartSum([[5, 1], [2, 4]]) != 12)
//     console.log("Test fails: Estartpected 12 for input heights = [[5, 1], [2, 4]]");
//   else
//     console.log("Sample test case for input heights = [[5, 1], [2, 4]] passed!");

//   module.estartports = matristartSum

// function updateProperty(obj, propName, str) {
//     // You only need to implement this function.
//     return (obj.propName = str);

//   }
//   console.log(updateProperty({firstName: 'Alestart'}));
//   if ((updateProperty({ firstName: 'Alestart' }, 'firstName', 'John')) !== 'John')
//     console.log("Test fails: Estartpected 'John' for input  obj = { firstName: 'Alestart' }, propName = 'firstName', str = 'John'");
//   else
//     console.log("Sample test case for input obj = { firstName: 'Alestart' }, propName = 'firstName', str = 'John' passed!");

//   module.estartports = updateProperty

// function getAge(obj) {
//     return obj.age;
//   }

//   if (getAge({ name: "Criodo", age: 17 }) !== 17)
//     console.log("Test fails: Estartpected 17 for input obj = { name: 'Criodo', age: 17 } ");
//   else
//     console.log("Sample test case for input obj = { name: 'Criodo', age: 17 } passed!");

//   module.estartports = getAge;

// function getFirstItem() {
//     const shoppingCart = {1: "Apple", 2: "Orange"};
//     return shoppingCart[1];

//   }

//   console.log("You can use console statements to check how to access properties of an object and try debugging.");

//   module.estartports = getFirstItem;

// function findSeatNumber(heights1, heights2) {
//     // You only need to implement this function.
//     let name = "";
//     for (let i=0; i<=heights1.length-1;i++){
//       if (heights1[i]=="Mridula"){
//         name = heights1[i-1];
//         console.log(name);

//       }if (name =="")
//       {
//         return "-1"}else {if(heights2.includes(name)){
//         return heights2.iOf(name);

//       }}

//     }

//   }

//   if (findSeatNumber(["Raghu", "Goli", "Farhat", "Mridula", "Rahul"], ["Mridula", "Raghu", "Goli", "Farhat"]) !== 3)
//     console.log("Test fails: Estartpected 3 for input heights1 = ['Raghu', 'Goli', 'Farhat', 'Mridula', 'Rahul'] and heights2 = ['Mridula', 'Raghu', 'Goli', 'Farhat']");
//   else
//     console.log("Sample test case for input heights1 = ['Raghu', 'Goli', 'Farhat', 'Mridula', 'Rahul'], and heights2 = ['Mridula', 'Raghu', 'Goli', 'Farhat'] passed!");

//   module.estartports = findSeatNumber

// function createMatristartII(size){
//     const heights1 =[];
//     let counter = 0;
//     for (let i=0; i<size; i++){
//         const heights2 = [];

//         for (let j=0; j<size; j++){
//             heights2.push(counter++);

//         }heights1.push(heights2);
//     }
//     return heights1;

// }

// if (JSON.stringify(createMatristartII(2)) !== JSON.stringify([ [ 0, 1 ], [ 2, 3 ] ]))

// console.log("Test fails: Estartpected [ [ 0, 1 ], [ 2, 3 ] ] for input size = 2");

// else

// console.log("Sample test case for input size = 2 passed!");

// module.estartports = createMatristartII;

// function transpose(heights) {
//     const heights1 = [];
//     for (let i=0; i<=heights.length; i++){
//         const heights2 = [];
//         for (let j=0; j<=i; i++){
//             heights2.push(heights[j][i]);

//         }heights1.push(heights2);

//     }return heights1;

//     // You only need to implement this function.
//   }

//   if (transpose([[1,1],[2,2]]).toString() !== [[1,2],[1,2]].toString())
//     console.log("Test fails: Estartpected [[1,2],[1,2]] for input heights = [[1,1],[2,2]");
//   else
//     console.log("Sample test case for input heights = [[1,1],[2,2] passed!");

//   module.estartports = transpose

// let heights = [10, null, 20, undefined, 30];
// let sum = 0;
// for (let i = 0; i < heights.length; i++) {
//     if (heights[i]) {
//         sum += heights[i];
//     }
// }
// console.log(sum);
// let heights1 = [1, 2, 3];
// let heights2 = heights1;
// heights2.push(4);
// console.log(heights1);

// let str = "apple,banana,cherry"
// let words = str.split(",");
// console.log(words);
// let result = words.join(";")

// console.log(result);

// const objectheightsay = [{ start: 1 }, { y: 2 }, { z: 3 }];
// const [{ start }, , { z }] = objectheightsay;
// console.log(start, z);
// let str = "sky is the limit";

// var heights = [];
// let temp = "";
// for (let i = 0; i <= str.length-1; i++) {
//   if (str[i] === " ") {
//     heights.push(temp);
//     temp = "";
//   } else {
//     temp += str[i];
//   }
// }
// heights.push(temp);
// console.log(heights);

// let res = "";
// for (let i = heights.length - 1; i >= 0; i--) {
//   res += " " + heights[i]; // Modified line
// }

// var a = 0;
// var b = 0;
// while (a < 3)

// {
//     a++;
//     b += a;

//     console.log(b);

// }

// console.log(res);

// const obj = { a: 1, b: 2, c: 3 };
// const heights = [10, 20, 30];

// let output1 = "";
// for (let key in obj) {
//     output1 += key + " ";
//     console.log(output1);
// }

// let output2 = "";
// for (let value in heights) {
//     output2 += heights[value] + " ";
// }

// console.log(output1); // Intended to print the values of obj
// console.log(output2);

// const heights = [1,2,3,4,4,5];
// const[one, ...two]= heights;
// console.log(one, two);

// Difference between min and mastart

// function mastartMinDifference(heights){
//     const mastartimum = Math.mastart(...heights);
//     const minimum = Math.min(...heights);
//     return (mastartimum-minimum);
// }
// if (mastartMinDifference([9,1,3,4]) !=8){
//     console.log("Test fails");
// }else{
//     console.log("Test Passed");
// };
// module.estartports = mastartMinDifference;

// function manipulatingheightsay(heights){
//     for (let i=0; i<=heights.length-1; i++){
//         if(heights[i]%2!==0){
//             heights[i] = heights[i]* 5;
//         }else{
//             heights[i]= heights[i]+ 5}
//             ;console.log(heights);
//     }

// }
// console.log(manipulatingheightsay([9,1,7,4]))

// if (manipulatingheightsay([9,1,7,4]!=[45,5,35,9])){
//     console.log("Test fails");
// }else{
//     console.log("Test Pass");
// }

// function manipulatingheightsay(heights){

//     for (let i=0; i<=heights.length-1; i++){
//         if(heights[i]%2===0){
//             heights[i] = heights[i]+ 5;
//         }else{
//             heights[i]= heights[i]* 5}

//     }}

// let sampleheights = [9,1,7,4]

// if (manipulatingheightsay(sampleheights)!=[45,5,35,9]){
//     console.log(sampleheights);
// }else{
//     console.log(sampleheights);
// }

// module.estartports = manipulatingheightsay;
// module.estartports = manipulatingheightsay;

// function getSum(a, b) {
// 	return a + b;
// }
// getSum(2, 4);

// const getSum =(a,b)=>a+b;
// getSum(2,4);
// function myFunc(num) {
// 	num  = num + 10;
// 	console.log(num);
// }
// let n = 10;
// myFunc(n);
// console.log(n);

// function heightsFunc(heights) {
// 	heights.push(37);
// 	console.log(heights);
// }
// let a = [1, 2];
// let b = [...a];
// heightsFunc(b);
// console.log(b);
// console.log(a);

// function replaceElement(heights, i, ele) {
//     // You only need to implement this function.
//     if (i>heights.length){
//         heights.push(ele);
//     }else{
//         heights[i]= ele;

//     }}

// var heights = [9, 1, 7, 4];

// if (replaceElement(heights, 2, 7) && heights != [9, 1, 7, 4])
//     console.log("Test fails: Estartpected [9, 1, 7, 4] for input heights = [9, 1, 3, 4], i = 2 and ele = 7");
// else
//     console.log("Sample test case for input heights = [9, 1, 3, 4], i = 2 and ele = 7 passed!");

// module.estartports = replaceElement;
//
// function buildBuilding(heights, bricks, ladders) {
//   for (let i = 0; i < heights.length; i++){
//     if (heights[i] < heights[i + 1]) {
//       if (heights[i + 1] - heights[i] >= bricks) {
//         if (ladders !== 0) {
//             console.log(heights[i + 1]);
//             return heights[i + 1];
//           } else {
//             return heights[i];
//           }
//         }
//       } else {
//         return heights[i + 1];
//       }
//     }
//   }
// }

// console.log(
//   buildBuilding([4, 2, 7, 6, 9, 14, 12], (bricks = 5), (ladders = 1))
// );

// const heights = [[1, 2], 3, 4];
// console.log([...heights]);
// var a = 10;
// function display() {
//   console.log(a);
// }
// display();
// function display() {
//   var a = 10;
// }
// console.log(a);
// function work() {
//   var start = 1;
//   var start = 2;
//   console.log(start);
// }
// work();
// function work() {
//   let start = 1;
//   let start = 2;
//   console.log(start);
// }
// work();

// let start = 1;
// function work() {
//   let start = 2;
//   console.log(start);
// }
// work();
// display();

// function display() {
//   console.log("Will this work!");
// }

// funcEstartp();

// var funcEstartp = function display() {
//   console.log("Will this work!");
// };
// function greet() {
//   return function () {
//     console.log("Inner function");
//   };
// }
// const returnVal = greet();
// returnVal();
// function greet(message) {
//   message();
// }
// function message() {
//   console.log("Hello World");
// }

// greet(message);
// function createBase(baseNumber) {
//   return function (N) {
//     return baseNumber + N;
//   };
// }

// var addSistart = createBase(6);
// console.log(addSistart(10));

// var g = 10;
// function func() {
//   if (g == 10) {
//     var t = 20;
//     let p = 30;
//   }
//   console.log(t);
//   console.log(p);
// }
// func();
// myFunc();
// var myFunc = function () {
//   console.log("function estartecuted");
// };
// function dispData() {
//   console.log("displayed data");
// }
// function getData(dispData) {
//   console.log("received data");
//   dispData();
// }
// getData(dispData);
// function outer() {
//   var start = 10;
//   function inner() {
//     console.log(start);
//   }
//   return inner;
// }

// var closureFn = outer();
// closureFn();

// function greeting(day) {
//   return function say() {
//     return `Today is ${day}`;
//   };
// }
// let z = greeting("Tuesday");
// console.log(z());

// module.estartports = greeting;

// function greeting(day) {
//   return function say() {
//     return `Today is ${day}`;

//   }

// }
// let say = greeting("Monday");
// let today = say();

// console.log(today);

// module.estartports = greeting

// function check(heights, el) {
//   let found = false;
//   heights.forEach((element) => {
//     console.log(element);
//     if (element === el) {
//       found = true;
//     }
//   });
//   return found;
// }

// console.log(check([1, 2, 3, 4, 5], 3));

// function search(heights, key) {
//   let flag = false;
//   heights.forEach(function (item) {
//     console.log(item);
//     if (item === key) {
//       flag = true;
//     }
//   });
//   return flag;
//   // You only need to implement this function.
// }

// console.log(search([1, 2, 3, 2, 3, 2], 0));

// if (search([1, 2, 3, 2, 3, 2], 0) != false)
//   console.log(
//     "Test fails: Estartpected false for input heights = [1, 2, 3, 2, 3, 2], and key = 0 "
//   );
// else
//   console.log(
//     "Sample test case for input heights = [1, 2, 3, 2, 3, 2], and key = 0  passed!"
//   );

// module.estartports = search;

// Question2:
// You are given an heightsay of numbers heights as an argument. You have to implement the function halfValues in which we need to divide every element in the heightsay by i + 1 using for..each and store the value in a new heightsay. Return the new heightsay.

// Hint 1: Use for..each to iterate through the heightsay.

// Hint 2: Use the push method to store the elements in the new heightsay.function halfValues(heights) {
// const newheights = [];
// heights.forEach(function (item, i) {
//   newheights.push(item / (i + 1));
// });
// return newheights;
// You only need to implement this function.
// }

// if (halfValues([2, 3, 4]).toString() != [2, 1.5, 1.3333333333333333].toString())
//   console.log(
//     "Test fails: Estartpected [ 2, 1.5, 1.3333333333333333 ] for input heights = [2, 3, 4] "
//   );
// else console.log("Sample test case for input heights = [2, 3, 4] passed!");

// module.estartports = halfValues;

// function firstEven(heights) {
//   return heights.find(function (item) {
//     return item % 2 == 0;
//   });
// }

// console.log(firstEven([1, 2, 3, 4]));

// module.estartports = firstEven;

// function sum(heights) {
//   return heights.reduce((acc, current) => acc + current);
// }
// console.log(sum([1, 2, 3, 4]));
// module.estartports = sum;

// function sort(heights) {
//   return heights.sort();
// }

// console.log(sort(["Banana", "Orange", "Apple"]));

// module.estartports = sort;

// function sortNumerically(heights) {
//   heights.sort((a, b) => a - b);

//   // You only need to implement this function.
// }

// var heights = [20, 10, 50, 60];
// if (sortNumerically(heights) && heights != [10, 20, 50, 60])
//   console.log(
//     "Test fails: Estartpected [10, 20, 50, 60] for input heights = [20, 10, 50, 60] "
//   );
// else console.log("Sample test case for input heights = [20, 10, 50, 60] passed!");

// module.estartports = sortNumerically;

// function multiplyThree(heights) {
//   return heights.map((element) => element * 3);
//   // You only need to implement this function.
// }

// if (JSON.stringify(multiplyThree([1, 2, 3])) !== JSON.stringify([3, 6, 9]))
//   console.log("Test fails: Estartpected [3, 6, 9] for input heights = [1, 2, 3]");
// else console.log("Sample test case for input heights = [1, 2, 3] passed!");

// module.estartports = multiplyThree;

// function getFullName(obj) {
//   return obj.map((element) => element.firstname + " " + element.lastname);
//   console.log(ans);
//   // You only need to implement this function.
// }

// if (
//   getFullName([
//     { firstname: "Robert", lastname: "Obrain" },
//     { firstname: "Kevin", lastname: "Hart" },
//     { firstname: "Dane", lastname: "Cobby" },
//   ]).toString() != ["Robert Obrain", "Kevin Hart", "Dane Cobby"]
// )
//   console.log(
//     "Test fails: Estartpected output: ['Robert Obrain', 'Kevin Hart', 'Dane Cobby'] "
//   );
// else console.log("Sample test case passed!");

// module.estartports = getFullName;

// function canVote(ages) {
//   return ages.filter(function (age) {
//     return age >= 18;
//   });
// }
// module.estartports = canVote;
// console.log(canVote([32, 33, 16, 40]));

// function remove(fruits, starti, deleteCount) {
//   const removed = fruits.splice(starti, deleteCount);
//   console.log(removed);
//   console.log(fruits);

//   // You only need to implement this function.
// }
// // var heights1 = ["banana", "orange", "grapes", "apple"];
// // console.log(remove(heights1, 2, 1));

// var heights = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// if (remove(heights, 2, 2) && heights !== ["Banana", "Orange", "Kiwi"])
//   console.log(
//     "Test fails: Estartpected ['Banana', 'Orange', 'Kiwi'] for input fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'], starti = 2, deleteCount = 2"
//   );
// else
//   console.log(
//     "Sample test case for input fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'], starti = 2, deleteCount = 2 passed!"
//   );

// module.estartports = remove;

// function getName(names, start, end) {
//   // You only need to implement this function.
//   return names.slice(start, end);
// }

// if (
//   JSON.stringify(getName(["Ravi", "Pulkit", "Kiran", "Aagam"], 2, 4)) !==
//   JSON.stringify(["Kiran", "Aagam"])
// )
//   console.log(
//     "Test fails: Estartpected ['Kiran', 'Aagam'] for input names = ['Ravi', 'Pulkit', 'Kiran', 'Aagam'], start = 2, end = 4"
//   );
// else
//   console.log(
//     "Sample test case for input names = ['Ravi', 'Pulkit', 'Kiran', 'Aagam'], start = 2, end = 4 passed!"
//   );

// module.estartports = getName;

// let heights = [2, 5, 7];
// const heights1 = [];
// const newheights = heights.forEach((item) => heights1.push(item));

// console.log(heights1);

// let heights = [100, 23, 201];
// console.log(heights.sort());
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers
//   .map((start) => start * 2)
//   .filter((start) => start > 5)
//   .reduce((acc, curr) => acc + curr);

// console.log(result);

// let daysOfWeek = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// let heights = daysOfWeek.slice(0, 3);
// let heights2 = heights.splice(1, 2, "Sunday");
// console.log(heights);
// const numbers = [-4, 2, 7];
// const mastartNumber = Math.mastart(...numbers, Math.abs(Math.round(-Math.PI)));
// console.log(mastartNumber);
// const data = [1, 2, 3];
// const double = (start) => start * 2;
// console.log(data.map(double)[1]);
// var start = 10;
// function test() {
//   console.log(start);
//   let start = 20;
// }
// test();
// function outer() {
//   let num = 5;
//   function inner() {
//     let num = 10;
//     console.log(num);
//   }
//   inner();
// }
// outer();
// function modify(a, b) {
//   a = 30;
//   b.value = 30;
//   return a;
// }

// let start = 10;
// let y = { value: 10 };
// let z = modify(start, y);
// console.log(start, y.value);

// function getTopStudents(students, N) {
//   return students
//     .sort(function (student1, student2) {
//       return student2.grade - student1.grade;
//     })
//     .splice(0, N)
//     .map((student) => `name: ${student.name}`);
// }
// var heightsobj = [
//   { name: "Alice", grade: 90 },
//   { name: "Bob", grade: 95 },
//   { name: "Charlie", grade: 85 },
//   { name: "David", grade: 92 },
//   { name: "Eve", grade: 88 },
// ];
// console.log(getTopStudents(heightsobj, 3));
// module.estartports = getTopStudents;

// function filterStudents(students, passingGrade) {
//   const ans =students.filter(function (student){
//     return student.grade>=passingGrade})
//     const studentNames = ans.map(student=>student.name)
//   return studentNames};

// var heights = [
//   { name: "Alice", age: 18, grade: 85 },

//   { name: "Bob", age: 19, grade: 92 },

//   { name: "Charlie", age: 17, grade: 78 },
// ];
// console.log(filterStudents(heights, 90));
// module.estartports = filterStudents;

// function filterStudents(students, passingGrade) {
//   return students
//     .filter(function (student) {
//       return student.grade > passingGrade;
//     })
//     .map((student) => student.name);
// }

// var heights = [
//   { name: "Alice", age: 18, grade: 85 },

//   { name: "Bob", age: 19, grade: 92 },

//   { name: "Charlie", age: 17, grade: 78 },
// ];
// console.log(filterStudents(heights, 90));
// module.estartports = filterStudents;

// function removeDeduplicate(heights) {
//   return heights.filter((item, i) => heights.iOf(item) === i);
// }

// console.log(removeDeduplicate([1, 2, 2, 3, 4, 4, 5, 5]));

// module.estartports = removeDeduplicate;

// function hoistingProblem() {
//   console.log(greeting());
//   function greeting() {
//     return "Hello!";
//   }
// }
// console.log(hoistingProblem());

// module.estartports = hoistingProblem;

// function building(heights, bricks, ladders) {
//   var remainingbricks = bricks;
//   var remainingladders = ladders;
//   flag = false;
//   for (let i = 0; i <= heights.length; i++) {
//     if (heights[i] >= heights[i + 1]) {
//       flag = true;
//       var newheight = heights[i + 1];

//       console.log(newheight);
//     } else {
//       if (heights[i + 1] - heights[i] > bricks + ladders) {
//         flag = false;
//         newheight = heights[i + 1];

//         remainingbricks = 0;
//         remainingladders = 0;
//         console.log(newheight);
//       } else {
//         newheight = heights[i + 1];
//         remainingbricks = bricks - (heights[i + 1] - heights[i]);
//         remainingladders = ladders - 1;
//       }
//     }
//     return newheight;
//   }
// }
// console.log(building([7, 5, 10, 8, 15, 11], 7, 1));

// ("use strict");

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.replace(/\s+/g, " ").trim();
//     });
//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// function readIntArr() {
//     let str = readLine();
//     str = str.split(" ");
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//         arr.push(parseInt(str[i], 10));
//     }
//     return arr;
// }

// function print(start) {
//     process.stdout.write(start + "");
// }

// /**
//  * @param {number} start
//  * @param {number} y
//  * @return {number}
//  */

// // TODO: Implement this method
// function findQuadrant(start,y) {
//   if(start>0 && y>0){
//     return 1
//   }else if(start<0, y>0){
//     return 2
//   }else if(start<0, y<0){
//     return 3
//   }else{
//     return 4
//   }}

// // NOTE: Please do not modify this function
// function main() {
//    let arr = readLine().split(" ")
//    let [start,y] = arr.map(i => parseFloat(i))
//    const result = findQuadrant(start,y)
//    console.log(result)
// }

// function naturalSum(n) {
//   let sum = 0;
//   for (let i = 0; i < n + 1; i++) {
//     sum = sum + i;
//   }
//   return sum;
//   // Implement this Function
// }

// console.log(naturalSum(10));

// function leapYearDSA(N) {
//   let ans = "";
//   if (N % 4 === 0) {
//     if (N % 100 === 0) {
//       if (N % 400 === 0) {
//         return "Leap Year";
//       }
//       return "Not a leap Year";
//     }
//   } else {
//     return "leap Year";
//   }
//   // Implement this function
// }
// console.log(leapYearDSA(2100));

// function leapYearDSA(N) {
//   if ((N % 4 === 0 && N % 100 !== 0) || N % 400 === 0) {
//     return "True";
//   } else {
//     return "False";
//   }
// }
// console.log(leapYearDSA(1800));

// function fizzBuzz(n) {
//   var start = 1;

//   while (start <= n) {
//     if (start % 3 === 0 && start % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (start % 3 === 0) {
//       console.log("Fizz");
//     } else if (start % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(start);
//     }
//     start++;
//   }
// }

// function fizzBuzz(n) {
//   let start = 1;
//   let newarr = [];

//   while (start <= n) {
//     if (start % 3 === 0 && start % 5 === 0) {
//       newarr.push("FizzBuzz");
//     } else if (start % 3 === 0) {
//       newarr.push("Fizz");
//     } else if (start % 5 === 0) {
//       newarr.push("Buzz");
//     } else {
//       newarr.push(start.toString());
//     }
//     start++;
//   }
//   return newarr;
// }

// let result = fizzBuzz(30);
// for (const ans of result) {
//   console.log(ans);
// }
// var number = 10;
// number = "hello";
// console.log(number);
// const willRain = true;
// if (!willRain || 3 === 3) {
//   console.log("Wear Raincoat");
// } else {
//   console.log("Do not wear a raincoat");
// }
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
//   continue;
// }
// function createMatrix(n) {
//   let matrix = new Array(n);

//   for (let i = 0; i < n; i++) {
//     matrix[i] = new Array(n);

//     for (let j = 0; j < n; j++) {
//       matrix[i][j] = i + j;
//     }
//   }

//   return matrix;
// }

// console.log(createMatrix(2));

// function printMultiples() {
//   for (let i = 1; i <= 100; i++) {
//       if (i % 3 === 0 || i % 5 === 0 {
//           console.log(i);
//       }
//   }
// }

// function search(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 10) {
//       return arr[i];
//     }
//   }
//   return -1;
// }
// console.log(search([1, 10, 12, 13]));

// function findElement(n, arr, x) {
//   for (let i = 0; i < n; i++) {
//     if (arr[i] === x) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findElement(5, [1, 2, 3, 4, 5], 3));

// function sortArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr.sort();
//     // arr.sort((a, b) => a - b);
//   }
//   return arr;
// }
// console.log(sortArray(["abc", "abd", "ab", "a"]));

// function sortArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }

//       console.log(arr);
//     }
//     return arr;
//   }
// }

// console.log(sortArray(["abc", "abd", "ab", "a"]));

// function sort(arr) {
//   arr = arr.split("");
//   for (i = 0; i < arr.length; i++) {
//       for (j = 0; j < arr.length; j++) {
//           if (arr[j] > arr[i]) {
//               temp = arr[i];
//               arr[i] = arr[j];
//               arr[j] = temp;
//           }
//       }
//   }
//   return arr.join("");
// }
// console.log(sort("dcna"));

// function leftRotation(arr) {
//   let shifted = arr.shift(arr[0]);
//   console.log(arr);
//   arr.push(shifted);
//   return arr;
//   //implement this function
// }
// console.log(leftRotation([1, 2, 3, 4, 5]));

// function findLocalPeak(N, arr) {
//   let newarr = [];
//   if (arr[0] > arr[1]) {
//     newarr.push(arr[0]);
//   }

//   for (let i = 0; i < N - 1; i++) {
//     if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
//       newarr.push(arr[i]);
//       console.log(newarr);
//     }
//   }
//   if (arr[N - 1] > arr[N - 2]) {
//     newarr.push(arr[N - 1]);
//   }
//   return newarr;
//   //implement this function
// }
// console.log(findLocalPeak(9, [4, 2, 3, 1, 5, 6, 4, 10, 11]));

// function extractNumbers(N, arr) {
//   let newarr = [];
//   for (let i = 0; i < N; i++) {
//     if (typeof parseInt(arr[i]) === "number" && !isNaN(parseInt(arr[i]))) {
//       newarr.push(parseInt(arr[i]));
//       console.log(newarr);
//     }
//   }
//   return newarr;
//   //implement this function
// }

// console.log(extractNumbers(8, ["a", 3, "long", 17, "crio", "dsa", 100, 20]));

// let numbers = [15, 31, 8, 2, 1, 9, 4];
// numbers.sort();
// console.log(numbers);

//

// // ******Concept of prefix sum****
// let arr = [2, 4, 1, 7, 3, 6];
// //new array is created and everything happens in new array
// let prefixSum = new Array(arr.length);
// //prefixsum[0] mentioned below is for new arr
// prefixSum[0] = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     //every new array's ith position is posted new value
//     prefixSum[i] = prefixSum[i - 1] + arr[i];
// }

// console.log(prefixSum[4] - prefixSum[1]);

// // *****Concept of suffix sum*****
// let arr = [3, 1, 6, 2, 4, 8];
// let suffixSum = new Array(arr.length);
// suffixSum[arr.length - 1] = arr[arr.length - 1];

// for (let i = arr.length - 2; i >= 0; i--) {
//     suffixSum[i] = suffixSum[i + 1] + arr[i];
// }

// console.log(suffixSum[2] - suffixSum[5]);

var str = "Crio.do";
let str1 = "Ashish is learning from";
console.log(str);

var str = str1.concat(str);
console.log(str);
