import fs from 'fs';

// Read input from stdin
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let idx = 0;

// Number of test cases
const t = parseInt(input[idx++], 10);

let result = [];

for (let tc = 0; tc < t; tc++) {
  const a = input[idx++];
  const b = input[idx++];

  // Print lengths
  result.push(`${a.length} ${b.length}`);

  // Print concatenation
  result.push(a + b);

  // Swap first characters
  const swapped =
    b[0] + a.slice(1) + " " +
    a[0] + b.slice(1);

  result.push(swapped);
}

// Output
console.log(result.join('\n'));
