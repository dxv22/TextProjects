var isAnagram = function(s, t) {
    let sorted = str => {
        let newStr = str.split("").sort().toString()
        return newStr
    }
    console.log(sorted(s), sorted(t))
    return (sorted(s) === sorted(t) ? true : false)
};

console.log(isAnagram("test", "yes"))
console.log(isAnagram("anagram", "nagaram"))