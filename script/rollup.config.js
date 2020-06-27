import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve'
const pkg = require('../package.json');

const banner = `/*!
 * ${pkg.name} ${pkg.version} <${pkg.homepage}>
 * Copyright (c) ${(new Date()).getFullYear()} ${pkg.author}
 * Released under ${pkg.license} License
 */`;
const target = process.env.npm_config_i;
const input = target? `src/${target}/index.ts`: `src/main.ts`;
export default {
  input: input,
  output: [{
    format: 'cjs',
    file: `${pkg.main}`,
    name: `${pkg.name}`,
    banner,
    sourcemap: true,
  }],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      useTsconfigDeclarationDir: true,
    }),
    json(),
    commonjs({
      include: 'node_modules/**',
    }),
    resolve(),
  ],
}