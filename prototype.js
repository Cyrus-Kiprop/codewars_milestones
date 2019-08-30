// javascript prototypes
let animal = {};
animal.name = 'leo';
animal.energy = 10;

// add some methods to our objects
animal.eat = function(amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};

animal.sleep = function(length) {
  console.log(`${this.name}  is sleeping`);
  this.energy += length;
};

animal.playing = function(length) {
  console.log(`${this.name}  is playing`);
  this.energy -= length;
};

// wrapping the above code inside a function

function Animal(name, energy) {
  let animal = {};
  this.name = name;
  this.energy = energy;

  // add some methods to our objects
  animal.eat = function(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
  };

  animal.sleep = function(length) {
    console.log(`${this.name}  is sleeping`);
    this.energy += length;
  };

  animal.playing = function(length) {
    console.log(`${this.name}  is playing`);
    this.energy -= length;
  };
  return animal;
}
// invoking the function
{
  const snoop = Animal('snoop', 10);
  const leo = Animal('leo', 7);
}

// the method above is redundant
// /move the methods to another to another object and referece another methods
const AnimalMethods = {
  eat: function(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
  },
  // es6 way
  sleep(length) {
    console.log(`${this.name}  is sleeping`);
    this.energy += length;
  },

  playing: function(length) {
    console.log(`${this.name}  is playing`);
    this.energy -= length;
  },
  poop() {},
};

function Animal1(name, energy) {
  let animal = {};

  // referencing methods which are property names of the AnimalMethods
  animal.name = name;
  animal.energy = energy;
  animal.eat = AnimalMethods.eat;
  animal.sleep = AnimalMethods.sleep;
  animal.play = AnimalMethods.play;
  animal.poop = AnimalMethods.play; // this is redundant
  // add some methods to our objects

  return animal;
}
// a better function that delegates lookups to the AnimalMethod class

//  a better way
// understand the Object.create() method i javascript to delegate lookups from child objects to parent objects

const parent = {
  name: 'stacey',
  age: 37,
  heritage: 'msomali',
};

const child = Object.create(parent); // delegating lookups to the parent incase of a miss
child.name = 'Duke';
child.age = 24;
console.log(child.heritage); // the property name doesnt exist in the child object but a delegate lookup is done

// intro to prototypes
function ImAFunction() {}

console.log(typeof ImAFunction); // this is a function
console.log(ImAFunction.prototype); // Object

// a prototype is property that every function has that point to an oobject(inside it there is a constructor function)

// implementing the above series with the prototype object in javascript

function Animal2(name, energy) {
  let animal = Object.create(Animal2.prototype); //delegate this to the prototype

  animal.name = name;
  animal.energy = energy;

  // the methods are delegated
  // again the code is shorter

  return animal;
}

//adding the method to Animal2's prototype
Animal2.prototype.eat = function eat(amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};
Animal2.prototype.sleep = function eat(length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};
Animal2.prototype.play = function eat(length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};

// invoking the function
//sweet scoping
{
  const snoop = Animal2('snoop', 10);
  const leo = Animal2('leo', 7);
  snoop.sleep(4); //successfully delegated to the  fuctions prototype
}

// introducing a new keyword while invoking a

function AnimalWithNew(name, energy) {
  // const this = Object.create(AnimalWithNew);

  this.name = name;
  this.energy = energy;

  return this;
}

AnimalWithNew.prototype.eat = function eat(amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};
AnimalWithNew.prototype.sleep = function eat(length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};
AnimalWithNew.prototype.play = function eat(length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};

//using the new keyword
{
  const leo = new AnimalWithNew('leo', 67);
  const snoop = new AnimalWithNew('snoop', 56);
  leo.sleep(14); //incremented to 87
  console.log(leo.energy);
}

// the classical way
//arrow function dont have access to the this keyword
class Animals {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  // methods
  eat(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
  }

  sleep(length) {
    console.log(`${this.name}  is sleeping`);
    this.energy += length;
  }

  play(length) {
    console.log(`${this.name}  is playing`);
    this.energy -= length;
  }
}
{
  const leo = new Animals('leo', 67);
  const snoop = new Animals('snoop', 56);
  leo.sleep(14); //incremented to 87
  leo.play(23);
  leo.eat(12);
  console.log(leo.energy);
}

// the above is just but a syntactical sugar