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

/*

Challenge 7
Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".

// mike.introduce(); // -> Logs 'Hi, my name is Mike'
*/

personFromConstructor.prototype.introduce = function () {
  return `Hi, my name is ${this.name}`;
};

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*

Challenge 8
Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. 
ersonClass should also have a method called greet that logs the string 'hello'.

*/

// /********* Uncomment this line to test your work! *********/
// george.greet(); // -> Logs 'hello'

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello`;
  }
}

const george = new PersonClass();

/*

Challenge 9
Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method,
DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.

*/

/*** CHALLENGE 9 ***/

// add code here

// /********* Uncomment these lines to test your work! *********/
// const thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

class DeveloperClass extends PersonClass {
  constructor(name, age) {
    super(name, age);
  }
  introduce() {
    return `Hello World, my name is ${this.name}. I am ${this.age} year old`;
  }
}

/***** subclassing *****/

// Challenge 10
// Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually.

var adminFunctionStore = {
  sayBye() {
    return `${this.name} says goodbye for now. I am an ${this.type}`;
  },
};

var userFunctionStore = {
  greet() {
    return `${this.name} says Hello.`;
  },
  introduce() {
    return `Hi my name is ${this.name}. My profession is ${this.profession}`;
  },
};

Object.setPrototypeOf(adminFunctionStore, userFunctionStore);

adminFunctionStore.greet();
adminFunctionStore.introduce();

// Challenge 11
// Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class,
// but without copying each data field individually.

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  user.profession = "Chef";
  return user;
}

function adminFactory(name, score) {
  let newAdminUser = userFactory(name, score);
  Object.setPrototypeOf(newAdminUser, adminFunctionStore);
  return newAdminUser;
}

var marvelChar = adminFactory("Hulk", 21);

// Challenge 12
// Then make sure the value of the 'type' field for adminFactory objects is 'Admin' instead of 'User'.

function adminFactory(name, score) {
  let newAdminUser = userFactory(name, score);
  Object.setPrototypeOf(newAdminUser, adminFunctionStore);
  newAdminUser.type = "Admin";
  return newAdminUser;
}

// Challenge 13
// Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over.

function adminFactory(name, score) {
  let newAdminUser = userFactory(name, score);
  Object.setPrototypeOf(newAdminUser, adminFunctionStore); //obj created by adminFactory funct will have access to adminFunctionMethods when we use Object.setPrototypeOf
  return newAdminUser;
}

// Challenge 14
// Created a method called sharePublicMessage that logs 'Welcome users!' and will be available to adminFactory objects,
// but not userFactory objects.Do not add this method directly in the adminFactory function.

adminFunctionStore.sharePublicMessage = function () {
  return `${this.name} says Welcome all!`;
};

/***** subclassing *****/

/***** extension: Mixins *****/

// Mixins are a tool in object-oriented programming that allows objects to be given methods and properties beyond those provided by their inheritance.
// For this challenge, complete the missing code, giving all of the robotMixin properties to robotFido.
// Do this in a single line of code, without adding the properties individually.

class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log("Woof!");
  }
}

const robotMixin = {
  skin: "metal",
  speak: function () {
    console.log(`I have ${this.legs} legs and am made of ${this.skin}`);
  },
};

let robotFido = new Dog();

/***** extension: Mixins *****/
