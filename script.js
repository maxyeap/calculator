const add = function (x, y) {
  const sum = x + y;
  return sum;
};

const subtract = function (x, y) {
  const sum = x - y;
  return sum;
};

const multiply = function (x, y) {
  const sum = x * y;
  return sum;
};

const divide = function (x, y) {
  const sum = x / y;
  return sum;
};

const operate = function (o, a, b) {
  if (o == "+") {
    const result = add(a, b);
    return result;
  } else if (o == "-") {
    const result = subtract(a, b);
    return result;
  } else if (o == "*") {
    const result = multiply(a, b);
    return result;
  } else if (o == "/") {
    const result = divide(a, b);
    return result;
  } else {
    return "Please input an operator!";
  }
};

let displayValue = 0;

document.getElementById("display").innerHTML = displayValue;

const displayNumber = function (num) {
  displayValue = num;
};
