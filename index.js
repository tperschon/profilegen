const { Manager, Engineer, Intern } = require('./lib/employees.js');
const generatePage = require('./src/generatePage');
const generateStylesheet = require('./src/generateStylesheet');

const man = new Manager('Bob', 1201, 'anemail@email.com', '#301');
const eng = new Engineer('Joe', 2012, 'theemail@email.com', 'tperschon');
const int = new Intern('Bil', 1921, 'am@gmail.com', 'uofu');
const tes = new Intern('tes', 1212, 'tjha@jad', 'aksjdf')

const personnel = [man, eng, int, tes];

generateStylesheet('test')
generatePage.writePage(personnel, 'test')
