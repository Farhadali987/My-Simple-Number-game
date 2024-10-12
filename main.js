const numberInput = document.getElementById('number');
const checkButton = document.getElementById('check');
const resultText = document.getElementById('result');

checkButton.addEventListener('click', () => {
  const number = parseInt(numberInput.value);
  if (isNaN(number)) {
    resultText.innerText = 'Please enter a valid number!';
  } else if (number % 2 === 0) {
    resultText.innerText = `${number} is an Even Number!`;
  } else {
    resultText.innerText = `${number} is an Odd Number!`;
  }
});

