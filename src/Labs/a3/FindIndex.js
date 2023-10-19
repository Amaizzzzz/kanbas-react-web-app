import React from 'react';

function FindIndex() {
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');

    return (
        <div>
            <h2>FindIndex Function</h2>
            {/* Render the results of the findIndex function */}
            <div>Index of 4 = {fourIndex}</div>
            <div>Index of 'string3' = {string3Index}</div>
        </div>
    );
}

export default FindIndex;
