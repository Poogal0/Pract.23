console.log("JS maps: increment 6.");
var x0 = 55.790927;
var y0 = 49.114453;

ymaps.ready(init);
function init() {
	console.log("init: called.");
	ymaps.panorama.locate([x0,y0]).done(
		function(panoramas) {
			//console.log("panorama.locate: done.")
			console.log("panaramas: " + panoramas);
			console.log("panaramas[0]: " + panoramas[0]);
			var player = new ymaps.panorama.Player(
												"player",
												panoramas[0]
			);
		},
		function() {}
	);
}

function onClickNext() {
	console.log("clicked Next");
}
