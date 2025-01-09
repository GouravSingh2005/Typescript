"use strict";
// Creating a user object
let currentUser = {
    name: 'Gourav Singh',
    age: 20,
    address: {
        pincode: 184152,
        village: "Dhanna"
    }
};
// Function to use this user field
function isLegal(user) {
    if (user.age >= 18) {
        console.log("true"); // Log before returning
        return true;
    }
    else {
        console.log("false"); // Log before returning
        return false;
    }
}
// Example usage
console.log(isLegal(currentUser)); // Output: true
