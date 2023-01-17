module.exports = {
  'packages/**/*.(ts|tsx|js)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  'packages/**/*.(md|json)': (filenames) => `npx prettier --write ${filenames.join(' ')}`,

  'packages/**/*.(less)': (filenames) =>
    `npx stylelint ${filenames.join(' ')} --custom-syntax postcss-less`,
}
