const kelvin = 0;

const celsius = kelvin - 273;

let farenheit = celsius * (9/5) + 32;

farenheit = Math.floor(farenheit);
console.log(`The temperature is ${farenheit} degrees Farenheit.`);

const celsiuses = 120;
let newton = celsiuses * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`)
