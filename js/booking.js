
const vaskeri =document.getElementById("vaskeri")
const bakgård =document.getElementById("bakgård")
const body =document.querySelector("body")
var linebreak = document.createElement("br")





const bookingTimes=["06:00","07:00", "08:00", "09:00",
             "10:00", "11:00", "12:00", "13:00", "14:00",
             "15:00", "16:00", "17:00", "18:00", "19:00", 
             "20:00", "21:00", "22:00", "23:00"]

const vaskeriList = document.createElement("ul")
vaskeriList.innerText="Vaskeri"
vaskeriList.appendChild(linebreak)

const bakgårdList= document.createElement("ul")
bakgårdList.innerText="Bakgård"
bakgårdList.appendChild(linebreak)

console.log("nicenice")

     

function makeButtonsforVaskeri(){
    for (let i=0; i<bookingTimes.length; i++){
        const button= document.createElement("button")
        const input= document.createElement("input")
        var linebreak = document.createElement("br");
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
        vaskeriList.appendChild(linebreak)
        vaskeriList.appendChild(button)
        vaskeriList.appendChild(input)
        
    }
}

function makeButtonsforBakgård(){
    for (let i=0; i<bookingTimes.length; i++){
        const button= document.createElement("button")
        const input= document.createElement("input")
        var linebreak = document.createElement("br");
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
        bakgårdList.appendChild(linebreak)
        bakgårdList.appendChild(button)
        bakgårdList.appendChild(input)
        
    }
}


makeButtonsforVaskeri();
makeButtonsforBakgård();


console.log("nice")


              

// lage en array med klokketidet
// append child button og button text og id
//lage elementer dånn x

