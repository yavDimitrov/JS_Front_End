const name = "Alex";

function outer(text) {
    console.log(text);

    inner();

    function inner() {
        const num = 123;
        console.log(name);
        console.log(text);
    }

  //  console.log(num);
}

outer("Some text")
