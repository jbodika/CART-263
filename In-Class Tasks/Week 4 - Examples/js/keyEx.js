window.onload = function () {
    console.log("keys");

    let speedX = 5;
    let myColours = ['green', 'red', 'pink', 'orange', 'grey']

    window.addEventListener('keyup', function (event) {

    })

  
    window.setTimeout(addTimeoutText,2000);
    function addTimeoutText(){
      let parent = document.getElementById("parent");
      parent.innerHTML+="<p> NEW TEXT TO APPEAR </p>";
    }


    
    window.setInterval(addTextRecur,2000);
 
    function addTextRecur(){
      let parent = document.getElementById("parent");
      parent.innerHTML+="<p> NEW TEXT TO APPEAR RECUR </p>";
    }

    // window.setTimeout(addTimeoutText,2000);
    // function addTimeoutText(){
    //   let parent = document.querySelector("#parent");
    //   parent.innerHTML+="<p> NEW TEXT TO APPEAR </p>";
    // }


    // window.setTimeout(addTimeoutText,10000);
    // function addTimeoutText(){
    //   let parent = document.querySelector("#parent");
    //   parent.innerHTML+="<p> NEW TEXT TO APPEAR </p>";
    // }

    window.addEventListener("keydown", function (event) {
        document.querySelector('#textContainer').textContent += event.code + ' '
        console.log(event.code)
        let bool = document.querySelector("#boxB").getAttribute("custom-bool");
        if (event.key == "ArrowRight") {
            console.log('hi')
            document.querySelector("#boxA").style.left = parseInt(document.querySelector("#boxA").style.left) + speedX + 'px';
        } else if (event.key === "ArrowLeft") {
            document.querySelector("#boxA").style.left = parseInt(document.querySelector("#boxA").style.left) - speedX + 'px';
        } else if (event.key === "Shift") {
            document.getElementById("boxA").style.background = "rgb(226, 112, 177)";
        } else if (event.code == "Space") {
            if (bool === "off") {
                document.getElementById("boxB").style.background = "orange";
                document.getElementById("boxB").setAttribute("custom-bool", "on");
            } else {
                document.getElementById("boxB").style.background = "rgb(112, 184, 226)";
                document.getElementById("boxB").setAttribute("custom-bool", "off");
            }
        }
        //   //  document.querySelector("#boxB").style.background = myColours[Math.floor(Math.random() * myColours.length)];
        //    document.querySelector("#boxB").style.background = myColours[Math.floor(Math.random() * myColours.length)];

        // }
    })


}