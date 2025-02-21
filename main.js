// const products = [
//   {
//     category: "phone",
//     marka: "Iphone",
//   },
//   {
//     category: "phone",
//     marka: "Samsung",
//   },
//   {
//     category: "laptop",
//     marka: "Mac",
//   },
//   {
//     category: "laptop",
//     marka: "HP",
//   },
// ];

// const productList = document.getElementById("productList");

// function filterFunc(category) {
//   productList.innerHTML = "";
//   const filtered = category
//     ? products.filter((p) => p.category === category)
//     : products;
//   filtered.forEach((product) => {
//     const li = document.createElement("li");
//     li.textContent = product.marka;
//     productList.appendChild(li);
//   });
// }

const fruits = ["alma", "armud", "ciyelek", "saftali"];

localStorage.setItem("fruits", JSON.stringify(fruits));

function loadFunc() {
  const savedFruits = JSON.parse(localStorage.getItem("fruits"));
  const list = document.getElementById("fruitList");

  savedFruits.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li)
  });
}
loadFunc()

// document.getElementById("searchInput").addEventListener("keyup", (e) => {
//   // e.target.value eyni seydir --> document.getElementById("searchInput").value
//   // console.log(e.target.value)

//     arr.filter((value) => {
//       return value.text.toLowerCase().includes(e.target.value.toLowerCase());
//     })
//   ;
// });
