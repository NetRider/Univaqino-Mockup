
	
	
	$(".content").on("click","#follow_ricerca",function(){
		$("#follow_ricerca span").html(" Richiesta Inviata");
		$("#follow_ricerca").removeClass("btn-positive");
		$("#follow_ricerca").addClass("btn-negative");
	});
	
	$(".search-icon").on("click",function(){
		$("#tastiera").css("display","none");
		$("#risultati_ricerca").css("display","block");
	})
	
	$("#cercaStudenti").on("click",function(){
		impostaStudenti();
	});

	$("#cercaProfessori").on("click",function(){
		impostaProfessori();
	});

	$("#cercaCorsi").on("click",function(){
		impostaCorsi();
	});

	impostaStudenti();	




function impostaStudenti()
{
	$("#risultati").load("./RisultatiRicerca.html #risStudenti");

	$(".active").removeClass("active");
	$("#cercaStudenti").addClass("active");
}

function impostaProfessori()
{
	$("#risultati").load("./RisultatiRicerca.html #risProfessori");

	$(".active").removeClass("active");
	$("#cercaProfessori").addClass("active");
}

function impostaCorsi()
{
	$("#risultati").load("./RisultatiRicerca.html #risCorsi");

	$(".active").removeClass("active");
	$("#cercaCorsi").addClass("active");
}