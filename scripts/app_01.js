'use sctrict';

// proof of life
console.log('Hello, world!');

// hours of operation
let hours_of_operation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Use a method of each city object literal to generate a random number of customers per hour.
function randBetween(min, max) {
  return Math.random() * (max - min + 1) + min;
}

let seattle = {
  // Store the min/max hourly customers, and the average cookies per customer, in object properties.
  min_hourly_customer: 23,
  max_hourly_customer: 65,
  avg_cookie_per_customer: 6.3,

  // Use a method of that object to generate a random number of customers per hour.
  random_number_of_customers: function (min_hourly_customer, max_hourly_customer) {
    let randomNum = randBetween(min_hourly_customer, max_hourly_customer);
    console.log(randomNum);
    return (Math.floor(randomNum));
  },

  // Store the results for each location in a separate array… perhaps as a property of the object representing that location.
  simulated_amounts_of_cookies_purchased_for_seattle: [],

  // Calculate the sum of these hourly totals
  total_cookies_sold: 0,

  // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random
  // number of customers generated.
  simulated_amounts_of_cookies_purchased: function () {
    for (let i = 0; i < hours_of_operation.length; i++) {
      let simulated_amount = this.random_number_of_customers(this.min_hourly_customer, this.max_hourly_customer) * this.avg_cookie_per_customer;
      console.log(simulated_amount);
      this.simulated_amounts_of_cookies_purchased_for_seattle.push(simulated_amount);
      this.total_cookies_sold += simulated_amount;
      console.log(this.simulated_amounts_of_cookies_purchased_for_seattle);
    }
  },

  // Display the values of each array as unordered lists in the browser.
  // Remember 4 Steps of DOM Manipulation!
  // How to Create an HTML Element With JS (Thanks, Profs. Adam & Ben!)
  // 1. Select the parent element - document.getElementById()
  // 2. Create a new element - document.createElement()
  // 3. Fill created element with 'stuff' - .innerText  <--- this is a PROPERTY!!!
  // 4. Append the created element to the parent element - document.appendChild()

  display_values: function () {
    this.simulated_amounts_of_cookies_purchased();
    // Create list item element for every hour, from hours of operation global array
    let seattle_display = document.getElementById('seattle');
    console.log(seattle_display);
    for (let i = 0; i < hours_of_operation.length; i++) {
      let list_item_element = document.createElement('li');
      list_item_element.innerText = `${hours_of_operation[i]}: ${this.simulated_amounts_of_cookies_purchased_for_seattle}`;
      seattle_display.appendChild(list_item_element);
    }
    // Create list item element for total number of hours, for the location
    let total_list_item_element = document.createElement('li');
    total_list_item_element.innerText = `Total: ${this.total_cookies_sold}`;
    seattle_display.appendChild(total_list_item_element);
  }
};

seattle.simulated_amounts_of_cookies_purchased();
seattle.display_values();

let tokyo = {
  min_hourly_customer: 3,
  max_hourly_customer: 24,
  avg_cookie_per_customer: 1.2,

  random_number_of_customers: function (min_hourly_customer, max_hourly_customer) {
    let randomNum = randBetween(min_hourly_customer, max_hourly_customer);
    console.log(randomNum);
    return (Math.floor(randomNum));
  },

  simulated_amounts_of_cookies_purchased_for_tokyo: [],

  total_cookies_sold: 0,

  simulated_amounts_of_cookies_purchased: function () {
    for (let i = 0; i < hours_of_operation.length; i++) {
      let simulated_amount = this.random_number_of_customers(this.min_hourly_customer, this.max_hourly_customer) * this.avg_cookie_per_customer;
      console.log(simulated_amount);
      this.simulated_amounts_of_cookies_purchased_for_tokyo.push(simulated_amount);
      this.total_cookies_sold += simulated_amount;
      console.log(this.simulated_amounts_of_cookies_purchased_for_tokyo);
    }
  },

  display_values: function () {
    this.simulated_amounts_of_cookies_purchased();
    let tokyo_display = document.getElementById('tokyo');
    for (let i = 0; i < hours_of_operation.length; i++) {
      let list_item_element = document.createElement('li');
      list_item_element.innerText = `${hours_of_operation[i]}: ${this.simulated_amounts_of_cookies_purchased_for_tokyo}`;
      tokyo_display.appendChild(list_item_element);
    }
    let total_list_item_element = document.createElement('li');
    total_list_item_element.innerText = `Total: ${this.total_cookies_sold}`;
    tokyo_display.appendChild(total_list_item_element);
  }
};

tokyo.simulated_amounts_of_cookies_purchased();
tokyo.display_values();

