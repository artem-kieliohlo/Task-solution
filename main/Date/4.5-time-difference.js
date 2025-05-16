// Вычисление времени, прошедшего между двумя датами
// Задача
// Вычислить, сколько дней, часов или минут разделяют две даты.
{
  function getDateOffsetDescription(fromDateStr, toDateStr) {
    const fromTs = Date.parse(fromDateStr);
    const toTs = Date.parse(toDateStr);
    if (Number.isNaN(fromTs) || Number.isNaN(toTs)) {
      return "Неверный формат дат";
    }
    let fromDate = new Date(fromTs);
    let toDate = new Date(toTs);
    const diffMs = toDate - fromDate;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    if (fromDate < toDate) {
      return `${days} дней вперед ${hours} часов ${minutes} минут`;
    } else {
      return `${Math.abs(days)} дней назад ${Math.abs(hours)} часов ${Math.abs(
        minutes
      )} минут`;
    }
  }
  console.log(getDateOffsetDescription("01-17-2024", "01-18-2024 12:53"));
}
