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
const array = [1,2,3,4,3,4,3,4];
const newArray = [];
//0
//
//else >> manually push ^
//or > 
for (let i = 0; i < array.length; i++){
	newArray.push(array[i]);
}
console.log('0: ')
const visual = "[            BLOCK             ]"
array.forEach(function(element,index,array){
	//console.log(`n: ${visual}`);
	//console.log('INDEX', index);
	//console.log(`n:${visual}`);
	//console.log('ELEMENT', element + 2);
	//console.log(`n:${visual}`);
	//console.log('ARRAY', array);
	//newArray.push(element);
});
//undefined return
//console.log(newArray);
//
//









//map() *something* to each index of an array
//returns a .new array



const profileData = [

  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tags: [
      '{{repeat(7)}}',
      '{{lorem(1, "words")}}'
    ],
    friends: [
      {
        id: 'JooberK1xd',
        name: '{{firstName()}} {{surname()}}'
      },
      {
	id: 'Calb12N3',
        name: '{{firstName()}} {{surname()}}'
      }
    ],
    greeting: function (tags) {
      return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
    },
    favoriteFruit: function (tags) {
      var fruits = ['apple', 'banana', 'strawberry'];
      return fruits[tags.integer(0, fruits.length - 1)];
    }
  }
];

const mappedArr = profileData.map((element) => {
	//must return
	return element.friends[1].id;
}); 

//return array
console.log(mappedArr);


