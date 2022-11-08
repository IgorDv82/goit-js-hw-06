function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  step: document.querySelector('input[type="Number"]'),
  destroy: document.querySelector("button[data-destroy]"),
  create: document.querySelector("button[data-create]"),
  place: document.querySelector("#boxes"),
};

let number = 0;
let size = 30;
let lastSize = 0;

const listener = (event) => {
  number = event.currentTarget.value;
};

const renew = () => {
  lastSize = size;
};

const createBoxes = (event) => {
  for (let i = 1; i <= number; i += 1) {
    renew();
    let color = getRandomHexColor();
    const box = document.createElement("div");
    box.style.width = lastSize + "px";
    box.style.height = lastSize + "px";
    box.style.backgroundColor = color;
    refs.place.append(box);
    size += 10;
  }
};

const destroyBoxes = (event) => {
  refs.place.innerHTML = "";
};
refs.step.addEventListener("input", listener);
refs.create.addEventListener("click", createBoxes);
refs.destroy.addEventListener("click", destroyBoxes);
