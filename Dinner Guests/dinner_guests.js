guestList = ["mom", "brother", "father"];

let poppedItem = guestList.pop();
guestList.push("hamza");


console.log(poppedItem);

guestList.unshift("abraiz");
guestList.splice(2, 0, "ali");
guestList.push("robert")

console.log(`Hi ${guestList[0]}, would you like to join me on dinner?`);
console.log(`Hi ${guestList[1]}, you are still comming right?`);
console.log(`Hi ${guestList[2]}, would you like to join me on dinner?`);
console.log(`Hi ${guestList[3]}, would you like to join me on dinner?`);
console.log(`Hi ${guestList[4]}, you are still comming right?`);
console.log(`Hi ${guestList[5]}, would you like to join me on dinner?`);

// Shrinking lists
console.log("Hey everyone I just found a big dinning table.");
console.log("I can invite only two people.")

//popping items and letting remaining items be 2
let poppedPerson1 = guestList.pop();
console.log(`Hi ${poppedPerson1}, I'm sorry I can't invite you to dinner.`)
let poppedPerson2 = guestList.pop();
console.log(`Hi ${poppedPerson2}, I'm sorry I can't invite you to dinner.`)
let poppedPerson3 = guestList.pop();
console.log(`Hi ${poppedPerson3}, I'm sorry I can't invite you to dinner.`)
let poppedPerson4 = guestList.pop();
console.log(`Hi ${poppedPerson4}, I'm sorry I can't invite you to dinner.`)

//saying to remaining people that they are still on the invitation list
console.log(`Hi ${guestList[0]}, you are still on the invitation list.`)
console.log(`Hi ${guestList[1]}, you are still on the invitation list.`)

//also removing the last two people
lastPoppedPerson1 = guestList.pop()
lastPoppedPerson2 = guestList.pop()

//displaying array to make sure that no index is left unpopped
console.log(guestList)

//displaying a message indicating the numbber of people i'm inviting to dinner
let message = `I'm inviting ${guestList.length} people to dinner.`
console.log(message)