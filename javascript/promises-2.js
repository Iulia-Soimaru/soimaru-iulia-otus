var fn1 = () => {
  console.log('fn1')
  return Promise.resolve(1)
}

var fn2 = () => new Promise(resolve => {
  console.log('fn2')
  setTimeout(() => {
    return resolve(2)
  }, 1000)
});

function promiseReduce(asyncFunctions, customReduce, initialValue) {
   return  asyncFunctions.forEach(async fn => {
      const result = await fn();
      return customReduce(result, initialValue);
    });
};

promiseReduce(
  [fn1, fn2],
  function (memo, value) {
    console.log('reduce')
    return memo * value
  },
  1
)
.then(console.log)