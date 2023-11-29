function isDate(input) {
  if (Object.prototype.toString.call(input) === "[object Date]") {
    // Check if it's already a Date object
    return !isNaN(input.getTime());
  } else if (typeof input === "string" || typeof input === "number") {
    // Try to parse the input into a Date object
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  } else {
    // If it's neither a Date object nor a string/number, return false
    return false;
  }
}

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
