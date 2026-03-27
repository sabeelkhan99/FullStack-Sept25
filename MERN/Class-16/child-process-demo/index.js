const { execFile } = require('node:child_process');
const path = require('path');

// const child = execFile('node', ['--version'], (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });

const testPythonFile = path.join(__dirname, 'test.py');

const child = execFile('python3', [testPythonFile], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
