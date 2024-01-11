import * as path from 'path';
import * as fs from 'fs';

function seed(p = path.join(__dirname, 'run')) {
  const files = fs.readdirSync(p);
  for (const file of files) {
    const fPath = path.join(p, file);
    if (fs.lstatSync(fPath).isDirectory()) {
      seed(fPath);
    } else {
      if (file.endsWith('ts')) require(fPath);
    }
  }
}

seed();
