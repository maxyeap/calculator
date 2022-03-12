let displayValue;
let calObj = {
  initialNum: [],
  joinedInitial: 0,
  firstNum: 0,
  secondNum: [],
  joinedSecond: 0,
  operator: "*",
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
  if (calObj.secondNum == 0 && calObj.operator == "*") {
    // calObj.initialNum = num;
    calObj.initialNum.push(num);
    calObj.joinedInitial = +calObj.initialNum.join("");
    displayValue = calObj.joinedInitial;
    // input num, put num into an array, join, return the joined number
  } else if (calObj.operator !== "*") {
    calObj.secondNum.push(num);
    calObj.joinedSecond = +calObj.secondNum.join("");
    displayValue = calObj.joinedSecond;
  }
  document.getElementById("display").innerHTML = displayValue;
};

const equalFunc = function (input) {
  if (input == "=" && calObj.firstNum > 0) {
    operate(calObj.operator, calObj.firstNum, calObj.joinedSecond);
    calObj.secondNum = [];
    calObj.joinedSecond = 0;
  } else if (input == "=" && calObj.joinedInitial > 0 && calObj.firstNum == 0) {
    operate(calObj.operator, calObj.joinedInitial, calObj.joinedSecond);
    calObj.secondNum = [];
    calObj.joinedSecond = 0;
  } else if (calObj.joinedSecond == 0 || calObj.operator == "*") {
    return;
  }
};

const operatorFunc = function (input) {
  if (calObj.firstNum > 0 && calObj.joinedSecond > 0) {
    calObj.operator = input;
    equalFunc("=");
  } else if (calObj.joinedInitial > 0 && calObj.joinedSecond) {
    calObj.operator = input;
    equalFunc("=");
  } else {
    calObj.operator = input;
  }
};

const clearFunc = function () {
  calObj.initialNum = [];
  calObj.joinedInitial = 0;
  calObj.firstNum = 0;
  calObj.secondNum = [];
  calObj.joinedSecond = 0;
  calObj.operator = "*";
  displayValue = 0;
  document.getElementById("display").innerHTML = displayValue;
};

// operator
// First num, second num,

// first num = 1
// operator = "+"
// second = 2
// run function operate when click =
// display value
