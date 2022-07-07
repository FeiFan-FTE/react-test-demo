/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const a = version1.split('.');
    const b = version2.split('.');
    if (a.length - b.length != 0)
        return 0;
    for (let i = 0, len = Math.max(a.length, b.length); i < len; i++) {
        return parseInt(a[i] || 0, 10) > parseInt(b[i] || 0, 10) ? 1 : -1
    }


};

console.log(compareVersion('1.1.0', '1.1.2'))
console.log(compareVersion('13.37', '1.2'))
console.log(compareVersion('1.1', '1.1.0'))