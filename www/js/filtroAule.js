$( document ).ready(function() {
	$("#libere").on("click",function(){
		impostaLibere();
	});

	$("#tutte").on("click",function(){
		impostaTutte();
	});

	impostaLibere();
});
	

function impostaLibere()
{
	$("#aule").load("./Aule.html #auleLibere");

	$(".active").removeClass("active");
	$("#libere").addClass("active");
}

function impostaTutte()
{
	$("#aule").load("./Aule.html #auleTutte");

	$(".active").removeClass("active");
	$("#tutte").addClass("active");
}
