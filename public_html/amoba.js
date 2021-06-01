$(function(){
    kiir();
    $("article").on("click", "td", Kattint);
});


var kattintott = 0;
var hossz = 3;
var mezoId = 0;
var idTomb = [];
var nyerte = false;


function kiir(){
    $("article").append("<table>");
    $("section").append("<h2>");
    $("section h2").append("1. lépés, Játékos: X");
    
    for (var i = 0; i < hossz; i++) {
        $("article table").append("<tr>");
        for (var j = 0; j < hossz; j++) {
            $("article table tr").eq(i).append("<td id='"+ mezoId +"'>");
            mezoId ++;
        } 
    }
}

function Kattint(){
    var id = $(this).attr("id");
    console.log(id);
    var uresMezo = true;
    for (var i = 0; i < idTomb.length; i++) {
        if(id === idTomb[i]){
            uresMezo = false;
            break;
        }
    }
    if(uresMezo){
        $("article td").eq(id).append(Jel);
        $("article td").eq(id).attr("value", Jel);
        idTomb += id;
        kattintott ++;
        
        if (!nyerte){
            ellenorzes(); 
        }
    }
}

function Jel(){
    if(kattintott % 2 === 0){
        return "X";
    }
    else{
        return "O";
    }
}

function ellenorzes(){
    if(kattintott < hossz * hossz){
        $("section h2").html((kattintott + 1) + ". lépés, Játékos: " + Jel());
        atvizsgalas();
    }
    else{
        $("section h2").html("DÖNTETLEN");
    }
}


function atvizsgalas(){
    var feladatSzam = 1;
    var db, index, jel, kilep, seged1, seged2, seged3, seged4;
    while (feladatSzam < 5 && !nyerte) {
        db = 0;
        index = parseInt(idTomb[idTomb.length-1]);
        jel = $("article td").eq(index).attr("value");
        kilep = false;
        seged1 = 1;
        seged2 = 2;
        seged3 = 3;
        seged4 = 4;
        for (var i = 0; i < 2; i++) {
            while (db < 2 && !kilep) {
                switch (feladatSzam) {
                    case 1: index -= seged3; break;
                    case 2: index -= seged1; break;
                    case 3: index -= seged2; break;
                    case 4: index -= seged4; break;
                }
                if (index < 9) {
                    if ($("article td").eq(index).attr("value") === jel) {
                        db++;
                    } else {
                        kilep = true;
                    }
                } else {
                    kilep = true;
                }
            }
            seged1 *= -1;
            seged2 *= -1;
            seged3 *= -1;
            seged4 *= -1;
            index = parseInt(idTomb[idTomb.length - 1]);
            kilep = false;
        }
        feladatSzam ++;
        if(db === 2){
            nyerteskiir(jel);
            nyerte = true;
        }
    }
    
    
}

function nyerteskiir(nyertes){
    $("section h2").html("NYERTES: " + nyertes);
    nyerte = true;
}