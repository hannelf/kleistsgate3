
const vaskeri =document.getElementById("vaskeri")
const bakgård =document.getElementById("bakgård")
var button = document.querySelector("button")


function bookTime(){
    button.style.backgroundColor="red"
}

//buttons.forEach(addEventListener("click", bookTime))

button.addEventListener("click", bookTime)