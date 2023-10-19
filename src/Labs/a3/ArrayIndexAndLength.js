

function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];

    // Perform array operations
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    // Store the results in variables
    const lengthResult = `length1 = ${length1}`;
    const indexResult = `index1 = ${index1}`;

    // Log the results to the console
    console.log(lengthResult);
    console.log(indexResult);

    return (
        <div>
            <h2>Working with Arrays</h2>
            {/* Render the results within your component */}
            <div>{lengthResult}</div>
            <div>{indexResult}</div>
        </div>
    );
}

export default ArrayIndexAndLength;
