var minInput = 1;
var maxInput = 100;
var randomNumber = Math.floor(Math.random() * maxInput) + minInput;
var hasTry = 10;

document.getElementById("raten").addEventListener("click", function(){
    let resultAusgabe = document.getElementById("result");
    let eingabeInput = document.getElementById("eingabe");
    let historyAusgabe = document.getElementById("history");

    if(hasTry == 0){
        resultAusgabe.innerHTML = "Leider hast du die Zahl: " + randomNumber +  " nicht erraten!";
        return;
    }

    let eingabeZahl = Number(eingabeInput.value);

    if(eingabeZahl == randomNumber){
        resultAusgabe.innerHTML = "Vay, glückwunsch!"
        return;
    }
    if(eingabeZahl < minInput || eingabeZahl > maxInput){
        resultAusgabe.innerHTML = "Eingabe nur zwischen " + minInput +  " bis "+maxInput+" erlaubt!";
        return;
    }

    let liElement = document.createElement("li");
    liElement.innerHTML = eingabeZahl;
    historyAusgabe.appendChild(liElement);
    let output = (eingabeZahl<randomNumber)?"größer!":"kleiner!";
    resultAusgabe.innerHTML = "Die gesuchte Zahl ist "+output+", du hast noch "+ --hasTry + " Versuche!";

});

