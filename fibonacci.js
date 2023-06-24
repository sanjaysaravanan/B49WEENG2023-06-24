const N = 5; // harding the N value

// fibonacci is something which have by default two value
// p = 0, q = 1

// series which should have an end
// 0 1 1 2 3

let i = 0, p = 0, q = 1; // single line multiple declarations

let res = '';

while (i < N) {

  if (i === 0) {
    res = res + p + " ";
  } else if (i === 1) {
    res = res + q + " ";
  } else {
    // in Additon, p is first number, q is second number

    // one single additon, we need to added prev value with new result
    //
    const sum = p + q; // 2
    // new p should the q
    // new q should be sum
    p = q;
    q = sum;

    res = res + sum + " ";
  }

  i++;
}

console.log(res.trim());

// i = 0 --> p = 0, q = 1, res = 0 
// i = 1 --> p = 0, q = 1, res = 0 1  
// i = 2 --> p = 0, q = 1 -> sum = p + q => 1 -> p = 1, q = 1, res = 0 1 1
// i = 3 --> p = 1, q = 1 -> sum = p + q => 2 -> p = 1, q = 2, res = 0 1 1 2 
// i = 4 --> p = 1, q = 2 -> sum = p + q => 3 -> p = 2, q = 3, res = 0 1 1 2 3 

