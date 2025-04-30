const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  } 
  return result;
};

const multiply = function(arr) {
  if (arr == []) {
    return 0;
  }
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	let result = 1; // 0! = 1
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
  /* 
  num! = num * (num-1) * (num-2) * ... * 1
  num = 5
  result = 1
  i = 1, result = 1
  i = 2, result = 2
  i = 3, result = 6
  i = 4, result = 24
  i = 5, result = 120
  */
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
