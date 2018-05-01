var array = [-100, 1, 0 , -1, 12, -45, 67, 7, -2, 14]

var array1 = [];
for(var i = 6; i < 100000; i++){
	array1.push(i);
}
var array2 = [];
for(var i = -100000; i < 7; i++){
	array2.push(i);
}

//======================================================================Every

function biggerThan5(element){
	return (element > 5);
}
function everyElement(array, callback){
	var isTrue = true; 
	for(var i = 0; i< array.length; i++){
		if(callback(array[i])===false){
			isTrue = false;
			break;
		}
	}
	return isTrue;
}
console.log(array1);
console.time("everyElement");  
console.log(everyElement(array1, biggerThan5));
console.timeEnd("everyElement");


console.time("every"); 
console.log(array1.every(biggerThan5));
console.timeEnd("every");

//время примерно одинаковое 

//=======================================================================Some


function biggerThan5(element){
	return (element > 5);
}
function someElement(array, callback){
	var isTrue = false; 
	for(var i = 0; i< array.length; i++){
		if(callback(array[i]) === true){
			isTrue = true;
			break;
		}
	}
	return isTrue;
}

console.time("someElement");  
console.log(someElement(array2, biggerThan5));
console.timeEnd("someElement");


console.time("some"); 
console.log(array2.some(biggerThan5));
console.timeEnd("some");


// замеры времени очень сильно менялись с каждым обновлением страницы, 
// бывало так что someElement() выполнялся быстрее чем array.some()


//=============================================================ForEach

var consoleLog = function(element){
	console.log(element);
	
}

var forEachElement = function (array, callback){
	for(var i = 0; i < array.length; i++){
		callback(array[i]);
	}
}
console.time("forEachElement"); // для 100000 елементов 16 секунд
forEachElement(array, consoleLog);
console.timeEnd("forEachElement");

console.time("forEach"); //для 100000 елементов 12 секунд
array.forEach(consoleLog);
console.timeEnd("forEach");

// не понимаю как еще написать можно чтобы мой метод работал с такой же скоростью) 

//=================================================================Filter\


var test = function(element){
	return element%2===0;
}

var filterElement = function (array, callback){
	var newArray=[];
	for(var i = 0; i < array.length; i++){
		if(callback(array[i])){
			newArray.push(array[i]);
		}
	}
	return newArray;
}

console.time("filterElement"); 
console.log(filterElement(array, test));
console.timeEnd("filterElement");

console.time("filter");
console.log(array.filter(test));
console.timeEnd("filter");


//=================================================================Map



var action = function(element){
	return element+=2;
}

var mapElement = function (array, callback){
	var newArray=[];
	for(var i = 0; i < array.length; i++){
		newArray.push(callback(array[i]));
	}
	return newArray;
}

console.time("mapElement"); 
console.log(mapElement(array, action));
console.timeEnd("mapElement");

console.time("map");
console.log(array.map(action));
console.timeEnd("map");


//===================================================================Reduce


function sum(previousValue, currentValue){
	return currentValue + previousValue; 
}

function reduceElement(array, callback, defaultValue){
	var result;
	if(isFinite(defaultValue)){
		result = defaultValue;
	}
	else {
		result = null;
	}
	for(var i = 0; i < array.length; i++){
		result = callback(result, array[i]);
	}
	return result;
}

console.log(reduceElement(array, sum));
console.time("reduceElement");
console.log(reduceElement(array, sum, 10));
console.timeEnd("reduceElement");


console.time("reduce");
console.log(array.reduce(sum, 10));
console.timeEnd("reduce");


// в этом случае мой метод работает быстрее, похоже что я не вложил в него какой то особый функционал