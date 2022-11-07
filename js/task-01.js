const list = document.querySelector("#categories").children;
console.log("Number of categories: " + list.length);

const itemsOfList = document.querySelectorAll(".item");

itemsOfList.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const liQuantity = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${liQuantity}`);
});
