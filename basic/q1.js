/***********************************QUESTION ***********************************/
// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const today = new Date();

console.log(`Today is : ${days[today.getDay()]}`);

const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

const isAM = hours < 12;

console.log(`Current time is: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${isAM ? 'AM' : 'PM'}`);
