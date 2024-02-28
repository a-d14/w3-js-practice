function checkLeapYear() {
    const input = document.getElementById('year');
    const inputYear = parseInt(input.value.trim());

    const result = document.getElementById('result');

    if(inputYear % 4 == 0) {
        if(inputYear % 100 == 0) {
            if(inputYear % 400 == 0) {
                result.textContent = 'It is a leap year';
            } else {
                result.textContent = 'It is not a leap year';
            }
        } else {
            result.textContent = 'It is a leap year';
        }
    } else {
        result.textContent = 'It is not a leap year';
    }
    
}