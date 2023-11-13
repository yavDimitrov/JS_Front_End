function getCurrentDate() {
    console.log(new Date());
}

getCurrentDate();


function printStudentDetails(student) {
    console.log(student.lastName);
}

printStudentDetails({name:"Alex",
age:28,
grade:4,
lastName: "Kondov"
});
