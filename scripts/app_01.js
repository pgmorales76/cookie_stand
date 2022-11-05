'use sctrict';

// proof of life
console.log('Hello, world!');

function randBetween(min, max) {
  return min + Math.random() * (max - min);
}

let seattle = {
  min_hourly_customer: 23,
  max_hourly_customer: 65,
  avg_cookie_per_customer: 6.3,
  sayHello: function () {
    console.log('Hello from Seattle!');
  },
  random_number: function (min_hourly_customer, max_hourly_customer, avg_cookie_per_customer) {
    return (Math.floor(randBetween(min_hourly_customer, max_hourly_customer) * avg_cookie_per_customer));
  },
};

console.log(seattle.random_number(seattle.min_hourly_customer, seattle.max_hourly_customer, seattle.avg_cookie_per_customer));

seattle.random_number();

// let tokyo = {
//   min_hourly_customer: 3,
//   max_hourly_customer: 24,
//   avg_cookie_per_customer: 1.2,
//   sayHello: function() {
//     console.log('Hello from Tokyo!');
//   }
//   random_number: function randBetween(min_hourly_customer, max_hourly_customer) {
//     return min_hourly_customer + Math.random() * (max_hourly_customer - min_hourly_customer);
//     console.log(random_number);
//   }
// };

// let dubai = {
//   min_hourly_customer: 11,
//   max_hourly_customer: 38,
//   avg_cookie_per_customer: 3.7,
//   sayHello: function() {
//     console.log('Hello from Dubai!');
//   }
//   random_number: function randBetween(min_hourly_customer, max_hourly_customer) {
//     return min_hourly_customer + Math.random() * (max_hourly_customer - min_hourly_customer);
//     console.log(random_number);
//   }
// };

// let paris = {
//   min_hourly_customer: 20,
//   max_hourly_customer: 38,
//   avg_cookie_per_customer: 2.3,
//   sayHello: function() {
//     console.log('Hello from Paris}!');
//   }
//   random_number: function randBetween(min_hourly_customer, max_hourly_customer) {
//     return min_hourly_customer + Math.random() * (max_hourly_customer - min_hourly_customer);
//     console.log(random_number);
//   }
// };

// let lima = {
//   min_hourly_customer: 2,
//   max_hourly_customer: 16,
//   avg_cookie_per_customer: 4.6,
//   sayHello: function() {
//     console.log('Hello from Lima!');
//   }
//   random_number: function randBetween(min_hourly_customer, max_hourly_customer) {
//     return min_hourly_customer + Math.random() * (max_hourly_customer - min_hourly_customer);
//     console.log(random_number);
//   }
// };

// // function randBetween(min, max) {
// //   return min + Math.random() * (max - min);
// // }
