"use strict";
let counter = 0;
let ellipseAlpha = 0;
let radius = 0;
const orangeSquare = {
    x: 50,
    y: 50,
    w: 50,
    h: 50,
    nameCol: 'orange',
    color: {

        r: 255,
        g: 140,
        b: 0
    }
}

const redSquare = {
    x: 125,
    y: 50,
    w: 50,
    h: 50,
    nameCol: 'red',
    color: {
        r: 255,
        g: 0,
        b: 0
    }

}

function setup() {
    createCanvas(680, 680);
}

function draw() {
    background('black');
    displaySquare(orangeSquare.x, orangeSquare.y, orangeSquare.w, orangeSquare.h, orangeSquare.color.r, orangeSquare.color.g, orangeSquare.color.b);
    displaySquare(redSquare.x, redSquare.y, redSquare.w, redSquare.h, redSquare.color.r, redSquare.color.g, redSquare.color.b);

    changeColour(orangeSquare);
    changeColour(redSquare);

    radius = 50;
    ellipseAlpha = 0.5;

    // for loop to display the opaque circles based on the value of the counter
    for (let i = 0; i <= counter && counter <= 10; i++) {
        drawCenterEllipse(width / 2, height / 2, radius, 255, 255, 255, ellipseAlpha);
        radius += 50;
        ellipseAlpha += 10;
    }

}

// Changes the colour of the selected square shape based on it's nameCol property
function changeColour(square) {
    if (square.nameCol === 'red') {// if the selected square's nameCol is red
        if (checkCollisionWithSquare(square)) {
            square.color.r = 255; // set the square's rgb to a lighter values
            square.color.g = 99;
            square.color.b = 71;
        } else {
            square.color.r = 255;
            square.color.g = 0;// original colour of the square
            square.color.b = 0;
        }
    } else if (square.nameCol === 'orange') {
        if (checkCollisionWithSquare(square)) {
            square.color.r = 254;
            square.color.g = 168;// set the square's rgb to a lighter values
            square.color.b = 110;
        } else {
            square.color.r = 255;
            square.color.g = 140;// original colour of the square
            square.color.b = 0;
        }
    }
}
// Draws squares
function displaySquare(x, y, w, h, r, g, b) {
    push();
    fill(r, g, b);
    rect(x, y, w, h);
    pop();
}

// Draws the opaque circles on the canvas
function drawCenterEllipse(x, y, radius, r, g, b, alpha) {
    push();
    fill(r, g, b, alpha);
    ellipse(x, y, radius);
    pop();
}

// Function runs when the mouse is clicked on the canvas
function mouseClicked() {
    if (checkCollisionWithSquare(orangeSquare)) {
        counter += 1;// increments the counter if the user clicks the orange square
    }
    else if (checkCollisionWithSquare(redSquare)) {
        counter -= 1;// decrement the counter if the user clicks the red square
    }

}
// checks if the mouse overlaps a square shape
function checkCollisionWithSquare(square) {
    return (mouseX > square.x && mouseX < square.x + square.w && mouseY > square.y && mouseY < square.y + square.h)
}


