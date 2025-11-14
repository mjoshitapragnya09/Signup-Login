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
function login(userName, password) {
    let users = ["ram", "sita", "john"];

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else if (password !== "Emp@123") {
        return "Wrong Password....";
    } else {
        return "Login Successful...";
    }
}

console.log(login("ram", "Emp@123"));
console.log(login("ram", "wrong"));
console.log(login("newUser", "Emp@123"));
