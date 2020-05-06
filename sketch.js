var s;
var a;

function setup() {
	createCanvas(600, 600);
	s = new Snake();
	frameRate(15);
	a = new Apple();
}

function draw() {
	background(51);
	s.update();
	s.show();
	a.show();
	if (s.eat(a)){
		a = new Apple();
	}
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		s.dir(0, -speed);
	} else if (keyCode == DOWN_ARROW) {
		s.dir(0, speed);
	} else if (keyCode == RIGHT_ARROW) {
		s.dir(speed, 0);
	} else if (keyCode == LEFT_ARROW) {
		s.dir(-speed, 0);
	}
}

