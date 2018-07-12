function createObj(op, n1, n2){
    this.op = op;
    this.n1 = n1;
    this.n2 = n2;
}

var args = new createObj('-', 9, 2);

function calculate(args){
	let result;
	if(args.op==="+"){
		result=args.n1+args.n2;
	}else if(args.op==="-"){
		result=args.n1-args.n2;
	}else{
		result="Not supported";
	}
	return result;
}

calculate(args);