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
  random_number: function (min_hourly_customer, max_hourly_customer, avg_cookie_per_customer) {
    return (Math.floor(randBetween(min_hourly_customer, max_hourly_customer) * avg_cookie_per_customer));
  },
};

console.log(seattle.random_number(seattle.min_hourly_customer, seattle.max_hourly_customer, seattle.avg_cookie_per_customer));

seattle.random_number();

let tokyo = {
  min_hourly_customer: 3,
  max_hourly_customer: 24,
  avg_cookie_per_customer: 1.2,
  random_number: function (min_hourly_customer, max_hourly_customer, avg_cookie_per_customer) {
    return (Math.floor(randBetween(min_hourly_customer, max_hourly_customer) * avg_cookie_per_customer));
  },
};

console.log(tokyo.random_number(tokyo.min_hourly_customer, tokyo.max_hourly_customer, tokyo.avg_cookie_per_customer));

tokyo.random_number();

let dubai = {
  min_hourly_customer: 11,
  max_hourly_customer: 38,
  avg_cookie_per_customer: 3.7,
  random_number: function (min_hourly_customer, max_hourly_customer, avg_cookie_per_customer) {
    return (Math.floor(randBetween(min_hourly_customer, max_hourly_customer) * avg_cookie_per_customer));
  },
};

console.log(dubai.random_number(dubai.min_hourly_customer, dubai.max_hourly_customer, dubai.avg_cookie_per_customer));

dubai.random_number();

let paris = {
  min_hourly_customer: 20,
  max_hourly_customer: 38,
  avg_cookie_per_customer: 2.3,
  random_number: function (min_hourly_customer, max_hourly_customer, avg_cookie_per_customer) {
    return (Math.floor(randBetween(min_hourly_customer, max_hourly_customer) * avg_cookie_per_customer));
  },
};

console.log(paris.random_number(paris.min_hourly_customer, paris.max_hourly_customer, paris.avg_cookie_per_customer));

paris.random_number();

let lima = {
  min_hourly_customer: 2,
  max_hourly_customer: 16,
  avg_cookie_per_customer: 4.6,
  random_number: function (min_hourly_customer, max_hourly_customer, avg_cookie_per_customer) {
    return (Math.floor(randBetween(min_hourly_customer, max_hourly_customer) * avg_cookie_per_customer));
  },
};

console.log(lima.random_number(lima.min_hourly_customer, lima.max_hourly_customer, lima.avg_cookie_per_customer));

lima.random_number();
