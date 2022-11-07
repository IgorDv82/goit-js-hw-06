const refs = {
  inputField: document.querySelector("#name-input"),
  outputField: document.querySelector("#name-output"),
};

let text = "Anonymous";

const renew = () => {
  refs.outputField.textContent = text;
};

const listener = (event) => {
  text = event.target.value;
  text = text === "" ? "Anonymous" : text;
  renew();
};

refs.inputField.addEventListener("input", listener);
