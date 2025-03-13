window.onload = function() {
  // Get the video element and canvas context
  const videoElement = document.getElementById("video-birds");
  const canvas = document.getElementById("partA");
  const context = canvas.getContext("2d");

  // Create a new VideoObj instance
  const videoObj = new VideoObj(0, 0, canvas.width, canvas.height, videoElement, context);

  // Function to update the video and canvas every frame
  function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas
    videoObj.display();  // Display the video with applied filters
    requestAnimationFrame(updateCanvas);  // Keep updating the canvas
  }

  // Start the update loop when the video is playing
  videoElement.play();
  updateCanvas();  // Start drawing the video onto the canvas
};

class VideoObj {
  constructor(x, y, w, h, videoElement, context) {
    this.videoElement = videoElement;
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shapeX = 10;
    this.shapeY = 10;
    this.shapeCol = "#000000";
    this.userProvidedBlur = 0;
    this.userProvidedBrightness = 100;
    this.userProvidedContrast = 100;
    this.userProvidedGrayscale = 0;
    let self = this;

    // BLUR Filter
    let filterButton_blur = document.getElementById("filter_button_blur");
    let blurInput = document.getElementById("blurnum");
    filterButton_blur.addEventListener("click", function () {
      self.userProvidedBlur = blurInput.value;
      console.log("Blur:", self.userProvidedBlur);
    });

    // BRIGHTNESS Filter
    let filterButton_brightness = document.getElementById("filter_button_brightness");
    let brightnessInput = document.getElementById("brightnessnum");
    filterButton_brightness.addEventListener("click", function () {
      self.userProvidedBrightness = brightnessInput.value;
      console.log("Brightness:", self.userProvidedBrightness);
    });

    // CONTRAST Filter
    let filterButton_contrast = document.getElementById("filter_button_contrast");
    let contrastInput = document.getElementById("contrastnum");
    filterButton_contrast.addEventListener("click", function () {
      self.userProvidedContrast = contrastInput.value;
      console.log("Contrast:", self.userProvidedContrast);
    });

    // GRAYSCALE Filter
    let filterButton_grayscale = document.getElementById("filter_button_grayscale");
    let grayscaleInput = document.getElementById("grayscalenum");
    filterButton_grayscale.addEventListener("click", function () {
      self.userProvidedGrayscale = grayscaleInput.value;
      console.log("Grayscale:", self.userProvidedGrayscale);
    });

    // Mouse events
    let canvas = document.getElementById("partA");
    canvas.addEventListener("mousemove", function (event) {
      self.updatePositionRect(event.offsetX, event.offsetY);
    });
    canvas.addEventListener("click", function () {
      self.changeColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    });
  }

  display() {
    this.context.save();
    // Applying all filters
    this.context.filter = `
      blur(${this.userProvidedBlur}px) 
      brightness(${this.userProvidedBrightness}%) 
      contrast(${this.userProvidedContrast}%) 
      grayscale(${this.userProvidedGrayscale}%)
    `;
    this.context.drawImage(this.videoElement, this.x, this.y, this.w, this.h);
    this.context.fillStyle = this.shapeCol;
    this.context.restore();
  }

  // Update rectangle color
  changeColor(newCol) {
    this.shapeCol = newCol;
  }

  // Update rectangle position
  updatePositionRect(mx, my) {
    this.shapeX = mx - 25; // Center the rectangle on the mouse
    this.shapeY = my - 25; // Center the rectangle on the mouse
  }

  update(videoElement) {
    this.videoElement = videoElement;
  }
}