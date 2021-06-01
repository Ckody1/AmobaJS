$(function(){ 
    
    kiir();
});





function kiir(){
    $("article").append("<table>");
    
    for (var i = 0; i < hossz; i++) {
        $("article table").append("<tr>");
        for (var j = 0; j < hossz; j++) {
            $("article table tr").eq(i).append("<td></td>");
        } 
    }
}