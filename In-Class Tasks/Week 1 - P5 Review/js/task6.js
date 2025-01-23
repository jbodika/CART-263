function draw() {
    background(0);
    createCanvas(windowWidth, windowHeight);

    fill(0);
    textSize(18);
    textAlign(CENTER, CENTER);

    //0 to 9
    for (let i = 0; i < 10; i++) {
        text(i, i * 50 + 50, 50);
    }

    //15 to 1
    for (let i = 15; i > 0; i--) {
        text(i, 50, i * 50 + 50);
    }

    // BONUS part
    for (let i = 15; i > 0; i--) {
        text(i, 1530, height - i * 50);
    }

    for (let i = 0; i < 10; i++) {
        text(i, width - i * 50 - 130, 830,);
    }

    text("TEST", width / 2, height / 2);
}
