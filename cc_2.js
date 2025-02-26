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
    { name: "Josh Allen", email: "joshallen@gmail.com", purchaseAmount: 150 },
    {name: "Chad Johnson", email: "johnsonc@outlook.com", purchaseAmount: 200 },
    {name: "Jared Morris", email: "jmorris@me.com", purchaseAmount: 120 }
];
customers.push({ name: "Dylan Douglas", email: "dyland25@gmail.com", purchaseAmount: 300 });
console.log(customers);
// Task 5
let order = {
    orderID: 53648,
    customerName: "Charles McLeod",
    amount: 300,
    calculateTax: function(){
        return this.amount * 0.10;
    }
};
console.log("Order Details:");
console.log("Order ID: " + order.orderID);
console.log("Customer Name: " + order.customerName);
console.log("Amount: $" + order.amount.toFixed(2));
console.log("Tax Amount: $" + order.calculateTax().toFixed(2));
