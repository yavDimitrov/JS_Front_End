function greet (getMessage, name) {
  return getMessage() + " " + name;
}

function sayGoodMorning() {
  return "Good morning";
}

const greeting = greet(sayGoodMorning, "Alex");

console.log(greeting);

