"use strict";
// Chapter 7: Index Signatures & keyof Assertions - 2:38:29
const transaction1 = {
    Pizza: 99,
    Books: 399,
    Coffee: 25,
    Biscuits: 40,
};
console.log(transaction1.Pizza);
console.log(transaction1["Pizza"]);
let prop = "Pizza";
console.log(transaction1[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(transaction1));
// transaction1.Pizza = 199
console.log(transaction1["Dave"]); //undefine
const student = {
    name: "Ashish",
    GPA: 8.1,
    classes: [19, 18, 14, 17],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncom = {
    salary: 95000,
    bonus: 15000,
    sidehustle: 300000,
};
for (const revenu in monthlyIncom) {
    console.log(monthlyIncom[revenu]);
}
