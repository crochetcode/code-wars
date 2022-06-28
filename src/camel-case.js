/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized
(known as Upper Camel Case, also often referred to as Pascal case).
*/

const prepareString = str => str.replaceAll('-', '_');
// const prepareString = str => str.replace(/-/g, '_');

const capitalizeWord = (word, i) => {
    if (i > 0){
        return word.charAt(0).toUpperCase() + word.slice(1)
    } else return word;
};

export const toCamelCase = str => {
    return prepareString(str)
    .split('_')
    .map((word, i) => capitalizeWord(word, i))
    .join('');
};