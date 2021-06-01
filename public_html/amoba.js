$(function(){   
    kiir();
    $("article").on("click", "td", Kattint);  
});


var kattintott = 0;
var hossz = 3;
var mezoId = 0;
var idTomb = [];


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
        idTomb += id;
        kattintott ++;
        ellenorzes();  
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
    }
    else{
        $("section h2").html("DÖNTETLEN");
    }
}