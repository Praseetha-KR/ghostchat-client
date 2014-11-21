"use strict";

function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}

function errBack(error) {
	console.log("Video capture error: ", error.code);
}

function ghostInit() {

	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		video = document.getElementById("video"),
		videoObj = { "video": true };
	
	// prompts the user permission to use camera
	if (navigator.getUserMedia) {
		navigator.getUserMedia(
			videoObj, 
			function(localMediaStream) {
				video.src = window.URL.createObjectURL(localMediaStream);
				video.play();
			},
			errBack
		);
	} else {
		console.log("getUserMedia not supported");
	}

	var img;
	document.getElementById("snap").addEventListener("click", function() {
		video.style.display = "none";
		context.drawImage(video, 0, 0, 320, 240);
		img = convertCanvasToImage(canvas);
		canvas.style.display = "none";
		document.getElementById("img").src = img.src;
		console.log(img.src);
	});
}

navigator.getUserMedia = ( navigator.getUserMedia ||
						navigator.webkitGetUserMedia ||
						navigator.mozGetUserMedia ||
						navigator.msGetUserMedia);
							
window.addEventListener("DOMContentLoaded", ghostInit, false);
