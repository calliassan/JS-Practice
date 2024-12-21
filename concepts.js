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

// *******************************Promise***************************************************

//callback hell example
// createorder(cart, function (orderid) {
//   proceedopayment(orderid, function (paymentinfo) {
//     showordersummary(paymentinfo, function (paymentinfo) {
//       updatewalletbalence(paymentinfo);
//     });
//   });
// });

// //how to remove the above inversion of control issue
// //below is the promise chaining
// createorder(cart).then(function (orderid) {
//   return proceedopayment(orderid).then(function (paymentinfo) {
//     return showordersummary(paymentinfo).then(function (paymentinfo) {
//       return updatewalletbalence(paymentinfo);
//     });
//   });
// });

// eg>>>
// const API = "https://jsonplaceholder.typicode.com/posts";
// const posts = fetch(API);
// console.log(posts);
// posts.then(function (data) {
//   console.log(data.json());
// });

// *********************************Promise construction*********************************************

//in above example, createorder(cart) is a promise we called, now how to create the promise?

// const cart = ["shoes", "pants", "Kurtha"];
// const promise = createOrder(cart);
// promise
//   .then(function (orderid) {
//     console.log(orderid);
//     // proceedtopayment();
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// ///now, producing promise / creation of promise

// function validatecart(cart) {
//   return false; //change this to false to see error and vice versa
// }
// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validatecart(cart)) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     const orderid = "123"; //getiing the order id by calling or how so ever
//     if (orderid) {
//       setTimeout(() => {
//         resolve(orderid);
//       }, 5000);
//     }
//   });
//   return pr;
// }

// Promise construction

// ***************************************Promise perfect example**********************
// const cart = ["kurtha", "shoes", "tie"];
// const promise = createcart(cart);
// promise
//   .then(function (orderid) {
//     console.log(orderid);
//     return orderid; //we return orderid here which will go down to proceedtopay;
//   })
//   .then(function (orderid) {
//     //orderid passed here whoch was returned from above
//     return proceedtopay(orderid);
//   })
//   .then(function (payinfo) {
//     console.log(payinfo);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// function createcart(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validcart) {
//       const err = new Error("Invalid cart");
//       reject(err);
//     } else {
//       const idfromdatabase = "12345";
//       if (idfromdatabase) {
//         setTimeout(() => {
//           resolve(idfromdatabase);
//         }, 5000);
//       }
//     }
//   });
//   return pr;
// }

// function proceedtopay(orderid) {
//   //   const pr = new Promise(function (resolve, reject) {
//   //     setTimeout(() => {
//   //       resolve("Payment successful");
//   //     }, 5000);
//   //   });
//   //   return pr;
//   //instead of above we can also just do like;
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("Payment successful");
//     }, 5000);
//   });
// }

// function validcart(cart) {
//   if (cart.length > 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
