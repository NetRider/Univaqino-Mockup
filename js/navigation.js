$(function() {

	$("#freccia_indietro").css("visibility","hidden");

	$("#aulebar").on("click",function(){
		impostaAule();
	});

	$("#followerbar").on("click",function(){
		impostaFollowers();
	});

	$("#P0Coppito1").on("click",".frecciaAula",function(){
		$("#freccia_indietro").css("visibility","visible");
		$("#contentoffcanvas").load("./schedaAula.html");
		$("#titleNavigation").text("Aula");
        snapper.expand("right");
				$("#freccia_indietro").on("click",function(){
							$("#contentoffcanvas").innerHTML="";
							snapper.close();
							$("#freccia_indietro").css("visibility","hidden");
							$("#titleNavigation").text("Navigation");
						});
	});

	$("#P0Coppito1").on("click",".frecciaProfilo",function(){
		$("#freccia_indietro").css("visibility","visible");
		$("#contentoffcanvas").load("./profile_visitato_from_navigation.html");
		$("#titleNavigation").text("Profilo");
        snapper.expand("right");
				$("#freccia_indietro").on("click",function(){
					$("#contentoffcanvas").innerHTML="";
					snapper.close();
					$("#freccia_indietro").css("visibility","hidden");
					$("#titleNavigation").text("Navigation");
				});
	});

	impostaAule();
});

var snapper = new Snap({
    element: document.getElementById('contentmain'),
});

function impostaAule()
{
	$("#P0Coppito1").load("./AuleCoppito1.html #P0");
	$("#P1Coppito1").load("./AuleCoppito1.html #P1");
	$("#P2Coppito1").load("./AuleCoppito1.html #P2");
	$(".active").removeClass("active");
	$("#aulebar").addClass("active");
	console.log("imposta modal");
	$("#P0Coppito1").on("click","#openModal", function(){
		console.log("sono qui");
		$("#myModalexample").find("div.content").addClass("active");
	});
}

function impostaFollowers()
{
	$("#P0Coppito1").load("./FollowersCoppito1.html #P0");
	$("#P1Coppito1").load("./FollowersCoppito1.html #P1");
	$("#P2Coppito1").load("./FollowersCoppito1.html #P2");
	$(".active").removeClass("active");
	$("#followerbar").addClass("active");
}

function impostaProfessori()
{
	$("#P0Coppito1").load("./ProfessoriCoppito1.html #P0");
	$("#P1Coppito1").load("./ProfessoriCoppito1.html #P1");
	$("#P2Coppito1").load("./ProfessoriCoppito1.html #P2");
	$(".active").removeClass("active");
	$("#followerbar").addClass("active");
}
