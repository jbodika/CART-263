window.onload = doEverything;
    
function doEverything(){
    let myRect = document.querySelector("#rectangle");
    bgdChange(myRect);

    newSVG();
    let circle = document.querySelector("#cir");
    bgdChange(circle);


    let x = 250;
    let y = 250;
    let speedX = 7;
    let speedY = -17;
    
    function moveCircle(){
        if(x >= 460 || x <= 40){
            speedX = -speedX;
        }
        if(y >= 460 || y <= 40){
            speedY= -speedY;
        }
        x = x + speedX;
        y = y + speedY;

        circle.setAttribute("cx", x.toString());
        circle.setAttribute("cy", y.toString());
        requestAnimationFrame(moveCircle);
    }

    moveCircle();


    let poly1Array = [];
    let polygon1 = document.querySelector("#poly");
    poly1Array = retrievePolyPoints(polygon1);


    // function to animate points of polygon
    function movePolygonPoint(){
        // string that will contain the polygon's points
        let pointString = "";
        // go through the points of the polygon (+2 because x and y)
        for(let i = 0; i < poly1Array.length; i+=2){
            // if y is less than 250
            if(poly1Array[i+1] < 250){
                // add one
                poly1Array[i+1]+=1;
            }
            // add to the string the x and y
            pointString += poly1Array[i].toString()+","+poly1Array[i+1].toString()+" ";
            // console.log(pointString);
        }
        // change the polygons points' attribute to the new string with the new coordinates
        polygon1.setAttribute("points", pointString);
        // animate!
        requestAnimationFrame(movePolygonPoint);
    }
    movePolygonPoint();

}

// function to get the points of a polygon as an array
function retrievePolyPoints(polygon){
    // aray in which we will store the points
    let pointsArray = [];
    // get the points as a string
    let polyPoints = polygon.getAttribute('points');
    // string for individual values
    let value = "";
    
    // go through every character of the string
    for(let i = 0; i < polyPoints.length; i++){
        // if the character is a number
        if(polyPoints.charAt(i)!= "," && polyPoints.charAt(i) != " "){
            // add the number at the end of the value string
            value += polyPoints.charAt(i);
        } // if it's a "," or a space
        else{
            // convert string to integer and push it into the array
            pointsArray.push(parseInt(value));
            // empty the string
            value = "";
        }
        // if we reached the end of the points
        if(i === polyPoints.length-1){
            // push the last number into the pointsArray
            pointsArray.push(parseInt(value));
            // console.log(value);
            value = "";
        }
    }
    // console.log(pointsArray);
    return pointsArray;
}

function bgdChange(shape){
    // when shape is clicked
    shape.addEventListener("click",()=>{
        // check the shape's parent's color
        if(shape.parentElement.style.background === "orange"){
            // change it
            shape.parentElement.style.background = "bisque";
        }else{
            // change it back
            shape.parentElement.style.background = "orange";
        }
    })
}

function newSVG(){
    // create an svg tag and a circle tag. We use the method createElementNS (namespace) instead of createElement.
    // the first parameter is "a string that specifies the namespaceURI to associate with the element" (https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS)
    let mySvg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    let myCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    
    // create function setAttributes (not setAttribute)
    function setAttributes(element, attributes) {
        // for loop to go through the multiple key-value pairs in the attributes.
        for(let key in attributes) {
            // we set the attribute according to the key.
            element.setAttribute(key, attributes[key]);
        }
    }
    
    // call function setAttributeS for mySvg and myCircle (first parameter)
    // and an object with all the attribute (second parameter)
    setAttributes(mySvg,{"width": "500", "height": "500", "style": "background-color: orange"})
    setAttributes(myCircle,{"id": "cir", "cx": "250", "cy": "250", "r": "40", "stroke": "lightblue", "stroke-width": "4", "fill": "yellow"})
    
    // append mySvg to the div with the basic as an id.
    document.querySelector("#basic").appendChild(mySvg);
    // append myCircle to the svg we just created.
    mySvg.appendChild(myCircle);
}



























