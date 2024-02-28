// Write a JavaScript program to rotate the string 'w3resource' in the right direction. 
// This is done by periodically removing one letter from the string end and attaching it to the front.

// let originalString = 'w3resource';

// let currentString = originalString;

// let timesRun = 0;

// console.log(currentString);

function rotate() {
    const element = document.getElementById('text');

    let elementText = element.textContent;

    let timesRun = 0;

    let interval = setInterval(() => {
    
        if(timesRun === elementText.length - 1) clearInterval(interval);
        
        timesRun++;
    
        const endChar = elementText.charAt(elementText.length - 1);
        const remainingString = elementText.slice(0, -1);
        elementText = endChar + remainingString;
    
        element.textContent = elementText;
    
    }, 1000);
    
}

