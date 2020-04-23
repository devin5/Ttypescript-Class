var button = document.querySelector("button");
//! says it will never be null
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
//+ converts to a numebr
button.addEventListener("click", function () {
    return console.log(add(+input1.value, +input2.value));
});
