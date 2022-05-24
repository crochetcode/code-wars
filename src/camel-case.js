const prepareString = str => str.replaceAll('-', '_');
// const prepareString = str => str.replace(/-/g, '_');

export const toCamelCase = str => {
    return prepareString(str)
    .split('_')
    .map((word, i) => {
        if (i > 0){
            return word.charAt(0).toUpperCase() + word.slice(1)
        } else return word;
    })
    .join('');
};