import { execSync } from 'child_process';
import fs from 'fs';

const css = `
@import "tailwindcss";
@custom-variant dark (&:is(.dark *));
.test { @apply dark:bg-black; }
`;
fs.writeFileSync('test-tailwind.css', css);

try {
  execSync('npx -y @tailwindcss/cli@4.1.14 -i test-tailwind.css -o test-tailwind-out.css');
  const out = fs.readFileSync('test-tailwind-out.css', 'utf-8');
  console.log("COMPILED SUCCESSFULLY");
  console.log(out.split('\n').filter(line => line.includes('.dark')).join('\n'));
} catch (e) {
  console.error(e.toString());
}
