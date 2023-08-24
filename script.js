$(document).ready(function(){
    var navtabs=document.getElementById("navtabs");

    $("#hamburger").click(function(){
        if(navtabs.style.display=="flex"){
            $(".navtabs").css({"display":"none"});
            $(".button").css({"display":"none"});
        }
        else{
            $(".navtabs").css({"display":"flex"});
            $(".button").css({"display":"flex"});

        }
    })
})