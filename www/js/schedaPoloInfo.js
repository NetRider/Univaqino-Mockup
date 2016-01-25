$( document ).ready(function() {

	$("#infoAmbienteIntelligente").click(function(event){
    	event.preventDefault();
		$("#modalDivInfoNav").addClass("active");
  	});

	$("#closeInfoNavInt").click(function(event){
    	event.preventDefault();
		$("#modalDivInfoNav").removeClass("active");
  	});



});
