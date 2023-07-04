const domains = ["example.com", "softuni.com", "alexa.bg"];

const filterDomains = domains.filter(function (domain) {
    return domain.includes(".com");
});

console.log(filterDomains);