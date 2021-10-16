var findKthBit = function(n, k) {
    let binStr = '0'

    if (n === 1) {
        return binStr
    }

    while (n > 1) {
        binStr = createStr(binStr)
        n--
    }

    function createStr(str) {
        let revInvStr = revInv(str)
        
        return str + '1' + revInvStr
    }

    function revInv(string) {
        let newString = ''
        for (let index in string) {
            if (string[index] === '0') {
                newString = newString + '1'
            } else {
                newString = newString + '0'
            }
        }

        return newString.split('').reverse().join('')
    }

    return binStr[k-1]
};

console.log(findKthBit(2, 3))