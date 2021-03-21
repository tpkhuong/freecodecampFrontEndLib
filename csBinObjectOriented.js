/*

Working with Object Literals

Challenge 1

Create a function that has two parameters (name and age) and returns an object. Let's call this function makePerson. This function will:
Create an empty object
Add a name property to the newly created object with its value being the 'name' argument passed into the function
Add an age property to the newly created object with its value being the 'age' argument passed into the function
Return the object

const vicky = makePerson('Vicky', 24);

Uncomment these lines to test your work!
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

*/

// function makePerson(name, age) {
//   return {
//     name,
//     age,
//   };
// }

function makePerson(name, age) {
  var person = {
    name,
    age,
  };

  return person;
}

const vicky = makePerson("Vicky", 24);

/*

Using Object.create
Challenge 2
Inside personStore object, create a property greet where the value is a function that logs "hello".

*/

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'

var personStore = {
  greet() {
    return `hello`;
  },
};

/*

Challenge 3
Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

*/

// const sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

function personFromPersonStore(name, age) {
  var personObj = Object.create(personStore);
  personObj.name = name;
  personObj.age = age;

  return personObj;
}

/*

Challenge 4
Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".

*/

/*** CHALLENGE 4 ***/

// add code here

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

personStore.introduce = function () {
  //   console.log(this.name == "Sandra"); true
  //   console.log(this.age == 26); true
  return `Hi, my name is ${this.name}`;
};

/*

Using the NEW keyword
Challenge 5
Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.

// Uncomment this line to test your work! 
// const simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'

*/

function PersonConstructor() {
  this.greet = function () {
    return `Hello`;
  };
}

/*

Challenge 6
Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.

*/

// function personFromConstructor(name, age) {
// 	// add code here

// }

// const mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

function personFromConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.greet = () => {
    console.log(this);
    console.log(typeof this);
    return `Hello`;
  };
}
