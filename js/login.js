const phoneScreen = document.querySelector(".phone-block__phone-screen");
const loginForm = document.querySelector(".login-form");
const loginInputs = loginForm.querySelectorAll("input");
const loginBtn = document.querySelector(".login-form__btlogin");
let phoneScreen__Idx = 0;

function changeImg() {
  let phoneScreen__Imgs = [
    "https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg",
  ];
  phoneScreen.src = phoneScreen__Imgs[phoneScreen__Idx];
  phoneScreen__Idx = phoneScreen__Idx + 1;
  if (phoneScreen__Idx >= phoneScreen__Imgs.length) {
    phoneScreen__Idx = 0;
  }
}

function upPlaceholderANDdownText(input, placeholder) {
  placeholder.classList.add(`${placeholder.classList[0]}Upper`);
  input.classList.add("downText");
}

function downPlaceholder(input, placeholder) {
  placeholder.classList.remove(`${placeholder.classList[0]}Upper`);
  input.classList.remove("downText");
}
function isFill() {
  //   console.log(loginBtn.style);
  if (loginInputs[0].value && loginInputs[1].value) {
    loginBtn.classList.remove("btn-disabled");
  } else {
    loginBtn.classList.add("btn-disabled");
  }
}

function handleInput(event) {
  const inputTarget = event.target;
  const inputTargetPlaceholder = inputTarget.nextElementSibling;
  if (inputTarget.value) {
    upPlaceholderANDdownText(inputTarget, inputTargetPlaceholder);
    isFill();
  } else {
    downPlaceholder(inputTarget, inputTargetPlaceholder);
    isFill();
  }
}

function handleform(event) {
  console.log(event);
}

function init() {
  setInterval(changeImg, 2000);
  loginForm.addEventListener("input", handleInput);
}

init();
