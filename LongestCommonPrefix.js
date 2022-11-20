let longestCommonPrefix = function (strs) {
    let first = strs[0];
    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (first[i] === strs[j][i]) {
                continue;
            }
            return first.slice(0, i);
        }
    }
    return first;
};