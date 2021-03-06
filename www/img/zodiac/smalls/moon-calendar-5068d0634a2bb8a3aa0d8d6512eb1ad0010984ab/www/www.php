<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Zodiac Moon Calendar</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<script src="build/jquery-3.3.1.min.js"></script>
		<style>
		@font-face {
		  font-family: 'Aqua';
		  src: url('fonts/aqua.ttf'); /* IE9 Compat Modes */
		}
		.interface{
			font-size: 10px;
			color: white;
			font-family: 'Aqua', Arial, sans-serif;
			text-transform: uppercase;
			letter-spacing: 5px;
		}
			body {
				margin: 0px;
				background-color: #333;
				overflow: hidden;
				color: #888;
				cursor: crosshair;
			}
			#ex1{
				position: absolute;
				top: 20px;
				left: 20px;
				opacity: 1;
			}
		</style>
	</head>
	<body>

		<!-- JUST FOR DEBUG -->
		<!-- <script type="text/javascript" src="build/dat.gui.js"></script>
		<script type="text/javascript" src="modules/gui.js"></script> -->

		<!-- jQuery -->
		<script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
		<!-- TweenLite -->
		<script type="text/javascript" src="build/greensock/TweenLite.min.js"></script>
		<script type="text/javascript" src="build/greensock/plugins/CSSPlugin.min.js"></script>
		<!-- Holwer : audio -->
		<script type="text/javascript" src="build/howler.core.js"></script>


		<!-- WEBGL -->
		<?php include("modules/3dmoon.php"); ?>
		<!-- current state -->
		<script type="text/javascript" src="modules/currentmoon.js"></script>
		<!-- future dates on the ruller-->
		<?php include("modules/future_phases.php"); ?>
		<?php include("modules/future_phases_moon.php"); ?>
		<!-- future dates on the ruller-->
		<?php include("modules/infosCenter.php"); ?>
		<!-- drag and drop -->
		<?php include("modules/draganddrop.php"); ?>
		<!-- WEBGL -->
		<?php include("modules/load_moon_phases.php"); ?>
		<!-- zodiac -->
		<script type="text/javascript" src="modules/zodiac.js"></script>

	</body>
</html>
