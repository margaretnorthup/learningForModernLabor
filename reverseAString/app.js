// Create a variable to store the string we want to reverse
var originalString = "margaret";
// Use split method to split string [m, a, r, g, a, r, e, t]
var splitString = originalString.split("");
// Use reverse method to reverse the new created array
var reverseArray = splitString.reverse();
// Use the join method to join all elements of the array into a string
var joinArray = reverseArray.join("");
// Display result to the console
console.log(joinArray);