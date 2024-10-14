import pluginJs from "@eslint/js"
import eslintPluginAstro from "eslint-plugin-astro"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
	...eslintPluginAstro.configs.recommended,
]
