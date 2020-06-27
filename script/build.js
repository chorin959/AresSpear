const fs = require('fs-extra');
const path = require('path');
const execa = require('execa');

build();

async function build(){
  await clearDir();
  await executeRollup();
}

async function executeRollup(){
  execa(
    'rollup',
    [
      '-c',
      ['script/rollup.config.js']
    ],
    { stdio: 'inherit' }
  )
}

async function clearDir(){
  if (fs.existsSync('dist')) {
    await fs.remove('dist')
  }
  fs.mkdirSync('dist')
}