function sandwichDetails(sandwichItems) {
    console.log("Ordered list of items in sandwich is below:")
    for (let i = 0; i < sandwichItems.length; i++) {
        console.log(sandwichItems[i])
    }
}

var person1 = ["mushrooms", "garlic", "tomato", "fajita chicken"]
var person2 = ["carrot", "onions", "tomato", "tikka chicken"]
var person3 = ["olives", "green pepper", "white sauce", "smoked chicken"]
console.log(sandwichDetails(person1))
console.log(sandwichDetails(person2))
console.log(sandwichDetails(person3))