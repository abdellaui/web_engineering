var Gegenstand = {
    bezeichner: undefined,
    gewicht: undefined,
    getBeschreibung: function(){
        return this.bezeichner;
    },
    getGewicht: function(){
        return this.gewicht;
    }
} 

var Kugel = Object.create(Gegenstand);
Kugel.radius = undefined;
Kugel.getBeschreibung = function(){
    return this.bezeichner + " - Oberflaeche: "+ this.radius*Math.PI*Math.Pi;
}

var Quader = Object.create(Gegenstand);
Quader.seitenLaenge = undefined;
Quader.getBeschreibung = function(){
    return this.bezeichner + " - Oberflaeche: "+ this.seitenLaenge*this.seitenLaenge;
}



var i_gegenstand = Object(Gegenstand);
i_gegenstand.bezeichner = "Gegenstand";
i_gegenstand.gewicht = 50;

var i_kugel = Object(Kugel);
i_kugel.bezeichner = "Kugel";
i_kugel.gewicht = 50;
i_kugel.radius = 2;

var i_qauder = Object(Quader);
i_qauder.bezeichner = "Quader";
i_qauder.gewicht = 50;
i_qauder.seitenLaenge = 2;


console.log(i_gegenstand);
console.log(i_kugel);
console.log(i_qauder);

//// B

function Gegenstand2(bezeichner, gewicht){
    this.bezeichner = bezeichner;
    this.gewicht = gewicht;
}
Gegenstand2.prototype.getBeschreibung = function(){
    return this.bezeichner;
}
Gegenstand2.prototype.getGewicht = function(){
    return this.gewicht;
}

function Kugel2(bezeichner, gewicht, radius){
    Gegenstand2.call(this, bezeichner, gewicht);
    this.radius = radius;
}
Kugel2.prototype.getBeschreibung = function(){
    return this.bezeichner + " - Oberflaeche: "+ this.radius*Math.PI*Math.Pi;
}
function Quader2(bezeichner, gewicht, seitenLaenge){
    Gegenstand2.call(this, bezeichner, gewicht);
    this.seitenLaenge = seitenLaenge;
}

Quader2.prototype.getBeschreibung = function(){
    return this.bezeichner + " - Oberflaeche: "+ this.seitenLaenge*this.seitenLaenge;
}

var  i_gegenstand2 = new Gegenstand2("naber", 12);
var  i_kugel2 = new Kugel2("naber", 12, 7);
var  i_quader2 = new Quader2("naber", 12, 12);

console.log(i_gegenstand2);
console.log(i_kugel2);
console.log(i_quader2);


///// c

function Bankkonto(nameBank, nameInhaber, kontoNummer, PIN, guthaben, zinssatz)
{
    this.m_nameBank = nameBank;
    this.m_nameInhaber = nameInhaber;
    this.m_kontoNummer = kontoNummer;
    var m_PIN = PIN;
    var m_guthaben = guthaben;
    var m_zinssatz = zinssatz;

    this.setZinssatz = function(newZinsatz){
        m_zinssatz = newZinsatz;
    };
    this.setPin = function(newPin){
        m_PIN = newPin;
    };
    this.bucheBetrag = function(betrag){
        m_guthaben += betrag;
    };
}

var tolgasBank = new Bankkonto("a", "tolga", 123, 321, 100, 1);
var tolgasBank2 = new Bankkonto("a", "tolga2", 1203, 32100, 1000, 1);

tolgasBank2.setPin(999);
tolgasBank.bucheBetrag(-99);

console.log(tolgasBank2);
console.log(tolgasBank);


/////// d
$(document).ready(function(){

    var one = $("<div></div>").text("one");
    var two = $("<div></div>").text("two");
    var tree = $("<div></div>").text("tree");

    var butt = $("<button></button>").text("toggle");
    
    var clicked = 0;
    $(butt).on('click',function(){
        if(clicked==0)
            $(one).slideToggle();
        if(clicked==1)
            $(two).slideToggle();
        if(clicked==2)
            $(tree).slideToggle();

        clicked = (++clicked) % 3; 
    });

    $("body").prepend(one, two,tree, butt);

});