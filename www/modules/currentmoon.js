
		var day = new Date().getDate()
		var dayWeek
		var phase = Math.PI/2

		function map_range(value, low1, high1, low2, high2) {
				return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
		}
			// include in the webgl
		function light3dchange(){
			// lightRot = day;
			if (moon.phase[day].phaseName == "Waxing" || moon.phase[day].phaseName == "First quarter"  || moon.phase[day].phaseName == "Full moon"){
				// console.log(moon.phase[day].phaseName);
				// MAP THE %VALUE on pi ROTATION
				lightRot = map_range(moon.phase[day].lighting, 0, 100, -(Math.PI/2), Math.PI/2)
				// console.log(lightRot);
			}
			else if (moon.phase[day].phaseName == "Waning" || moon.phase[day].phaseName == "Last quarter" || moon.phase[day].phaseName == "New Moon"){
				// console.log(moon.phase[day].phaseName);
				// MAP THE %VALUE on pi ROTATION
				lightRot = map_range(moon.phase[day].lighting, 0, 100, 3*Math.PI/2, Math.PI/2)
				// console.log(lightRot);
			}
		}

		function text(){
			// day = new Date().getDate()
			dayWeek=moon.phase[day].dayWeek
			var html="<div class='moon'>"
			html+="<div>"+moon.nameDay[dayWeek]+"</div>"
			html+="<div>"+ day + " " + moon.monthName + " "+moon.year+"</div>"
			html+=moon.phase[day].svg
			html+="<div>"+moon.phase[day].phaseName + " "+ Math.round(moon.phase[day].lighting)+"%</div>"
			html+="</div>"
			// console.log(moon.phase[day].lighting);
			document.getElementById("ex1").innerHTML=html
		}

		function example_1(moon){
			text()
			// include in the webgl
			light3dchange()
		}
