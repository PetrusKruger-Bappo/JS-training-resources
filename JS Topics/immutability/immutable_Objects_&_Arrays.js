console.clear();

let person2 = {
    name: "Petrus",
    lastname: "Kruger",
    siblings: ["Josua", "Simeon"],
}

let person3 = {...person2};
console.log(`Note the use of the spread operator :\n\n`)
console.log(`person2:`,person2);
console.log(`person3:`,person3);

console.log(`\nNow we edit person3 only:\n\n`);

person3.name = "Ciska";
person3.lastname = "Nel";
person3.siblings = person3.siblings.push("Myburgh");
console.log(`person3:`, person3);

console.log(`\nBut compare person2:\n\n`);
console.log(`person2:`,person2);

console.log(`\nNow watch this:\n\n`);
person3.siblings= [...person2.siblings,"Gabriel"];

console.log(`person2:`,person2);
console.log(`person3:`,person3);

console.log(`\nThat's mutable and immutable actions in a nutshell.\n\n`);
