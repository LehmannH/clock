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
function ZeitAnzeige () {
    //count+=1;
    Gehaltehalt = document.getElementById("ClockGehalt").value;
    sekgeh = Gehaltehalt / 2592000;
    count+=sekgeh;
    //alert('count');


    if (DHTML) {
        if (NS4) {
            setContent("id", "UhrG", null, '<span class="UhrG">' + count + "<\/span>");
        } else {
            setContent("id", "UhrG", null, count);
        }
        window.setTimeout("ZeitAnzeige()", 1000);
    }


}
