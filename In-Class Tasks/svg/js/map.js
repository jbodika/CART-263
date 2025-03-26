window.onload = mapInteractions;

function mapInteractions(){
    writeRoomName("bedroom", 5, 3);
    toggleVisibility("bedroom");
    writeRoomName("living-room", 5, 4);
    toggleVisibility("living-room");
    writeRoomName("bathroom", 5, 3);
    toggleVisibility("bathroom");
    writeRoomName("kitchen", 13, 4);
    toggleVisibility("kitchen");
    writeRoomName("closet", 9, 4);
    toggleVisibility("closet");
    writeRoomName("balcony", 5, 4);
    toggleVisibility("balcony");
}

function writeRoomName(roomId, x, y){
    let room = document.querySelector(`#${roomId}`);
        let roomCoord = room.getBBox();
        newSvgText(roomId, roomCoord.x + roomCoord.width/x*2, roomCoord.y + roomCoord.height/y*2);
}

function toggleVisibility(roomId){
    document.querySelector(`#${roomId}`).addEventListener("click", () => {
        if(document.querySelector(`#${roomId}-txt`).classList.contains("visible")){
            document.querySelector(`#${roomId}-txt`).classList.add("invisible");
            document.querySelector(`#${roomId}-txt`).classList.remove("visible");
        }else{
            document.querySelector(`#${roomId}-txt`).classList.add("visible");
            document.querySelector(`#${roomId}-txt`).classList.remove("invisible");
        }
    })
}

function newSvgText(text, x, y){
    // create an svg text element
    let myText = document.createElementNS("http://www.w3.org/2000/svg","text");
    
    // create function setAttributes (not setAttribute)
    function setAttributes(element, attributes) {
        // for loop to go through the multiple key-value pairs in the attributes.
        for(let key in attributes) {
            // we set the attribute according to the key.
            element.setAttribute(key, attributes[key]);
        }
    }
    
    setAttributes(myText,{"id": text+"-txt", "class": "visible", "x": x, "y": y, "fill": "white"});
    myText.innerHTML = text;

    document.querySelector("#myAppartment").appendChild(myText);
}