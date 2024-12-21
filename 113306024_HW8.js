
  const operatorSelect = document.getElementById('operator');
  const calculateBtn = document.getElementById('calculateBtn');
  const resultSpan = document.getElementById('result');

  operatorSelect.addEventListener('change', function () {
  const operator = operatorSelect.value;
  switch (operator) {
    case '+':
      calculateBtn.textContent = 'Add';
      break;
    case '-':
      calculateBtn.textContent = 'Subtract';
      break;
    case '*':
      calculateBtn.textContent = 'Multiply';
      break;
    case '/':
      calculateBtn.textContent = 'Divide';
      break;
    default:
      calculateBtn.textContent = 'Calculate';
  }
  });

  document.getElementById('calculateBtn').addEventListener('click', function () {
  const num1 = parseFloat(document.getElementById('number1').value);
  const num2 = parseFloat(document.getElementById('number2').value);
  const operator = document.getElementById('operator').value;

  if (isNaN(num1) || isNaN(num2)) {
    alert('Please enter valid numbers!');
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
      alert('Invalid operator!');
      return;
  }

  document.getElementById('result').textContent = result.toFixed(2);
  });

  function add(a, b) {
  return a + b;
  }

  function subtract(a, b) {
  return a - b;
  }

  function multiply(a, b) {
  return a * b;
  }

  function divide(a, b) {
  if (b === 0) {
    alert('Cannot divide by zero!');
    return NaN;
  }
  return a / b;
  }
