
<style>
.welcome{
	position: absolute;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
	background-color: rgba(19,19,19,1);
	text-align: center;
	z-index: 20;
	display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
	transition: background-color 4s ease 1s;
}
.welcomeDisapear{
	opacity: 0;
	transition: opacity 1.5s ease;
	pointer-events: none;
}
.logo{
	position: absolute;
	top: calc(50% - 36px);
	opacity: 1;
	transition: all 1s cubic-bezier(.5,0,0,1) .3s;
}
.logostill{
	opacity: 0;
}
.welcomeMsg{
	opacity: 0;
	padding: 60px;
	padding-top: 0px;
	padding-bottom: 0px;
	width: 25vw;
	background-image:
		-webkit-image-set(url(img/welcome/t-l.png) 1x, url(img/welcome/t-l.png) 2x ),
		-webkit-image-set(url(img/welcome/t-r.png) 1x, url(img/welcome/t-r.png) 2x ),
		-webkit-image-set(url(img/welcome/b-l.png) 1x, url(img/welcome/b-l.png) 2x ),
		-webkit-image-set(url(img/welcome/b-r.png) 1x, url(img/welcome/b-r.png) 2x );
	background-position: left top, right top, left bottom, right bottom;
  background-repeat: no-repeat;
	transition: opacity 4s ease .3s, padding 1.5s ease .3s;

	cursor:default;
  cursor: -webkit-image-set(url(img/cursorCursor1x.png) 1x ,url(img/cursorCursor2x.png) 2x) 50 50,default;
}


.welcomeMsg p{
	margin-top: 40px;
	margin-bottom: 40px;
	text-align: left;
	color: white;
  font-size: 15px;
  font-family: 'AndaleMono', Arial, sans-serif;
  letter-spacing: 0.3px;
  line-height: 1.5em;
	opacity: 0;
	transition: opacity 3s ease 1s;
}

.welcomeMsg a{
	padding: 20px;
	background-color: white;
	text-align: left;
	color: black;
  font-size: 15px;
  font-family: 'AndaleMono', Arial, sans-serif;
  letter-spacing: 0.3px;
  line-height: 1.5em;
	cursor: pointer;
  cursor: -webkit-image-set(url(img/cursorPointer1x.png) 1x,url(img/cursorPointer2x.png) 2x) 50 50,default;
	transition: all .1s ;
}
.welcomeMsg a:hover{
	padding: 20px;
	background-color: transparent;
	border: 1px solid white;
	color: white;
}

</style>

<div class="welcome">
	<img class="logo" src="img/cosmic_weather_animated.gif" alt="Cosmic Weather" srcset="img/cosmic_weather_animated@2x.gif 2x" />
	<div class="welcomeMsg">
		<img class="logostill" src="img/cosmic_weather.png" alt="Cosmic Weather" srcset="img/cosmic_weather@2x.png 2x" />
		<p>
			Astrology is a primitive language helping us understand the seasons of our life.
			<br/><br/>
			The Moon cycle has an important control over our development. From the ocean’s tides to the water contained in our bodies, the Moon strongly affect our mind and emotions. Cosmic Weather is a forcast of the moon phase and its astrological sign, allowing you to perpare and get aware of the moon influences on us.
		</p>
		<a class="enterBtn">enter</a>
	</div>
</div>

<script>
var init = function(){
	$(".welcome").css("background-color","rgba(19,19,19,.95)");
	$(".welcomeMsg").css("opacity","1");
	// $(".welcomeMsg").css("padding","60px");
	$(".welcomeMsg p").css("opacity","1");
	$("canvas").css("opacity","1");
	// do on resize
	$(".logo").css("top",$(".logostill").position().top);
}
	$(".enterBtn").mousedown(function() {
  	$(".welcome").addClass("welcomeDisapear");
		hideInfos();
		setTimeout(function(){
		  zodiacName();
			updateInfos();
	    unhide();
		}, 1000);
	});

	//WHEN FULLY LOADED
window.addEventListener("load", function(event) {
	init();
	console.log("LOADED");
});
</script>
