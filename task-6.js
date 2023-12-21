let input;
let total = 0;

do {
  input = prompt("Введіть число:");

  if (input === null) {
    break; 
  }

  input = Number(input);

  if (!isNaN(input)) {
    total += input;
  } else {
    alert("Було написано не число, спробуйте ще раз");
  }
} while (true);

alert(`Загальна сума чисел дорівнює ${total}`);
