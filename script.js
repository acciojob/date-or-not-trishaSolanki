function isDate(input) {
if (input instanceof Date) {
// Check if it's already a Date object
return !isNaN(input.getTime());
}

if (typeof input === 'string' || typeof input === 'number') {
// Try to parse the input into a Date object
	 
const parsedDate = new Date(input);
if (!isNaN(parsedDate.getTime())) {
    return true;
}

return false;
}
}

// Do not change the code below.
 const input = prompt("Enter Date.");
 alert(isDate(input));
