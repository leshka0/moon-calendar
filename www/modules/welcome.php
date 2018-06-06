
<style>
.welcome{
	position: absolute;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
	background-color: rgba(19,19,19,.95);
	text-align: center;
	z-index: 20;
	display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}
.welcomeDisapear{
	opacity: 0;
	transition: opacity 1.5s ease;
	pointer-events: none;
}
.welcomeMsg{
	padding: 60px;
	/* height: 60vh; */
	width: 25vw;
	background-image:
		-webkit-image-set(url(img/welcome/t-l.png) 1x, url(img/welcome/t-l.png) 2x ),
		-webkit-image-set(url(img/welcome/t-r.png) 1x, url(img/welcome/t-r.png) 2x ),
		-webkit-image-set(url(img/welcome/b-l.png) 1x, url(img/welcome/b-l.png) 2x ),
		-webkit-image-set(url(img/welcome/b-r.png) 1x, url(img/welcome/b-r.png) 2x );
	background-position: left top, right top, left bottom, right bottom;
  background-repeat: no-repeat;
}
@media (max-width: 1000px) {
 	.welcomeMsg{
		width: 40vw;
	}
}
@media (max-width: 700px) {
 	.welcomeMsg{
		width: 60vw;
	}
}
@media (max-height: 600px) {
 	.welcomeMsg{
		width: 40vw;
	}
}
@media (max-height: 480px) {
 	.welcomeMsg{
		width: 60vw;
	}
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
	<div class="welcomeMsg">
		<img src="img/cosmic_weather.png" alt="Cosmic Weather" srcset="img/cosmic_weather@2x.png 2x" />
		<p>
			Astrology is a primitive language helping us understand the seasons of our life.
			<br/><br/>
			The Moon cycle has an important control over our development. From the ocean’s tides to the water contained in our bodies, the Moon strongly affect our body, minds and emotions. Cosmic Weather is a forcast of the moon phase and its astrological sign, allowing you to perpare and get aware of the moon influences on us.
		</p>
		<a class="enterBtn">Friday 1st June 2018</a>
	</div>
</div>

<script>
	$(".enterBtn").click(function() {
  	$(".welcome").addClass("welcomeDisapear");
		// $(".infosCenter").css("opacity",0)
		hideInfos();
		setTimeout(function(){
		  zodiacName();
			updateInfos();
	    unhide();
			// $(".infosCenter").css("opacity",1)
		}, 1000);
		// zodiacName();
	});
</script>
