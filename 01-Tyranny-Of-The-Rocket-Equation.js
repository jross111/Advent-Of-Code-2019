const readline = require("readline");
const fs = require("fs");


// Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.



function Rocket(input) {
  return Math.floor(input / 3 - 2);
}

function AllData(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum = Rocket(element) + sum;
  }
  return sum;
}

let arr1 = [12, 14, 40];
// console.log(AllData(DATA), 15);
console.log(Rocket(12), 2);
console.log(Rocket(14), 2);
console.log(Rocket(40), 654);
console.log(Rocket(100756), 33583);

const DATA = [
  54296,
  106942,
  137389,
  116551,
  129293,
  60967,
  142448,
  101720,
  64463,
  142264,
  68673,
  144661,
  110426,
  59099,
  63711,
  120365,
  125233,
  126793,
  61990,
  122059,
  86768,
  134293,
  114985,
  61280,
  75325,
  103102,
  116332,
  112075,
  114895,
  98816,
  59389,
  124402,
  74995,
  135512,
  115619,
  59680,
  61421,
  141160,
  148880,
  70010,
  119379,
  92155,
  126698,
  138653,
  149004,
  142730,
  68658,
  73811,
  87064,
  62684,
  93335,
  140475,
  143377,
  98445,
  117960,
  80237,
  132483,
  108319,
  104154,
  99383,
  104685,
  114888,
  73376,
  58590,
  132759,
  114399,
  77796,
  119228,
  136282,
  84789,
  66511,
  51939,
  142313,
  117305,
  139543,
  92054,
  64606,
  139795,
  109051,
  97040,
  91850,
  107391,
  60200,
  75812,
  74898,
  64884,
  115210,
  85055,
  92256,
  67470,
  90286,
  129142,
  109235,
  117194,
  104028,
  127482,
  68502,
  92440,
  50369,
  84878,
];


console.log(AllData(DATA));


function part2(){
    return fs.readFileSync("./input-01.txt", 'utf-8').split(require('os').EOL)
        .reduce((acc, mass) => {
            do {
                mass = Rocket(mass);

                if(mass > 0) {
                acc += mass;
                }
            } while(mass >= 0);
            return acc;
        }, 0);
  
}
console.log(part2())