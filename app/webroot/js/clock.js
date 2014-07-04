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
