"use strict";
function tyhiFunksioon(){/*sisu*/};
tyhiFunksioon();
(function(){
    /*muutuja tüübid*/
	var muutuja = 5;
	var s6ne = "Tere Hommikust Hommikust";
	var bool = false;
	var massiiv = ["Tere", "Hi", "Hommikust"];
	var objekt2 = {"nimi": "Kalle", "vanus": 6};
	var objekt3 = null;
	//var muutujal = undefined;
	//var muutuja2;
    if(muutuja === 10){
		//Kui muutuja on arv kümme
	}else if(muutuja >= 11){
		//kui muutuja ei eksisteeri
	}else if(!muutuja){
		//kui muutuja ei eksisteeri
	}else{
		//Kõik muu
	}
	var arvu = 3;
	switch(arvu){
		case 0:
			muutuja = 1;
			break;
		case 3:
			muutuja = 3;
			break;
		default:
			muutuja = 10;
	}

	/*artimeetilised lühendid*/
	muutuja++; ++muutuja;
	muutuja--; --muutuja;
	// +-*/
	muutuja = muutuja % 2;
	muutuja %= 2;
	//+= -= *= /=

	/*Tsükklid*/
	var pikkus = massiiv.length;
	for(var i = 0; i < pikkus; ++i){
		massiiv[i]+=" ";
	} //["Tere ", "Hi ", "Hommikust "];
	var text = "";
	for(var x in objekt2){
		text += (objekt2[x] + " ");
	}//"Kalle 6 "
	console.log(text);
	var k = 0;
	var summa = 0;
	while(k < 10){
		if(k < 0)
			break; //Katkestab tsükli
		//continue - mida kasutakse, et katkestada tsükkel korra
		summa += k; 
		++k;
	}//45
	console.log(summa);
	//do{}while(true); //Haruldane

	/*Teisendamine*/
	//Teised tüübid sõneks
	muutuja.toString();
	String(muutuja);//sama mis eelmine;
	//arv sõneks täpsusega
	muutuja.toExponential(2); //5.00e+0
	muutuja.toFixed(2); //5.00
	muutuja.toPrecision(2); //5.00 - koos ümardamisega
	var aasta = "2007"
	Number(aasta);
	parseInt(aasta); //"2007 aasta"
	parseFloat(aasta); //Tagastab ka koma kohti
	/*fikseeritud väärtused*/
	var muutuja4 = Number.MAX_VALUE;
	if(parseInt("arv 5") !== Number.NaN){}
	//MAX_VALUE, MIN_VALUE, NEGATIVE_INFINITY
	//POSITIVE_INFINITY, NaN <- Not-a-Number

	/*s6ne funktsioonid*/
    var pikkusS6ne = s6ne.length;
    //Leiab esimese tähemärgi positsiooni kui ei leia -1
    var s6naPos = s6ne.indexOf("Hommik"); //s6ne.search("")
    //Leiab esimese tähemärgi positsiooni aga viimase sõna puhul
    var l6ppPos = s6ne.lastIndexOf("Hommik");
    //Lõigata sõne välja
    s6ne = s6ne.slice(0, l6ppPos-1); //s6ne.substr()
    //Asendamine
    s6ne = s6ne.replace("Hommikust", "Päevast");
    //Tähe suurus
    s6ne = s6ne.toUpperCase();
    s6ne = s6ne.toLowerCase();

    function firstLetterToUpper(str) {
        var laused = str.toLowerCase().split(". ");
        for(var i = 0; i < laused.length; ++i){
            var t2hed = laused[i].split("");
            t2hed[0]= t2hed[0].toUpperCase();
            laused[i] = t2hed.join("");
        }
        return laused.join(". ");
    };
    var tootlemataText = "esiMene lause. tEine lause.";
    var toodeldudText = firstLetterToUpper(tootlemataText);
    console.log(toodeldudText);

    s6ne = s6ne + s6ne;
    s6ne = s6ne.concat(" ", "Juku", "...");
    var massiiv2 = s6ne.split(" ");
    //Regex
    var pos = s6ne.search(/Hommik/i);

    //Math - matemaatika
    // E (euleri), PI, SQRT2, LN2, LN10 (naturaalsed logaritmid)
    //LOG2E, LOG10E (logaritmid eulerist)

    muutuja = Math.pow(Math.PI, 2);
    //asin(x), sin(x), tan(x) ...
    //abs(x), ceil(x), floor(x),  round(x) - ümardamine
    //exp(x), log(x), pow(x, y) - astmes
    muutuja = Math.floor(Math.random() *10); //0-9
    muutuja = Math.floor(Math.random() *10) + 2; //2-11

    /*massiivi funktsioonid*/
	massiiv = ["Õun","Pirn","Kurk"];
    massiiv.toString(); //"Õun,Pirn,Kurk"
    massiiv.join(", "); //"Õun, Pirn, Kurk"
    massiiv.pop(); //"Kurk" //"Õun, Pirn"
    massiiv[0]; //"Õun"
    massiiv.lengh;
    massiiv.push("Tomat");
    //Esimese elemendi eemaldamine ja lisamine
	//shift() ja unshift("Kaalikas")
	//"Kaalikas,Pirn,Kurk,Tomat"

    //elemendivahetus
    massiiv[1] ="Kõrvits";
    //delete massiiv[1]; //hoidu //"undefined" 
    massiiv = massiiv.splice(2, 1, "Ploom", "Vaarikas");
    //"Kaalikas,Kõrvits,Ploom,Vaarikas,Tomat"
    massiiv.concat(massiiv);
    massiiv = massiiv.slice(massiiv.length/2);

    /*massiivi sorteerimine*/
    massiiv.sort();
    massiiv.reverse();
    //arvude sorteerimiseks 1, 3, 6, 9
    massiiv.sort(function(a,b){return a - b;});

    var massiiv3 = [
		{"nimi": "Kalle", "vanus": 16},
		{"nimi": "Juku", "vanus": 12},
		{"nimi": "Pille", "vanus": 9}
	];
    massiiv3.sort(function(a, b){
        console.log( "võrdle " + a.vanus + ",  " +  b. vanus);
        return a.vanus - b.vanus;
    });
    console.log(massiiv3);
})();