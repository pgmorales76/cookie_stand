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
  this.total_cookies_sold = 0;
}

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
// Each cookie stand location should have a separate render() method that creates and appends its row to the table
// The method below will display values for cookies sold/hour from the method on lines 37-45
Store.prototype.display_values = function () {
  this.simulated_amounts_of_cookies_purchased();
  let location_data = document.getElementById('location_data');
  let location_tr = document.createElement('tr');
  let location_th = document.createElement('th');
  location_tr.appendChild(location_th);
  location_th.innerText = this.location;
  for (let i = 0; i < hours_of_operation.length; i++) {
    let location_td = document.createElement('td');
    location_td.innerText = this.simulated_amounts_of_cookies_purchased[i];
    location_tr.appendChild(location_td);
  }
  let location_total = document.createElement('td');
  location_total.innerText = this.total_cookies_sold;
  location_tr.appendChild(location_total);
  location_data.appendChild(location_tr);
};

// The method below will display values for the total number of cookies sold/hour/location
// The header row and footer row are each created in their own stand-alone function
function total_location_cookies() {
  let table_footer = document.querySelector('tfoot');
  let table_footer_row = document.createElement('tr');
  table_footer.appendChild(table_footer_row);
  let table_header_total = document.querySelector('th');
  table_header_total.innerText = 'Total';
  table_footer_row.appendChild(table_header_total);
  let total_location_cookies_sold = 0;
  // Be careful with this codeblock, below! Your nesting a for statement, within a for statement!
  // The first for statement iteraties through each hour of operation
  for (let i = 0; i < hours_of_operation.length; i++) {
    let total_sold_per_hour = 0;
    // The second for statement iterates through each hour of operation at each location
    for (let j = 0; j < location_array.length; j++) {
      let table_data = location_array[j].simulated_amounts_of_cookies_purchased[i];
      total_sold_per_hour += table_data;
      total_location_cookies_sold += table_data;
    }
    let table_footer_data = document.createElement('td');
    table_footer_data.innerText = total_sold_per_hour;
    table_footer_row.appendChild(table_footer_data);
  }
  let total_footer_data = document.createElement('td');
  total_footer_data.innerText = total_location_cookies_sold;
  table_footer_row.appendChild(total_footer_data);
}

// New instances of the Store constructor
let seattle_location = new Store('Seattle', 23, 65, 6.3);
let tokyo_location = new Store('Tokyo', 3, 24, 1.2);
let dubai_location = new Store('Dubai', 11, 38, 3.7);
let paris_location = new Store('Paris', 20, 38, 2.3);
let lima_location = new Store('Lima', 2, 16, 4.6);

let location_array = [seattle_location, tokyo_location, dubai_location, paris_location, lima_location];

function display_location_values(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i].display_values();
  }
}

total_location_cookies();

display_location_values(location_array);
