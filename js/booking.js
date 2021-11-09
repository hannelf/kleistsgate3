function makeButtonsforVaskeri(){
    for (let i=0; i<bookingTimes.length; i++){
        const button = document.createElement("button")
        const input = document.createElement("input")
        button.innerText= bookingTimes[i];
        button.onclick =function bookTime(){
            if (button.style.backgroundColor=="red"){
                button.style.backgroundColor="green"
            }
            else {
                button.style.backgroundColor="red"
            }
        }
        vaskeriList.appendChild(document.createElement("br"))
        vaskeriList.appendChild(button)
        vaskeriList.appendChild(input)
        
    }
}

function makeButtonsforBakgård(){
    for (let i=0; i<bookingTimes.length; i++){
        const button= document.createElement("button")
        const input= document.createElement("input")
        button.innerText = bookingTimes[i];
        button.onclick = function bookTime(){
            if (button.style.backgroundColor=="red"){
                button.style.backgroundColor="green"
            }
            else {
                button.style.backgroundColor="red"
            }
        }
        bakgårdList.appendChild(document.createElement("br"))
        bakgårdList.appendChild(button)
        bakgårdList.appendChild(input)
        
    }
}

const bookingTimes=["06:00","07:00", "08:00", "09:00",
             "10:00", "11:00", "12:00", "13:00", "14:00",
             "15:00", "16:00", "17:00", "18:00", "19:00", 
             "20:00", "21:00", "22:00", "23:00"]

const vaskeriList = document.getElementById("vaskeriList")
vaskeriList.innerText = "Vaskeri"

const bakgårdList = document.getElementById("bakgårdList")
bakgårdList.innerText = "Bakgård"

makeButtonsforVaskeri();
makeButtonsforBakgård();

// lage en array med klokketidet
// append child button og button text og id
//lage elementer dånn x

