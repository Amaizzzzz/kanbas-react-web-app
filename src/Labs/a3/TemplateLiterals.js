function TemplateLiterals() {
    const five = 2 + 3;
    const result1 = "2 + 3 = " + five;
    console.log(result1);

    const result2 = `2 + 3 = ${2 + 3}`;
    console.log(result2);

    const username = 'alice';
    const greeting1 = `Welcome home ${username}`;
    console.log(greeting1);

    const loggedIn = false;
    const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
    console.log(greeting2);

    return (
        <div>
            <h2>Template Literals</h2>
            {/* Render the results using template literals */}
            <div>Result 1 = {result1}</div>
            <div>Result 2 = {result2}</div>
            <div>Greeting 1 = {greeting1}</div>
            <div>Greeting 2 = {greeting2}</div>
        </div>
    );
}

export default TemplateLiterals;
