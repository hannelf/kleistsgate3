function booking(){
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
}

var indexValue = 0;
const img = document.querySelectorAll('img');
      function slideShow(){
        setTimeout(slideShow, 2000);
        var x;
        const img = document.querySelectorAll("img");
        for(x = 0; x < img.length; x++){
          img[x].style.display = "none";
        }
        indexValue++;
        if(indexValue > img.length){indexValue = 1}
        img[indexValue -1].style.display = "block";
      }

function sendEpost(event){
    event.preventDefault()
    if(!submitted){
        var p = document.createElement("p")
        p.id = "submit_feedback"
        p.innerHTML = "Videresender. . ."
        document.getElementById("kontaktform").appendChild(p)

        const form_data = new FormData(event.target);
        const subject = form_data.get("navn") 
            + "; " + "Leilighetsnr. " + form_data.get("leilighet")
            + "; " + form_data.get("emne")
        const message = form_data.get("melding")

        /* hei, siden klienten vår er fiktiv sender denne e-post til meg.
        venneligst endre e-posten eller ikke spam for mye under testing, takk. :) 
        mvh daniel fra kl 4 om natta */
        const mail_url = "mailto:danisho@ntnu.no?subject=" 
        + encodeURIComponent(subject) 
        + "&body=" + encodeURIComponent(message)
        // Hvordan formatere mailto URI https://stackoverflow.com/a/23966347

        var a = document.createElement("a")
        a.href = mail_url
        a.setAttribute("target", "_blank")
        a.click()
        // https://stackoverflow.com/a/39987213
        // var litt irriterende at mailto åpnet i samme tab, så her åpner den en ny en.
        // trengte denne løsningen for browser støtte

        /* gammel løsning, åpner i samme tab
        window.location.href = "mailto:danisho@ntnu.no?subject=" 
            + encodeURIComponent(subject) 
            + "&body=" + encodeURIComponent(message)
        */
        submitted = true
    }    
    else{
        document.getElementById("submit_feedback").innerHTML = "Venneligst last inn siden på nytt før du sender en ny e-post.<br />Ble ikke videresendt? Se heller kontaktinformasjonen under for alternativer."
    }
}
var submitted = false

// legger til navbar
function addNavbar(){
    var navbar = document.createDocumentFragment()
    nav = navbar.appendChild(document.createElement("nav"))
    nav.innerHTML = "    <label class=\"logo\">Kleists Gate 3</label>    <ul>        <li><a href=\"index.html\">Forside</a></li>        <li><a href=\"info.html\">Info</a></li>        <li><a href=\"Kontakt.html\">Kontakt</a></li>        <li><a href=\"Galleri.html\">Galleri</a></li>        <li><a href=\"booking.html\">Booking</a></li>    </ul>"
    document.body.insertBefore(navbar, document.body.firstChild)
}

// her bestemmes funksjonene/metodene som kjøres avhengig av hvilken side som er lastet
addNavbar()
if(document.body.id == "index"){
    slideShow()
} else if (document.body.id == "kontakt"){
    document.addEventListener("submit", sendEpost)
} else if (document.body.id == "booking"){
    booking() // denne her bør vi kanskje løse opp og rydde i så vi ikke definerer funksjoner i funksjonen booking
    // gjorde dette bare midlertidig for å få ting på plass
}