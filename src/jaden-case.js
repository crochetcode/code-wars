/*
Your task is to convert strings to how they would be written by Jaden Smith.
When writing on Twitter, he is known for almost always capitalizing every word.
 */

export const jadenCase = str => str.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1);
}).join(' ');

String.prototype.toJadenCase = () => this.toString().split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1, word.length);
}).join(' ');