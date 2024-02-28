// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

const [a, b, c] = [5, 6, 7];

const semiPerimeter = (a + b + c)/2;

const area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)).toFixed(2)

console.log(`Area of triangle is ${area} square units`);