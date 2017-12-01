var frame = $("main");

window.onload = function() {
	$("b1").observe("click", setHome);
	$("b2").observe("click", setCommon);
	$("b3").observe("click", setBetter);
	$("b4").observe("click", setSources);
}

function setHome(){
	$("main").setAttribute('src','home.html');
}

function setCommon(){
	$("main").setAttribute('src','common.html');
}

function setBetter(){
	$("main").setAttribute('src','better.html');	
}

function setSources(){
	$("main").setAttribute('src','sources.html');		
}