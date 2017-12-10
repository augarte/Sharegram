function jarraitzen(){
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if ((xhttp.readyState==4)&&(xhttp.status==200)){
			document.getElementById("feed").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET","feedJarraitzen.php", true);
	xhttp.send();
}

function topPost(){
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if ((xhttp.readyState==4)&&(xhttp.status==200)){
			document.getElementById("feed").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET","feedTop.php", true);
	xhttp.send();
}

function azkenak(){
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if ((xhttp.readyState==4)&&(xhttp.status==200)){
			document.getElementById("feed").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET","feedAzkenak.php");
	xhttp.send();
}

function nireak(){
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if ((xhttp.readyState==4)&&(xhttp.status==200)){
			document.getElementById("nireIrudiak").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET","profilIrudiak.php");
	xhttp.send();
}

function erabiltzaile(nick){
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if ((xhttp.readyState==4)&&(xhttp.status==200)){
			document.getElementById("erabiltzaileIrudiak").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET","erabiltzaileIrudiak.php?nick="+nick);
	xhttp.send();
}

function ezabatuIrudia(id){
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if ((xhttp.readyState==4)&&(xhttp.status==200)){
			document.getElementById("errorea").innerHTML = xhttp.responseText;
			nireak();
		}
	};
	xhttp.open("GET","ezabatuIrudia.php?id="+id);
	xhttp.send();
}

function erabiltzaileInfo(nick){
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if ((xhttp.readyState==4)&&(xhttp.status==200)){
			document.getElementById("erabiltzaileInfo").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET","erabiltzaileInfo.php?nick="+nick);
	xhttp.send();
}