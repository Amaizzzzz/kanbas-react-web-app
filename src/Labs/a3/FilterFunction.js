
function FilterFunction() {
    let numberArray1 = [1, 2, 4, 5, 6];

    const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
    const evenNumbers = numberArray1.filter(a => a % 2 === 0);
    const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

    return (
        <div>
            <h2>Filter Function</h2>
            {/* Render the results of the filter function */}
            <div>Numbers greater than 2: {numbersGreaterThan2.join(', ')}</div>
            <div>Even numbers: {evenNumbers.join(', ')}</div>
            <div>Odd numbers: {oddNumbers.join(', ')}</div>
        </div>
    );
}

export default FilterFunction;
