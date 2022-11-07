const field = document.querySelector("#validation-input");
const data = Number(field.getAttribute("data-length"));

const check = (event) => {
  if (field.value.length === data) {
    if (field.classList.contains("invalid")) {
      field.classList.replace("invalid", "valid");
    } else {
      field.classList.add("valid");
    }
  } else {
    if (field.classList.contains("valid")) {
      field.classList.replace("valid", "invalid");
    } else {
      field.classList.add("invalid");
    }
  }
};

field.addEventListener("blur", check);
