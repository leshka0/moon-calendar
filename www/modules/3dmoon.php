<!DOCTYPE html>
<html lang="en">
	<head>
		<title>three.js webgl - geometry - cube</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<style>
			body {
				margin: 0px;
				background-color: #000000;
				overflow: hidden;
			}
		</style>
	</head>
	<body>

		<script>
		// MOON STATE
		</script>

		<script src="build/three.js"></script>

		<script>
			// WEBGL
			var camera, scene, renderer;
			var moon3d;
			var plane;
			var moonRot = 0;
			var lightRot = 0;
			var directionalLight;

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.x = 0;
				camera.position.y = 0;
				camera.position.z = 400;

				scene = new THREE.Scene();

				// MOON
				var texture = new THREE.TextureLoader().load( 'textures/planets/moon_8k.jpg' );
				var geometry = new THREE.SphereGeometry( 100, 50, 50 );
				var material = new THREE.MeshPhongMaterial( { color: 0xffffff , specular: 0xffffff , shininess: 0, map: texture } );
				moon3d = new THREE.Mesh( geometry, material );
				moon3d.castShadow = true;
				moon3d.receiveShadow = true;
				scene.add( moon3d );
				var moonInitialRotation = 4.8
				moon3d.rotation.y = moonInitialRotation;

				// HALO
				var texture = new THREE.TextureLoader().load( 'textures/planets/halo.png' );
				var geometry = new THREE.PlaneGeometry( 450, 450, 1);
				var material = new THREE.MeshBasicMaterial( { map: texture, transparent: true } );
				halo = new THREE.Mesh( geometry, material );
				// halo.material.opacity = 0.1;
				scene.add( halo );
				halo.position.set(0,0,0)
				// halo.opacity=1;


				//LIGHT
				directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
				directionalLight.position.set(-50*32,0,0);
				directionalLight.castShadow = true;
				directionalLight.shadowDarkness = 0.5;
				directionalLight.shadowMapSoft = true;
				directionalLight.shadowMapWidth = 1024;
				directionalLight.shadowMapHeight = 1024;
				scene.add( directionalLight );
				var lightRot=0;

				renderer = new THREE.WebGLRenderer({antialias : true});
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.shadowMapEnabled = true;
				document.body.appendChild( renderer.domElement );


				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {

				requestAnimationFrame( animate );

				// moon3d.rotation.x += 0.0005;
				// moon3d.rotation.y += 0.005;
				// lightRot+=0.01;
				// console.log(lightRot);
				moonRot+=0.01;
				moon3d.rotation.y -= Math.cos(moonRot)*0.0005;
				moon3d.rotation.z -= Math.cos(moonRot)*0.00025;
				// moon3d.rotation.x -= Math.cos(moonRot)*0.001;
				directionalLight.position.set(Math.cos(lightRot)*100,0,Math.sin(lightRot)*100)
				if (Math.sin(lightRot)<-0.5) {
					var opacityCalc = Math.pow(Math.sin(lightRot), 2)-0.25
				}
				else {
					var opacityCalc = 0;
				}

				halo.material.opacity = opacityCalc;
				halo.scale.x = halo.scale.y = 0.9 + (opacityCalc * 0.07);
				halo.rotation.y = (-Math.cos(lightRot)*0.4);
				halo.rotation.z = (-Math.cos(lightRot)*0.09);
				halo.position.set(Math.cos(lightRot)*12,0,0);
				// console.log(halo.material.opacity);
				renderer.render( scene, camera );

			}

		</script>

	</body>
</html>
