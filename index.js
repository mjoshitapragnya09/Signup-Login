function signup(userName) {
    let users = ["ram", "sita", "john"];

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

console.log(signup("ram")); 
console.log(signup("pragnya"));
