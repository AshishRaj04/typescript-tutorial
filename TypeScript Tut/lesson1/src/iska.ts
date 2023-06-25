// Chapter 7: Index Signatures & keyof Assertions - 2:38:29

//////////////////////////////////////////////////////////////////////////

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Coffee: number;
}

const transaction1: TransactionObj = {
  Pizza: 99,
  Books: 399,
  Coffee: 25,
  Biscuits: 40,
};

console.log(transaction1.Pizza);
console.log(transaction1["Pizza"]);

let prop: string = "Pizza";
console.log(transaction1[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(transaction1));

// transaction1.Pizza = 199

console.log(transaction1["Dave"]); //undefine

//////////////////////////////////////////////////////////////////////////

//  Index Signatures USE IN THE SAME EXAMPLE

// interface Students {
//   [index: string]: number | string | number[] | undefined;
//   name: string;
//   GPA: number;
//   classes?: number[];
// }

// const student: Students = {
//   name: "Ashish",
//   GPA: 8.1,
//   classes: [19, 18, 14, 17],
// };

// // console.log(student.test);

// for (const key in student) {
//   console.log(`${key}: ${student[key]}`);
// }

//////////////////////////////////////////////////////////////////////////

// keyof Assertions USE IN THE SAME EXAMPLE

interface Students {
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Students = {
  name: "Ashish",
  GPA: 8.1,
  classes: [19, 18, 14, 17],
};

// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Students]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof Students]);
});

const logStudentKey = (student: Students, key: keyof Students): void => {
  console.log(`Student ${key} : ${student[key]}`);
};

logStudentKey(student, "GPA");

//////////////////////////////////////////////////////////////////////////

// Index Signatures in types not interfaces as before

// only Aliases types - index signature in interfaces
// interface Incomes {
//   [key:string]: number;
// }

type Stream = "salary" | "bonus" | "sidehustle"; //rewind - literal type

// only Literal Types - index signature in types but uses keyof
type Incomes = Record<Stream, number | string>;

const monthlyIncom: Incomes = {
  salary: 95000,
  bonus: 15000,
  sidehustle: 300000,
};

for (const revenu in monthlyIncom) {
  console.log(monthlyIncom[revenu as keyof Incomes]);
}
