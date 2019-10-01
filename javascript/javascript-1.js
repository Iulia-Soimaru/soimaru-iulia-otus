// sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n

const sum = (a) => {
  if(typeof a !== 'number') {
    throw('Argument must be a number');
  }
  
  return (b) => {
    if(!b) { return a };

    return sum(a + b);
  }; 
}

console.log(sum(1)(2)(3)(4)(5)());