const change = () => {
  document.querySelector(".switch-btn").classList.toggle("switch-on");
  document.body.classList.toggle("dark");
  let a = document.querySelectorAll(".list-a");
  purchaseForm.classList.toggle("dark");
  a.forEach((item)=>{
  item.classList.toggle("dark");
  })
};

//Card
function addElement(shirt_obj, cards) {
  let fragment = new DocumentFragment();
  let div = document.createElement("section");
  let img = document.createElement("img");
  img.src = shirt_obj.img;
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", openModal);

  div.classList.add("card");

  div.append(img);
  img.classList.add("card-img");

  div.append(h1);
  h1.append(shirt_obj.name);
  h1.classList.add("card-title");

  div.append(p);
  p.append(shirt_obj.date);
  p.classList.add("card-date");

  div.append(btn);
  btn.append("Купить");
  btn.classList.add("card-btn");

  cards.append(div);
  fragment.append(cards);

  return fragment;
}
function getDayInfo(dateString) {
  let dateParts = dateString.split(".");
  let day = parseInt(dateParts[0]);
  let month = parseInt(dateParts[1]) - 1; // Месяцы в JavaScript начинаются с 0 (январь - 0, февраль - 1 и т.д.)
  let year = parseInt(dateParts[2]);

  // Создаем объект даты с указанной датой
  let date = new Date(year, month, day);

  // Названия дней недели
  let dayNames = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  // Названия месяцев
  let monthNames = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Майя",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  // Получаем название дня недели
  let dayName = dayNames[date.getDay()];

  // Получаем название месяца
  let monthName = monthNames[month];

  // Получаем номер недели в году
  let weekNumber = Math.ceil((day + 6 - date.getDay()) / 7);

  let dateInfo = `${dayName}, ${weekNumber} неделя ${monthName} ${year} года`;

  return dateInfo;
}

let shirt_obj = {
  img: "./imges/shirt.jpg",
  name: "Такие вот рубашки",
  date: getDayInfo("01.01.2022"),
};

let shorts_obj = {
  img: "./imges/shorts.jpg",
  name: "Такие вот шорты",
  date: getDayInfo("01.01.2022"),
};

let shoes_obj = {
  img: "./imges/shoes.jpg",
  name: "Такие вот ботинки",
  date: getDayInfo("01.01.2022"),
};

let cards = document.createElement("div");
cards.classList.add("cards");

for (let i = 0; i < 20; i) {
  shirt.append(addElement(shirt_obj, cards));
  i++;
}

cards = null;
cards = document.createElement("div");
cards.classList.add("cards");

for (let i = 0; i < 17; i) {
  shorts.append(addElement(shorts_obj, cards));
  i++;
}

cards = null;
cards = document.createElement("div");
cards.classList.add("cards");

for (let i = 0; i < 15; i) {
  shoes.append(addElement(shoes_obj, cards));
  i++;
}

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    var header = document.querySelector(".btn-up");
    header.classList.add("active");
  } else {
    var header = document.querySelector(".btn-up");
    header.classList.remove("active");
  }
});

//Модальное окно
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Функция закрытия модального окна
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
function openAlert() {
  if (checkFormFields()) {
    document.getElementById("myModal").style.display = "none";
    alert("Заказ успешно оформлен");
  }
}

// Получаем ссылки на все поля формы
var quantityInput = document.getElementById("quantityInput");
var colorInputs = document.querySelectorAll('input[name="color"]');
var commentInput = document.getElementById("commentInput");
var submitButton = document.getElementById("submitButton");

// Функция для проверки полей и включения/отключения кнопки
function checkFormFields() {
  var allFieldsFilled =
    quantityInput.value !== "" &&
    document.querySelector('input[name="color"]:checked') !== null &&
    commentInput.value !== "" &&
    quantityInput.value > 0;

  return allFieldsFilled;
}

// Назначаем обработчики событий для полей формы
// quantityInput.addEventListener("input", checkFormFields);
// colorInputs.forEach(function (colorInput) {
//   colorInput.addEventListener("change", checkFormFields);
// });
// commentInput.addEventListener("input", checkFormFields);
