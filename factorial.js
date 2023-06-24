const N = 5;

// 5! ---> 1 * 2 * 3 * 4 * 5

// Iteration

let i = 1, res = 1;
while (i <= 5) {

  res = res * i;
  i++;
}

// i = 1 ---> res = res(1) * i(1) = 1
// i = 2 ---> res = res(1) * i(2) = 2
// i = 3 ---> res = res(2) * i(3) = 6
// i = 4 ---> res = res(6) * i(4) = 24
// i = 5 ---> res = res(24) * i(5) = 120

console.log(res);