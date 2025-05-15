// Округление до заданного десятичного разряда
// Задача
// Округлить число до определенной точности (например, 124,793 до 124,80 или
// до 120).

{
  let number = 124.793;

  // Округление до заданного количества знаков после запятой (например, 2)
  let decimalPlaces = 2;
  let roundedToDecimal = (Math.round(number * 10) / 10).toFixed(
    decimalPlaces
  );
  console.log(`До ${decimalPlaces} знаков после запятой:`, roundedToDecimal);

  // Округление до ближайшего разряда (например, десятков)
  let roundingBase = 10; // можно задать 100, 0.01 и т.д.
  let roundedToBase = Math.round(number / roundingBase) * roundingBase;
  console.log(`До ближайшего ${roundingBase}:`, roundedToBase);
}

{
  const fractionalNumber = 124.793;
  let numberOfDecimalPlaces = -1;
  const numberToRound = fractionalNumber * 10 ** numberOfDecimalPlaces;
  let roundedNumber = Math.round(numberToRound);
  roundedNumber;
  roundedNumber = roundedNumber / 10 ** numberOfDecimalPlaces;
  roundedNumber;
}
