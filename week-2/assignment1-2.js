function max(...numbers){
	var sortedArgs = numbers.sort().reverse();
  return sortedArgs[0];


}
max(1, 2, 4, 5); // result to 5
max(5, 2, 7, 1, 6); // result to 7