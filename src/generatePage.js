const fs = require('fs');

function createCard(person) {
    switch(person.position) {
        case 'Manager': {
            var third = `Office: ${person.office}`;
            break;
        }
        case 'Engineer': {
            var third = `GitHub: <a href="https://github.com/${person.github}">${person.github}</a>`;
            break;
        }
        case 'Intern': {
            var third = `School: ${person.school}`;
            break;
        }
    }
    let card = `
<div class="card">
    <div class="person">
        <h3>${person.name}</h3>
        <h3>${person.icon} ${person.position}</h3>
    </div>
    <div class="card-attributes">
        <p>ID: ${person.id}</p>
        <p>Email: <a href="mailto:${person.email}">${person.email}</a></p>
        <p>${third}</p>
    </div>
</div>`
    return card;
}

function writePage(people, name) {
// top of html before inserted employee cards
    let page = `<!DOCTYPE html>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta charset="UTF-8">
    <link href="./${name}-style.css" rel="stylesheet">
</head>

<body>
    <div class="heading">
        <h1>My Team</h1>
    </div>
    <div class="container">`;
// bottom of html after inserted employee cards
    const bot = `    </div>
<script src="https://kit.fontawesome.com/d208147805.js" crossorigin="anonymous"></script>
</body>`;
    people.forEach(person => {
        page += createCard(person);
    });
    page += bot;
    fs.writeFileSync(`./dist/${name}.html`, page);
}

module.exports = {createCard, writePage};