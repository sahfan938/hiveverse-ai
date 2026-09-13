import {readdir,readFile,stat} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
for(const file of await readdir('dist'))if(file.endsWith('.js'))execFileSync(process.execPath,['--check',`dist/${file}`]);
const html=await readFile('dist/index.html','utf8');
for(const match of html.matchAll(/(?:src|href)="(?!https?:|#)([^"]+)"/g))await stat(`dist/${match[1]}`);
for(const file of ['three.module.js','three.core.js','OrbitControls.js']){const s=await stat(`dist/vendor/${file}`);if(s.size<1000)throw Error('Missing dependency: '+file);}
console.log('Production validation passed: module syntax, HTML assets, and vendored Three.js dependencies. dist/ is ready to serve.');
