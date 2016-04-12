var Resize = function(){

var t = $('#vs').width()*0.49;
var s = $('#vs').width()/30;
$('.Nk,.Nl').css({'top':t+'px'});
$('h2').css({'font-size': s+'px'});
s=s*1.2;
$('h1').css({'font-size': s+'px'});
$('.vsfoot').css({'top':t+'px'});
var tt=t*1.45;
$('.foot').css({'top':tt+'px'});
tt=tt*0.15;
$('.foot').css({'left':tt+'px'});

t=t*1.12;
$('.Kbtn,.Lbtn').css({'top':t+'px'});
t=t*1.1;
$('.hole').css({'top':t+'px'});

}

$(document).ready(function(){


Resize();
$(window).resize(function(){
	Resize();

});

});
