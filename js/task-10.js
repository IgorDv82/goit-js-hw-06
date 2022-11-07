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

const listener = (event) => {
  number = event.currentTarget.value;
};

const createBoxes = (event) => {
  let size = 30;
  for (let i = 1; i <= number; i += 1) {
    let color = getRandomHexColor();
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
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
