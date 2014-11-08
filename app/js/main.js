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

	if(navigator.getUserMedia) {
 		navigator.getUserMedia(videoObj, function(stream) {
 			video.src = stream;
 			video.play();
 		}, errBack);
	} else if(navigator.webkitGetUserMedia) {
		navigator.webkitGetUserMedia(videoObj, function(stream) {
			video.src = window.webkitURL.createObjectURL(stream);
			video.play();
		}, errBack);
	} else if(mozGetUserMedia) {
		navigator.mozGetUserMedia(videoObj, function(stream) {
			video.src = windoe.URL.createObjectURL(stream);
			video.play();
		}, errBack);
 	}

	var img;
	document.getElementById("snap").addEventListener("click", function() {
		context.drawImage(video, 0, 0, 320, 240);
		img = convertCanvasToImage(canvas);
		document.getElementById("img").src = img.src;
		console.log(img.src);
	});
}

// navigator.getUserMedia = navigator.getUserMedia || 
// 							navigator.webkitGetUserMedia ||
// 							navigator.mozGetUserMedia;
							
window.addEventListener("DOMContentLoaded", ghostInit, false);
