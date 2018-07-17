function sum(...theArgs) {
	return theArgs.reduce((previous, current) => {
	  return previous + current;
	});
  }
console.log(sum(1, 2, 4, 5)); // result to 12
console.log(sum(5, 2, 7, 1, 6)); // result to 21