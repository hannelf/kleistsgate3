
const vaskeri =document.getElementById("vaskeri")
const bakgård =document.getElementById("bakgård")
//var button = document.querySelector("button")
const body =document.querySelector("body")




//buttons.forEach(addEventListener("click", bookTime))



const bookingTimes=["06:00","07:00", "08:00", "09:00",
             "10:00", "11:00", "12:00", "13:00", "14:00",
             "15:00", "16:00", "17:00", "18:00", "19:00", 
             "20:00", "21:00", "22:00", "23:00"]

const vaskeriList = document.createElement("ul")
vaskeriList.innerText="Vaskeri"

const bakgårdList= document.createElement("ul")
bakgårdList.innerText="Bakgård"

console.log("nicenice")

     

function makeButtonsforVaskeri(){
    for (let i=0; i<bookingTimes.length; i++){
        const button= document.createElement("button")
        const input= document.createElement("input")
        button.innerText= bookingTimes[i];
        button.onclick =function bookTime(){
            if (button.style.backgroundColor=="red"){
                button.style.backgroundColor="green"
            }
            else {
                button.style.backgroundColor="red"
            }
            
            console.log("nice");
        }
        
        vaskeriList.appendChild(button)
        vaskeriList.appendChild(input)
        //button.addEventListener("click", bookTime)
    }
}

function makeButtonsforBakgård(){
    for (let i=0; i<bookingTimes.length; i++){
        const button= document.createElement("button")
        const input= document.createElement("input")
        button.innerText= bookingTimes[i];
        button.onclick =function bookTime(){
            if (button.style.backgroundColor=="red"){
                button.style.backgroundColor="green"
            }
            else {
                button.style.backgroundColor="red"
            }
            
            console.log("nice");
        }
        
        bakgårdList.appendChild(button)
        bakgårdList.appendChild(input)
        //button.addEventListener("click", bookTime)
    }
}


makeButtonsforVaskeri();

body.appendChild(vaskeriList)
makeButtonsforBakgård();

body.appendChild(bakgårdList)

console.log("nice")


              

// lage en array med klokketidet
// append child button og button text og id
//lage elementer dånn x

