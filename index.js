function start(){
	console.log('Status: Active');
}
start();

/*
Callback functions and higher order functions
What is immutability
Key differences .map && .forEach
What are common use cases for each*/



//Closure examples
function calculatorContainer(n1,n2,operator){

	function add(n1,n2) {
		return n1 + n2;
	}
	function subtract(n1,n2){
		return n1 - n2;
	}
	function multiply(n1,n2){
		return n1 * n2;
	}
	function divide(n1,n2){
		return n1 / n2;
	}
	if (operator === '+'){
		return add(n1,n2);
	}else if(operator === '-'){
		return subtract(n1,n2);
	}else if(operator === '*'){
		return multiply(n1,n2);		
	}else if(operator === '/'){
		return divide(n1,n2);
	}else {
		return `Error: Invalid ()`;
	}
}

console.log(calculatorContainer(20,20,'*'));


function calculator(n1,n2,cb){
	return cb(n1,n2);
}

function add(n1,n2){
	return n1 + n2;
}

console.log(calculator(5,5,add));

