window.onload = async function () {
    console.log("task 7-8");

    let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"];

    try {
        // Step 1: Load the data
        const response = await fetch('./data/iris.json');
        const data = await response.json();

        // Step 2: map() to add color
        const irisesWithColors = data.map(iris => ({
            ...iris,
            color: possibleColor[Math.floor(Math.random() * possibleColor.length)]
        }));

        // Step 3: filter() to remove sepalWidth >= 4
        const filteredIrises = irisesWithColors.filter(iris => iris.sepalWidth < 4);

        // Step 4: reduce() to calculate average petalLength
        const totalPetalLength = irisesWithColors.reduce((sum, iris) => sum + iris.petalLength, 0);
        const averagePetalLength = totalPetalLength / irisesWithColors.length;

        // Logging results
        console.log("Original Data:", data);
        console.log("Irises with Colors:", irisesWithColors);
        console.log("Filtered Irises (sepalWidth < 4):", filteredIrises);
        console.log("Average Petal Length:", averagePetalLength.toFixed(2));
        //NOTE: Code won't work till part 1-4 is added 

        // Use find() on irisesWithColors to access an object whose petalWidth is > 1.0
        const findPetalWidth = irisesWithColors.find((x => x.petalLength > 1.0));
        console.log(findPetalWidth);

        // Use some() on irisesWithColors to find out if there is an object that has a petalLength >10
        const somePetalLengthMoreThan = irisesWithColors.some((x => x.petalLength > 10));
        console.log(somePetalLengthMoreThan);

        // Use some() on irisesWithColors to find out if there is an object that that has a petalLength == 4.2
        const somePetalLengthEqual = irisesWithColors.some((x => x.petalLength == 4.2));
        console.log(somePetalLengthEqual);

        // every():Use every() on irisesWithColors to find out if all objects have petalWidths < 3
        const everyPetalWidthLessThan = irisesWithColors.every((x => x.petalWidth < 3));
        console.log(everyPetalWidthLessThan);

        // every():Use every() on irisesWithColors to find out if all objects have sepalWidths > 1.2
        const everySepealWidthMoreThan = irisesWithColors.every((x => x.sepealWidths > 1.2));
        console.log(everySepealWidthMoreThan);

        // toSorted():use toSorted() on irisesWithColors to output a sorted array called irisesWithColorsSorted. Sort on the petalWidth field (smallest to largest)
        const irisesWithColorsSorted = irisesWithColors.toSorted((a, b) => a.petalWidth - b.petalWidth);
        console.log(irisesWithColorsSorted);
    } catch (error) {
        console.error("Error loading iris.json:", error);
    }
};