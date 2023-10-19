function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];

    // Define a square function
    const square = a => a * a;

    // Use the map function to calculate squares
    const squares = numberArray1.map(square);

    // Use the map function to calculate cubes
    const cubes = numberArray1.map(a => a * a * a);

    // Log the arrays with mapped values to the console
    console.log("Original Number Array:", numberArray1);
    console.log("Squares Array:", squares);
    console.log("Cubes Array:", cubes);

    return (
        <div>
            <h2>Map</h2>
            {/* Render the arrays with mapped values within your component */}
            <div>Original = {numberArray1.join(', ')}</div>
            <div>Squares = {squares.join(', ')}</div>
            <div>Cubes = {cubes.join(', ')}</div>
        </div>
    );
}

export default MapFunction;
