$( document ).ready(function() {
	
	$("#follow").on("click",function(){
		$("#follow span").html(" Richiesta Inviata");
		$("#follow").removeClass("btn-positive");
		$("#follow").addClass("btn-negative");
	});
	
	$(".search-icon").on("click",function(){
		$("#tastiera").css("display","none");
		$("#risultati_ricerca").css("display","block");
	})
	
	$("#iscritti").on("click",function(){
		
	})
	
})