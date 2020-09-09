//Night Mode Button Effect
$(document).ready(function(){
    $("#day-btn").hide();
})

$("#night-btn").click(function(){
    $("#day-btn").show();
    $("#night-btn").hide();
    $("body").css("backgroundColor", "darkslategray");
})

$("#day-btn").click(function(){
    $("#night-btn").show();
    $("#day-btn").hide();
    $("body").css("backgroundColor", "rgb(211, 211, 211)");
})
