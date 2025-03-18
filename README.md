# prettier config 🚀

This library represents the corporate design of the code of the [`Parabit`](https://github.com/parabit) company

[`.prettierrc.js`](https://github.com/parabit/prettier/blob/main/.prettierrc.js)

```javascript
/** @type {import('prettier').Config} */
module.exports = {
	semi: true,
	tabWidth: 3,
	useTabs: true,
	printWidth: 100,
	singleQuote: true,
	importOrderSeparation: true,
};
```

## Install

```bash
npm i --save-dev @parabit/prettier
```

```bash
yarn add -D @parabit/prettier
```

## Peer dependencies

-  [prettier: "^3.5.0"](https://www.npmjs.com/package/prettier)

## Usage

Alse see [prettier docs](https://prettier.io/docs/configuration).

Without plugins `.prettierrc.js`

```javascript
import { prettier } from '@parabit/prettier';

export default { ...prettier };
```

With plugins `.prettierrc.js`

```javascript
import { prettier } from '@parabit/prettier';

export default {
	...prettier,
	plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
	importOrder: [
		'^react$',
		'<THIRD_PARTY_MODULES>',
		'',
		'^@assets|@constants|@helpers|@hooks|@modules|@navigation|@services|@stores|@types|@ui$',
		'',
		'^[.]',
	],
};
```

## Plugins recommendation for prettier

-  [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss)

```json
"plugins": ["prettier-plugin-tailwindcss"]
```

-  [@ianvs/prettier-plugin-sort-imports](https://www.npmjs.com/package/@ianvs/prettier-plugin-sort-imports)

```json
"plugins": ["@ianvs/prettier-plugin-sort-imports"],
"importOrder": [
    "^react$",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@assets|@constants|@helpers|@hooks|@modules|@navigation|@services|@stores|@types|@ui$",
    "",
    "^[.]"
]
```
