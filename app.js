const input = document.querySelector("input[type ='range']");
const value = document.querySelector("#value");
const number = document.querySelector("#pageviews");
const pageviews = ["10K", "50K", "100K", "500K", "1M"];
const price = [8, 12, 16, 24, 36];
let discount = false;
let val = 2;
input.oninput = function () {
  this.style.background = `linear-gradient(to right, #a5f3eb 0%, #a5f3eb ${
    this.value * 25
  }%, #eaeefb ${this.value * 25}%,#eaeefb 100%)`;
  val = this.value;
  number.innerHTML = pageviews[this.value];
  if (!discount) {
    value.innerHTML = `$${parseFloat(price[this.value]).toFixed(2)}`;
  } else {
    value.innerHTML = `$${parseFloat(
      price[this.value] * 12 - price[this.value] * 12 * 0.25
    ).toFixed(2)}`;
  }
};

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  const span = value.nextElementSibling;
  if (button.classList.contains("active")) {
    discount = false;
    button.classList.remove("active");
    span.innerHTML = "/ month";
    value.innerHTML = `$${parseFloat(price[val]).toFixed(2)}`;
  } else {
    discount = true;
    button.classList.add("active");
    span.innerHTML = "/ year";
    value.innerHTML = `$${parseFloat(
      price[val] * 12 - price[val] * 12 * 0.25
    ).toFixed(2)}`;
  }
});
