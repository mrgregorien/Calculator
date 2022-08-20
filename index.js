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



function calculator(n1,n2,cb){
	return cb(n1,n2);
}

function add(n1,n2){
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

//console.log(calculator(20,20,subtract));


function groceryStore(arr, cb){
	return cb(arr);
}

const deliArr = ['Subs','Sides','Salads'];


function deliDept(arr){
	return `The deli deparment has ${arr[0]}, ${arr[1]}, and ${arr[2]} in stock today!`
}

const bakeryArr = ['Subs','Sides','Salads'];

function bakeryDept(arr){
	return `The bakery deparment has ${arr[0]}, ${arr[1]}, and ${arr[2]}, in stock today!`
}

//db, deparment[input] = [output].Stock
//console.log(groceryStore(deliArr,deliDept));









//ADVANCED ARRAY METHODS
// .forEach()
const array = [1,2,3,4,5];

//0
console.log('0: ')
const visual = "[            BLOCK             ]"
array.forEach(function(element,index,array){
	console.log(`n: ${visual}`);
	console.log(index);
	console.log(`n:${visual}`);
	console.log(element);
	console.log(`n:${visual}`);
	console.log(array);
});


