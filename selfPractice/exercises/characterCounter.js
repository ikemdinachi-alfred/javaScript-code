function countCharacters(inputString) {
    const charCount = {};

    for (const char of inputString) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

const inputStr = "semicolon.africa";
const result = countCharacters(inputStr);

console.log((result))

