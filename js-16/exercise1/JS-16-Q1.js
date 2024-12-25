// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:
let icon = document.querySelector(".cards__card__img__icon i");
let counter = document.querySelector("#counter");
console.log(icon);
console.log(counter);

icon.addEventListener("click", () => {
  icon.style.color = "red";
  counter.textContent = +counter.textContent + 1;
});
