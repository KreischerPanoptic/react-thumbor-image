import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
//import commonjs from '@rollup/plugin-commonjs';
//import nodePolyfills from 'rollup-plugin-polyfill-node';

const extensions = [".js", ".ts", ".tsx"];

export default {
  input: "module/index.ts",
  plugins: [resolve({ extensions }), /*nodePolyfills(), */babel({ extensions }), /*commonjs({
    include: /node_modules/,
    requireReturnsDefault: 'auto',
    preferBuiltins: false
  })*/],
  output: [
    {
      file: "build/react-thumbor-image.js",
      format: "es"
    },
    {
      file: "build/react-thumbor-image.cjs.js",
      format: "cjs"
    }
  ],
  external: ["react"]
};
