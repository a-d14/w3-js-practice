// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const today = new Date();

const date = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

console.log(`${String(date).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}`);
console.log(`${String(date).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`);