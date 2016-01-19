$( document ).ready(function() {
	$("#anno1").on("click",function(){
		impostaAnno1();
	});

	$("#anno2").on("click",function(){
		impostaAnno2();
	});

	$("#anno3").on("click",function(){
		impostaAnno3();
	});

	$("#ascelta").on("click",function(){
		impostaAScelta();
	});

	impostaAnno1();
});
	

function impostaAnno1()
{
	$("#anno").load("./Corsi.html #1");

	$(".active").removeClass("active");
	$("#anno1").addClass("active");
}

function impostaAnno2()
{
	$("#anno").load("./Corsi.html #2");

	$(".active").removeClass("active");
	$("#anno2").addClass("active");
}

function impostaAnno3()
{
	$("#anno").load("./Corsi.html #3");

	$(".active").removeClass("active");
	$("#anno3").addClass("active");
}

function impostaAScelta()
{
	$("#anno").load("./Corsi.html #altro");

	$(".active").removeClass("active");
	$("#ascelta").addClass("active");
}