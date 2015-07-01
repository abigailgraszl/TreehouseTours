$(document).ready(function(){

	$("#tree1").hover(function(){
		$("#box1").fadeIn("fast");
	}, function(){
		$("#box1").fadeOut("fast");
	});

	$("#tree2").hover(function(){
		$("#box2").fadeIn("fast");
	}, function(){
		$("#box2").fadeOut("fast");
	});

	$("#tree3").hover(function(){
		$("#box3").fadeIn("fast");
	}, function(){
		$("#box3").fadeOut("fast");
	});

	$("#tree4").hover(function(){
		$("#box4").fadeIn("fast");
	}, function(){
		$("#box4").fadeOut("fast");
	});

	$("#tree5").hover(function(){
		$("#box5").fadeIn("fast");
	}, function(){
		$("#box5").fadeOut("fast");
	});

	$("#tree6").hover(function(){
		$("#box6").fadeIn("fast");
	}, function(){
		$("#box6").fadeOut("fast");
	});

	$("#tree7").hover(function(){
		$("#box7").fadeIn("fast");
	}, function(){
		$("#box7").fadeOut("fast");
	});

	$("#tree8").hover(function(){
		$("#box8").fadeIn("fast");
	}, function(){
		$("#box8").fadeOut("fast");
	});



///////FIND//////////////


	$("button").click(function(){
		
		var place = document.getElementById("place").value;
		var comfort= document.getElementById("type").value;
		var result1 = '<div id="results">\
				<div id="result1">\
				<img src="Photos/bigHouse.jpg" height="300" width="300">\
				<h4>Pennsylvania, USA</h4>\
				<p>Cozy and luxurious, this house is perfect for a weekend getaway.</p>\
			</div>'
		var result2= '<div id="result2">\
				<img src="Photos/acornHouse.jpg" height="300" width="300">\
				<h4>Oregon, USA</h4>\
				<p>Enjoy this unique house alsdkfaosdkjg aldkglasdkjgsLD</p>\
			</div>'
		var result3= '<div id="result3">\
				<img src="Photos/circle.jpg" height="300" width="300">\
				<h4>Kansas, USA</h4>\
				<p>Pretend you are in the future when you stay in this innovative treehouse</p>\
			</div>'
		var result4= '<div id="result4">\
				<img src="Photos/invisible.jpg" height="300" width="300">\
				<h4>Sweden</h4>\
				<p>Disappear from the world in these Swedish treehouses</p>\
			</div>'
		var result5= '<div id="result5">\
				<img src="Photos/open.jpg" height="300" width="300">\
				<h4>Khao Sok, Thailand</h4>\
				<p>Live outside alskdjfaosidjga dlkjg lakdjgowiej jklsdlkfjweioj g</p>\
			</div>'
		var result6='<div id="result6">\
				<img src="Photos/chairs.jpg" height="300" width="300">\
				<h4>Bahamas</h4>\
				<p>Pure relaxation ;alskdjfa;lskdjfal;sdkjfoaiwejlkasjdf</p>\
			</div>'
		var result7='<div id="result7">\
				<img src="Photos/lightsHouse.jpg" height="300" width="300">\
				<h4>Ireland</h4>\
				<p>A fairy house alskdjflsdkfj eijfaslkdgj alskdjfalsdkjfasdifjelk djf</p>\
			</div>'
		var result8='<div id="result8">\
				<img src="Photos/field.jpg" height="300" width="300">\
				<h4>South Africa</h4>\
				<p>Luxury and zebras alkdf alkdjf </p>\
			</div>'

		if (place=="americas" && comfort=="either"){
			$('#output').html(result1+result2+result3+result6);
			$("#output").css("margin-left", "225px");
			$("#navBarTree").css("margin-top", "525px");
			$("#footerTree").css("margin-top", "525px");
			// $("#output1").html($("#result1"));
			// $("#output2").html($("#result2"));
			// $("#output3").html($("#result3"));
			// $("#output4").html($("#result6"));
		}else if (place=="americas" && comfort=="luxury"){
			$('#output').html(result1+result6);
			$("#output").css("margin-left", "225px");
			$("#navBarTree").css("margin-top", "0px");
			$("#footerTree").css("margin-top", "0px");
			// $("#output1").html($("#result1"));
			// $("#output2").html($("#result6"));
		}else if (place=="americas" && comfort=="adventure"){
			$('#output').html(result2+result3);
			$("#output").css("margin-left", "225px");
			$("#navBarTree").css("margin-top", "0px");
			$("#footerTree").css("margin-top", "0px");
			// $("#output1").html($("#result2"));
			// $("#output2").html($("#result3"));
		}else if (place=="asia"){
			$('#output').html(result5);
			$("#output").css("margin-left", "376px");
			$("#navBarTree").css("margin-top", "0px");
			$("#footerTree").css("margin-top", "0px");
			// $("#output5").html($("#result5"));
		}else if (place=="europe" && comfort=="either"){
			$('#output').html(result4+result7);
			$("#output").css("margin-left", "225px");
			$("#navBarTree").css("margin-top", "0px");
			$("#footerTree").css("margin-top", "0px");
			// $("#output1").html($("#result4"));
			// $("#output2").html($("#result7"));
		}else if (place=="europe" && comfort=="luxury"){
			$('#output').html(result4);
			$("#output").css("margin-left", "376px");
			$("#navBarTree").css("margin-top", "0px");
			$("#footerTree").css("margin-top", "0px");
			// $("#output5").html($("#result4"));
		}else if (place=="europe" && comfort=="adventure"){
			$('#output').html(result7);
			$("#output").css("margin-left", "376px");
			$("#navBarTree").css("margin-top", "0px");
			$("#footerTree").css("margin-top", "0px");
			// $("#output5").html($("#result7"));
		}else if(place=="africa"){
			$('#output').html(result8);
			$("#output").css("margin-left", "376px");
			$("#navBarTree").css("margin-top", "0px");
			$("#footerTree").css("margin-top", "0px");
			// $("#output5").html($("#result8"));
		}else{

		};

	});



/*	var clicks=0;
	
	$("button").click(function(){
	
		clicks ++;
		console.log(clicks);

		var place = document.getElementById("place").value;
		var comfort= document.getElementById("type").value;
		var answers= document.getElementById("results").innerHTML;




		if(clicks>1){
			$("#results").css("display", "none");
			$("#")
			$("#results").fadeIn(function(){
				var place = document.getElementById("place").value;
				var comfort= document.getElementById("type").value;

				if (place=="americas" && comfort=="either"){
					$("#result1").fadeIn();
					$("#result1").css("margin-left", "225px");
					$("#result2").fadeIn();
					$("#result2").css("margin-left", "575px");
					$("#result3").fadeIn();
					$("#result3").css("margin-left", "225px");
					$("#result3").css("margin-top", "500px");
					$("#result6").fadeIn();
					$("#result6").css("margin-left", "575px");
					$("#result6").css("margin-top", "500px");
					$("#navBarTree").css("margin-top", "525px");
					$("#footerTree").css("margin-top", "525px");
				} else if (place=="americas" && comfort=="luxury"){
					$("#result1").fadeIn();
					$("#result1").css("margin-left", "225px");
					$("#result6").fadeIn();
					$("#result6").css("margin-left", "575px");
				} else if (place=="americas" && comfort=="adventure") {
					$("#result2").fadeIn();
					$("#result2").css("margin-left", "225px");
					$("#result3").fadeIn();
					$("#result3").css("margin-left", "575px");
				} else if (place=="asia"){
					$("#result5").fadeIn();
					$("#result5").css("margin-left", "376px");
				}else if (place=="europe" && comfort=="either") {
					$("#result4").fadeIn();
					$("#result4").css("margin-left", "225px");
					$("#result7").fadeIn();
					$("#result7").css("margin-left", "575px");
				}else if (place=="europe" && comfort=="luxury") {
					$("#result4").fadeIn();
					$("#result4").css("margin-left", "376px");
				}else if (place=="europe" && comfort=="adventure") {
					$("#result7").fadeIn();
					$("#result7").css("margin-left", "376px");
				}else if(place=="africa"){
					$("#result8").fadeIn();
					$("#result8").css("margin-left", "376px");
				}else{

				};
			}); 
				
		}else{
			if (place=="americas" && comfort=="either"){
				$("#result1").fadeIn();
				$("#result1").css("margin-left", "225px");
				$("#result2").fadeIn();
				$("#result2").css("margin-left", "575px");
				$("#result3").fadeIn();
				$("#result3").css("margin-left", "225px");
				$("#result3").css("margin-top", "500px");
				$("#result6").fadeIn();
				$("#result6").css("margin-left", "575px");
				$("#result6").css("margin-top", "500px");
				$("#navBarTree").css("margin-top", "525px");
				$("#footerTree").css("margin-top", "525px");
			} else if (place=="americas" && comfort=="luxury"){
				$("#result1").fadeIn();
				$("#result1").css("margin-left", "225px");
				$("#result6").fadeIn();
				$("#result6").css("margin-left", "575px");
			} else if (place=="americas" && comfort=="adventure") {
				$("#result2").fadeIn();
				$("#result2").css("margin-left", "225px");
				$("#result3").fadeIn();
				$("#result3").css("margin-left", "575px");
			} else if (place=="asia"){
				$("#result5").fadeIn();
				$("#result5").css("margin-left", "376px");
			}else if (place=="europe" && comfort=="either") {
				$("#result4").fadeIn();
				$("#result4").css("margin-left", "225px");
				$("#result7").fadeIn();
				$("#result7").css("margin-left", "575px");
			}else if (place=="europe" && comfort=="luxury") {
				$("#result4").fadeIn();
				$("#result4").css("margin-left", "376px");
			}else if (place=="europe" && comfort=="adventure") {
				$("#result7").fadeIn();
				$("#result7").css("margin-left", "376px");
			}else if(place=="africa"){
				$("#result8").fadeIn();
				$("#result8").css("margin-left", "376px");
			}else{

			};
		};

	});	

*/


});