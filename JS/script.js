//Button types bellow
$(document).ready(function(){
    $("#day-btn, #large-btn, #small-btn").hide();
})

//reset button
$('#reset-btn').click(function(){
    $("#day-btn").hide();
    $("#night-btn").show();
    $('header').css('background-color', 'salmon');
    $('#head-title').css('color', 'rgb(119, 38, 38)');
    $('#head-title').css('border-color', 'rgb(119, 38, 38)');
    $('header').css('border-color', 'indianred');
    $("body").css("background-color", "rgb(211, 211, 211)");
    $("#tool-bar").css("background-color", "darkslategray");
    $("#med-btn").show();
    $("#small-btn, #large-btn").hide();
    $("#head-para").css("font-size", "18pt");
    $("#para").css("font-size", "12pt");
    $('.btn').css('border-color', 'cornflowerblue');
    $('.btn').css('background-color', 'lightskyblue');
});

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

//Color Randomizer
$('#color-btn').click(function(){
	let ranVal = Math.floor(Math.random() * 10);
	switch (ranVal) {
	case 1:
    $('header').css("background-color", "tomato");
    $('header, #head-title').css('border-color', 'orange');
    $('#head-title').css('color', 'orange');
    $('.btn').css('background-color', 'tomato');
    $('.btn').css('border-color', 'orange');
    break;
  case 2: 
    $('header').css("background-color", "lightgray");
    $('header, #head-title').css('border-color', 'firebrick');
    $('#head-title').css('color', 'firebrick');
    $('.btn').css('background-color', 'lightgray');
    $('.btn').css('border-color', 'darkgray');
    $('.btn').css('color', 'firebrick');
    break;
  case 3:
  	$('header').css("background-color", "darkslateblue");
    $('.btn').css('background-color', 'darkslateblue');
    $('.btn').css('border-color', 'purple');
    $('.btn').css('color', 'white');
    $('header, #head-title').css('border-color', 'white');
    $('#head-title').css('color', 'white');
    break;
  case 4:
  	$('header').css("background-color", "pink");
    $('.btn').css('background-color', 'pink');
    $('.btn').css('border-color', 'hotpink');
    $('.btn').css('color', 'firebrick');
    break;
  case 5:
  	$('header').css("background-color", "indianred");
    $('.btn').css('background-color', 'indianred');
    $('.btn').css('border-color', 'red');
    $('.btn').css('color', 'firebrick');
    break;
  case 6:
  	$('header').css("background-color", "skyblue");
    $('.btn').css('background-color', 'skyblue');
    $('.btn').css('border-color', 'cornflowerblue');
    $('.btn').css('color', 'firebrick');
    break;
  case 7:
  	$('header').css("background-color", "springgreen");
    $('.btn').css('background-color', 'springgreen');
    $('.btn').css('border-color', 'green');
    $('.btn').css('color', 'firebrick');
    break;
  case 8: 
  	$('header').css("background-color", "coral");
    $('.btn').css('background-color', 'coral');
    $('.btn').css('border-color', 'tomato');
    $('.btn').css('color', 'firebrick');
    break;
  case 9:
  	$('header').css("background-color", "hotpink");
    $('.btn').css('background-color', 'hotpink');
    $('.btn').css('border-color', 'magenta');
    $('.btn').css('color', 'firebrick');
    break;
  case 10:
  	$('header').css("background-color", "cyan");
    $('.btn').css('background-color', 'cyan');
    $('.btn').css('border-color', 'teal');
    $('.btn').css('color', 'firebrick');
    break;
  default:
  	$('header').css("background-color", "black");
    $('.btn').css('background-color', 'black');
}
})
