class Flower {
    // constructor() {
    //     this.x = Math.random() * (window.innerWidth);
    //     this.y = Math.random() * 120;
    //     this.size = 40;
    //     this.stemLength = 75;
    //     this.stemThickness = 10;
    //     this.petalThickness = 8;
    //     this.flowerStemDiv = document.createElement("div");
    //     this.flowerPetalDiv = document.createElement("div");

    //     // Color information
    //     this.stemColor = {
    //         r: 50,
    //         g: 150,
    //         b: 50,
    //     };
    //     this.petalColor = {
    //         r: 200,
    //         g: 50,
    //         b: 50,
    //     };
    //     this.centreColor = {
    //         r: 50,
    //         g: 0,
    //         b: 0,
    //     };
    // }

    constructor(x,y,size,stemLength,petalColor) {
        // We write instructions to set up a Flower here
        // Position and size information
        this.x = x;
        this.y = y;
        this.size = size;
        this.stemLength = stemLength;
        this.stemThickness = 10;
        this.petalThickness = 8;
        this.flowerStemDiv = document.createElement("div");
        this.flowerPetalDiv = document.createElement("div");
     
        // Color information
        this.stemColor = {
          r: 50,
          g: 150,
          b: 50,
        };
        this.petalColor = petalColor;
        this.centreColor = {
          r: 50,
          g: 0,
          b: 0,
        };
        let flowerInstance = this // ref to flower obj
          //add event listener and the call back
          this.flowerStemDiv.addEventListener("click", growStem);
          
          function growStem(e) {
            console.log(flowerInstance);
            //this is the div :)
            //console.log(flowerInstance);
            flowerInstance.stemLength = flowerInstance.stemLength+10;
       
            //update the actual div...
            flowerInstance.flowerStemDiv.style.height = flowerInstance.stemLength + "px";
            flowerInstance.flowerStemDiv.style.top = flowerInstance.y - flowerInstance.stemLength + "px";
       
            // and also the petal element needs to move up
            flowerInstance.flowerPetalDiv.style.top =
            flowerInstance.y - flowerInstance.stemLength - flowerInstance.size / 2 + "px";
          }
      }

    renderFlower() {
        this.flowerStemDiv.classList.add("flower");
        this.flowerStemDiv.style.width = this.stemThickness + "px";
        this.flowerStemDiv.style.height = this.stemLength + "px";
        this.flowerStemDiv.style.background = `rgb(${this.stemColor.r},${this.stemColor.g},${this.stemColor.b})`;
        this.flowerStemDiv.style.left = this.x + "px";
        this.flowerStemDiv.style.top = this.y - this.stemLength + "px";
        //add to the DOM
        document.getElementsByClassName("grass")[0].appendChild(this.flowerStemDiv);

        this.flowerPetalDiv.classList.add("petal");
        this.flowerPetalDiv.style.width = this.size + "px";
        this.flowerPetalDiv.style.height = this.size + "px";
        this.flowerPetalDiv.style.borderRadius = this.size + "px";
        this.flowerPetalDiv.style.background = `rgb(${this.centreColor.r},${this.centreColor.g},${this.centreColor.b})`;
        this.flowerPetalDiv.style.left = (this.x - this.size / 2) + "px";
        this.flowerPetalDiv.style.top = (this.y - this.stemLength - this.size / 2) + "px";
        this.flowerPetalDiv.style.borderWidth = this.petalThickness + "px";
        this.flowerPetalDiv.style.borderColor = `rgb(${this.petalColor.r},${this.petalColor.g},${this.petalColor.b})`;
        //add to the DOM
        document.getElementsByClassName("grass")[0].appendChild(this.flowerPetalDiv);

    }

}