import React from 'react';

function AddingAndRemovingDataToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    // Adding new items to the arrays
    numberArray1.push(6);
    stringArray1.push('string3');

    // Remove 1 item from each array
    numberArray1.splice(2, 1); // Remove 1 item starting at index 2
    stringArray1.splice(1, 1); // Remove 1 item starting at index 1

    // Store the updated arrays in variables
    const updatedNumberArray = numberArray1;
    const updatedStringArray = stringArray1;

    // Log the updated arrays to the console
    console.log("NumberArray1 = ", updatedNumberArray);
    console.log("StringArray1 = ", updatedStringArray);

    return (
        <div>
            <h2>Adding and Removing Data from Arrays</h2>
            {/* Render the updated arrays within your component */}
            <div>NumberArray1 =  {updatedNumberArray.join(', ')}</div>
            <div>StringArray1 =  {updatedStringArray.join(', ')}</div>
        </div>
    );
}

export default AddingAndRemovingDataToFromArrays;
