/*

Challenge 1
Let's start by reviewing asynchronous functions! Using setTimeout, print the string 'Hello!' after 1000ms.

*/

function waitToPrint(strInput, delay) {
  setTimeout(function sayHi() {
    console.log(strInput);
  }, delay);
}

waitToPrint("Hello", 1000);

/*

Challenge 2
Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using setTimeout.
Print the contents of the promise after it has been resolved by passing console.log to .then

*/

function makePromise(strInput, delay) {
  return new Promise(function newPromise(resolve, reject) {
    setTimeout(function waitForPromise() {
      resolve(strInput);
    }, delay);
  });
}

var ourPromise = makePromise("hello", 1000);

ourPromise.then((data) => {
  console.log(data);
});

/*

Challenge 3
Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout.
Print the contents of the promise after it has been rejected by passing console.log to .catch

*/

function rejectPromise(strInput) {
  return new Promise(function makePromise(resolve, reject) {
    reject(strInput);
  });
}

var rejectPromise = rejectPromise("Rejected!");

rejectPromise.catch((error) => {
  console.log(error);
});

/*

Challenge 4
Promises are asynchronous and we're now going to prove that they indeed are! Create a promise and have it resolve with the value of "Promise has been resolved!"
Then uncomment the code at bottom of Challenge 4. What order do we expect "Promise has been resolved!" and "I'm not the promise!" to print? Why?

// Uncomment the lines below when ready
// promise.then(() => console.log('Promise has been resolved!'));
// console.log("I'm not the promise!");

"I'm not the promise!" will print first. Promises and other async function will be added to either the microtask queue or the callback queue. these will only run when the callstack
and the execution context is empty.
*/

function makePromise(strInput) {
  return Promise.resolve(strInput);
}

var ourPromise = makePromise("Promise has been resolved!");

ourPromise.then((data) => console.log(data));

/*

Challenge 5
Write a function delay that returns a promise. And that promise should return a setTimeout that calls resolve after 1000ms

*/

function delay(delay, strInput) {
  return new Promise(function makePromise(resolve, reject) {
    setTimeout(function waitForIt() {
      resolve(strInput);
    }, delay);
  });
}

// function delay(delay, strInput) {
//   setTimeout(function waitForIt() {
//     return Promise.resolve(strInput);
//   }, delay);
// }

var ourDelayedPromise = delay(1000, "This Promise will resolve later");

delay(1000, "This Promise will resolve later").then((data) =>
  console.log(data)
);

ourDelayedPromise.then((data) => console.log(data));

/*

Challenge 6
This challenge we'll chain promises together using ".then" Create two variables: firstPromise and secondPromise Set secondPromise to be a promise that resolves to "Second!"
Set firstPromise to be a promise that resolves to secondPromise Call the firstPromise with a ".then",
which will return the secondPromise> promise. Then print the contents of the promise after it has been resolved by passing console.log to .then

*/

var secondPromise = new Promise(function makePromise(resolve, reject) {
  resolve("Second");
});

var firstPromise = secondPromise.then((data) => {
  return new Promise(function anotherPromise(resolve, reject) {
    resolve(data);
  });
});

var firstPromise = secondPromise.then((data) => {
  // return new Promise(function anotherPromise(resolve, reject) {
  //     resolve(data);
  // });

  return Promise.resolve(data);
});

firstPromise.then((data) => console.log(data));

/*

Challenge 7
We have a API that gets data from a database, it takes an index parameter and returns a promise Your challenge is to use Promise.all to make 3 API calls and return all the data when the calls are complete

*/

const fakePeople = [
  { name: "Rudolph", hasPets: false, currentTemp: 98.6 },
  { name: "Zebulon", hasPets: true, currentTemp: 22.6 },
  { name: "Harold", hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {}
