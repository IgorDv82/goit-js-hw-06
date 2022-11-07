const field = document.querySelector("#validation-input");
const data = Number(field.getAttribute("data-length"));

const check = (event) => {

  if (field.value.length === data) {
    field.classList.add("valid");
  } else {
    field.classList.add("invalid");
    };
    
};

field.addEventListener("blur", check);
