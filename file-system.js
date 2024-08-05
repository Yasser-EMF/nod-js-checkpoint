// file-system.js

const fs = require('fs');

// Create a file named "welcome.txt" with the content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created successfully.');

  // Read and console.log data from "welcome.txt"
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Data from file: ${data}`);
  });
});
