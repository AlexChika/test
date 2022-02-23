"use strict";
// 1 using the split method on strings
let myArray = [
  " abnm sjklsd sjkls break sjkl shjkl shjkls break csbnmcs jhsk shkjc break come here",
];
let newArray = myArray[0].split("break").map((mapped) => {
  return mapped;
});
// console.log(newArray);
//
//
// 2 Joining the unique items of two arrays
const a = [1, 2, 3, 4, 5, 6];
const b = [9, 1, 2, 3, 4, 7, 8];
// method 1
const c = [...new Set(a.concat(b))];
// method 2
function uniqValues(a, b) {
  const d = [...a];
  b.forEach((x) => {
    if (!a.includes(x)) {
      d.push(x);
    }
  });
  return d.sort();
}
// console.log(uniqValues(a, b));
//
//
// 3 difference array... getting the difference between two arrays .
const x = [2];
const y = [1, 2, 2];
function arraydiff(x, y) {
  function diff() {
    y.forEach((a) => {
      if (x.includes(a)) {
        x.splice(x.indexOf(a), 1);
      }
    });
  }
  diff();
  y.forEach((a) => {
    if (x.includes(a)) {
      diff();
    }
  });
  return x;
}
// console.log(arraydiff(x, y));

// method 2
function array_diff(a, b) {
  return a.filter((v) => !b.includes(v));
}
// console.log(array_diff(x, y));

//
//
// 4 finds the next integral perfect square after the one passed as a parameter
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return sq % Math.sqrt(sq) === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}
// console.log(findNextSquare(4));

//
//
// 5 Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// const s1 = [1, 4, 5, 2];
// const s2 = [8, 1, 3];
const s1 = "xyaabbbccccdefww";
const s2 = "xxxxyyyyabklmopq";
// longest(a, b) -> "abcdefklmopqwxy"
0.3 /
  // a = "abcdefghijklmnopqrstuvwxyz"
  // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
  function longest(s1, s2) {
    return [...s1, ...s2]
      .sort()
      .reduce((prev, curr) => {
        if (!prev.includes(curr)) {
          prev.push(curr);
        }
        return prev;
      }, [])
      .join("");
  };
// console.log(longest(s1, s2));

// method 2
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}
// console.log(longest(s1, s2));

//
//
// 6 You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
function positiveSum(arr) {
  let array = 0;
  for (i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) === 1) {
      array += arr[i];
    }
  }
  return array;
}
// console.log(positiveSum([1, 3, 4, 5, -7, -2]));

// method 2
function positiveSum(a) {
  let val = 0;
  a.forEach((n) => (Math.sign(n) === 1 ? (val += n) : null));
  return val;
}
// console.log(positiveSum([1, 3, 4, 5, -7, -2, 5]));

//
//
// 7 Write a function called repeatStr which repeats the given string string exactly n times.
function repeatStr(n, s) {
  let str = "";
  for (i = 0; i < n; i++) {
    str += s;
  }
  return str;
}
// method 2
function repeatStr(n, s) {
  return s.repeat(n);
}
// console.log(repeatStr(2, "#"));

//
//
// 8 We need a function that can transform a number into a string.
// What ways of achieving this do you know?
function numberToString(num) {
  return JSON.stringify(num);
  // method 2 return num.toString();
}
// console.log(numberToString(999));

//
//
// 9 You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
function getMiddle(s) {
  //Code goes here!
  if (s.length % 2 === 0) {
    let len = s.length / 2;
    return s.slice(len - 1, len + 1);
  } else {
    let len = Math.floor(s.length / 2);
    return s.slice(len, len + 1);
  }
}
// console.log(getMiddle("honourss"));
//
//
// 10 Very simple, given an integer or a floating-point number, find its opposite.
// eg 1: -1
function opposite(number) {
  return number * -1;
}
//
// console.log(opposite(-5));
//
//
//11  Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
const binaryArrayToNumber = (arr) => {
  let sum = 0;
  arr.forEach((val, index) => {
    sum += val * Math.pow(2, arr.length - (index + 1));
  });
  return sum;
};
// method 2
const binaryArrayToNum = (arr) => parseInt(arr.join(""), 2);
// console.log(binaryArrayToNum([0, 0, 0, 0, 0, 1, 0, 1, 1]));

//
//
// 12 Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// time = 3 ----> litres = 1
const litres = (time) => Math.floor(time * 0.5);
// console.log(litres(1.4));

//
//
// 13 ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    return !/\D/.test(pin);
  } else {
    return false;
  }
}
// console.log(validatePIN("04007a"));
// method 2
const validate = (pin) => /^(\d{4}|\d{6})$/.test(pin);
// console.log(validate("04007a"));

//
//
//
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
// console.log(multiply([6, 7, 8], 3));
// method 2
function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
//
//
//
const myGuy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];
const newGuys = [];
function arrMult(arr, n) {
  let ourGuys = [];

  return ourGuys;
}
// console.log(arrMult(myGuy, 5));

myGuy.forEach((guy) => {
  newGuys.push(guy * 5);
});
// console.log(myGuy, newGuys);

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let val;
  contacts.filter((x) => {
    if (x.firstName === name) {
      if (x[prop]) {
        val = x[prop];
      } else {
        val = "No such property";
      }
    }
  });
  if (val === undefined) {
    val = "No such contact";
  }
  return val;
}
// console.log(lookUpProfile("Sherlock", "likes"));
//
//
// Returning random values between min and max values
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
// console.log(countup(5));

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return {};
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray[endNum] = endNum;

    return countArray;
  }
}
// console.log(rangeOfNumbers(5, 70)[6]);
// constructor functions
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.details = function () {
    console.log(`my name is ${this.name} and I am ${this.age} years old`);
  };
}
const Me = new Person("Alex", 25);
const lura = new Person("Lura", 35);
// console.log(Me, lura.details());
//Class syntax

class SpaceShuttle {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello = function () {
    console.log(`my name is ${this.name} and I am ${this.age} years old`);
  };
}
const zeus = new SpaceShuttle("Jupiter", 32);
const chika = new SpaceShuttle("Earth", 35);
// zeus.hello(), chika.hello();

//
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
// novel.writer = "chika";
// console.log(novel.writer);
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [...form.querySelectorAll("input")];
  const [inputYes, inputNo] = inputs;
  console.log(inputYes.checked);
  console.log(inputNo.checked);
});
const pTag = document.querySelector("p");
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("text")) {
    pTag.textContent = localStorage.getItem("text");
  }
});
pTag.addEventListener("keyup", (e) => {
  const text = e.target.textContent;
  e.target.textContent = text;
  localStorage.setItem("text", text);
});
