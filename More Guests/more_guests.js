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

console.log("Hey everyone I just found a big dinning table.");
