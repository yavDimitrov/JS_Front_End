function greet (getMessage, name) {
  return getMessage() + " " + name;
}

function sayGoodMorning() {
  return "Good morning";
}

const greeting = greet(() => "Good morning", "Alex");

console.log(greeting);

