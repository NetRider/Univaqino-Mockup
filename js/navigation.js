$(function() {

	$("#freccia_indietro").css("display","none");

	$("#coppito1").on("click",function(){

	//	movetoPolo();
	});

	$("#aulebar").on("click",function(){
		impostaAule();
	});

	$("#followerbar").on("click",function(){
		impostaFollowers();
	});

	$("#profbar").on("click",function(){
		impostaProfessori();
	});

	$("#ufficiobar").on("click",function(){
		impostaUffici();
	});

	$("#P0Coppito1").on("click",".frecciaAula",function(){
		$("#freccia_indietro").css("display","block");
		$("#contentoffcanvas").load("./schedaAula.html");
		$("#titleNavigation").text("Aula");
		$(".bar-header-secondary").css("display","none");
		//$("#contentmain").removeClass("hassubnav");
        snapper.expand("right");
				$("#freccia_indietro").on("click",function(){
							$("#contentoffcanvas").innerHTML="";
							snapper.close();
							$("#freccia_indietro").css("display","none");
							$("#titleNavigation").text("Università dell'Aquila");
							$(".bar-header-secondary").css("display","block");
							//$("#contentmain").addClass("hassubnav");
						});
	});

	$("#P0Coppito1").on("click",".frecciaProfilo",function(){
		$("#freccia_indietro").css("display","block");
		$("#contentoffcanvas").load("./profile_visitato_from_navigation.html");
		$("#titleNavigation").text("Profilo");
		$(".bar-header-secondary").css("display","none");
        snapper.expand("right");
				$("#freccia_indietro").on("click",function(){
					$("#contentoffcanvas").innerHTML="";
					snapper.close();
					$("#freccia_indietro").css("display","none");
					$("#titleNavigation").text("Università dell'Aquila");
					$(".bar-header-secondary").css("display","block");
				});
	});

	$("#P0Coppito1").on("click",".frecciaProf",function(){
		$("#freccia_indietro").css("display","block");
		$("#contentoffcanvas").load("./profile_prof_visitato.html");
		$("#titleNavigation").text("Profilo");
		$(".bar-header-secondary").css("display","none");
        snapper.expand("right");
				$("#freccia_indietro").on("click",function(){
					$("#contentoffcanvas").innerHTML="";
					snapper.close();
					$("#freccia_indietro").css("display","none");
					$("#titleNavigation").text("Università dell'Aquila");
					$(".bar-header-secondary").css("display","block");
				});
	});

	$("#P0Coppito1").on("click",".frecciaUfficioProf",function(){
		$("#freccia_indietro").css("display","block");
		$("#contentoffcanvas").load("./schedaUfficioProf.html");
		$("#titleNavigation").text("Ufficio 301");
		$(".bar-header-secondary").css("display","none");
		snapper.expand("right");
				$("#freccia_indietro").on("click",function(){
					$("#contentoffcanvas").innerHTML="";
					snapper.close();
					$("#freccia_indietro").css("display","none");
					$("#titleNavigation").text("Università dell'Aquila");
					$(".bar-header-secondary").css("display","block");
				});
	});

	$("#P0Coppito1").on("click",".frecciaUfficioAmministrativo",function(){
		$("#freccia_indietro").css("display","block");
		$("#contentoffcanvas").load("./schedaUfficioAmministrativo.html");
		$("#titleNavigation").text("Segreteria Studenti");
		$(".bar-header-secondary").css("display","none");
		snapper.expand("right");
				$("#freccia_indietro").on("click",function(){
					$("#contentoffcanvas").innerHTML="";
					snapper.close();
					$("#freccia_indietro").css("display","none");
					$("#titleNavigation").text("Università dell'Aquila");
					$(".bar-header-secondary").css("display","block");
				});
	});

	$("#P0Coppito1").on("click",".frecciaLaboratorio",function(){
		$("#freccia_indietro").css("display","block");
		$("#contentoffcanvas").load("./schedaLaboratorio.html");
		$("#titleNavigation").text("Laboratorio");
		$(".bar-header-secondary").css("display","none");
		snapper.expand("right");
				$("#freccia_indietro").on("click",function(){
					$("#contentoffcanvas").innerHTML="";
					snapper.close();
					$("#freccia_indietro").css("display","none");
					$("#titleNavigation").text("Università dell'Aquila");
					$(".bar-header-secondary").css("display","block");
				});
	});

	impostaAule();
});

var snapper = new Snap({
    element: document.getElementById('contentmain'),
});

function movetoPolo(){

	$('body').scrollTo('#coppito1');
}

function impostaAule()
{
	hideFollowers();
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
	showFollowers();
	$("#P0Coppito1").load("./FollowersCoppito1.html #P0");
	$("#P1Coppito1").load("./FollowersCoppito1.html #P1");
	$("#P2Coppito1").load("./FollowersCoppito1.html #P2");
	$(".active").removeClass("active");
	$("#followerbar").addClass("active");
}

function impostaProfessori()
{
	showFollowers();
	$("#P0Coppito1").load("./ProfessoriCoppito1.html #P0");
	$("#P1Coppito1").load("./ProfessoriCoppito1.html #P1");
	$("#P2Coppito1").load("./ProfessoriCoppito1.html #P2");
	$(".active").removeClass("active");
	$("#profbar").addClass("active");
}

function impostaUffici()
{
	hideFollowers();
	$("#P0Coppito1").load("./UfficiCoppito1.html #P0");
	$("#P1Coppito1").load("./UfficiCoppito1.html #P1");
	$("#P2Coppito1").load("./UfficiCoppito1.html #P2");
	$(".active").removeClass("active");
	$("#ufficibar").addClass("active");
}

function hideFollowers()
{
	$("#infoFollowersNavigation").hide();
	$("#poloCoppito0Followers").hide();
	$("#poloCoppito1Followers").hide();
	$("#poloCoppito2Followers").hide();
	$("#poloCoppito1Piano0Followers").hide();
}

function showFollowers() {
	$("#infoFollowersNavigation").show();
	$("#poloCoppito0Followers").show();
	$("#poloCoppito1Followers").show();
	$("#poloCoppito2Followers").show();
	$("#poloCoppito1Piano0Followers").show();
}
