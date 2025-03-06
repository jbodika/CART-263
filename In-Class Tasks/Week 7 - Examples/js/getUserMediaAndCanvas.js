window.onload = getLiveVideo;
 
async function getLiveVideo() {
  console.log("loaded");
  let video = document.getElementById("video");
  let canvas = document.getElementById("videoCanvas");
  let context = canvas.getContext("2d");
 
  try {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: 320,
        height: 240,
      },
    });
    video.srcObject = stream;
    console.log(video.srcObject); //here there is something
    /*** instead of using the video object we can use the canvas **/
    requestAnimationFrame(run);
    function run() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(video, 0, 0, canvas.width / 2, canvas.height);
      context.fillStyle = "#FFFFFF";
      context.fillRect(10, canvas.height / 2, 50, 50);
      requestAnimationFrame(run);
    }
  } catch (err) {
    /* handle the error */
    console.log("had an error getting the camera");
  }
}