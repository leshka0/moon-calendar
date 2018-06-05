
<style>
.welcome{
	position: absolute;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
	background-color: rgba(19,19,19,.95);
	color:yellow;
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
	/* background: tomato; */
	height: 600px;
	width: 400px;
	background-image:
		-webkit-image-set(url(img/welcome/t-l.png) 1x, url(img/welcome/t-l.png) 2x ),
		-webkit-image-set(url(img/welcome/t-r.png) 1x, url(img/welcome/t-r.png) 2x ),
		-webkit-image-set(url(img/welcome/b-l.png) 1x, url(img/welcome/b-l.png) 2x ),
		-webkit-image-set(url(img/welcome/b-r.png) 1x, url(img/welcome/b-r.png) 2x );

	background-position: left top, right top, left bottom, right bottom;
  background-repeat: no-repeat;

}

</style>

<div class="welcome">
	<div class="welcomeMsg">
		<a class="enterBtn">WELCOME</a>
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
