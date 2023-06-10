// regex tests
const LETTERS = /[a-z]/i;
const WHITESPACE = /\s/;
const NUMBERS = /\d/;

// lexing
module.exports = function tokenizer(input) {
    const tokenList = [];
    let i = 0;
    while (i < input.length) {
        let char = input[i];
        if (char === '(' || char === ')') {
            tokenList.push(
                {
                    type: 'paren',
                    value: char 
                }
            );
            i++;
            continue;
        }
        
        if (LETTERS.test(char)) {
            let value = '';
            while (LETTERS.test(char)) {
                value += char;
                char = input[++i];
            }
            tokenList.push(
                {
                    type: 'identifier',
                    value
                }
            );
            continue;
        }

        if (WHITESPACE.test(char)) {
            i++;
            continue;
        }

        if (NUMBERS.test(char)) {
            let value = '';
            while (NUMBERS.test(char)) {
                value += char;
                char = input[++i];
            }

            tokenList.push(
                {
                    type: 'number',
                    value
                }
            );
            continue;
        }





        throw new TypeError(`NameError: ${char}`);
    }
    return tokenList;
}

