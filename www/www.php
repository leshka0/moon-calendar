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
		</style>
	</head>
	<body>

			<!-- JUST FOR DEBUG -->
			<script type="text/javascript" src="build/dat.gui.js"></script>
			<script type="text/javascript" src="modules/gui.js"></script>

		<!-- WEBGL -->
		<?php include("modules/load_moon_phases.php"); ?>
		<!-- WEBGL -->
		<?php include("modules/3dmoon.php"); ?>

		<!-- current state -->
		<script type="text/javascript" src="modules/currentmoon.js"></script>

	</body>
</html>
