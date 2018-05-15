<div id="ex1">1</div>
<!-- <div id="ex2">2</div> -->
<!-- <div id="ex3">3</div> -->


<script type="text/javascript">

var moon

function load_moon_phases(obj){
	var gets=[]
	for (var i in obj){
		gets.push(i+"="+encodeURIComponent(obj[i]))
	}
	var xmlhttp = new XMLHttpRequest()
	var url = "http://www.icalendar37.net/lunar/api/?"+gets.join("&")
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			moon  = JSON.parse(xmlhttp.responseText)
			example_1(moon)
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
		size		  :50, //pixels
		lightColor	:"#888", //CSS color
		shadeColor	:"#333", //CSS color
		sizeQuarter	:20, //pixels
		texturize	:false //true - false
	}
	configMoon.LDZ=new Date(configMoon.year,configMoon.month-1,1)/1000
	load_moon_phases(configMoon)
	loadNexDates(configMoon)
	loadPrevDates(configMoon)
})

</script>
