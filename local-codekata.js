// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin, // if js wants read anything
  // local node js run --> output is must
  output: process.stdout // if js wants to write anything
});

const userInput = [];

inp.on("line", function Sample(data) {
  userInput.push(data);
});


// closing an interface we need use ctrl + c
inp.on("close", function Sample2() {

  // taking inputs A & N

  // line 1 string
  const inpLine1 = userInput[0];

  // split and taking values
  const arr = inpLine1.split(' ');

  // variables A, N
  const A = Number(arr[0]);
  const N = Number(arr[1]);

  let i = 0;
  while (i < N) {

    console.log(A);

    i = i + 1;
  }

});