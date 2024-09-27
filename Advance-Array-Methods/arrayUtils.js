//1. Use reduce to implment your own version of map and filter
//2. Create a functon that takes an array of objects and group them by a specific property using reduce.

// Custom implementation of map using reduce
function customMap(array, callback) {
    return array.reduce((accumulator, currentValue, index) => {
        accumulator.push(callback(currentValue, index, array));
        return accumulator;
    }, []);
}

// Custom implementation of filter using reduce
function customFilter(array, callback) {
    return array.reduce((accumulator, currentValue, index) => {
        if (callback(currentValue, index, array)) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
}

// Function to group an array of objects by a specific property
function groupBy(array, property) {
    return array.reduce((accumulator, currentObject) => {
        const key = currentObject[property];
        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        accumulator[key].push(currentObject);
        return accumulator;
    }, {});
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const doubled = customMap(numbers, num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evens = customFilter(numbers, num => num % 2 === 0);
console.log(evens); // [2, 4]

const people = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Los Angeles' },
    { name: 'Charlie', age: 25, city: 'New York' },
    { name: 'David', age: 35, city: 'Los Angeles' },
    { name: 'Eve', age: 30, city: 'Chicago' }
];

const groupedByCity = groupBy(people, 'city');
console.log(groupedByCity);
/*
{
    "New York": [
        { name: 'Alice', age: 25, city: 'New York' },
        { name: 'Charlie', age: 25, city: 'New York' }
    ],
    "Los Angeles": [
        { name: 'Bob', age: 30, city: 'Los Angeles' },
        { name: 'David', age: 35, city: 'Los Angeles' }
    ],
    "Chicago": [
        { name: 'Eve', age: 30, city: 'Chicago' }
    ]
}
*/

