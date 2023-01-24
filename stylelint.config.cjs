'use strict';

module.exports = {
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  extends: ['stylelint-config-standard'],
  overrides: [
    // HTML
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-html/html'],
    },
    // Turn off rules conflict with prettier
    {
      files: ['**/*.{css,html}'],
      extends: ['stylelint-config-prettier'],
    },
  ],
};
