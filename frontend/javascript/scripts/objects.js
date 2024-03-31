'use strict';

// Scope
/*
  What names we can access in the current place.

  1. Global scope
    a. variables declared inside normal js files (not modules)
      i. Script Scope -> global scope for const, let and class
    b. explicitly declared as a property of the global object (globalThis)
  2. Local scope === function scope
    a. Closure
  3. Block scope -> for const, let and class declarations
    a. Closure
  4. Module scope -> special files considered modules
    a. Closure
*/
const b = 'Paul';

function scopeFn(a) {
  {
    let b = 'test';
    console.log('Inside if: ', { a, b });
  }
  console.log('Inside: ', { a, b });
}

// Closure
function parent(a) {
  function child(b) {
    return a + b;
  }

  return child;
}

const func = parent(1);
const func2 = parent(5);
// console.log(func(2), func2(5));

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 2000);
// }

// console.log(i);
// scopeFn(1);
// console.log('Outside: ', { b });

// Objects

const user = {
  firstName: 'Paul',
  lastName: 'Negoescu',
  height: 1.85,
  weight: 85,
  get fullName() {
    return `FullName: ${this.firstName} ${this.lastName}`;
  },
  set fullName(val) {
    const parts = val.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
  calculateBmi() {
    return (this.weight / this.height ** 2).toFixed(2);
  },
  echoThis(a, b) {
    setTimeout(() => {
      console.log({ this: this, a, b });
    }, 100);
  },
};
// for (const key in user) {
//   console.log(key);
// }]

const o = {
  func: user.echoThis.bind('Paul', 5, 6),
  weight: 100,
  height: 1.7,
};

// const prop = 'height';
const func3 = user.echoThis;
console.log(o.func(7), user.echoThis());

// This
/*
  1. This is established at the moment of function invocation
    a. this is whatver is to the left of the dot
    b. this is whatever we want when using call() or apply()
  2. This is established at the time of function creation
    a. arrow functions take the value for this as if it was a variable in the current scope (lexical this)
    b. by using bind we can set this to whatever we want
  3. Constructor functions need to build their own this
*/

// Constructor Functions
function User(firstName, lastName, height, weight) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.height = height;
  this.weight = weight;
}

User.thisIsAStatic = 42;

User.prototype.calculateBmi = function () {
  return (this.weight / this.height ** 2).toFixed(2);
};

User.prototype.toString = function () {
  return this.firstName + ' ' + this.lastName;
};

const user2 = new User('Ion', 'Palade', 1.75, 70);
const user3 = new User('Andreea', 'Axinte', 1.65, 50);

console.log('' + user3);

class Admin extends User {
  #thisIsPrivate = 'Private value';
  obj = {
    prop: 4,
  };
  static instances = 0;
  // isAdmin = true;
  constructor(...args) {
    super(...args);
    Admin.instances++;
    this.isAdmin = true;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(val) {
    [this.firstName, this.lastName] = val.split(' ');
  }

  doAdminStuff() {
    console.log('Admin stuff');
  }

  toString() {
    return super.toString() + ' in admin!' + this.#thisIsPrivate;
  }
}

const admin = new Admin('Catalina', 'Popescu', 1.8, 80);
console.log(typeof Admin);
admin.doAdminStuff();

// user.fullName = 'George Maxim';
// console.log(user.fullName);
admin.fullName = 'Test Testington';
console.log(admin.firstName);

// Destructuring Assignment
const [, doi, ...patru] = [34, 56, 89, 100];
const {
  obj: { prop },
  fullName: fName,
  altceva = 'Paul',
} = admin;
console.log(patru);

function testDestructuring({ altceva = 40 }) {
  console.log('The weight is', altceva);
}

testDestructuring(admin);

function add(n1) {
  return function (n2) {
    return n1 + n2;
  };
}

console.log(add(1)(2));
