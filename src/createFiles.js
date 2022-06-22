const fs = require('fs');
const getPage = require('./getPage');
const generateStylesheet = require('./generateStylesheet');

// take in an array of employees and the project name, create files and folders structure
function createFiles(empArray, projName) {
    fs.mkdirSync(`./dist/${projName}/assets/css/`, { recursive: true });
    fs.writeFileSync(`./dist/${projName}/assets/css/style.css`, generateStylesheet(projName));
    fs.writeFileSync(`./dist/${projName}/index.html`, getPage(empArray, projName));
};

module.exports = createFiles;