let heading = document.getElementById("heading");
let para = document.getElementById("para");
let input = document.getElementById("inputText");
document.getElementById("changeText").addEventListener("click", function() {
heading.textContent = input.value;});
document.getElementById("changeColor").addEventListener("click", function() {
document.body.style.backgroundColor = "lightblue";});
document.getElementById("increaseFont").addEventListener("click", function() {
let currentSize = window.getComputedStyle(para).fontSize;
let newSize = parseInt(currentSize) + 2;
para.style.fontSize = newSize + "px";});
document.getElementById("togglePara").addEventListener("click", function() {
if (para.style.display === "none") {
para.style.display = "block";} 
else {
para.style.display = "none";}});