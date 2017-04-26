"use strict";
var muutuja = 5;
var s6ne = "Tere Päevast Päevast";
var massiiv = ["Tere", "Hi", "Hommikust"];
var objekt2 = {"nimi" : "Kalle", 
               "vanus": 6 };
var objekt = null;
var muutuja2;
//alert(objekt2["nimi"]);

/*if ja switch*/
if(typeof objekt2["nimi"] == "string"){
    /*===, ==, !==, !=, <=, >=, <, > */
    /* &&, ||, !, ja, või, eitus */
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