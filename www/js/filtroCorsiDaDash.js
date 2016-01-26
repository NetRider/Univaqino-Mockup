$( document ).ready(function() {
	$("#seguiti").on("click",function(){
		impostaSeguiti();
	});

	$("#tutti").on("click",function(){
		impostaTutti();
	});

	impostaSeguiti();
});
	

function impostaSeguiti()
{
	$("#corsiDash").load("./CorsiDash.html #corsiSeguiti");

	$(".active").removeClass("active");
	$("#seguiti").addClass("active");
}

function impostaTutti()
{
	$("#corsiDash").load("./CorsiDash.html #corsiTutti");

	$(".active").removeClass("active");
	$("#tutti").addClass("active");
}
