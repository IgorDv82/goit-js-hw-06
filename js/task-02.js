const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const newLi = document.createElement("li");
  newLi.textContent = ingredients[i];
  newLi.class = "item";
  list.append(newLi);
}
