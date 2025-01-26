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
