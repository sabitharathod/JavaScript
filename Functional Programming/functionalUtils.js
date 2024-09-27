//1. Implement a function that composes multiple functions together. Use it to apply a series of transformations to an input value.
//2. Create a curried function that takes a string returns a function to match it against a list of strings. 

// Function to compose multiple functions together
function compose(...functions) {
    return function (initialValue) {
        return functions.reduceRight((accumulator, currentFunction) => {
            return currentFunction(accumulator);
        }, initialValue);
    };
}

// Example transformations
const double = x => x * 2;
const increment = x => x + 1;
const square = x => x * x;

// Using compose to create a new function
const transform = compose(square, increment, double);

// Example usage
const result = transform(2); // ((2 * 2) + 1) ^ 2 = 25
console.log(result); // 25

// Curried function to match a string against a list of strings
function curriedMatch(matchString) {
    return function (stringList) {
        return stringList.filter(str => str === matchString);
    };
}

// Example usage
const matchHello = curriedMatch('Hello');
const results = matchHello(['Hello', 'World', 'Hello', 'JavaScript']);
console.log(results); // ['Hello', 'Hello']
