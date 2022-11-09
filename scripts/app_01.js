'use sctrict';

// proof of life
console.log('Hello, world!');

// hours of operation
let hours_of_operation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Use a method of each Store constructor to generate a random number of customers per hour.
// For this, you need to use Constructor.prototype.method
function randBetween(min, max) {
  return Math.ceil(Math.random() * (max - min + 1) + min);
}

// Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the
// ‘new’ keyword, it creates a new instance.
function Store(location, min_hourly_customer, max_hourly_customer, avg_cookie_per_customer) {
  this.location = location;
  this.min_hourly_customer = min_hourly_customer;
  this.max_hourly_customer - max_hourly_customer;
  this.avg_cookie_per_customer = avg_cookie_per_customer;
  // Store the results for each location in a separate array… perhaps as a property of the Constructor representing that location.
  this.simulated_amounts_of_cookies_purchased = [];
  // Calculate the sum of these hourly totals
  this.total_cookies_sold = 0
};

// Use a method of that constructor to generate a random number of customers per hour.
Store.prototype.random_number_of_customers = function (min_hourly_customer, max_hourly_customer) {
let randomNum = randBetween(min_hourly_customer, max_hourly_customer);
console.log(randomNum);
return (Math.floor(randomNum));
};

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random
// number of customers generated.
Store.prototype.simulated_amounts_of_cookies_purchased = function () {
  for (let i = 0; i < hours_of_operation.length; i++) {
    let simulated_amount = Math.round(this.random_number_of_customers(this.min_hourly_customer, this.max_hourly_customer) * this.avg_cookie_per_customer);
    console.log(simulated_amount);
    this.simulated_amounts_of_cookies_purchased.push(simulated_amount);
    this.total_cookies_sold += simulated_amount;
    console.log(this.simulated_amounts_of_cookies_purchased);
  }
},

// Display the values of each array as unordered lists in the browser.
// Remember 4 Steps of DOM Manipulation!
// How to Create an HTML Element With JS (Thanks, Profs. Adam & Ben!)
// 1. Select the parent element - document.getElementById()
// 2. Create a new element - document.createElement()
// 3. Fill created element with 'stuff' - .innerText  <--- this is a PROPERTY!!!
// 4. Append the created element to the parent element - document.appendChild()

// Replace the lists of your data for each store and build a single table of data instead


display_values: function () {
  this.simulated_amounts_of_cookies_purchased();
  // Create list item element for every hour, from hours of operation global array
  let seattle_display = document.getElementById('seattle');
  for (let i = 0; i < hours_of_operation.length; i++) {
    let list_item_element = document.createElement('li');
    list_item_element.innerText = `${hours_of_operation[i]}: ${this.simulated_amounts_of_cookies_purchased[i]}`;
    seattle_display.appendChild(list_item_element);
  }
  // Create list item element for total number of hours, for the location
  let total_list_item_element = document.createElement('li');
  total_list_item_element.innerText = `Total: ${this.total_cookies_sold}`;
  seattle_display.appendChild(total_list_item_element);
};

let seattle_location = new Store('Seattle', 23, 65, 6.3);
let tokyo_location = new Store('Tokyo', 3, 24, 1.2);
let dubai_location = new Store('Dubai', 11, 38, 3.7);
let paris_location = new Store('Paris', 20, 38, 2.3);
let lima_location = new Store('Lima', 2, 16, 4.6);

