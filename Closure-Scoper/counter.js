//1. Write a function that creates a counter using closures. It should hava methods to increment, decrement and reset the counter.
//2. Extend the counter to maintain a history of values and allow retrival of the last n values.

// Function to create a counter using closures
function createCounter() {
    let count = 0;
    const history = [];

    return {
        increment: function() {
            count++;
            history.push(count);
            return count;
        },
        decrement: function() {
            count--;
            history.push(count);
            return count;
        },
        reset: function() {
            count = 0;
            history.push(count);
            return count;
        },
        getCount: function() {
            return count;
        },
        getHistory: function(n) {
            return history.slice(-n);
        }
    };
}

// Example usage
const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset());     // 0

// Retrieve the last 3 values from history
console.log(counter.getHistory(3)); // [1, 2, 0]
