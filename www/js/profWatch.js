$( document ).ready(function() {

	console.log("ciao");

	$("#togglePosition").on("toggle",function(){

		if($("#togglePosition").hasClass("active"))
		{
			$("#formGps").show();
			$("#formNormal").hide();
		}else {
			$("#formGps").hide();
			$("#formNormal").show();
		}
	});

	console.log("ciao due volte");

	$("#segnalaPosButton").on("click",function(){
		console.log("ciao puluto pippo");

  	});


});
