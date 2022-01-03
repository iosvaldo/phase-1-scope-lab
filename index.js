// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
  return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'michael';

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "Matthew";
  return leastFavoriteCustomer;
}