let person = {
  name: "Mimi",
  age: 22,
  isStudent: false,
};

function greet(person) {
  return "Hello, my name is " + person.name;
}

if (person.isStudent) {
  console.log(person.name + " is a student");
} else {
  console.log(person.name + " is not a student");
}

console.log(person);
console.log([person.name]);
console.log(person.age);
console.log(person.isStudent);
console.log(greet(person));
