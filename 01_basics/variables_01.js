const accountId = 144553
let accountEmail = "nik@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"      /*can be done but not recmommended*/
let accountState;
// accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212"
accountCity= "Bengaluru"

console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity])

console.log(accountState);
/*prefer not to to use var because of issue in block and scope*/