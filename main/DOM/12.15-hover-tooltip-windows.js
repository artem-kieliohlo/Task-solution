// Создание окон, всплывающих по наведению указателя мыши
// Задача
// Сделать так, чтобы миниатюра изображения реагировала на наведение указателя
// мыши и чтобы в этот момент выводилась дополнительная информация.

const imagesData = [
  {
    thumbnailSrc: "https://via.placeholder.com/150x100/ccc",
    popupContent: `
      <h3>Изображение 2</h3>
      <img src="https://via.placeholder.com/300x200/ccc" alt="Large 2" width="300" height="200" />
      <p>Дополнительная информация по второму изображению.</p>
    `,
  },
];

const container = document.createElement("div");
document.body.appendChild(container);

imagesData.forEach(({ thumbnailSrc, popupContent }) => {
  // Создаем миниатюру
  const thumb = document.createElement("div");
  Object.assign(thumb.style, {
    width: "150px",
    height: "100px",
    margin: "20px",
    border: "1px solid #ccc",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
  });

  const img = document.createElement("img");
  img.src = thumbnailSrc;
  img.width = 150;
  img.height = 100;
  thumb.appendChild(img);

  // Создаем модульное окно
  const popup = document.createElement("div");
  popup.innerHTML = popupContent;
  Object.assign(popup.style, {
    position: "absolute",
    top: "110%", // ниже миниатюры (можно менять для позиционирования)
    left: "100%",
    transform: "translateX(-50%)",
    width: "320px",
    padding: "15px",
    backgroundColor: "white",
    border: "1px solid #333",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    borderRadius: "6px",
    opacity: "0",
    pointerEvents: "none",
    transition: "opacity 0.3s ease",
    zIndex: "100",
  });

  // Добавляем popup в миниатюру
  thumb.appendChild(popup);

  // Показать popup при наведении
  thumb.addEventListener("mouseenter", () => {
    popup.style.opacity = "1";
    popup.style.pointerEvents = "auto"; // сделать окно интерактивным
  });

  // Скрыть popup при уходе мыши
  thumb.addEventListener("mouseleave", () => {
    popup.style.opacity = "0";
    popup.style.pointerEvents = "none";
  });

  container.appendChild(thumb);
});
