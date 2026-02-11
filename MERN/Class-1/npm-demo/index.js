const figlet = require('figlet');

async function print() {
  const text = await figlet.text("Hello World!!");
  console.log(text);
}

print();