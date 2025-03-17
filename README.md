## prettier config 🚀

### Install

```bash
npm i @parabit/prettier
```

```bash
yarn add @parabit/prettier
```

### peerDependencies

-  [prettier](https://www.npmjs.com/package/prettier)

### plugin recommendation for prettier

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
