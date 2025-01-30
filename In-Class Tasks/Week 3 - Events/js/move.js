window.onload = function(){
    console.log("move");

// we want to do something when the mouse is over the box :)
let drawBox = document.querySelector("#draw-box-a");
 
//A: add event listener + callback
drawBox.addEventListener("mousemove", moveCallback);

function moveCallback(e){
    console.log("mouse move");
    // B: note these are the same ... 
    let rect = this.getBoundingClientRect();
    console.log(rect);
    //DIFFERENCE TO ENSURE COORDS ARE RELATIVE
    let offsetX = e.clientX-rect.x; // allows you to get the coordinates of the black div
    let offsetY = e.clientY-rect.y;
   drawBox.innerHTML= `<p> offset_x: ${offsetX}, offset_y:${offsetY} </p>`;
 

    let newDiv = document.createElement('div');
    newDiv.classList.add("point");
    newDiv.style.left = `${offsetX}px`
    newDiv.style.top = `${offsetY}px`
    this.appendChild(newDiv)

}

}

