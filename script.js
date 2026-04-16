let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para= document.getElementById("para");


document.getElementById("changeTextButton").onclick=
 function() {
    heading.innerText = input.value;
 }

 input.onchange = function() {
    console.log("Input changed:" , input.value);
 };


document.getElementById("changeBackgroundColorButton").addEventListener("click",function() {
    document.body.style.backgroundColor = "lightblue";
    document.body.style.fontFamily = "Arial, sans-serif";
 });


 document.getElementById("fontSizeButton").onclick ="increaseFontSize()";
 function increaseFontSize() {
    let currentSize = window.getComputedStyle(heading).fontSize;
    let newSize = parseInt(currentSize) + 5 + "px";
    heading.style.fontSize = newSize;
 };


 let isVisible = true;
document.getElementById("toggleparagraphButton").onclick= function() {
        if (isVisible) {
            para.style.display = "none";
            isVisible = false;
        } else {
            para.style.display = "block";
            isVisible = true;
        }   
    };


document.getElementById("resetButton").onclick= function() {
    location.reload();
};

heading.onmouseover = function() {
    heading.style.color = "red";
};


