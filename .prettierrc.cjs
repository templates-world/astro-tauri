module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
