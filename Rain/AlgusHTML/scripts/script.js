"use strict";
var muutuja = 5;
var s6ne = "Tere Päevast";
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
muutja = 6 + 4;
// +;-;*,/ -võimalikud tehted
muutuja = 5 % 1;  //jääk
muutuja = muutuja + 1;
muutuja++; //sama mis eelmine tehe, liidab ühe juurde
++muutuja; // sama mis eelmine, kuid arv suurendatakse hiljem
muutuja--; --muutuja; //vähendab ühe võrra
muutuja += 2; // +=; -=; *=; /=



