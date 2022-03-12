let displayValue;
let calObj = {
  initialNum: 0,
  firstNum: 0,
  secondNum: 0,
  operator: "+",
};

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
    if (calObj.firstNum == 0) {
      const result = add(a, b);
      displayValue = result;
      calObj.firstNum += result;
    } else {
      const result = add(a, b);
      displayValue = result;
      calObj.firstNum = result;
    }
    document.getElementById("display").innerHTML = displayValue;
  } else if (o == "-") {
    if (calObj.firstNum == 0) {
      const result = subtract(a, b);
      displayValue = result;
      calObj.firstNum += result;
    } else {
      const result = subtract(a, b);
      displayValue = result;
      calObj.firstNum = result;
    }
    document.getElementById("display").innerHTML = displayValue;
  } else if (o == "x") {
    if (calObj.firstNum == 0) {
      const result = multiply(a, b);
      displayValue = result;
      calObj.firstNum += result;
    } else {
      const result = multiply(a, b);
      displayValue = result;
      calObj.firstNum = result;
    }
    document.getElementById("display").innerHTML = displayValue;
  } else if (o == "÷") {
    if (calObj.firstNum == 0) {
      const result = divide(a, b);
      displayValue = result;
      calObj.firstNum += result;
    } else {
      const result = divide(a, b);
      displayValue = result;
      calObj.firstNum = result;
    }
    document.getElementById("display").innerHTML = displayValue;
  }
};

const displayNumber = function (num) {
  if (calObj.initialNum == 0) {
    calObj.initialNum = num;
  } else if (calObj.initialNum > 0) {
    calObj.secondNum = num;
  }
  displayValue = num;
  document.getElementById("display").innerHTML = displayValue;
};

const equalFunc = function (input) {
  if (input == "=" && calObj.firstNum > 0 && calObj.initialNum > 0) {
    operate(calObj.operator, calObj.firstNum, calObj.secondNum);
  } else if (input == "=" && calObj.initialNum > 0 && calObj.firstNum == 0) {
    operate(calObj.operator, calObj.initialNum, calObj.secondNum);
  }
};

const operatorFunc = function (input) {
  calObj.operator = input;
};

// operator
// First num, second num,

// first num = 1
// operator = "+"
// second = 2
// run function operate when click =
// display value
