function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.body,
  colorInfo: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
};

const newColor = (event) => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorInfo.textContent = color;
};

refs.btn.addEventListener("click", newColor);
