const compiler = require('./compilation/compiler');
//some input
let input = '(areacircle 10)';
const output = compiler(input);
console.log(JSON.stringify(output,null, 2));