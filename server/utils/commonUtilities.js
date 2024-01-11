// duplicationChecker.js
const checkForDuplicates = (array) => {
    const stringArray = array.map((item) => String(item));
    const uniqueItems = new Set(stringArray);
    return uniqueItems.size !== array.length;
};

module.exports = { checkForDuplicates };
