const add = n => (n + 10);

const memoize = (fn)=>{
  const cache = {};
  return (...args)=>{
    console.log([...args]);
    let n = args[0];
    if (n in cache){
      console.log('Fetching from cahe');
      return cache[n];
    }else{
      console.log("calculating result");
      cache[n] = fn(n); // n is computed 
      return fn(n);
    }
  }
}

// function call

// creating the memoizing function of the add function;
const memoizeAdd = memoize(add);
console.log(memoizeAdd(4));
console.log(memoizeAdd(4,3,4,5));// this is fetched from cache


// memoization of recursive functions
// same memoize function from before
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log('Fetching from cache', n);
      return cache[n];
    }
    else {
      console.log('Calculating result', n);
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}
const factorial = memoize(
  (x) => {
    if (x === 0) {
      return 1;
    }
    else {
      return x * factorial(x - 1);
    }
  }
);
console.log(factorial(5)); // calculated
console.log(factorial(6)); // calculated for 6 and cached for 5
