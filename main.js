document.addEventListener("DOMContentLoaded", function () {
  const correctNames = ['elyor', 'guzal', 'najim'];

  const userInput = prompt("Введите имя:");

  if (userInput && correctNames.includes(userInput.trim().toLowerCase())) {
    // Имя правильное — показываем сайт
    document.body.style.display = "block";
  } else {
    // Имя неправильное — делаем белый экран
    document.body.innerHTML = ""; // убираем всё содержимое
    document.body.style.backgroundColor = "white"; // белый фон
    document.body.style.display = "block"; // всё равно показываем body (чтобы был белый экран)
  }
});
