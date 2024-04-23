import { say } from 'cowsay';

const currentDir = process.cwd();
console.log(say({ text: 'You are here ' + currentDir, e: 'oO', T: 'U ' }));
setTimeout(() => console.log(currentDir), 1000);