

// console.log("Hello World !");



//-----------------------------------01)Logical AND (&&) Operator and Logical OR (||) Opertator
/*
let a = true;
let b = false;
let c= true;

console.log(a && c);
console.log(a && b);
console.log(b && c);
console.log(a || b);
console.log(a || c);


function getName() {
	return 'Rahul Dodwe';
}

let r = true;
let d = false;
console.log(r && getName());
console.log(d && getName());
console.log(r || getName());
console.log(d || getName());
*/




//-------------------------------------02)Template Literals----------------------
/*
let firstName = "Rahul";
let lastName = "Dodwe";
let prefix = "Mr";
console.log(prefix + " " + firstName + " " + lastName)
// Using Template Literals
console.log(`${prefix} ${firstName} ${lastName}`);
*/






//-------------------------------------03)Ternary Operators----------------------
/*
let returnAge = true;
function ageInfo(age) {
	return `This person is ${age} years old.`;
}
function getCity(city) {
	return `This person is from ${city}.`;
}

// if(returnAge){
// 	console.log(ageInfo(23));
// }
// else {
// 	console.log(getCity("Delhi"));
// }

// condition ? statementforTrue : statementforFlase
	returnAge ? console.log(ageInfo(23)) : console.log(getCity("Delhi"));
*/





//------------------------------------04)Objects and Array Destructuring---------------------
										// ShortHand Property Names
/*
const id = 1;
const title = 'Product';
const rating = 5;

const obj = {   		// ShortHand Property Names
	id,
	title,
	rating,
}

// console.log(obj.id);

const objTwo = {
	productName : 'Product One',
	productDescription : 'Porduct Description'
}

// let productName = objTwo.productName;
// let productDescription = objTwo.productDescription;
const {productName, productDescription} = objTwo;       //Object Destructuring

console.log(productName, productDescription)

let arr = ['Ram', 'Krishna', 'Goutam'];
// let arrFirstElement = arr[0];
// let arrSecondElement = arr[1];

let [arrFirstElement, arrSecondElement, arrThirdElement, arrFourthElement] = arr;	//Array Destructuring

console.log(arrFirstElement, arrSecondElement, arrThirdElement, arrFourthElement);
*/








//------------------------------------05)Default Parameters---------------------
/*
function sum(numOne = 0, numTwo = 0) {
	return numOne + numTwo;
}
let result = sum(30, 40);
console.log(result);
*/







//------------------------------------06)Spread Operators, rest operators---------------------
/*
let arrOne = [1,2,3];
let arrTwo = [4,5,6];
console.log(...arrOne);
console.log(...arrOne,...arrTwo);
console.log(...arrOne,10,...arrTwo);   //Spread Operators

function something(a,b,c,...d){		//Rest Operators
	console.log(a,b,c,d);
	return `Hello`;
}

console.log(something(1,2,3,4,5,6,7));
*/





//------------------------------------07)Arrow functions and ES6 Methods--------------------

// function functionName() {		//Normal Function
// 	//
// }

const functionName = ()=> {		//Arrow Function
	//
}


//--------Method: Map------------
const personsArray = [
		{
			name : 'Bherva',
			age : 25,
			city : 'Kashi',
		},
		{
			name : 'Shiva',
			age : 45,
			city : 'Kelas',
		},
		{
			name : 'Rudra',
			age : 23,
			city : 'Rishikesh',
		},
		{
			name : 'Mahakal',
			age : 45,
			city : 'Ujjain',
		},
		{
			name : 'Mahadev',
			age : 45,
			city : 'Maheshvar',
		},

	];

//--Method: Map
let extractPersonsNames = personsArray.map((person, index) => {   //--Method: Map
	return `${person.name}-${person.city}`;
});
console.log(extractPersonsNames);


//--Method: Filter
let extractPoersonFromKelas = personsArray.filter((person, index) => {   //--Method: Filter
	return person.age === 45; 
});
console.log(extractPoersonFromKelas);


//--Method: Some
let checkSomeMethod = personsArray.some((person, index)=> {			//--Method: Some
	return person.age === 25;
});
console.log(checkSomeMethod);


//--Method: Every
let checkEveryMethod = personsArray.every((person, index)=> {			//--Method: Every
	return person.age === 25;

} );
console.log(checkEveryMethod);


//	Array find() Method
const arrayThree = [1,1,2,3,4,5,2];
let checkFindMethod = arrayThree.find((item, index)=> item === 2);
console.log(checkFindMethod, 'find');

// Array reduce() Method
let checkReduceMthod = arrayThree.reduce((acc, currenct, index,array)=> {
	
})
// Array includes() Method
// indexOf Method
// findIndex Method