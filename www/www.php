<!DOCTYPE html>
<html lang="en">
	<head>
		<title>three.js webgl - geometry - cube</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

	  <link rel="stylesheet" type="text/css" href="build/slick-master/slick/slick.css">
	  <link rel="stylesheet" type="text/css" href="build/slick-master/slick/slick-theme.css">
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
				color: white;
				direction: rtl;
			}
			.prevContainer{
				position: absolute;
				top: 46vh;
				right: 65vw;
				left: -500px;
				height: 75px;
				overflow: scroll;
				white-space: nowrap ;

			}
			.nextContainer{
				position: absolute;
				top: 46vh;
				left: 65vw;
				right: -500px;
				height: 75px;
				white-space: nowrap ;

			}
			.next{
				color: white;
				direction: ltr;
			}
			.date{
				text-align: center;
				margin: 5px;
				color: white;
	      display: inline-flex;
	    	width: 50px;
				height: 50px;
				background-color: rgba(130,130,130,.2)
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

	</body>
</html>
