
const vaskeri =document.getElementById("vaskeri")
const bakgård =document.getElementById("bakgård")
var button = document.querySelector("button")


function bookTime(){
    button.style.backgroundColor="red"
}

//buttons.forEach(addEventListener("click", bookTime))

button.addEventListener("click", bookTime)

const bookingTimes=["06:00","07:00", "08:00", "09:00",
             "10:00", "11:00", "12:00", "13:00", "14:00",
             "15:00", "16:00", "17:00", "18:00", "19:00", 
             "20:00", "21:00", "22:00", "23:00"]

const ul = document.createElement("ul")             

function makeButtons(){
    for (const i=0; i<bookingTimes.length; i++){
        const li= document.createElement("li")
        li.innerText= bookingTimes[i];
        console.log("nice");
        ul.appendChild("li")
    }
}

makeButtons();


              

// lage en array med klokketidet
// append child button og button text og id
//lage elementer dånn x

