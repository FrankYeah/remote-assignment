var args = new Object();
args.op = '-';
args.n1 = 5;
args.n2 = 4;

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