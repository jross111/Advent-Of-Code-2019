const readline = require("readline");
const fs = require("fs");

// const HALT = 99;
// const ADD = 1;
// const MULTIPLY = 2;

// function initProgram() {
//   let program = fs.readFileSync("./input-02.txt", "utf-8").split(",");
//   //let program = fs.readFileSync("./day-02/test.txt", 'utf-8').split(',');
//   // program[1] = noun;
//   // program[2] = verb;
//   console.log(program);
//   return program;
// }

// console.log(initProgram().length);

// //after process is complete
// function incrementIndex(index) {
//   return (index += 4);
// }

// // start, and after increment
// function getOpcode(program, index) {
//   return parseInt(program[index]);
// }

// function getFirstValue(program, index) {
//   return parseInt(program[program[index]]);
// }

// function getSecondValue(program, index) {
//     return parseInt(program[program[index + 1]])
// }

// function getPosition(program, index) {
//     return parseInt(program[program[index + 2]])
// }

// function part1() {
//     program = initProgram();

//     let index = 0;
//     let opcode = getOpcode(program, index);
//     let firstValue = getFirstValue(program, index);
//     let secondValue = getSecondValue(program, index);
//     let newPosition = getPosition(program, index);

//     while(opcode !== HALT) {

//         if(opcode === ADD) {
//             program[newPosition] = firstValue + secondValue;
//         } else if( opcode === MULTIPLY) {
//             program[newPosition] = firstValue * secondValue;
//         } else {
//             console.error("oopsy")
//             break;
//         }

//         index = incrementIndex(index);
//         opcode = getOpcode(program, index);
//         firstValue = getFirstValue(program, index);
//         secondValue = getSecondValue(program, index);
//         newPosition = getPosition(program, index);

   
//     }
 
//     return program[0];


// }

// console.log(part1())

const HALT = 99;
const ADD = 1;
const MULTIPLY = 2;

function initProgram() {
  let program = fs.readFileSync("./input-02.txt", 'utf-8').split(',');
  //let program = fs.readFileSync("./day-02/test.txt", 'utf-8').split(',');
//   program[1] = noun;
//   program[2] = verb;
  return program;
}

function incrementIndex(index) {
  return index += 4;
}

function getOpcode(program, index) {
  return parseInt(program[index]);
}

function getValueOne(program, index) {
  return parseInt(program[program[index + 1]]);
}

function getValueTwo(program, index) {
  return parseInt(program[program[index + 2]]);
}

function getPosition(program, index) {
  return parseInt(program[index + 3]);
}

function part1() {
  
  program = initProgram();

  let index = 0;
  let opcode = getOpcode(program, index);
  let valueOne = getValueOne(program, index);
  let valueTwo = getValueTwo(program, index);
  let position = getPosition(program, index);

  while(opcode !== HALT) {

    if(opcode === ADD) {
      program[position] = valueOne + valueTwo;
    } else if( opcode === MULTIPLY) {
      program[position] = valueOne * valueTwo;
    } else {
      console.error("opcode error")
      break;
    }

    index = incrementIndex(index);
    opcode = getOpcode(program, index);
    valueOne = getValueOne(program, index);
    valueTwo = getValueTwo(program, index);
    position = getPosition(program, index);
  }

  return program[0];
}


console.log(part1())











// let program = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
// let index = 1
// let x = program[program[index]]
//     y = program[program[index + 1]]
//     z = program[program[index + 2]]

// console.log(x)
// console.log(y)
// console.log(z)
// console.log(a)
// console.log(b)
