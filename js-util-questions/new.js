const isComplexDataType = (obj) =>
  obj !== null && (typeof obj === "object" || typeof obj === "function");

const selfNew = function (fn, ...rest) {
  let instance = Object.create(fn.prototype);
  let res = fn.apply(instance, rest);
  return isComplexDataType(res) ? res : instance;
};

function Person(name, sex) {
  this.name = name;
  this.sex = sex;
}

let newPerson = new Person("Ram", "male");
let selfNewPerson = selfNew(Person, "Ram", "male");

console.log(newPerson);
console.log(selfNewPerson);
