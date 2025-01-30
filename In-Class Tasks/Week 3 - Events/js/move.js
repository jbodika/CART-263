window.onload = function(){
    console.log("move");

// we want to do something when the mouse is over the box :)
let drawBox = document.querySelector("#draw-box-a");
 
//A: add event listener + callback
drawBox.addEventListener("mousemove", moveCallBack);
 
function moveCallBack(e){
    console.log("mouse move");
    // B: note these are the same ... 
    console.log(this);
    console.log(e.target);
}

}

