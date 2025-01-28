window.onload = setup;

/** function setup */
function setup() {
    /*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
    /*** START PART ONE ACCESS */
    /* 1: all paragraph elements */
    /***CODE */
    let allPTags = document.querySelectorAll('p');
    /***OUTPUT: 
     * NodeList(9) [p#1, p#2.img-descript, p#3.img-descript, p#4.img-descript, p#5.img-descript, p#6.img-descript, p#7.img-descript, p#8.img-descript, p#9.img-descript]
     */
    console.log(allPTags)

    /*************************************** */
    /* 2: only the first paragraph element */
    /***CODE */
    let firstPTag = document.querySelector('p');

    /***OUTPUT: 
     * <p id="1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et
                laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus
                officiis non
                quasi officia sit veniam!
            </p>
     */
    console.log(firstPTag)

    /*************************************** */
    /* 3: all elements with the class inner-container */
    /***CODE */
    let containerClassEl = document.querySelectorAll('.inner-container')
        /***OUTPUT: 
         * NodeList(8) [div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container]
         */
    console.log(containerClassEl)


    /*************************************** */
    /* 4: the last image element inside the element that has the class img-container */
    /***CODE */
    let lastImg = document.querySelectorAll('.img-container')
        /***OUTPUT: 
         * <img class="img-image" src="task-1-images/seventeen.png">
         */

    console.log(lastImg[lastImg.length - 1])

    /*************************************** */
    /* 5A: all h2 elements */
    /* 5B: length of the list in 5A */
    /* 5C: the text content of the first element in the list from 5A */
    /***CODE */
    let allH2 = document.querySelectorAll('h2')

    console.log(allH2)
    console.log(allH2.length)
    console.log(allH2[0])

    /***OUTPUT: 
     * Nodelist[h2];
     * 1;
     * <h2> The header of this fancy page</h2>
     */

    /*************************************** */
    /* 6: the element with id name parent */
    /***CODE */
    let name = document.querySelector("#parent")
        /***OUTPUT: 
         * 
         */
    console.log(name)

    /*************************************** */
    /*** END PART ONE ACCESS */


    /*************************************** */
    /*** START PART TWO MODIFY */
    /*************************************** */
    /* 1: Select the first paragraph and replace the text within the paragraph... */
    /***CODE */
    //declared the pTag variable up above
    let currentDate = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
    firstPTag = document.querySelector('p');
    firstPTag.innerHTML = `text changed by Jolene on the following date: ${months[currentDate.getMonth()]} ${currentDate.getDate()} ${currentDate.getFullYear()}`

    /*************************************** */
    /* 2: Select all elements in the HTML that have the class name content-container
     and change the background color ... of first and second ...*/

    /***CODE */
    let contentContainer = document.querySelectorAll('.content-container');
    contentContainer[0].style.background = 'orange'
    contentContainer[1].style.background = 'purple'



    /*************************************** */
    /* 3: Change the src element of the first image element on the page to be ...
    /***CODE */
    let firstImg = document.querySelector('img')

    firstImg.src = 'task-1-images/seven.png'
        /*************************************** */
        /* 4: Select the third paragraph element on the page and 
        replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
        /***CODE */
    allPTags = document.querySelectorAll('p');
    let thirdPTag = allPTags[2] // gets the third paragraph element
    thirdPTag.innerHTML = '<h2>TEST 123</h2>'
        /*************************************** */
        /* 5: Select the fourth paragraph element on the page and 
        add to the existing content an h2 element containing the text `TEST 123`
        /***CODE */
    let fourthPTag = allPTags[3] // gets the third paragraph element
    fourthPTag.innerHTML += '<h2>TEST 123</h2>'

    /*************************************** */
    /* 6: Select the fifth paragraph element on the page and add to the existing content 
    an img element that holds `one.png`, and add the class newStyle to said paragraph element.
    /***CODE */
    let fifthPTag = allPTags[4] // gets the third paragraph element
    fifthPTag.innerHTML += `<img src='task-1-images/one.png' />`

    /*************************************** */
    /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
    then access all elements with class name inner-container and save to a variable called `innerContainers`. 
    Next, iterate over the colors array, and for each color: 
    assign the element from innerContainers variable with the same index 
    (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
    a background using that color.
    /***CODE */
    let colors = ['red', 'blue', 'green', 'orange'];
    let innerContainers = document.querySelectorAll('.inner-container');

    for (let k = 0; k < colors.length; k++) {
        innerContainers[k].style.background = colors[k]

    }

    /*************************************** */
    /*** END PART TWO MODIFY */


    /*************************************** */
    /*** START PART THREE CREATE */
    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
    /* 1B: Create a function:function customCreateElement(parent){ //body } */
    /* 1C:  In the body of customCreateElement create a new parargraph element*/
    /* 1D:  Set the text of this element to be : `using create Element`*/
    /* 1E:  Set the background of this paragraph element to be green */
    /* 1F:  Set the color of the text in this paragraph element to be white */
    /* 1G: Append this new element to the parent variable within the function. */
    /* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
    passing the current allPTagsThree element as the parent with each iteration.*/
    /***CODE */
    let allPTagsThree = document.querySelectorAll('p')


    function customCreateElement(parent) {
        let newP = document.createElement('p');
        newP.innerHTML = 'using create Element';
        newP.style.background = 'green';
        newP.style.color = 'white';
        parent.append(newP)
    }

    allPTagsThree.forEach((element) => {
        customCreateElement(element)
    })


    /***EXPLANATION::
     * You select all the paragraph tags on the page
     * You create a custom function to avoid repeting code so the customCreateElement function takes in a parent element and
     * it will create a new element on the page.
     * lastly you iterate through th ep tags on the page to add the new p tags
     * 
     */

    /*************************************** */
    /* 2: GRID OF BOXES */
    /* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
    /* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
    /* 2C:Then append this new element to the parent variable within the function. 
    /* 2D:Finally, return</code> this new element */
    /* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
        Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
        Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
    /* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
        Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
        in a variable i.e. returnedDiv. 
        Set the style (left and top) to the of this element to 
        the necessary x and y position (use the counter variables in the for nested for loop to 
        calculate the new positions.
    /* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
        and otherwise let it have a background of purple.</li>
    /* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
        otherwise lat it have the content `ODD`.*/

    /***CODE */

    function customNewBoxCreate(parent) {
        let newDiv = document.createElement('div');
        newDiv.className = 'testDiv';
        parent.append(newDiv);

        return newDiv
    }

    let newGrid = document.querySelector('#new-grid')
    for (let rows = 0; rows <= 10; rows++) {
        for (let cols = 0; cols <= 10; cols++) {

            let returnedDiv = customNewBoxCreate(newGrid)
            returnedDiv.style.left = `${rows* 45}px`; // i dont understand what calculation is needed here

            returnedDiv.style.top = `${cols* 45}px`;

            if (rows % 2 === 0) {
                returnedDiv.style.background = 'white'
                returnedDiv.innerHTML = 'EVEN'
            } else {
                returnedDiv.style.background = 'cornflowerblue'
                returnedDiv.innerHTML = 'ODD'

            }
        }


    }

    console.log(document.querySelectorAll('.testDiv'))

    /***EXPLANATION::
     * When i try to console.log all elements who have the class testDiv I get a NodeList of 121 elements
     * That's beacause there's two grids that use testDiv elements inside them
     */

    /*************************************** */
    /* 3: GRID OF BOXES II */

    /* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
        USE the same customNewBoxCreate function..., the only difference is that the parent element 
        for each of these new divs is the element whose id is `new-grid-three`. */
    /* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
        when it is a column where the remainder is 1 or when the remainder is 2 ... 
        HINT:: look up the % operator.. */
    /* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
            then the second a background of orange and the third yellow. */
    /*  3D: Finally, let each div contain the text content representing the associated remainder 
        when dividing by three. */

    /***CODE */

    let newGridThree = document.querySelector('#new-grid-three')

    for (let rows = 0; rows <= 10; rows++) {
        for (let cols = 0; cols <= 10; cols++) {

            let returnedDiv = customNewBoxCreate(newGridThree)
            returnedDiv.style.left = `${rows * 45}px`; // i dont understand what calculation is needed here
            returnedDiv.style.top = `${cols * 45}px`;

            if (cols % 3 === 0) {
                returnedDiv.style.background = 'red';
                returnedDiv.innerHTML = 0

            } else if (cols % 3 === 1) {
                returnedDiv.style.background = 'orange';
                returnedDiv.innerHTML = 1

            } else if (cols % 3 === 2) {
                returnedDiv.style.background = 'yellow';
                returnedDiv.innerHTML = 2;


            }
        }


    }



    /***EXPLANATION::
     * Added an if else statement block to check how to style the grid boxes based on the remainder
     * created a nested for loop to display the rows and columns of the  grid
     * 
     */

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */





}