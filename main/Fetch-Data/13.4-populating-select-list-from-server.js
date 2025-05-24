// Заполнение списка выбора данными, полученными с сервера
// Задача
// Заполнить список выбора значениями, которые

const selectOne = document.querySelector("#selectOne");
const selectTwo = document.querySelector("#selectTwo");
const url = "http://localhost:8080/select";

selectOne.addEventListener("change", async (event) => {
  let select = {
    select: event.target.value,
  };

  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(select),
  });
  if (response.ok) {
    const result = await response.json();
    selectTwo.length = 0;
    selectTwo.options[0] = new Option("Выберите элемент", "");
    for (let i = 1; i < result.length; i++) {
      selectTwo[i] = new Option(result[i - 1], result[i - 1]);
    }
    selectTwo.style.display = "block";
  } else {
    alert("Error");
  }
});