let dubai = {
  min_hourly_customer: 11,
  max_hourly_customer: 38,
  avg_cookie_per_customer: 3.7,

  random_number_of_customers: function (min_hourly_customer, max_hourly_customer) {
    let randomNum = randBetween(min_hourly_customer, max_hourly_customer);
    console.log(randomNum);
    return (Math.floor(randomNum));
  },

  simulated_amounts_of_cookies_purchased_for_dubai: [],

  total_cookies_sold: 0,

  simulated_amounts_of_cookies_purchased: function () {
    for (let i = 0; i < hours_of_operation.length; i++) {
      let simulated_amount = this.random_number_of_customers(this.min_hourly_customer, this.max_hourly_customer) * this.avg_cookie_per_customer;
      console.log(simulated_amount);
      this.simulated_amounts_of_cookies_purchased_for_dubai.push(simulated_amount);
      this.total_cookies_sold += simulated_amount;
      console.log(this.simulated_amounts_of_cookies_purchased_for_dubai);
    }
  },

  display_values: function () {
    this.simulated_amounts_of_cookies_purchased();
    let dubai_display = document.getElementById('dubai');
    for (let i = 0; i < hours_of_operation.length; i++) {
      let list_item_element = document.createElement('li');
      list_item_element.innerText = `${hours_of_operation[i]}: ${this.simulated_amounts_of_cookies_purchased_for_dubai}`;
      dubai_display.appendChild(list_item_element);
    }
    let total_list_item_element = document.createElement('li');
    total_list_item_element.innerText = `Total: ${this.total_cookies_sold}`;
    dubai_display.appendChild(total_list_item_element);
  }
};

dubai.simulated_amounts_of_cookies_purchased();
dubai.display_values();

let paris = {
  min_hourly_customer: 20,
  max_hourly_customer: 38,
  avg_cookie_per_customer: 2.3,

  random_number_of_customers: function (min_hourly_customer, max_hourly_customer) {
    let randomNum = randBetween(min_hourly_customer, max_hourly_customer);
    console.log(randomNum);
    return (Math.floor(randomNum));
  },

  simulated_amounts_of_cookies_purchased_for_paris: [],

  total_cookies_sold: 0,

  simulated_amounts_of_cookies_purchased: function () {
    for (let i = 0; i < hours_of_operation.length; i++) {
      let simulated_amount = this.random_number_of_customers(this.min_hourly_customer, this.max_hourly_customer) * this.avg_cookie_per_customer;
      console.log(simulated_amount);
      this.simulated_amounts_of_cookies_purchased_for_paris.push(simulated_amount);
      this.total_cookies_sold += simulated_amount;
      console.log(this.simulated_amounts_of_cookies_purchased_for_paris);
    }
  },

  display_values: function () {
    this.simulated_amounts_of_cookies_purchased();
    let paris_display = document.getElementById('paris');
    for (let i = 0; i < hours_of_operation.length; i++) {
      let list_item_element = document.createElement('li');
      list_item_element.innerText = `${hours_of_operation[i]}: ${this.simulated_amounts_of_cookies_purchased_for_paris}`;
      paris_display.appendChild(list_item_element);
    }
    let total_list_item_element = document.createElement('li');
    total_list_item_element.innerText = `Total: ${this.total_cookies_sold}`;
    paris_display.appendChild(total_list_item_element);
  }
};

paris.simulated_amounts_of_cookies_purchased();
paris.display_values();

let lima = {
  min_hourly_customer: 2,
  max_hourly_customer: 16,
  avg_cookie_per_customer: 4.6,

  random_number_of_customers: function (min_hourly_customer, max_hourly_customer) {
    let randomNum = randBetween(min_hourly_customer, max_hourly_customer);
    console.log(randomNum);
    return (Math.floor(randomNum));
  },

  simulated_amounts_of_cookies_purchased_for_lima: [],

  total_cookies_sold: 0,

  simulated_amounts_of_cookies_purchased: function () {
    for (let i = 0; i < hours_of_operation.length; i++) {
      let simulated_amount = this.random_number_of_customers(this.min_hourly_customer, this.max_hourly_customer) * this.avg_cookie_per_customer;
      console.log(simulated_amount);
      this.simulated_amounts_of_cookies_purchased_for_lima.push(simulated_amount);
      this.total_cookies_sold += simulated_amount;
      console.log(this.simulated_amounts_of_cookies_purchased_for_lima);
    }
  },

  display_values: function () {
    this.simulated_amounts_of_cookies_purchased();
    let lima_display = document.getElementById('lima');
    for (let i = 0; i < hours_of_operation.length; i++) {
      let list_item_element = document.createElement('li');
      list_item_element.innerText = `${hours_of_operation[i]}: ${this.simulated_amounts_of_cookies_purchased_for_lima}`;
      lima_display.appendChild(list_item_element);
    }
    let total_list_item_element = document.createElement('li');
    total_list_item_element.innerText = `Total: ${this.total_cookies_sold}`;
    lima_display.appendChild(total_list_item_element);
  }
};

lima.simulated_amounts_of_cookies_purchased();
lima.display_values();
