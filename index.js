const { sum } = require("./file1");
const { subtract } = require("./file2");

function main() {
    console.log(sum(1, 2));
    console.log(subtract(1, 2));
}

main();