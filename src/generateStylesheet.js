// return the contents of a full css file as a string
function generateStylesheet() {
    return (`:root {
    --red: rgb(232, 71, 86);
    --white: rgb(241, 255, 255);
    --blue: rgb(0, 119, 247);
    --gray: rgb(36, 36, 36);
    --cardbackground: rgb(246, 247, 249);
}

* {
    margin: 0;
    padding: 0;
}

body {
    width: 100%;
    height: 100vh;
}

.heading {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 30px 0;
    text-align: center;
    background-color: var(--red);
    color: var(--white);
}

.container {
    padding-top: 2%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
}

.card {
    flex: 1 1 1;
    width: 95%;
    background-color: var(--cardbackground);
    margin: 10px;
    border: none;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 3px 3px 3px var(--gray);
}

.card-attributes {
    font-size: 12px;
    padding: 5%;
    background-color: var(--white);
}

.card-attributes p {
    padding: 5%;
    border: 1px solid rgb(190, 190, 190);
}

.person {
    white-space: nowrap;
    font-size: 16px;
    padding: 5%;
    background-color: var(--blue);
    color: var(--white);
}

@media only screen and (min-width: 768px) and (max-width: 1200px) {
    .container {
        flex-direction: row;
        justify-content: center;
    }
    .card {
        width: 45%;
    }
}

@media only screen and (min-width: 1200px) {
    .container {
        flex-direction: row;
        justify-content: center;
    }
    .card {
        width: 20%;
    }
}`)}

module.exports = generateStylesheet;