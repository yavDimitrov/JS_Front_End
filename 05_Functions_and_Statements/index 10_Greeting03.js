function greet (getMessage, name) {
  return getMessage() + " " + name;
}

function sayGoodMorning() {

  const currentHour = new Date().getHours();
  console.log(currentHour);

  if(currentHour >= 20) {
    return "Good evening";
  }

  if(currentHour >= 12) {
    return "Good afternoon"
  }

  
  return "Good morning";
}

const greeting = greet(sayGoodMorning, "Alex");

console.log(greeting);

