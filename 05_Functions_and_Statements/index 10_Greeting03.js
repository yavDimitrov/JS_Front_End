function greet (getMessage, name) {
  return getMessage() + " " + name;
}

function getGreetingBasedOnHour() {

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

const greeting = greet(getGreetingBasedOnHour, "Alex");

console.log(greeting);

