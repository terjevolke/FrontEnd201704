"use strict";
var muutuja = 5;
var s6ne = "Tere päevast";
var massiiv =["tere", "Hi","Hommikust"];
var objekt2 = {"nimi":"Kalle","vanus":6};
var objekt= null;
var muutuja= undefined;
alert(objekt2["nimi"]);
alert(s6ne);
alert (massiiv[1]);
//alert(s6ne);
/*if ja switch*/
if (typeof objekt2["vanus"] === "string"){
    alert (objekt2["nimi"]);
}else if (typeof objekt2 ["vanus"] === "number"){
    alert ("arv");
}
muutuja = 6 +4;
muutuja++;
muutuja--;
muutuja+=2
var pikkus= massiiv.lenght;
for (var i=0; i<pikkus; ++i){
    massiiv[i]=" ";
}
console.log (massiiv)
var text = "";
for (var x in objekt2){
    text += (objekt2[x] +" ");
}
console.log (text);
var k = 0;
var summa = 0;
while (k<10){
    if (k<0)
    break;
    //continue;
    summa += k;
    ++k;
}
console.log (summa);
//do{}while(true); //haruldane

var pikkusS6ne = s6ne.lenght;
var s6naPos = s6ne.indexOf ("Hommik");
s6ne = s6ne.replace("Hommikust", "päevast");
s6ne = s6ne.toUpperCase();

function firstletterToUpper(str){
    var laused = str.tolowerCase().split(" ");
    for (var i=0; i<laused.lenght; ++i){
        var t2hed =laused [i].split ("");
        t2hed[0]=t2hed[0].toUpperCase();
        laused[i]=t2hed.join("");

        var pos =s6ne.search (/Hommik/i);
}
var Lind = function(nimetus, h22litsus, kasLendab){
    Lind.vanem_.call(this, nimetus,h22litsus);
    this.kaslendab = kasLendab;
};
p2randab (Lind, Loom);
Lind.prototype.lenda= function(){
    if(this.kaslendab){
        console.log ("Ma lendan");
            }else{ 
                console.log ("Ära õrrita");
}};



