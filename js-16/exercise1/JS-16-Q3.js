// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer
let num2close = document.querySelector(".ri-close-line");
let NUM1MESSAGE = document.querySelector(".message");

console.log(num2close);
console.log(NUM1MESSAGE);
num2close.addEventListener("click", () => {
  NUM1MESSAGE.style.display = "none";
});
