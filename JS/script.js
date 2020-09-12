//Button types bellow
$(document).ready(function(){
    $("#day-btn").hide();
    $("#large-btn").hide();
    $("#small-btn").hide();
})

//reset button

//night and day mode 
$("#night-btn").click(function(){
    $("#day-btn").show();
    $("#night-btn").hide();
    $("body").css("backgroundColor", "darkslategray");
    $("#content").css("boxShadow", "none");
    $("#tool-bar").css("background-color", "rgb(247, 146, 134)");
})

$("#day-btn").click(function(){
    $("#night-btn").show();
    $("#day-btn").hide();
    $("body").css("background-color", "rgb(211, 211, 211)");
    $("#tool-bar").css("background-color", "darkslategray");
})

//Text resize 
$("#large-btn").click(function(){
    $("#large-btn").hide();
    $("#small-btn").show();
    $("#head-para").css("font-size", "30pt");
    $("#para").css("font-size", "21pt");
})

$("#med-btn").click(function(){
    $("#med-btn").hide();
    $("#large-btn").show();
    $("#head-para").css("font-size", "23pt");
    $("#para").css("font-size", "18pt");
})

$("#small-btn").click(function(){
    $("#small-btn").hide();
    $("#med-btn").show();
    $("#head-para").css("font-size", "18pt");
    $("#para").css("font-size", "12pt");
})

//Hide content
