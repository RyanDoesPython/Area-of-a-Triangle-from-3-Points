const inputX1 = document.getElementById("x1");
const inputX2 = document.getElementById("x2");
const inputX3 = document.getElementById("x3");
const inputY1 = document.getElementById("y1");
const inputY2 = document.getElementById("y2");
const inputY3 = document.getElementById("y3");
const parimeter = document.getElementById("perimeter");
const area = document.getElementById("area");
const solve = document.getElementById("solve")


// 1/2[x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2)]
function getArea() {
    const value = 0.5 * Math.abs(inputX1.value * (inputY2.value - inputY3.value) + inputX2.value * (inputY3.value - inputY1.value) + inputX3.value * (inputY1.value - inputY2.value));
    return value;
}

function getPerimeter() {
    let value = 
        Math.sqrt(Math.pow((inputX2.value - inputX1.value), 2) + Math.pow((inputY2.value - inputY1.value), 2)) +
        Math.sqrt(Math.pow((inputX3.value - inputX1.value), 2) + Math.pow((inputY3.value - inputY1.value), 2)) +
        Math.sqrt(Math.pow((inputX2.value - inputX3.value), 2) + Math.pow((inputY2.value - inputY3.value), 2));
    value *= 10;
    return Math.round(value);
}
function solveEquation() {
    area.innerText = getArea();
    parimeter.innerText = getPerimeter();
}
solve.addEventListener("click", solveEquation);