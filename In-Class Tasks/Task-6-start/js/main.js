window.onload = run;

function run() {
    document.querySelector("#stepOneButton").addEventListener("click", fetchText);
    document.querySelector("#resetButton").addEventListener("click", resetPoem);

    /****** PART A:: FETCH */
    async function fetchText() {
        console.log("in fetch");
        let raw_rainbow_text = "";

        try {
            raw_rainbow_text = await fetch("./files/rainbow.txt")
                .then(res => res.text())
                .catch(err => {
                    console.log(err)
                })

            document.querySelector("#stepOneButton").style.display = 'none';
            document.querySelector("#inputDiv").style.display = 'block';
            document.querySelector("#rainbow_text").append(raw_rainbow_text)

            runPartB(raw_rainbow_text);
        } catch (e) {
            console.log(e)
        }
    }

    /****** PART B:: TEXT PROCESSING  */
    function runPartB(originalRainBowText) {
        document
            .querySelector("#produce-poem")
            .addEventListener("click", producePoem);

        /* FILL IN HERE */
        function producePoem() {
            try {
                let phrase = document.querySelector("#phrase").value;
                let phrase_as_array = phrase.split(/[ .?\n!]/);
                let rainbow_tokens = originalRainBowText.split(/[ .?\n!]/)

                //SR
                runPartC(rainbow_tokens, phrase_as_array);
            } catch (e) {
                console.error('ERROR FOUND: ' + e)
            }


        }
    }


    /****** PART C:: POEM CREATION  */
    function runPartC(rainbow_words, seed_phrase_array) {
        console.log(rainbow_words);
        console.log(seed_phrase_array);

        //to next stage
        runPartD(poem_sentence);
    }


    /****** PART D:: VISUALIZE  */
    function runPartD(new_sentence) {
        let output = document.querySelector("#output").style.display = 'block';
        new_sentence.forEach(element => {
            output.append(element);
        });
    }

    /****** PART E:: RESET  */
    function resetPoem() {
        let output = document.querySelector("#output");
        let phrase = document.querySelector("#phrase");

        document.querySelector("#stepOneButton").style.display = 'block';
        document.querySelector("#inputDiv").style.display = 'none';
        output.innerHTML = ""
        phrase.value = "";

        output.style.display = 'none';




    }
} //window onload