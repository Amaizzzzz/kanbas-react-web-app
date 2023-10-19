function ImpliedReturn() {

    const multiply = (a, b) => a * b;

    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return (
        <>
            <h3>Implied Return</h3>
            fourTimesFive = {fourTimesFive}<br />
            multiply(4, 5) = {multiply(4, 5)}<br />
        </>
    )
}

export default ImpliedReturn;

// function ArrowFunctions() {
//     const subtract = (a, b) => {
//         return a - b;
//       }
//       const threeMinusOne = subtract(3, 1);
//       console.log(threeMinusOne);
    
//       return (
//        <>
//         <h3>New ES6 arrow functions</h3>
//         threeMinusOne = {threeMinusOne}<br />
//         subtract(3, 1) = {subtract(3, 1)}<br />
//        </>
//       )
//     }
    
    