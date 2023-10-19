import React from 'react';

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped,
        blockScoped,
        constant1,
        numberArray1,
        stringArray1
    ];
 
    const logNumberArray = "numberArray1 = " + numberArray1;
    const logStringArray = "stringArray1 = " + stringArray1;
    const logVariableArray = "variableArray1 = " + variableArray1;

    // Log messages to the console
    console.log(logNumberArray);
    console.log(logStringArray);
    console.log(logVariableArray);

    return (
        <div>
            <h2>Working with Arrays</h2>
            {/* Render log messages within your component */}
            <div>{logNumberArray}</div>
            <div>{logStringArray}</div>
            <div>{logVariableArray}</div>
        </div>
    );
}

export default WorkingWithArrays;
