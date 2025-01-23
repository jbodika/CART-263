"use strict";

function setup() {
    createCanvas(680, 680)
    background('black')
}
let x = 50;
let y = 50;
let size = 50;

function draw() {


    push()
    fill('purple')
    ellipse(x, y, size)
    pop()

    push()
    fill('pink')
    x = 100;
    y = 100;
    size = 45
    ellipse(x, y, size)
    pop()

    push()
    fill('yellow')
    x = 200;
    y = 200;
    size = 68
    ellipse(x, y, size)
    pop()
}

