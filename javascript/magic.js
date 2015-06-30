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

	var clicks=0;
	/*$("#submit").click(function clickMe(){
		clicks ++;
		console.log(clicks);
	});
*/

	$("button").click(function(){
	
		clicks ++;
		console.log(clicks);

		var place = document.getElementById("place").value;
		var comfort= document.getElementById("type").value;
		var answers= document.getElementById("results").innerHTML;

	/*	if (place=="americas" && comfort=="either"){
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
*/
		if(clicks>1){

			$("#results").css("display", "none");

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



	/*	if(clicks > 1){
			$("#results").fadeOut("fast", function(){
				$(this).html( */

});