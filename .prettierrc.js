/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  tabWidth: 3,
  useTabs: true,
  printWidth: 100,
  singleQuote: true,
  importOrderSeparation: true,
  plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@assets|@constants|@helpers|@hooks|@modules|@navigation|@services|@stores|@types|@ui$',
    '',
    '^[.]'
  ]
};
