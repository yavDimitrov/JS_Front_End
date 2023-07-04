const activeUsers = ["John", "Kim", "Alex"];

const activeUserGreetings = activeUsers.map(function (user) {
    return `Hi, ${user.toUpperCase()}!`;
});

console.log(activeUserGreetings);