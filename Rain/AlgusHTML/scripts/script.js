"use strict";
var muutuja = 5;
var s6ne = "Tere Hommikust";
var massiiv = ["Tere", "Hi", "Hommikust" ];
var objekt2 = {"nimi": "Kalle", "vanus": 6};
var objekt = null;
var muutuja2; //antakse väärtuseta muutuja
//alert(objekt2["nimi"]);
//alert(massiiv[0]);
//alert(s6ne);

//if ja switch
// != ei ole võrdne; && ja; === on võrdne; == võrdväärne; !== ei tohi olla võrdne; <=; >=;
// || või; ! ei;
if(typeof objekt2["nimi"] === "string"){
        alert(objekt2["nimi"]);
    }else if(typeof objekt2["vanus"] === "number"){
        alert("arv");
    }else{}

switch (muutuja) {
    case 0:
        alert("arv0");
        break;
        case 5:

    alert("arv5");
        break;

    default:
        break;
}
muutuja = 6 + 4;
// +;-;*,/ -võimalikud tehted
muutuja = 5 % 1;  //jääk
muutuja = muutuja + 1;
muutuja++; //sama mis eelmine tehe, liidab ühe juurde
++muutuja; // sama mis eelmine, kuid arv suurendatakse hiljem
muutuja--; --muutuja; //vähendab ühe võrra
muutuja += 2; // +=; -=; *=; /=


var pikkus = massiiv.lenght;
for(var i = 0; i < pikkus; ++i){
    massiiv[i] += " ";
} // pikkus on kolm, kuna massiivis on kolm elementi, see käiakse kolm korda läbi ja igale massiivi elemendiele lisatakse tühik
//alert(massiiv);
console.log(massiiv);  //teeb töö ära, kuid kuvab ainult INSPECT ELEMENT->Console aknas.


var text ="";
for(var x in objekt2){
    text += (objekt2[x] + " ");
} // see tsükkel käib läbi iga elemendi massiivis, ja kuvab väärtuse (kalle 6)
console.log(text);


var k = 0;
var summa = 0;
while (k<10) {
    if (k < 0)
        break;
        //continue; katkestab korraks???
    summa += k;
    ++k;
} // teeb läbi tsükli 0 -9 ja liidab kõik kokku, if on antud juhul üleliigne kuna meil on positiivsed arvud
console.log(summa)

//do{}while(true); //haruldane

//Teisendamine
var muutujaS6nena = muutuja.toString();  //muutuja tõlgendatakse tekstiks
muutujaS6nena = muutujaS6nena + muutujaS6nena;  // kui väärtus oleks 45 siis summa oleks 4545, kuna tegemist on tekstiga
String(summa); 

muutuja.toExponential(2); // tagastab kujul 4.00e+0
muutuja.toFixed(2); //kaks kohta peale nulli
muutuja.toPrecision(2); // kaks kohta peale koma, koos ümardamisega

var aasta = "2007.45";
Number(aasta); //teisendab sõne numbriks
parseInt(aasta); //teisendab sõne täisarvuks 2007
parseFloat(aasta); //teisendab sõne numbriks nt koos komaga 2007,45


var muutuja4 = Number.MAX_VALUE;
if(parseInt("arv 5" !== Number.Nan)){}  //kontrollib, kas on tegemist numbriga
//MAX_VALUE, MIN_VALUE, NEGATIVE_INFINITY, POSITIVE_INFINITY, NaN - Not a number

//S6ne funktsioonid

var pikkusS6ne = s6ne.length;
var s6nePos = s6ne.indexOf("Hommik"); //Leiab esimese H tähe positsiooni
var l6ppPos = s6ne.lastIndexOf("Hommik"); // Leiab viimase märgi

//Lõigata s6ne välja
s6ne = s6ne.slice(0, l6ppPos-1); // võtan s6ne -st Tere ja jätab hommiku ära

//Asendamine
s6ne = s6ne.replace("Hommikust", "Päevast"); // Hommikust asenab Päevast sõnaga

//Tähe suurus
s6ne = s6ne.toUpperCase();
s6ne = s6ne.toLowerCase();

//Funktsiooni tegemine
function tyhiFunktsioon(){/*sisu*/};
tyhiFunktsioon();

//Anonüümne funktsioon
(function(){

})(); //Anonüümne funktsiooni lõpp

function firstLetterToUpper(str){
    var laused = str.toLowerCase().split(". ");
    for(var i = 0; i < laused.lenght; ++i){
        var t2hed = laused[i].split("");
        t2hed[0]= t2hed[0].toUpperCase();
        laused[i]= t2hed.join("");
    }
    return laused.join(". ")
};
var tootlemataText = "esimeNe teKst. KUSKIL KOhas.";
var toodeldudText = firstLetterToUpper(tootlemataText);
console.log(toodeldudText);


s6ne = s6ne + s6ne;
s6ne = s6ne.concat(" ", "Juku", "...");
var massiiv2 = s6ne.split(" ");

//Regex
var pos = s6ne.search(/Hommik/i);

//Math
// E (euleri), PI, SQRT, LN2, LN10, LOG2E, LOG10E

muutuja = Math.pow(Math.PI, 2); // Pii astmes kaks

//asin(x), sin(x) ...
// abs(x), ceil(x) -ümardab üles, floor(x) -ümardab alla, round(x) -ümardab tavaliselt
//exp(x), log(x), pow(x,y) -astmele
muutuja = Math.floor(Math.random() *10); //random annab väärtuse 0-9
muutuja = Math.floor(Math.random() *10) + 2; // random 2-11

// Massiivi funktsioonid

masiiv = ["Õun","Pirn","Banaan"];
massiiv.toString(); // paneb massiivi sõneks
massiiv.join(", "); // paneb massiivi sõneks koma ja tühikuga eraldatud
massiiv.pop(); // "Banaan" //"Õun, Pirn
massiiv[0]; // Õun
massiiv.lenght;
massiiv.push("Tomat"); // Lisab Tomat massiivi ja ütleb uue massiivi pikkuse
//shift() ja unshift() lisab ja eemaldab esimese elemendi massiivis

massiiv[1] = "Kõrvits"; //vahetab elemendi välja 

//delete massiiv[1]  --MITTE TEHA - Undefined tulemus

massiiv = massiiv.splice(2, 1, "Ploom", "Vaarikas"); //lisab Plomi ja Vaarika massiivi vahele 
massiiv.concat(massiiv); // lisab massiivile teise massiivi juurde
massiiv = massiiv.slice(massiiv.length/2); //teeb massiivi kaks korda väiksemaks

//SORTEERIMINE
massiiv.sort();
massiiv.reverse();

//arvude sorteerimiseks 1,3,6,9
massiivsort(function(a,b){return a-b;});

