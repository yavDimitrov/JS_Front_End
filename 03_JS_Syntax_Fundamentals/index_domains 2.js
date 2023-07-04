const domains = ["example.com", "softuni.com", "alexa.com"];

const domainWithBGSuffix = domains.map(function (domain) {
    return domain.replace(".com", ".bg");
});

console.log(domainWithBGSuffix);