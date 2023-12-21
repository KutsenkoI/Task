const country = prompt("Введіть країну для доставки:");

if (country !== null) {
  const countryLowerCase = country.toLowerCase();
  let price;

  switch (countryLowerCase) {
    case "китай":
      price = 100;
      break;
    case "чилі":
      price = 250;
      break;
    case "австралія":
      price = 170;
      break;
    case "індія":
      price = 80;
      break;
    case "ямайка":
      price = 120;
      break;
    default:
      alert("У вашій країні доставка недоступна");
      break;
  }

  if (price !== undefined) {
    alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
  }
} else {
  alert("Скасовано користувачем!");
}