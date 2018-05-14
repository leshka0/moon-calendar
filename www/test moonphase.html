<!DOCTYPE html>
<html lang="en">
	<head>
		<title>three.js webgl - geometry - cube</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<style>
			body {
				margin: 150px;
				background-color: #333333;
			}
		</style>
	</head>
	<body>
<div id="ex1">l</div>
<div id="ex2">o</div>
<div id="ex3">l</div>


<script type="text/javascript">

function load_moon_phases(obj){
	var gets=[]
	for (var i in obj){
		gets.push(i+"="+encodeURIComponent(obj[i]))
	}
	var xmlhttp = new XMLHttpRequest()
	var url = "http://www.icalendar37.net/lunar/api/?"+gets.join("&")
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var moon  = JSON.parse(xmlhttp.responseText)
			example_1(moon)
			// example_2(moon)
			// example_3(moon)
		}
	}
	xmlhttp.open("GET", url, true)
	xmlhttp.send()
}
document.addEventListener("DOMContentLoaded", function() {
	var configMoon = {
		lang  		:'en', // 'ca' 'de' 'en' 'es' 'fr' 'it' 'pl' 'pt' 'ru' 'zh' (*)
		month 		:new Date().getMonth() + 1, // 1  - 12
		year  		:new Date().getFullYear(),
		size		:50, //pixels
		lightColor	:"#FFFF88", //CSS color
		shadeColor	:"#111111", //CSS color
		sizeQuarter	:20, //pixels
		texturize	:false //true - false
	}
	configMoon.LDZ=new Date(configMoon.year,configMoon.month-1,1)/1000
	load_moon_phases(configMoon)
})

</script>

<script type="text/javascript">
// EXAMPLE 1

function example_1(moon){
	var day = new Date().getDate()
	var dayWeek=moon.phase[day].dayWeek
	var html="<div class='moon'>"
	html+="<div>"+moon.nameDay[dayWeek]+"</div>"
	html+="<div>"+ day + " " + moon.monthName + " "+moon.year+"</div>"
	html+=moon.phase[day].svg
	html+="<div>"+moon.phase[day].phaseName + " "+ Math.round(moon.phase[day].lighting)+"%</div>"
	html+="</div>"
	console.log(moon.phase[day].lighting);
	document.getElementById("ex1").innerHTML=html
}
</script>


<script type="text/javascript">

// EXAMPLE 2
function example_2(moon){
	var html="<div class='moon'>"
	html+="<div>"+ 1 +" "+moon ['monthName'] + " "+moon.year +"</div>"
	html+=moon.phase[1].svg
	html+="<div>"+moon.phase[1].phaseName + " "+ Math.round(moon.phase[1].lighting)+"%</div>"
	html+="</div>"
	html+="<div class='moon'>"
	html+="<div>"+moon.daysMonth +" "+moon ['monthName'] + " "+moon.year +"</div>"
	html+=moon.phase[moon.daysMonth].svg
	html+="<div>"+moon.phase[moon.daysMonth].phaseName + " "+ Math.round(moon.phase[moon.daysMonth].lighting)+"%</div>"
	html+="</div>"
	for (i=1;i<=moon.daysMonth;i++){
		if (moon.phase[i].isPhaseLimit){
			html+="<div class='moon'>"
html+= "<div class='phaseLimit'>"+moon.phase[i].svgMini+" "+i+"</div><br clear=all>"
			html+=moon.phase[i].svg
			html+="<div>"+moon.phase[i].phaseName + " </div>"
			html+="</div>"
		}
	}
	document.getElementById("ex2").innerHTML=html
}
</script>

<script type="text/javascript">
// EXAMPLE 3
function example_3(moon){
	var sunday
	var day
	var firstDayMonth = parseInt(moon.firstDayMonth)
	var lastDayMonth = parseInt(moon.phase[moon.daysMonth].dayWeek)
	var html="<table cellspacing=5 cellpadding=0 border=0> "
	html+="<tr><th colspan=7>"+moon.nameMonth[moon.month-1]+" "+ moon.year+"</th><tr>"
	html+="<tr>"
	for (var  i=0;i<7;i++){	html+="<th>"+moon.nameDay[i]+"</th>" }
	html+="</tr><tr>"
	html+=  new Array(firstDayMonth).join( "<td class='void'></td>" );
	for (  i=0;i < moon.daysMonth;i++){
		day=i+1
		sunday=(moon.phase[day].dayWeek==6)?"class='sunday'":""
		html+="<td "+sunday+">"
		indexFaseLimit = moon.phase[day].isPhaseLimit
		if (indexFaseLimit){
			html+= "<span title='index="+indexFaseLimit+ " - "+moon.phase[day].phaseName+"' >" + moon.phase[day].svgMini + "</span>"

		}
		html+=day+"</td>"
		if ((i+firstDayMonth)%7==0) html+="</tr><tr>"
	}
	html+=  new Array(7 - lastDayMonth).join( "<td class='void'></td>" );
	html+="</tr></table>"
	document.getElementById("ex3").innerHTML=html
}
</script>

	</body>
</html>
