function getKey(word) {
    return word.split('').sort().toString().replace(/,/g ,'');
}

module.exports = {
    getKey: getKey
};
