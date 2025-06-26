const first_name = document.getElementById('name');
const last_name = document.getElementById('surname');
const first_name2 = document.getElementById('name2');
const last_name2 = document.getElementById('surname2');
const email = document.getElementById("mail");
const message = document.getElementById("message");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const pay = document.getElementById("pay");
const sizes = document.getElementById("sizes");

first_name.addEventListener("input", function (event) {
  if (first_name.validity.patternMismatch) {
    first_name.setCustomValidity("Имя должно содержать только буквы кириллического алфавита");
  } else {
    first_name.setCustomValidity("");
  }
});

last_name.addEventListener("input", function (event) {
  if (last_name.validity.patternMismatch) {
    last_name.setCustomValidity("Фамилия должна содержать только буквы кириллического алфавита");
  } else {
    last_name.setCustomValidity("");
  }
});

email.addEventListener("input", function (event) { 
  if (email.validity.typeMismatch) { 
    email.setCustomValidity("Пожалуйста, введите корректный email"); 
  } else { 
    email.setCustomValidity(""); 
  } 
});

message.addEventListener("input", function () {
  if (message.validity.tooShort) {
    message.setCustomValidity("Ваше сообщение должно содержать не менее 10 символов");
  } else {
    message.setCustomValidity("");
  }
});

phone.addEventListener("input", function () {
  if (phone.validity.patternMismatch) {
    phone.setCustomValidity("Введите номер телефона от 10 цифр. Например: +79991234567");
  } else {
    phone.setCustomValidity("");
  }
});

const form = document.getElementById("review_form");
const o_form = document.getElementById("order_form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = `
    Имя: ${first_name.value}
    Фамилия: ${last_name.value}
    Email: ${email.value}
    Сообщение: ${message.value}
  `;

  alert(data);
  form.reset();
});

o_form.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = `
    Имя: ${first_name2.value}
    Фамилия: ${last_name2.value}
    Телефон: ${phone.value}
    Дата доставки: ${date.value}
    Размер набора: ${sizes.value}
    Способ оплаты: ${pay.value}
  `;

  alert(data);
  o_form.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});