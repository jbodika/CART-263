"use strict";

function setup() {
    createCanvas(680, 680);
    background('black');

    drawEllipse(50, 50, 25, 25, 230, 230, 250);
    drawEllipse(100, 100, 45, 50, 153, 50, 204);
    drawEllipse(200, 150, 60, 65, 128, 0, 128);
}


function draw() {

}


function drawEllipse(x, y, w, h, r, g, b) {
    push();
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();

}