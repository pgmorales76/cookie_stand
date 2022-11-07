'use sctrict';

// proof of life
console.log('Hello, world!');

// hours of operation
let hours_of_operation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Use a method of that object to generate a random number of customers per hour.
function randBetween(min, max) {
  return min + Math.random() * (max - min);
}

let seattle = {
  // Store the min/max hourly customers, and the average cookies per customer, in object properties.
  min_hourly_customer: 23,
  max_hourly_customer: 65,
  avg_cookie_per_customer: 6.3,

  // Use a method of that object to generate a random number of customers per hour.
  random_number_of_customers: function (min_hourly_customer, max_hourly_customer, avg_cookie_per_customer) {
    return (Math.floor(randBetween(min_hourly_customer, max_hourly_customer) * avg_cookie_per_customer));
  },

  // Store the results for each location in a separate array… perhaps as a property of the object representing that location.
  simulated_amounts_of_cookies_purchased_for_seattle: [],

  // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random
  // number of customers generated.
  simulated_amounts_of_cookies_purchased: function () {
    for (let i = 0; i < hours_of_operation.length; i++) {
      let simulated_amount = this.random_number_of_customers(this.min_hourly_customer, this.max_hourly_customer) * this.avg_cookie_per_customer;
      console.log(simulated_amount);
      this.simulated_amounts_of_cookies_purchased_for_seattle.push(simulated_amount);
      console.log(this.simulated_amounts_of_cookies_purchased_for_seattle);
    }
  },

  // Calculate the sum of these hourly totals
  total_cookies_sold: 0,

  // Display the values of each array as unordered lists in the browser.
  display_values_for_seattle: function() {
    this.simulated_amounts_of_cookies_purchased();
    let seattle_display = document.getElementById('seattle');
    for (let i = 0; i < hours_of_operation.length; i++) {
      let list_item_element = document.createElement('li');
      list_item_element.innerText = `${hours_of_operation[i]}: ${this.simulated_amounts_of_cookies_purchased_for_seattle}`;
      seattle_display.appendChild(list_item_element);
    }
    let total_list_item_element = document.createElement('li');
    total_list_item_element.innerText = `Total: ${this.total_cookies_sold}`;
    seattle_display.appendChild(total_list_item_element);
  }
};

console.log(seattle.random_number_of_customers(seattle.min_hourly_customer, seattle.max_hourly_customer, seattle.avg_cookie_per_customer));
seattle.random_number_of_customers();
seattle.simulated_amounts_of_cookies_purchased();
seattle.display_values_for_seattle();

let tokyo = {
  min_hourly_customer: 3,
  max_hourly_customer: 24,
  avg_cookie_per_customer: 1.2,
  random_number_of_customers: function (min_hourly_customer, max_hourly_customer, avg_cookie_per_customer) {
    return (Math.floor(randBetween(min_hourly_customer, max_hourly_customer) * avg_cookie_per_customer));
  },

  simulated_amounts_of_cookies_purchased_for_tokyo: [],

  simulated_amounts_of_cookies_purchased: function () {
    for (let i = 0; i < hours_of_operation.length; i++) {
      let simulated_amount = this.random_number_of_customers(this.min_hourly_customer, this.max_hourly_customer) * this.avg_cookie_per_customer;
      console.log(simulated_amount);
      this.simulated_amounts_of_cookies_purchased_for_tokyo.push(simulated_amount);
      console.log(this.simulated_amounts_of_cookies_purchased_for_tokyo);
    }
  },
};

console.log(tokyo.random_number_of_customers(tokyo.min_hourly_customer, tokyo.max_hourly_customer, tokyo.avg_cookie_per_customer));
tokyo.random_number_of_customers();
tokyo.simulated_amounts_of_cookies_purchased();

let dubai = {
  min_hourly_customer: 11,
  max_hourly_customer: 38,
  avg_cookie_per_customer: 3.7,

  random_number_of_customers: function (min_hourly_customer, max_hourly_customer, avg_cookie_per_customer) {
    return (Math.floor(randBetween(min_hourly_customer, max_hourly_customer) * avg_cookie_per_customer));
  },

  simulated_amounts_of_cookies_purchased_for_dubai: [],

  simulated_amounts_of_cookies_purchased: function () {
    for (let i = 0; i < hours_of_operation.length; i++) {
      let simulated_amount = this.random_number_of_customers(this.min_hourly_customer, this.max_hourly_customer) * this.avg_cookie_per_customer;
      console.log(simulated_amount);
      this.simulated_amounts_of_cookies_purchased_for_dubai.push(simulated_amount);
      console.log(this.simulated_amounts_of_cookies_purchased_for_dubai);
    }
  },
};

