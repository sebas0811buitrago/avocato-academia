
import eslintConfigPrettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";


export default [
  {
    files: ["**/*.{astro,js,mjs,cjs,ts}"],

    rules: {

      ...astro.configs.recommended.rules,
       ...astro.configs["flat/jsx-a11y-recommended"].rules, // Adds accessibility rules
    },
  }, 
  eslintConfigPrettier
];

