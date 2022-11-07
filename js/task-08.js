const form = document.querySelector(".login-form");

function resultSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const userInfo = {
      email: email.value,
      password: password.value,
    };
    console.log(userInfo);
  }

  event.currentTarget.reset();
}
form.addEventListener("submit", resultSubmit);
