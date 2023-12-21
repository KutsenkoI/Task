const credits = 23580;
const pricePerDroid = 3000;

const quantityToBuy = prompt("Введіть кількість дроїдів:");

if (quantityToBuy === null) {
  console.log("Скасовано користувачем!");
} else {
  const totalPrice = pricePerDroid * quantityToBuy;

  if (totalPrice > credits) {
    console.log("Недостатньо коштів на рахунку!");
  } else {
    const creditsLeft = credits - totalPrice;
    console.log(
      `Ви купили ${quantityToBuy} дроїдів, на рахунку залишилося ${creditsLeft} кредитів.`
    );
  }
}