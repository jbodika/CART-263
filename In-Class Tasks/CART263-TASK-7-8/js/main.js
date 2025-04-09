window.onload = async function () {
    console.log("task 7-8");
   
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


  




}