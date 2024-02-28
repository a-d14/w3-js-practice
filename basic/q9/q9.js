function countDays() {

    const result = document.getElementById('result');

    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25);

    if(today.getMonth() === 11 && today.getDate() > 25) {
        christmas.getFullYear() += 1;
    }

    const numberOfDays = Math.ceil((christmas - today)/(24*60*60*1000));

    if(numberOfDays === 0) {
        result.textContent = 'Today is christmas. Merry Christmas!';
    } else {
        result.textContent = `There are ${numberOfDays} days till christmas`;
    }

}