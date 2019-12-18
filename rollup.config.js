import packageJson from "./package.json";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/a.js",
  output: [
    {
      format: "cjs",
      file: packageJson.main
    }
  ],
  plugins: [resolve(), commonjs()]
};
