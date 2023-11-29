function isDate(input) {
  // Check if the input is a string
  if (typeof input === 'string') {
    // Try to convert the string back to a Date object
    const date = new Date(input);
    // Check if the conversion was successful
    return !isNaN(date.getTime());
	 return true;
  }

  // If the input is not a string, check if it's a Date object
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  // If the input is neither a string nor a Date object, return false
  return false;
}
// Do not change the code below.
 const input = prompt("Enter Date.");
 alert(isDate(input));
