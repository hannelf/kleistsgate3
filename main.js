/*
BARE DRIT I DENNE formHandler FUNKSJONEN.
DEN VAR FOR Å LAGRE TILBAKEMELDINGER PÅ SERVEREN, MEN VI HAR IKKE LOV
TIL Å BRUKE DATABASER. ALTSÅ, KODEN ER UBRUKELIG. MORSOMT Å FINNE UT AV DET 
PÅ P3 I STEDET FOR P2.
Byttet den ut med en sendEpost funksjon. :)
jeg sletter alt ubrukelig ting selv senere, bare lar det være her nå i tilfelle 
jeg kan gjenbruke noe
- DANIEL
*/
function formHandler(event){
    event.preventDefault()
    // https://www.learnwithjason.dev/blog/get-form-values-as-json/
    // preventDefault hindrer at siden refresher når man klikker submit.

    if(!submitted){
        var p = document.createElement("p")
        p.id = "submit_feedback"
        p.style.color = "#db7093"
        p.innerHTML = "Form submitted!"
        document.body.appendChild(p)

        console.log("form submitted!")

        const form_data = new FormData(event.target)

        const navn = form_data.get("navn")
        const l_nr = form_data.get("leilighet")
        const melding = form_data.get("melding")
/*    
        console.log("navn: " + navn)
        console.log("l_nr: " + l_nr)
        console.log("melding: " + melding)
*/

        const final_json_data = {"navn" : navn, "l_nr" : l_nr, "melding" : melding}
        console.log(JSON.stringify(final_json_data))
        /*
        Om vi var tillatt å bruke andre tekonologier for 
        å lagre data på serveren som f.eks. med php ville vi 
        postet dataen til en php fil som ville lagret den i en 
        json fil på serveren som ville sett omtrent slik ut:
        {
            "tilbakemeldinger" : [{"navn":"daniel", "l_nr":22, melding:"hei"}, {navn . . .}, . . .]
        }
        Siden vi ikke er tillatt å bruke slike teknologier, 
        printer javascriptet heller bare til consollen, samtidig 
        som den gir brukeren feedback på at de har sendt 
        meldingen. Den hindrer også spam av meldinger 
        til en viss grad ved å kreve at siden lastes inn på nytt 
        før man kan sende en ny melding.
        */
        submitted = true
    } 
    else{
        document.getElementById("submit_feedback").innerHTML = "Please refresh the page before submitting again."
    }
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

        /* hei, siden klienten vår er fiktiv sender denne e-post til meg
        venneligst ikke spam for mye under testing, takk. :) 
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
document.addEventListener("submit", sendEpost)
