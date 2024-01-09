// duplicationChecker.js
const checkForDuplicates = (array) => {
    const uniqueItems = new Set(array);
    return uniqueItems.size !== array.length;
};

module.exports = { checkForDuplicates };