console.log(dubai.random_number_of_customers(dubai.min_hourly_customer, dubai.max_hourly_customer, dubai.avg_cookie_per_customer));
dubai.random_number_of_customers();
dubai.simulated_amounts_of_cookies_purchased();

let paris = {
  min_hourly_customer: 20,
  max_hourly_customer: 38,
  avg_cookie_per_customer: 2.3,

  random_number_of_customers: function (min_hourly_customer, max_hourly_customer, avg_cookie_per_customer) {
    return (Math.floor(randBetween(min_hourly_customer, max_hourly_customer) * avg_cookie_per_customer));
  },

  simulated_amounts_of_cookies_purchased_for_paris: [],

  simulated_amounts_of_cookies_purchased: function () {
    for (let i = 0; i < hours_of_operation.length; i++) {
      let simulated_amount = this.random_number_of_customers(this.min_hourly_customer, this.max_hourly_customer) * this.avg_cookie_per_customer;
      console.log(simulated_amount);
      this.simulated_amounts_of_cookies_purchased_for_paris.push(simulated_amount);
      console.log(this.simulated_amounts_of_cookies_purchased_for_paris);
    }
  },
};

console.log(paris.random_number_of_customers(paris.min_hourly_customer, paris.max_hourly_customer, paris.avg_cookie_per_customer));
paris.random_number_of_customers();
paris.simulated_amounts_of_cookies_purchased();

let lima = {
  min_hourly_customer: 2,
  max_hourly_customer: 16,
  avg_cookie_per_customer: 4.6,

  random_number_of_customers: function (min_hourly_customer, max_hourly_customer, avg_cookie_per_customer) {
    return (Math.floor(randBetween(min_hourly_customer, max_hourly_customer) * avg_cookie_per_customer));
  },

  simulated_amounts_of_cookies_purchased_for_lima: [],

  simulated_amounts_of_cookies_purchased: function () {
    for (let i = 0; i < hours_of_operation.length; i++) {
      let simulated_amount = this.random_number_of_customers(this.min_hourly_customer, this.max_hourly_customer) * this.avg_cookie_per_customer;
      console.log(simulated_amount);
      this.simulated_amounts_of_cookies_purchased_for_lima.push(simulated_amount);
      console.log(this.simulated_amounts_of_cookies_purchased_for_lima);
    }
  },
};

console.log(lima.random_number_of_customers(lima.min_hourly_customer, lima.max_hourly_customer, lima.avg_cookie_per_customer));
lima.random_number_of_customers();
lima.simulated_amounts_of_cookies_purchased();

// Display the values of each array as unordered lists in the browser.
// Remember 4 Steps of DOM Manipulation!
// How to Create an HTML Element With JS (Thanks, Profs. Adam & Ben!)
// 1. Select the parent element - document.getElementById()
// 2. Create a new element - document.createElement()
// 3. Fill created element with 'stuff' - .innerText  <--- this is a PROPERTY!!!
// 4. Append the created element to the parent element - document.appendChild()

// let display_values = document.getElementById('orders');
// console.log('the parentElement is:', display_values);

// let display_values_for_unordered_list_items = document.createElement('li');
// console.log(display_values_for_unordered_list_items);

// display_values_for_unordered_list_items.innerText = seattle.simulated_amounts_of_cookies_purchased_for_seattle,
// tokyo.simulated_amounts_of_cookies_purchased_for_tokyo, dubai.simulated_amounts_of_cookies_purchased_for_dubai,
// paris.simulated_amounts_of_cookies_purchased_for_paris, lima.simulated_amounts_of_cookies_purchased_for_lima; // properties do NOT use parentheses
// console.log(display_values_for_unordered_list_items.innerText);

// display_values.appendChild(display_values_for_unordered_list_items); // methods DO use parentheses
