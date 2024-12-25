// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer
let num1star = document.getElementsByClassName("fa-solid fa-star");

for (const element of num1star) {
  let num = 1;
  element.addEventListener("click", () => {
    if (num % 2 == 0) {
      element.style.color = "#e6e6e6";
      num++;
    } else if (num % 2 == 1) {
      element.style.color = "yellow";
      num++;
    }
  });
}
