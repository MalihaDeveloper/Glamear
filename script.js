const bar = document.getElementById("bar");
const close = document.getElementById("close-cart");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("navActive");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("navActive");
  });
}
const CartList = document.querySelector("#shopping-bag");
CartList.addEventListener("click", () => {
  console.log("clicked on CartList");
  CartList.classList.add("active");
});
