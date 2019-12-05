const readline = require("readline");
const fs = require("fs");

const HALT = 99;
const ADD = 1;
const MULTIPLY = 2;

function initProgram(noun, verb) {
  let program = fs.readFileSync("./input-02.txt", "utf-8").split(",");
    program[1] = noun;
    program[2] = verb;
    // console.log(noun, verb);
  return program;
}

function incrementIndex(index) {
  return (index += 4);
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

function part1(noun, verb) {
  program = initProgram(noun, verb);
  
  console.log(program)
  let index = 0;
  let opcode = getOpcode(program, index);
  let valueOne = getValueOne(program, index);
  let valueTwo = getValueTwo(program, index);
  let position = getPosition(program, index);

  while (opcode !== HALT) {
    if (opcode === ADD) {
      program[position] = valueOne + valueTwo;
    } else if (opcode === MULTIPLY) {
      program[position] = valueOne * valueTwo;
    } else {
      console.error("opcode error");
      break;
    }

    index = incrementIndex(index);
    opcode = getOpcode(program, index);
    valueOne = getValueOne(program, index);
    valueTwo = getValueTwo(program, index);
    position = getPosition(program, index);
  }
  console.log(program)
  return program[0];
}




function part2(output){
  for(let noun = 0; noun <= 99; noun++){
    for(let verb = 0; verb <= 99; verb++){
      if(part1(noun, verb) === output){
        return (100 * noun) + verb;
      }
    }
  }

  return "didn't work";

}

console.log(part2(19690720))




console.log(part1());



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
