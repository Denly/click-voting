var balli=0;

var shoot = function(color,who){
	
	var div=$("#anima");
    	balli++;
      if(Math.random()<=0.01){
        var ball=$("<img class='ball' id='ball' src='poop.png'></img>").appendTo(div);
      }else if (Math.random()<=0.2) {
            if (who=='K') {
              var ball=$("<img class='ball' id='ball' src='cat.png'></img>").appendTo(div);
            }else{
              var ball=$("<img class='ball' id='ball' src='ttc.png'></img>").appendTo(div);
            }
      }else{
  var ball=$("<div class='ball' id='ball'"+balli+">").css({'background-color':color}).appendTo(div);
}

var bezier_params = function(w){
	if(w=='L'){
		var Ex = $('.Nl').offset().left;
	}else if(w=='K'){
		var Ex = $('.Nk').offset().left;}
	var sa = Math.random()*720-360;
	var ea = Math.random()*720-360;
	var el = Math.random()*2;
	var sy = $('.hole').offset().top+8;
	var sx = $('.hole').offset().left+10;
	var ey = $('.Nk').offset().top;
	var ex = $('.Nk').offset().left;
	return {
    start: { 
      x: sx, 
      y: sy, 
      angle: sa
    },  
    end: { 
      x:Ex,
      y:ey, 
      angle: ea, 
      length: el
    }
  }
};

	//ball.animate({path : new $.path.arc(arc_params())});
	ball.animate({path : new $.path.bezier(bezier_params(who))},{duration: 600, queue:false});
	ball.animate({height:'100px',width:'100px',opacity:'0.5'},{ duration: 350, queue:true});
	ball.animate({width:'30px',height:'30px',opacity:'0.9'},{ duration: 250, queue:true});
    ball.queue(function(){$(this).remove();});
    console.log('animated'+balli);
};

Template.hello.events({
    'click .Kbtn': function () {
      shoot('yellow','K');
    	
    },
    'click .Lbtn': function () {
    	shoot('red','L');

    }
});