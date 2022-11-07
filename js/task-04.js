const value = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const renew = () => {
  value.textContent = counterValue;
};

const valueDecrement = () => {
  counterValue -= 1;
  renew();
};

const valueIncrement = () => {
  counterValue += 1;
  renew();
};

renew();

decrement.addEventListener("click", valueDecrement);
increment.addEventListener("click", valueIncrement);
