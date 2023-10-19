
function ForLoops() {
    // Create an array
    let stringArray1 = ['string1', 'string3'];
    let stringArray2 = [];

    // Use a for loop to process stringArray1 and create stringArray2
    for (let i = 0; i < stringArray1.length; i++) {
        const string1 = stringArray1[i];
        stringArray2.push(string1.toUpperCase());
    }

    // Log the arrays and the processed array to the console
    console.log("Original String Array:", stringArray1);
    console.log("Processed String Array:", stringArray2);

    return (
        <div>
            <h2> Looping Through Arrays</h2>
            {/* Render the arrays and the processed array within your component */}
            <div> StringArray1 =  {stringArray1.join('')}</div>
            <div> StringArray2 =  {stringArray2.join('')}</div>
        </div>
    );
}

export default ForLoops;
