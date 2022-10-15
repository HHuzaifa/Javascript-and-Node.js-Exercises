let current_users = ["abraiz432", "hassankkk45", "hamza567", "noman5678"];
let new_users = ["zaryab7897", "ahsan78", "shahzaib90" ,"abraiz432"];


for (var i = 0; i < new_users.length; i++) {
    for (var c = 0;c < current_users.length; c++)
        if (new_users[i] == current_users[c]) {
            var banned_names = new_users[i]
            console.log(`${banned_names}You need to enter a new username.`)
        }
}


for (var t = 0;t < new_users.length; t++) {
    if (new_users[t] != banned_names){
        var available_usernames = new_users[t]
        console.log(`${available_usernames}This username is available.`)
    }
}    
