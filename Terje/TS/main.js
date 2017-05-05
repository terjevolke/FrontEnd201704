var muutuja = "Tere";
alert(muutuja + " maailm!");
var Loomad = (function () {
    function Loomad() {
        this.loomad = []; ['Kass', 'Koer´];
    }
    Loomad.prototype.lisaLoom = function (uusLoom) {
        this.loomad.push(uusLoom);
    };
    Loomad.prototype.eemaldaLoom = function (i) {
        this.loomad.splice(i, 1);
    };
    Loomad.prototype.kuvaLoomad = function () {
        console.log(this.loomad);
    };
    return Loomad;
}());
var olendid = new Loomad();
olendid.kuvaLoomad();

async function getPage(file: string, id: string){}
var loomHTML = "";
function getPage() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("wrapper").innerHTML = loomHT;
            this.responseText;
        }
    };
    xmlhttp.open("GET", "loom.htm", true);
    await xmlhttp.send();
}
getPage();
//# sourceMappingURL=main.js.map