window.onload = function () {

    const video = document.querySelector("#video");
    let textField = document.querySelector('.writeText');

    // runs the typewriting animation through the API 
    new Typewriter(textField, {
        strings: ['⊑⟒⌰⌰⍜ ⍙⟒⌰☊⍜⋔⟒ ⎎⟒⌰⌰⍜⍙ ⏃⌰⟟⟒⋏!', 'My apologies, you cannot read ⏚⌰⍜⍀⏚⊬', 'Translating ⏚⌰⍜⍀⏚⊬ to ENGLISH', 'A', '⍀', 'You need to find a way to understand earthlings'],
        loop: false,
        delay: 30,
        autoStart: true
    })


    /**Function to randomize values */
    function randomizeValue(arr) {
        return Math.floor(Math.random() * arr.length)
    }


    // delays the video stream to build anticipation
    setTimeout(() => {
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
            faceapi.nets.faceExpressionNet.loadFromUri('/models')
        ]).then(setUpVideo)
    }, 25000)


    /**Function to set upvideo stream */
    function setUpVideo() {
        navigator.getUserMedia({ video: {} },
            stream => video.srcObject = stream,
            error => console.error(error)
        )
    }


    video.addEventListener('play', () => {
        setInterval(async () => { // set up the faceapi
            const detections = await faceapi.detectAllFaces(video,
                new faceapi.TinyFaceDetectorOptions()).withFaceExpressions() // detects different facial expressions 

            if (detections.length > 0) {
                const expressions = detections[0].expressions;
                const highestExpression = Object.entries(expressions).reduce((prev, curr) => {
                    return curr[1] > prev[1] ? curr : prev; // returns the highest value in the array
                });

                document.querySelector('.miniGame #question').innerHTML = highestExpression[0];
            }
        }, 100)
    })

}

