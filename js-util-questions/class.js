function Animal(name) {
  this.name = name;
}

Animal.staticFunc = function () {
  console.log("staticFunc");
};
Animal.prototype.sleep = function () {
  console.log("animal is sleeping");
};

function Dog(name, color) {
  Animal.call(this, name);
  this.color = color;
}

function inherit(subType, superType) {
  subType.prototype = Object.create(superType.prototype, {
    constructor: {
      enumerable: false,
      configurable: true,
      writable: true,
      value: subType,
    },
  });
  Object.setPrototypeOf(subType, superType);
}

inherit(Dog, Animal);

Dog.prototype.barking = function () {
  console.log("wang!");
};

let brownTeddy = new Dog("teddy", "brown");
Dog.staticFunc();
console.log(brownTeddy);
brownTeddy.sleep();
brownTeddy.barking();
