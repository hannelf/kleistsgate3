function makeButtonsforVaskeri(bookingTimes){
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

function makeButtonsforBakgård(bookingTimes){
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

// Slideshow, brukt denne kilden for å tilegne kunnskap: https://www.w3schools.com/w3css/w3css_slideshow.asp //

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

        /* Hei, siden klienten vår er fiktiv sender denne e-post til meg.
        Venneligst endre e-posten eller ikke spam for mye under testing, takk. :) 
        Mvh. Daniel fra kl 4 om natta. */
        const mail_url = "mailto:danisho@ntnu.no?subject=" 
        + encodeURIComponent(subject) 
        + "&body=" + encodeURIComponent(message)
        // Hvordan formatere mailto URI https://stackoverflow.com/a/23966347

        var a = document.createElement("a")
        a.href = mail_url
        a.setAttribute("target", "_blank")
        a.click()
        /* https://stackoverflow.com/a/39987213
         Var litt irriterende at mailto åpnet i samme tab, så her åpner den en ny en.
         Trengte denne løsningen for browser støtte */

        /* gammel løsning, åpner i samme tab
        window.location.href = "mailto:danisho@ntnu.no?subject=" 
            + encodeURIComponent(subject) 
            + "&body=" + encodeURIComponent(message)
        */
        submitted = true
    }    
    else{
        document.getElementById("submit_feedback").innerHTML = "Venneligst last inn siden på nytt før du sender en ny e-post.<br />Ble ikke videresendt? Se kontaktinformasjonen til høyre for alternativer."
    }
}

/*
Her utnyttes transition delen i main.css for #bigimg for
å oppnå en smooth overgang mellom bildene. Her kjører den anonyme 
funksjonen etter 400ms, som er hvor lang overgangen tar fra opacity = 1 til
opacity = 0, så bytter den bilde og gjør overgang fra opacity = 0 tilbake til
opacity = 1.
*/
function imageViewer(){
    bigimg = document.getElementById("bigimg")
    bigimg.style.opacity = 0
    setTimeout(function(newsrc){
        bigimg.src = newsrc
        bigimg.style.opacity = 1
    }, 400, this.src)
}

/*
Legger til navbar (jeg bare copy-pasta HTMLen til navbaren inn i nav.innerHTML,
kanskje ikke den beste løsningen, men den funker veldig fint. :) )
*/
function addNavbar(){
    var navbar = document.createDocumentFragment()
    nav = navbar.appendChild(document.createElement("nav"))
    nav.id = "navID"
    nav.innerHTML = "    <label class=\"logo\">Kleists Gate 3</label>    <ul>        <li><a href=\"index.html\">Forside</a></li>        <li><a href=\"info.html\">Info</a></li>        <li><a href=\"kontakt.html\">Kontakt</a></li>        <li><a href=\"galleri.html\">Galleri</a></li>        <li><a href=\"booking.html\">Booking</a></li>    </ul>"
    document.body.insertBefore(navbar, document.body.firstChild)
}

/*
Hver side sin body element har en unik ID som lar oss bestemme her hvilken kode som skal
kjøre for hvilke sider.
*/
addNavbar()
if(document.body.id == "index"){
    var indexValue = 0;
    slideShow()
} else if (document.body.id == "kontakt"){
    var submitted = false
    document.addEventListener("submit", sendEpost)
} else if (document.body.id == "booking"){
    const bookingTimes = ["06:00","07:00", "08:00", "09:00",
             "10:00", "11:00", "12:00", "13:00", "14:00",
             "15:00", "16:00", "17:00", "18:00", "19:00", 
             "20:00", "21:00", "22:00", "23:00"]

    const vaskeriList = document.getElementById("vaskeriList")
    vaskeriList.innerText = "Vaskeri"

    const bakgårdList = document.getElementById("bakgårdList")
    bakgårdList.innerText = "Bakgård"

    makeButtonsforVaskeri(bookingTimes);
    makeButtonsforBakgård(bookingTimes);

    // lage en array med klokketidet
    // append child button og button text og id
    //lage elementer dånn x
} else if (document.body.id == "galleri"){
    const images = document.querySelectorAll("img")
    for(let img of images){
        img.addEventListener("click", imageViewer)
    }

    /* 
    Lager bildeviseren, appender et img barn med spesifikk id og src, dermed legger den til i body før
    bildegalleriet.
    */
    let bildeviser = document.createElement("div")
    bildeviser.id = "bildeviser"
    let bildeviser_img = bildeviser.appendChild(document.createElement("img"))
    bildeviser_img.id = "bigimg"
    bildeviser_img.loading = "lazy"
    bildeviser_img.src = "img/photos/IMG_5058.JPG"
    document.body.insertBefore(bildeviser, document.getElementById("bildegalleri"))

}
