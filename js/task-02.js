const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const makeElementLi = (element) => {
  const newLi = document.createElement("li");
  newLi.textContent = element;
  newLi.classList.add("item");
  return newLi;
};

const listItems = ingredients.map(makeElementLi);

list.append(...listItems);
