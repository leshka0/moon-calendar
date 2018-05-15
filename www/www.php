<!DOCTYPE html>
<html lang="en">
	<head>
		<title>three.js webgl - geometry - cube</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

		<style>
			body {
				margin: 0px;
				background-color: #333;
				overflow: hidden;
				color: #888;
			}
			#ex1{
				position: absolute;
				top: 200px;
				left: 200px;
			}
			.prev{
				font-family: sans-serif;
				/* background-color: blue; */
				color: white;
				position: absolute;
				text-align: right;
				/* direction: rtl; */
			}
			.next{
				font-family: sans-serif;
				position: absolute;
				/* background-color: red; */
				color: white;
				text-align: left;
				/* direction: ltr; */
			}
			.prevContainer{
				position: absolute;
				top: 46vh;
				right: 65vw;
				left: -500px;
				height: 75px;
				overflow: scroll;
				white-space: nowrap ;
				overflow: hidden;
			}
			.nextContainer{
				position: absolute;
				top: 46vh;
				left: 65vw;
				right: -500px;
				height: 75px;
				white-space: nowrap ;
				overflow: hidden;
			}
			.date{
				text-align: center;
				color: white;
	      display: inline-block;
	    	width: 100px;
				height: 25px;
				margin: 0px;
				/* background-color: rgba(130,130,130,.05); */
				font-size: 10px;
				letter-spacing: 4px;
				border-bottom: 25px solid grey;
				border-image: url("img/ruler2x.png") 100 0 round;
			}
		</style>
	</head>
	<body>

		<!-- JUST FOR DEBUG -->
		<script type="text/javascript" src="build/dat.gui.js"></script>
		<script type="text/javascript" src="modules/gui.js"></script>

		<!-- jQuery -->
		<script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
		<!-- WEBGL -->
		<?php include("modules/load_moon_phases.php"); ?>
		<!-- WEBGL -->
		<?php include("modules/3dmoon.php"); ?>
		<!-- current state -->
		<script type="text/javascript" src="modules/currentmoon.js"></script>
		<!-- future dates -->
		<?php include("modules/future_phases.php"); ?>
		<!-- drag and drop -->
		<?php include("modules/draganddrop.php"); ?>

	</body>
</html>
