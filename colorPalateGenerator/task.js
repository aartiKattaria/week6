// Define a custom filter function
function customFilter(array, callback) {
    var newArray = []; // Create a new array to store the filtered values
    for (var i = 0; i < array.length; i++) {
        // Call the callback function for each element
        // If the callback returns true, push the element to the new array
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray; // Return the new array containing filtered values
}

// Example usage:
var numbers = [1, 2, 3, 4, 5];

// Using the custom filter function
var evenNumbers = customFilter(numbers, function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

Array.prototype.customFilter = customFilter;