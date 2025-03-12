function setup() {
	createCanvas(500, 500);
	background("lightgrey");
	colorMode(HSL, 360, 100, 100, 100);

	let l = 70;
	const triangleSize = 70;
	for (let y = 30; y < height; y += 100) {
		for (let x = 50; x < width; x += 100) {
			push();
			fill(200, 50, l);
			translate(x, y);
			triangle(
				0,
				-triangleSize,
				triangleSize,
				triangleSize,
				-triangleSize,
				triangleSize
			);
			pop();
		}
		l -= 10;
	}
	saveCanvas("mySketch", "png");
}

function draw() {
	// this is function scope
}


 
