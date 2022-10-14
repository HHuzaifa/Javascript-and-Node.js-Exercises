let userNames = ["theprofessor", "bond007", "upworking43", "hassan43", "admin"];

for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === "admin") {
        console.log(`Hello ${userNames[i]}, , would you like to see status report?`)
    }else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`)
    }
}
