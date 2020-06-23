let missingParenthesis = s => {
    let stack = []
    
    let open = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    let closed = {
        ')' : true,
        ']' : true,
        '}' : true
    }

    for (i in s) {
        let char = s[i]
        if (open[char]) {
            stack.push(char)
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) {
                return false
            }
        }
    }
    return stack.length === 0
}
console.log(missingParenthesis('[()]'))