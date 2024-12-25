// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
//
// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.{js,mjs,cjs,ts}"]},
//   {rules: {"typescript-eslint/no-explicit-any": "warn"}},
//   {languageOptions: { globals: globals.node }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
// ];

// import globals from "globals";
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.config({
    rules: {
      "@typescript-eslint/no-explicit-any": "warn"
    }})
);