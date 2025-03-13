class RectangularObj {
  constructor(x, y, w, h, f_color, s_color, xSpeed, ySpeed, context) {
  // We write instructions to set up a Flower here
  // Position and size information
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.fill_color = f_color;
  this.stroke_color = s_color;
  this.startAngle = 0;
  this.endAngle = Math.PI * 2; //full rotation
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  this.time = 0;
  this.context = context;
  this.isMoving = false;
  
  this.context.canvas.addEventListener("click", () => {
  this.isMoving = !this.isMoving;
  });
  
  }
  
  display() {
  this.context.fillStyle = this.fill_color; // change the color we are using
  this.context.fillRect(this.x, this.y,this.width, this.height);
  this.context.strokeStyle = this.stroke_color; // change the color we are using
  this.context.lineWidth = 2; //change stroke
  this.context.strokeRect(this.x, this.y,this.width, this.height);
  }
  
  update(){
  
  if (!this.isMoving) return;
  this.time += 0.1;
  this.width = 50 + Math.sin(this.time) * 20;
  this.height = 70 + Math.cos(this.time) * 20;
  
  if (this.x <= 0 || this.x + this.width >= this.context.canvas.width) {
  this.xSpeed *= -1;
  }
  
  if (this.y <= 0 || this.y + this.height >= this.context.canvas.height) {
  this.ySpeed *= -1;
  }
  
  
  this.x += this.xSpeed;
  this.y += this.ySpeed;
  
  let r = Math.abs(Math.sin(this.time) * 255);
  let g = Math.abs(Math.cos(this.time) * 255);
  let b = 150;
  this.fill_color = `rgb(${r},${g},${b})`;
  }
  
  }