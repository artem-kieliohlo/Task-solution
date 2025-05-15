// Генерирование криптографически надежных
// случайных чисел
// Задача
// Генерировать случайные числа, для которых нельзя легко вычислить (предска-
// зать) закономерность.
{
  let randomArray = new Uint32Array(1);
  window.crypto.getRandomValues(randomArray);
  let normalizedRandom = randomArray[0] / 4294967295; // 4294967295 — максимальное значение Uint32
  let rangeMin = 5;
  let rangeMax = 200;
  // eslint-disable-next-line no-unused-vars
  let randomInRange = Math.floor(normalizedRandom * (rangeMax - rangeMin + 1)) + rangeMin;
}
