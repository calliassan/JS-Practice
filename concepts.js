// / *******charAt vs squarebrackett******

// const str = "crio do";
// console.log(str.charAt(7));

// const str1 = "crio do";
// console.log(str1[7]);

// ***Replace****
// let str = "I like coffee";
// let newstr = str.replace("coffee", "tea");
// console.log(newstr);

// *********************************Shallowcopy and deepcopy*******************************

// const original = {
//   a: 1,
//   b: 2,
//   c: { ac: 5, bc: 6 },
//   d: function () {
//     console.log("Hello");
//   },
// };
// ******Mere Copy**********
// const copy = original;
// copy.c.ac = 10;
// console.log(original);

// ********Shallowcopy********

// const shallowcopy = { ...original };
// shallowcopy.b = 120;
// shallowcopy.c.ac = 20;
// console.log(original);

// *******deepcopy**********
// const deepcopy = JSON.parse(JSON.stringify(original))
// deepcopy.c.ac = 100;
// deepcopy.d=1000;
// console.log(original)
