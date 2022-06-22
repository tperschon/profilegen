const fs = require('fs');

// top of html before inserted employee cards
const top = `<!DOCTYPE html>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta charset="UTF-8">
    <link href="./template-style.css" rel="stylesheet">
</head>

<body>
    <div class="heading">
        <h1>My Team</h1>
    </div>
    <div class="container">`

// bottom of html after inserted employee cards
const bot = `    </div>

<script src="https://kit.fontawesome.com/d208147805.js" crossorigin="anonymous"></script>
</body>`