// Removes any properties except the ones specified from a JSON object.
//// Use Object.keys() method to loop over given JSON object and deleting keys that are not included in given array.
// Also if you give it a special key (childIndicator) it will search deeply inside it to apply function to inner objects too.
//
const cleanObj = (obj, keysToKeep = [], childIndicator) => {
  Object.keys(obj).forEach(key => {
    if (key === childIndicator) {
      cleanObj(obj[key], keysToKeep, childIndicator);
    } else if (!keysToKeep.includes(key)) {
      delete obj[key];
    }
  });
  return obj;
};
Examples
const testObj = { a: 1, b: 2, children: { a: 1, b: 2 } };
cleanObj(testObj, ['a'], 'children'); // { a: 1, children : { a: 1}}

///////////////////////////////////////////////////////////////////////////////

// capitalize
// Capitalizes the first letter of a string.
//// Use destructuring and toUpperCase() to capitalize first letter, ...rest
// to get array of characters after first letter and then Array.join('') to make it a string again.
// Omit the lowerRest parameter to keep the rest of the string intact, or set it to true to convert to lowercase.
//
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
Examples
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'

///////////////////////////////////////////////////////////////////////////////

// capitalizeEveryWord
// Capitalizes the first letter of every word in a string.
// Use replace() to match the first character of each word and toUpperCase() to capitalize it.

const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
// Examples
capitalizeEveryWord('hello world!'); // 'Hello World!'

///////////////////////////////////////////////////////////////////////////////

// sortCharactersInString
// Alphabetically sorts the characters in a string.
//// Split the string using split(''), Array.sort() utilizing localeCompare(), recombine using join('').
//
const sortCharactersInString = str =>
  str
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
Examples
sortCharactersInString('cabbage'); // 'aabbceg'

//////////////////////////////////////////////////////////////

// getURLParameters
// Returns an object containing the parameters of the current URL.
// Use match() with an appropriate regular expression to get all key-value pairs, Array.reduce() to map and combine them into a single object.
// Pass location.search as the argument to apply to the current url.

const getURLParameters = url =>
  url
    .match(/([^?=&]+)(=([^&]*))/g)
    .reduce((a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {});
Examples
getURLParameters('http://url.com/page?name=Adam&surname=Smith'); // {name: 'Adam', surname: 'Smith'}

////////////////////////////////////////////////////////

// countOccurrences
// Counts the occurrences of a value in an array.
// Use Array.reduce() to increment a counter each time you encounter the specific value inside the array.

const countOccurrences = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
Examples
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3

///////////////////////////////////////////

// deepFlatten
// Deep flattens an array.
// Use recursion. Use Array.concat() with an empty array ([]) and the spread operator (...) to flatten an array. Recursively flatten each element that is an array.

const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
Examples
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]


//////////////////////////////////////////////////////

// difference
// Returns the difference between two arrays.
//// Create a Set from b, then use Array.filter() on a to only keep values not contained in b.

const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
Examples
difference([1, 2, 3], [1, 2, 4]); // [3]

/////////////////////////////////////

// filterNonUnique
// Filters out the non-unique values in an array.
// Use Array.filter() for an array containing only the unique values.

const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
Examples
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1,3,5]

//////////////////////////////////////////

// intersection
// Returns a list of elements that exist in both arrays.
// Create a Set from b, then use Array.filter() on a to only keep values contained in b.

const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
Examples
intersection([1, 2, 3], [4, 3, 2]); // [2,3]

///////////////////////////////////////////

// currentURL
// Returns the current URL.
// Use window.location.href to get current URL.

const currentURL = () => window.location.href;
Examples
currentURL(); // 'https://google.com'

///////////////////////////////////
/*
При использовании обещаний вы можете использовать полифиллы в средах выполнения, в которых их еще нет.
Популярный выбор в таких случаях — bluebird. Эти библиотеки могут предоставлять гораздо большую функциональность, чем
нативные обещания — но даже в этих случаях следуйте спецификациям Promises/A+.
Вы можете спросить: как я могу использовать обещания, когда большинство библиотек предоставляют только коллбэк-интерфейсы?
Хорошо, это довольно-таки легко: единственная вещь, которую вы должны сделать — это обернуть коллбэк в функцию,
возвращающую обещание:
*/
function saveToTheDb(value) {
    return new Promise(function(resolve, reject) {
        db.values.insert(value, function(err, user) { // ошибка идет первой
            if (err) {
                return reject(err); // не забудьте вернуть здесь
            }
            resolve(user);
        })
    }
}

// Iteration throw the map
for (let [key, value] of map.entries()) {
    console.log(key, value);
}

//Promise example
var request = require('request');

return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
    if (body) {
        resolve(JSON.parse(body));
    } else {
        resolve({});
}
});
});


let urls = [
    '/api/commits',
    '/api/issues/opened',
    '/api/issues/assigned',
    '/api/issues/completed',
    '/api/issues/comments',
    '/api/pullrequests'
];

let promises = urls.map((url) => {
    return new Promise((resolve, reject) => {
        $.ajax({ url: url })
        .done((data) => {
        resolve(data);
});
});
});

