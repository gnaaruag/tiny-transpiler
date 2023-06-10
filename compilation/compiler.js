const tokenizer = require('./tokenizer');
const parser = require('./parser');
const transformer = require('./transformer');
const generator = require('./generator')

// const transformer = require('./transformer');

module.exports = function compiler(input) {
    const tokens = tokenizer(input);

    const lispAST = parser(tokens);

    const jsAST = transformer(lispAST);

    const jsCode = generator(jsAST);

    return jsCode;
}

