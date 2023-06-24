console.log('Hello B49WEENG');

for (let i = 0; i < 10; i++) {
  console.log(i, 'Hello B49WEENG')
}


// parameterized function
function DrinkSomething(liquid) {
  console.log('Line 10, Drank some', liquid);
  return liquid;
}

console.log('Line 13', DrinkSomething('Juice')); // invoking or execution