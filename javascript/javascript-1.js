// sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n

const sum = (a) => {
  if(typeof a !== 'number') {
    throw new Error('Argument must be a number');
  }
  
  return (b) => {
    if(typeof b !== 'number') { return a };

    return sum(a + b);
  }; 
}

console.log(sum(0)(1)(2)() === 3);
console.log(sum(1)() === 1);
console.log(sum(1)(2)() === 3);
console.log(sum(1)(2)(3)() === 6);
console.log(sum(1)(2)(3)(4)(5)() === 15);