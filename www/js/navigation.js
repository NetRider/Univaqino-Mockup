
	$.fn.scrollTo = function( target, options, callback ){
		  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
		  var settings = $.extend({
		    scrollTarget  : target,
		    offsetTop     : 90,
		    duration      : 500,
		    easing        : 'swing'
		  }, options);
		  return this.each(function(){
		    var scrollPane = $(this);
		    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
		    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
		    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
		      if (typeof callback == 'function') { callback.call(this); }
		    });
		  });
		};
		
		
	$("#P0_C1").on("click",function(){

			$('#contentmain').scrollTo('#P0_C1');
			$("#P0_C1").toggleClass("bordo_verde");

		});

	$("#P1_C1").on("click",function(){

			$('#contentmain').scrollTo('#P1_C1');
			$("#P1_C1").toggleClass("bordo_verde");

		});
	
	$("#Coppito_1").on("click",function(){
		$("#Coppito_1").toggleClass("bordo_verde");
	});
	
	$("#coppito_nav").on("click",function(){
		$("#coppito_nav").toggleClass("bordo_verde");
	});

	
	
	function movetoPolo(){

		$('body').scrollTo('#coppito1');
	};
		
	var snapper = new Snap({
    element: document.getElementById('contentmain'),
    dragger: null,
    disable: 'left',
    addBodyClasses: true,
    hyperextensible: true,
    resistance: 0.5,
    flickThreshold: 50,
    transitionSpeed: 0.3,
    easing: 'ease',
    maxPosition: 266,
    minPosition: -266,
    tapToClose: true,
    touchToDrag: false,
    slideIntent: 20,
    minDragDistance: 5
});

var menu = new Snap({
    element: document.getElementById('menu'),
    dragger: null,
    disable: 'right',
    addBodyClasses: true,
    hyperextensible: true,
    resistance: 0.5,
    flickThreshold: 50,
    transitionSpeed: 0.3,
    easing: 'ease',
    maxPosition: 266,
    minPosition: -266,
    tapToClose: true,
    touchToDrag: true,
    slideIntent: 20,
    minDragDistance: 40
});

$("#menucanvas").load("./menu.html");

$("#menu_btn").on("click",function(){

		menu.open("left");
});

	$("#menucanvas").on("click","#close_menu",function(){
	menu.close();
});


	/////MOSTRA AULA OFFCANVAS////////
	
	$("#P0Coppito1").on("click",".frecciaAula",function(){

		$("#menu_btn").css("display","none");
		
		//$("#contentmain").removeClass("hassubnav");
        snapper.expand("right");
      $("#freccia_indietro").css("display","block");
		$("#contentoffcanvas").load("./schedaAula.html");
		$(".titleNavigation").text("Aula");
		$(".bar-header-secondary").css("display","none");



				$("#freccia_indietro").on("click",function(){
					$("#menu_btn").css("display","block");

							$("#contentoffcanvas").innerHTML="";
							snapper.close();
							$("#freccia_indietro").css("display","none");

							$(".titleNavigation").text("Università dell'Aquila");
							$(".bar-header-secondary").css("display","block");

							//$("#contentmain").addClass("hassubnav");
						});
	});

	$("#P0Coppito1").on("click",".frecciaProfilo",function(){
		$("#freccia_indietro").css("display","block");
		$("#contentoffcanvas").load("./profile_visitato_from_navigation.html");
		$(".titleNavigation").text("Matteo Polsinelli");
		$(".bar-header-secondary").css("display","none");
		$("#menu_btn").css("display","none");
        snapper.expand("right");
				$("#freccia_indietro").on("click",function(){
					$("#menu_btn").css("display","block");

					$("#contentoffcanvas").innerHTML="";
					snapper.close();
					$("#freccia_indietro").css("display","none");
					$(".titleNavigation").text("Università dell'Aquila");
					$(".bar-header-secondary").css("display","block");
				});
	});

	$("#P0Coppito1").on("click",".frecciaProf",function(){
		$("#freccia_indietro").css("display","block");
		$("#contentoffcanvas").load("./profile_prof_visitato_from_navigation.html");
		$(".titleNavigation").text("Costanzo Manes");
		$(".bar-header-secondary").css("display","none");
		$("#menu_btn").css("display","none");

        snapper.expand("right");
				$("#freccia_indietro").on("click",function(){
					$("#menu_btn").css("display","block");

					$("#contentoffcanvas").innerHTML="";
					snapper.close();
					$("#freccia_indietro").css("display","none");
					$(".titleNavigation").text("Università dell'Aquila");
					$(".bar-header-secondary").css("display","block");
				});
	});

	$("#P0Coppito1").on("click",".frecciaUfficioProf",function(){
		$("#freccia_indietro").css("display","block");
		$("#contentoffcanvas").load("./schedaUfficioProf.html");
		$(".titleNavigation").text("Ufficio 301");
		$(".bar-header-secondary").css("display","none");
		$("#menu_btn").css("display","none");

		snapper.expand("right");
				$("#freccia_indietro").on("click",function(){
					$("#menu_btn").css("display","block");

					$("#contentoffcanvas").innerHTML="";
					snapper.close();
					$("#freccia_indietro").css("display","none");
					$(".titleNavigation").text("Università dell'Aquila");
					$(".bar-header-secondary").css("display","block");
				});
	});

	$("#P0Coppito1").on("click",".frecciaUfficioAmministrativo",function(){
		$("#freccia_indietro").css("display","block");
		$("#contentoffcanvas").load("./schedaUfficioAmministrativo.html");
		$(".titleNavigation").text("Segreteria Studenti");
		$(".bar-header-secondary").css("display","none");
		$("#menu_btn").css("display","none");

		snapper.expand("right");
				$("#freccia_indietro").on("click",function(){
					$("#menu_btn").css("display","block");

					$("#menucanvas").load("./menu.html");
					$("#contentoffcanvas").innerHTML="";
					snapper.close();
					$("#freccia_indietro").css("display","none");
					$(".titleNavigation").text("Università dell'Aquila");
					$(".bar-header-secondary").css("display","block");
				});
	});

	$("#P0Coppito1").on("click",".frecciaLaboratorio",function(){
		$("#freccia_indietro").css("display","block");
		$("#contentoffcanvas").load("./schedaLaboratorio.html");
		$(".titleNavigation").text("Laboratorio");
		$(".bar-header-secondary").css("display","none");
		$("#menu_btn").css("display","none");

		snapper.expand("right");
				$("#freccia_indietro").on("click",function(){
					$("#menu_btn").css("display","block");

					$("#menucanvas").load("./menu.html");
					$("#contentoffcanvas").innerHTML="";
					snapper.close();
					$("#freccia_indietro").css("display","none");
					$(".titleNavigation").text("Università dell'Aquila");
					$(".bar-header-secondary").css("display","block");
				});
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
	$("#ufficiobar").addClass("active");
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
	$("#infoFollowersNavigation").css("display","inline");
	$("#poloCoppito0Followers").css("display","inline");
	$("#poloCoppito1Followers").css("display","inline");
	$("#poloCoppito2Followers").css("display","inline");
	$("#poloCoppito1Piano0Followers").css("display","inline");
}
////////// JS LOADING FOR PAGES /////////
$("#freccia_indietro").css("display","none");



impostaAule();

setTimeout(function(){ $('#contentmain').scrollTo('#P0_C1'); }, 500);


window.addEventListener('push', checkPage);


