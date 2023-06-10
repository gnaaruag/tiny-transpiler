// creatZe ast
module.exports = function parser(tokenList) {
    let i = 0;
    function walk() {
        let token = tokenList[i];
        
        if (token.type === 'number') {
            i++;
            let node = 
            {
                type: 'NumberLiteral',
                value: token.value
            };
 
            return node;
        }

        if (token.type === 'paren' && token.value === '(') {
            token = tokenList[++i];
            const expr = {
                type: 'CallExpression',
                name: token.value,
                params: []
            };
            token = tokenList[++i];
            while (token.value !== ')') {
                expr.params.push(walk());
                token = tokenList[i]
            }
            
            i++;
            return expr;
        }
        // throw new TypeError(`UnknownTokenError: '${token}'`);

    }
    let ast = {
        type: 'Program',
        body: [walk()]
    };

    return ast;
}