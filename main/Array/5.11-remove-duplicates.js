// Удаление дубликатов
// Задача
// Гарантировать уникальность всех значений массива, удалив дубликаты.

{
  let array = [1, 2, 3, 5, 6, 3, 2, 1, 7, 6, 4, 5];
  function removeDuplicates(array) {
    let newArray = [];
    for (let [key, value] of array.entries()) {
      if (newArray.includes(value)) {
        continue;
      } else {
        newArray.push(value);
      }
    }
    return newArray;
  }
  console.log(removeDuplicates(array));
}

{
  let array = [1, 1, 2, 3, 5, 6, 3, 2, 1, 7, 6, 4, 5];
  const uniqueArray = array.filter(
    (item, index) => array.indexOf(item) === index
  );

  console.log(uniqueArray);
}

{
  let array = [1, 1, 2, 3, 5, 6, 3, 2, 1, 7, 6, 4, 5];
  const uniqueArray = [...new Set(array)];

  console.log(uniqueArray);
}
