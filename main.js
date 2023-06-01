console.log("JS maps: increment 4.");
var x0 = 55.790927;
var y0 = 49.114453;

ymaps.ready(init);
function init() {
	console.log("init: called.");
	ymaps.panorama.locate([x0,y0]).done(
		function() {
			console.log("panorama.locate: done.")
		}
	);
}
