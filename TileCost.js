let TileCost = (tileCost, width, height) => {
    return `The total cost of a tile of $${tileCost} for area ${width * height}m squared will be $${tileCost * width * height}`
}

// Run npm install prompt-sync in the terminal
const prompt = require('prompt-sync')({sigint: true})
let tileCost = prompt("Please enter cost of tile: $")
let width = prompt("Please enter the width: ")
let height = prompt("Please enter the height: ")

console.log(TileCost(tileCost, width, height))

export default TileCost

