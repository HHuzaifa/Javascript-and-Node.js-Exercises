function makeShirt(size, message) {
    let takeSize = prompt("Enter the size of the T-Shirt.")
    takeSize = size;
    let takeMessage = prompt("Enter the message you want to be printed on your T-Shirt.")
    takeMessage = message
    console.log(`T-Shirt's size is ${takeSize}, and the message is ${takeMessage}.`)
}
makeShirt("extra large", "Danger Dude");
