import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default defineConfig({
    input: "index.ts",
    output: [
        {
            file: "dist/index.js",
            format: "cjs"
        },
        {
            file: "dist/index.mjs",
            format: "esm"
        }
    ],
    plugins: [
        typescript(),
        terser()
    ]
});