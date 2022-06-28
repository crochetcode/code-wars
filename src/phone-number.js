/*
Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.
*/

export const createPhoneNumber = numbers => {
    const numbersString = numbers.join('');
    const firstSection = numbersString.slice(0, 3);
    const secondSection = numbersString.slice(3, 6);
    const thirdSection = numbersString.slice(6, 10);
    return `(${firstSection}) ${secondSection}-${thirdSection}`;
};

export const createPhoneNumberSolution = numbers => {
    let format = '(xxx) xxx-xxxx';

    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
};