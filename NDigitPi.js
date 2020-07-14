let nDigitPi = digit => {
    let pi = Math.PI.toString()
    let dot = pi.indexOf('.')
    return (digit < 100 ? '3' + pi.slice(dot , dot + digit + 1) : 'Please enter a valid digit')
};

console.log(nDigitPi(10))

let eDigit = numLength => {
    const e = Math.E.toString()
    return (numLength < 17 ? e.slice(0, numLength + 2) : 'Please enter a length between zero and seventeen')
}

console.log(eDigit(18))

