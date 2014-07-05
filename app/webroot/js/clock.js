/**
 * Created by Konrad on 27.06.14.
 */

function ZeitAnzeigen () {
    var Wochentagname = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch",
        "Donnerstag", "Freitag", "Samstag");
    var Jetzt = new Date();
    var Stunden = Jetzt.getHours();
    var Minuten = Jetzt.getMinutes();
    var Sekunden = Jetzt.getSeconds();
    var Vorstd = (Stunden < 10) ? "0" : "";
    var Vormin = (Minuten < 10) ? ":0" : ":";
    var Vorsek = (Sekunden < 10) ? ":0" : ":";
    var Uhrzeit = Vorstd + Stunden + Vormin + Minuten + Vorsek + Sekunden;

    if (DHTML) {
        if (NS4) {
            setContent("id", "Uhr", null, '<span class="Uhr">' + Uhrzeit + "<\/span>");
        } else {
            setContent("id", "Uhr", null, Uhrzeit);
        }
        window.setTimeout("ZeitAnzeigen()", 1000);
    }
}

function getinhalt () {

    //alert('count');
    Gehaltehalt = document.getElementById("ClockGehalt").value;


    if (DHTML) {
        if (NS4) {
            setContent("id", "Inhalt", null, '<span class="Inhalt">' + Gehaltehalt + "<\/span>");
        } else {
            setContent("id", "Inhalt", null, Gehaltehalt);
        }
        window.setTimeout("getinhalt()", 100);
    }


}

var count=0;
var Mingeh=0;
var Stdgeh=0;
function ZeitAnzeige () {

    Vorstd = (Stdgeh < 10) ? "0" : "";
    Vormin = (Mingeh < 10) ? ":0" : ":";
    Vorsek = (count < 10) ? ":0" : ":";

    Geldzeit = Vorstd + Stdgeh + Vormin + Mingeh + Vorsek + count;
    Gehaltehalt = document.getElementById("ClockGehalt").value;
    sekgeh = Gehaltehalt / 2592000;


    stdgeh = Gehaltehalt / 2592000;

    if(count < 100){
    count+=sekgeh;
    }
    if(count > 100)
    {
        count=count-100;
        Mingeh+=1;

    }
    if(Mingeh > 100)
    {
        count=count-100;
        Mingeh=Mingeh-100;
        Stdgeh+=1;
    }
      //alert('count');


    if (DHTML) {
        if (NS4) {
            setContent("id", "UhrG", null, '<span class="UhrG">' + Geldzeit + "<\/span>");
        } else {
            setContent("id", "UhrG", null, Geldzeit);
        }
        window.setTimeout("ZeitAnzeige()", 1000);
    }


}
