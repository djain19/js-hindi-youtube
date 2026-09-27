const accountId = 144553
let accountEmail = "darshan@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2
accountEmail = "dj@google.com"
accountPassword = "21212121"
accountCity = "Kota"

console.log(accountId);
console.log(accountPassword);
console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var because 
of issue in block scope and functional scope 
*/