Promise.all(promises)
    .then((results) => {
    // Do something with results of all our promises
});

//// Async / await
var request = require('request');

function getJSON(url) {
    return new Promise(function(resolve, reject) {
        request(url, function(error, response, body) {
            resolve(body);
        });
    });
}

async function main() {
    var data = await getJSON();
    console.log(data); // NOT undefined!
}

main();

//Sumbol allow you to create a new entitites or symbols in other namespaces for
//implementing you own logic
const refreshComponent = Symbol();
React.Component.prototype[refreshComponent] = () => {
    // do something
}

//Using ==> function for keeping leksical value of 'this'
//Alternatives]]]]]]]]]]

//---store this in variable
function Person(name) {
    this.name = name;
}

Person.prototype.prefixName = function (arr) {
    var that = this; // Store the context of this
    return arr.map(function (character) {
        return that.name + character;
    });
};
//-----put this inside function
function Person(name) {
    this.name = name;
}

Person.prototype.prefixName = function (arr) {
    return arr.map(function (character) {
        return this.name + character;
    }, this);
};
//----using bind-------
function Person(name) {
    this.name = name;
}

Person.prototype.prefixName = function (arr) {
    return arr.map(function (character) {
        return this.name + character;
    }.bind(this));
};
//-----using ==>  ----
function Person(name) {
    this.name = name;
}

Person.prototype.prefixName = function (arr) {
    return arr.map(character => this.name + character);
};
// /////////////
let text = ( `cat
dog
nickelodeon`
);

let today = new Date();
let text = `The time and date is ${today.toLocaleString()}`;

/////////////////////////////////
let [a, b, c, d] = [1, 2, 3, 4];

console.log(a); // 1
console.log(b); // 2

/////////////////////////////////////
let luke = { occupation: 'jedi', father: 'anakin' };
let {occupation, father} = luke;

console.log(occupation); // 'jedi'
console.log(father); // 'anakin'

//  Export
function sumTwo(a, b) {
    return a + b;
}

function sumThree(a, b, c) {
    return a + b + c;
}
let api = {
    sumTwo,
    sumThree
};
export default api;
/* Which is the same as
 * export { api as default };
 */
//-----Import
import {
    sumTwo as addTwoNumbers,
    sumThree as sumThreeNumbers
} from 'math/addition';

import * as additionUtil from 'math/addition';
const { sumTwo, sumThree } = additionUtil;

//Arguments
function logArguments(...args) {
    for (let arg of args) {
        console.log(arg);
    }
}

// Max value of the array
//   ES5
Math.max.apply(null, [-1, 100, 9001, -32]); // 9001
//   ES6
Math.max(...[-1, 100, 9001, -32]); // 9001

let cities = ['San Francisco', 'Los Angeles'];
let places = ['Miami', ...cities, 'Chicago']; // ['Miami', 'San Francisco', 'Los Angeles', 'Chicago']

///////////  Clases   //////////////////
function Person(name, age, gender) {
    this.name   = name;
    this.age    = age;
    this.gender = gender;
}

Person.prototype.incrementAge = function () {
    return this.age += 1;
};

function Personal(name, age, gender, occupation, hobby) {
    Person.call(this, name, age, gender);
    this.occupation = occupation;
    this.hobby = hobby;
}

Personal.prototype = Object.create(Person.prototype);
Personal.prototype.constructor = Personal;
Personal.prototype.incrementAge = function () {
    Person.prototype.incrementAge.call(this);
    this.age += 20;
    console.log(this.age);
};
/////////ES6|||||||||||||
class Person {
    constructor(name, age, gender) {
        this.name   = name;
        this.age    = age;
        this.gender = gender;
    }

    incrementAge() {
        this.age += 1;
    }
}

class Personal extends Person {
    constructor(name, age, gender, occupation, hobby) {
        super(name, age, gender);
        this.occupation = occupation;
        this.hobby = hobby;
    }

    incrementAge() {
        super.incrementAge();
        this.age += 20;
        console.log(this.age);
    }
}
  //Promise
  function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
  
  //one more
  var Progress = function(){
      	var elem = this.element = document.createElement("DIV");
      	elem.className = "waitingAnimation";
};

Progress.prototype = {
      	showUntilRequestsAreFinished: function(promise){
                	var progressElement = this.element;
                	document.body.appendChild(progressElement);

                	promise.then(function(){
                          	document.body.removeChild(progressElement);
                	}, function(){
                          	document.body.removeChild(progressElement);
                	})
      	};
};

var onError = function(){
      	alert("error");
};

var promiseForAllChainOfRequests = connection.request({
      	entity: "pie",
      	type: "apple"
}).then(function getIngredients(pie){
      	//success, we have data about pie, and we will return only its ingredients
      	return pie.ingredients;
}, onError).then(function requestShops(ingredients){
      	//эта функция будет вызвана сразу после предыдущей
      	return connection.request({
                	entity: "shop",
                	goods: ingredients
      	};
}, onError).then(function showAllOpenedShops(shops){
      	//эта функция будет вызвана, когда выполнится запрос для получения магазинов
}, onError);

progress = new Progress();
progress.showUntilRequestsAreFinished(promiseForAllChainOfRequests);
