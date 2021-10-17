let cache = {'1': '0'}

var findKthBit = function(n, k) {
    let binStr = '0'
    let key = n

    if (n in cache) {
        return cache[n][k-1]
    }

    for (var i = n - 1; i > 0; i--) {
        if (i in cache) {
            binStr = cache[i]
            while (n - i > 0) {
                binStr = createStr(binStr)
                n--
            }
            cache[key] = binStr
            return binStr[k-1]
        }
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
};

console.log(
    findKthBit(3, 1),
    findKthBit(4, 11),
    findKthBit(1, 1),
    findKthBit(2, 3)
    )