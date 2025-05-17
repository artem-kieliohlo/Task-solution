// Поиск элементов массива, удовлетворяющихзаданному критерию
// Задача
// Найти элемент массива, удовлетворяющий заданному критерию. Например, это
// может быть объект с заданным свойством.

{
  const array = [
    1,
    2,
    true,
    {
      name: "Artem",
      age: 27,
    },
  ];

  const isArtem = (element) => element?.name === "Artem";

  const resultConditionIndex = array.findIndex(isArtem);
  const resultConditionElement = array[resultConditionIndex];

  console.log("Index:", resultConditionIndex);
  console.log("Element:", resultConditionElement);
}
