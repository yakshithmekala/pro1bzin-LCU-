// Node.js solution

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let idx = 0;

const t = parseInt(input[idx++], 10);
let output = [];

for (let tc = 0; tc < t; tc++) {
  const a = input[idx++];
  const b = input[idx++];

  // lengths
  output.push(`${a.length} ${b.length}`);

  // concatenation
  output.push(a + b);

  // swap first characters
  let first =
    b[0] + a.slice(1) + " " +
    a[0] + b.slice(1);

  output.push(first);
}

console.log(output.join('\n'));
