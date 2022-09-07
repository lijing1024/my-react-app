//新建 .stylelintrc.js 文件
function getBEMSelectorRegExp() {
    const WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';
    const element = `(?:__${WORD})?`;
    const modifier = `(?:--${WORD}){0,2}`;
    const attribute = '(?:\\[.+\\])?';
    return new RegExp(`^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?${WORD}${element}${modifier}${attribute}$`);
}

module.exports = {
    extends: ['stylelint-config-sass-guidelines', 'stylelint-config-prettier'],
    rules: {
        'selector-class-pattern': getBEMSelectorRegExp(),
        'max-nesting-depth': 6,
        'selector-max-compound-selectors': 20,
        'function-url-quotes': 'never',
        'color-named': 'always-where-possible',
    },
};