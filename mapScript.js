// var markerPoints = {
// 	A: {left: "705px", top: "440px"},
// 	B: {left: "675px", top: "453px"},
// 	C: {left: "664px", top: "435px"},
// 	D: {left: "590px", top: "507px"},
// 	E: {left: "522px", top: "491px"},
// 	F: {left: "570px", top: "360px"},
// 	G: {left: "656px", top: "376px"}

// }


$(document).ready(function(){
	var mapZoom = true;
	$( "#left-blurb-area" ).click(function() {
  		$("#left-blurb-text").dialog({
  			width:500,
  			height: 800, 
  			title: "Description of the Battle",
  			position: { my: "left", at: "left", of: window }
  			});
	});
	$(".marker-A").click(function() {
		$("#hover-dot").css({"visibility": "visible", "left": "705px", "top": "440px"});
	});
	$(".marker-B").click(function() {
		$("#hover-dot").css({"visibility": "visible", "left": "670px", "top": "448px"});
	});
	$(".marker-C").click(function() {
		$("#hover-dot").css({"visibility": "visible", "left": "654px", "top": "429px"});
	});
	$(".marker-D").click(function() {
		$("#hover-dot").css({"visibility": "visible", "left": "583px", "top": "498px"});
	});
	$(".marker-E").click(function() {
		$("#hover-dot").css({"visibility": "visible", "left": "510px", "top": "482px"});
	});
	$(".marker-F").click(function() {
		$("#hover-dot").css({"visibility": "visible", "left": "565px", "top": "352px"});
	});
	$(".marker-G").click(function() {
		$("#hover-dot").css({"visibility": "visible", "left": "648px", "top": "368px"});
	});
	$(".marker-I").click(function() {
		$("#hover-dot").css({"visibility": "visible", "left": "527px", "top": "415px"});
	});
	$(".marker-K").click(function() {
		$("#hover-dot").css({"visibility": "visible", "left": "642px", "top": "453px"});
	});
	$("#check").button();
	$("#check").click(function() {
		if (mapZoom==true) {
			var evt = new Event(),
    			m = new Magnifier(evt);
       			m.attach({
          			thumb: '#full-map',
          			large: 'http://www.southcarolinahistoricalsociety.org/wp-content/uploads/2015/03/Noo-He-Roo-Ka-Fort-2.jpg',
          			mode: 'inside',
          			zoom: 3,
          			zoomable: true
      			});
      		mapZoom = false;	
		} else {
			evt = null;
			m = null;
			
			window.parent.location.reload();
		}
	});
    
});
