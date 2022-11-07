const field = document.querySelector("#font-size-control");
const styledText = document.querySelector("#text");

const fontSize = (event) => {
  styledText.style.fontSize = field.value + "px";
};

field.addEventListener("input", fontSize);
