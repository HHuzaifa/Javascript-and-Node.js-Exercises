let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let st = "st";
let nd = "nd";
let rd = "rd";
let th = "th"
for (let i  = 1; i < ordinalNumbers.length; i++) {
    if (i === ordinalNumbers[0]) {
        console.log(`${ordinalNumbers[0]}${st}`)
    }else if (i === ordinalNumbers[1]) {
        console.log(`${ordinalNumbers[1]}${nd}`)
    }else if(i === ordinalNumbers[2]) {
        console.log(`${ordinalNumbers[2]}${rd}`)
    }if (i >= 4) {
        console.log(`${i}${th}`)
    }
}

