function start(){
	console.log('Status: Active');
}
start();

/*
Callback functions and higher order functions
What is immutability
Key differences .map && .forEach
What are common use cases for each*/


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


