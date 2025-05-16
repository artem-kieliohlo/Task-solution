// Манипуляции с очень большими целыми числами в формате BigInt
// Задача
// Обрабатывать очень большие целые числа (свыше 2 в степени 53) без потери точности.
{
  let safeLimit = Number.MAX_SAFE_INTEGER;
  let bigNumber = BigInt(safeLimit);
  let nextBigInt = bigNumber + 1n;
  console.log(nextBigInt.toString());
}
