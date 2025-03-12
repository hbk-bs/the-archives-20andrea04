function setup() {
	colorMode(HSL, 360, 100, 100, 100);
	createCanvas(400, 400);
	background(240, 90, 90, 100);
	const step = 25;

	noStroke();
	let l = 0;
	let x = 0;

	let diameter = width;

	for (let y = step; y < height; y *= 1.2) {
		fill(l);
		ellipse(width / 2, y, diameter, diameter);
		diameter -= 20;

		x += 10;
		l += 5;
	}
	saveCanvas("mySketch", "png");
}


 
