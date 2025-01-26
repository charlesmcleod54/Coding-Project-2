// Task 1
let products = ['Helmets', 'Footballs', 'Cleats', 'Gloves', 'Mouthpieces'];
products.push('Pads');
products.pop();
console.log(products);
// Task 2
let scores = [78, 95, 87, 83, 90];
scores[1] = 97;
let total = 0;
for (let score of scores) {
    total += score;
}
let average = total / scores.length;
console.log("Updates Scores: " + scores);
console.log("Average Score: " + average.toFixed(2));
// Task 3
let employee = {
    name: "John Smith",
    age: 28,
    department: "Sales",
    isActive: true
};
employee.department = "Marketing";
employee.position = "Marketing Manager";
console.log(employee);
// Task 4
let customers = [
    { name: "Josh Allen", email: "joshallen@gmail.com", purchaseAmmount: 150 },
    {name: "Chad Johnson", email: "johnsonc@outlook.com", purchaseAmmount: 200 },
    {name: "Jared Morris", email: "jmorris@me.com", purchaseAmmount: 120 }
];
customers.push({ name: "Dylan Douglas", email: "dyland25@gmail.com", purchaseAmmount: 300 });
console.log(customers);
