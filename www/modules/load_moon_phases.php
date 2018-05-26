<div id="ex1">1</div>
<!-- <div id="ex2">2</div> -->
<!-- <div id="ex3">3</div> -->


<script type="text/javascript">

var moon
var configMoon
var monthIndex = new Date().getMonth() + 1
var isFunctionCalled = false;

function load_moon_phases(obj){
	var gets=[]
	for (var i in obj){
		gets.push(i+"="+encodeURIComponent(obj[i]))
	}
	var xmlhttp = new XMLHttpRequest()
	var url = "http://www.icalendar37.net/lunar/api/?"+gets.join("&")
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			moon = JSON.parse(xmlhttp.responseText)
			start(moon)
			// loadNexDates_moon(configMoon)
			console.log();
			if(isFunctionCalled == false){
				console.log("FIST TIMELINE LOAD");
			    loadNexDates_moon(configMoon);

			    isFunctionCalled = true;
			} else {
				console.log("NEW TIMELINE LOAD");
					// clearMoonTimeline();
			    // loadNexDates_moon(configMoon);
			}

		}
	}
	xmlhttp.open("GET", url, true)
	xmlhttp.send()
}

	function configAMoon(monthIndex){
	configMoon = {
		lang  		:'en', // 'ca' 'de' 'en' 'es' 'fr' 'it' 'pl' 'pt' 'ru' 'zh' (*)
		month 		:monthIndex, // 1  - 12
		year  		:new Date().getFullYear(),
		size		  :50, //pixels
		lightColor	:"#888", //CSS color
		shadeColor	:"#333", //CSS color
		sizeQuarter	:20, //pixels
		texturize	:false //true - false
	}
	configMoon.LDZ=new Date(configMoon.year,configMoon.month-1,1)/1000

}
document.addEventListener("DOMContentLoaded",
zodiacName()
)
window.onload = configAMoon(new Date().getMonth()+1);
window.onload = load_moon_phases(configMoon);
window.onload = loadNexDates(configMoon);
// window.onload = zodiacName();
</script>
