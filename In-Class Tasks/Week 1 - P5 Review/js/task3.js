let rect1X, rect1Y;
let rect2X, rect2Y; // rectangle variables 
let rect3X, rect3Y; 
let rect3Color; //colour of rect3

function setup() {
createCanvas(400, 400);

// variables
rect1X = 380;
rect1Y = 380;

rect2X = 150;
rect2Y = 180;

rect3X = 250;
rect3Y = 0;

// original color
rect3Color = color(255, 0, 0);
}

function draw() {
createCanvas(windowWidth, windowHeight);

// rect 1
fill(0, 255, 0);
rect(rect1X, rect1Y, 50, 50);

// rect 2
fill(0, 0, 255);
rect(rect2X, rect2Y, 80, 80);

// rect 3
fill(rect3Color);
rect(rect3X, rect3Y, 50, 50);

// change position of the third rect
rect3Y += 2;
if (rect3Y > height) {
rect3Y = 0; // sets the Y position to 0 
}
}

function mousePressed() {
// sets a new x position for the rectangle 
rect1X = rect1X + random(-3,3);
rect1Y = rect1Y + random(-3,3);
}

function keyPressed() {
//  sets a new x position for the rectangle 
if (key === ' ') {
rect2X = rect2X + random(-20, 20);
rect2Y = rect2Y + random(-20, 20);
}
}

function mouseMoved() {
//  sets a new colour for the rectangle 
rect3Color = color(random(255), random(255), random(255));
}