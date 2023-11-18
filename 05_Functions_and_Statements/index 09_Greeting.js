function createGreeting(greetingText) {
  function greet(name) {
    return greetingText + " " + name;
  }

  return greet;
}

const morningGreeting = createGreeting("Good morninig");
const eveningGreeting = createGreeting("Good evening");

console.log(eveningGreeting("Alex"));