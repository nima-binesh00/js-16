/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/
let input1 = document.getElementById("in");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
console.log(input1);
console.log(num1);

num1.addEventListener("click", () => {
  input1.value = input1.value.slice(0, -1);
});
num2.addEventListener("click", () => {
  input1.value = "";
});
num3.addEventListener("click", () => {
  input1.style.fontWeight =
    input1.style.fontWeight === "bold" ? "normal" : "bold";
});
num4.addEventListener("click", () => {
  input1.style.fontStyle =
    input1.style.fontStyle === "italic" ? "normal" : "italic";
});
