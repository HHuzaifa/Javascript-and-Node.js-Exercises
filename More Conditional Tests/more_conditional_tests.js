let myName = "huzaifa";
let friendName = "huzaifa";
let myAge = 21;
let cousineAge = 22;
let favNum = 8;
let cousineFavNum = 4;
let myposessions = ["laptop", "handsfree", "smart phone", "power bank", "sunglasses"]

//equality and inequality
console.log(myAge !== friendName)
console.log(myAge === friendName)

//test using lowercase function
console.log(friendName == "huzaifa".toLowerCase())
console.log(friendName != "huzaifa".toLowerCase())

//numerical tests
console.log(myAge == cousineAge);
console.log(myAge != cousineAge);
console.log(myAge > cousineAge);
console.log(myAge < cousineAge);
console.log(myAge >= cousineAge);
console.log(myAge <= cousineAge);

//tests using 'AND' and 'OR'
console.log(myAge >= favNum && cousineAge >= cousineFavNum);
console.log(myAge <= favNum && cousineAge <= cousineFavNum);
console.log(myAge >= favNum || cousineAge >= cousineFavNum);
console.log(myAge <= favNum || cousineAge <= cousineFavNum);

//test whether the item in array

for (i = 0; i < myposessions.length; i++) {
    if (myposessions === "handsfree");
        console.log(true);
}

//test whether the item is not in array
for (i = 0; i < myposessions.length; i++) {
    if (myposessions !== "handsfree");
        console.log(false);
}
