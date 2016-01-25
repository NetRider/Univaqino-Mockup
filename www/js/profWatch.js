$( document ).ready(function() {

	$("#togglePosition").on("toggle",function(){
		console.log("ciao");
		
		if($("#togglePosition").hasClass("active"))
		{
			$("#formGps").show();
			$("#formNormal").hide();
		}else {
			$("#formGps").hide();
			$("#formNormal").show();
		}
	});

	$("#buttonPosizione").on("click",function() {
		console.log("cia");
		$("#selezionaPos").addClass("active");
	});

});
