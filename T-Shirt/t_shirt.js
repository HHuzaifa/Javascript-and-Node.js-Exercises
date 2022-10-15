function makeShirt(size, message) {
    let takeSize = prompt("Enter the size of the T-Shirt.")
    let takeMessage = prompt("Enter the message you want to be printed on your T-Shirt.")
    console.log(`T-Shirt's size is ${toString(takeSize)}, and the message is ${toString(takeMessage)}.`)
}
makeShirt("extra large", "Danger Dude");
