let missingNumber = arr => {
    let arrMax = Math.max(...arr)
    for(let i = 0; i < arrMax; i++) {
        if (arr.indexOf(i) == -1) {
            return i
        }
    }
    return true
}

missingNumber([3,0,1])
missingNumber([1,2,0])