//console.log("hii");

//Arithmatic operators

let num1 = 2;
let num2 = 4;

//console.log(num1 + num2);
//console.log(num1 - num2);
//console.log(num1 * num2);
//console.log(num2 / num1);
//console.log(num2 % num1);
//console.log(num1 ** num2);

// case sensitive
//teeno variable different hai

// let NAME = "saif"
// let name = "juhi"
// let Name = "karan"

// let num = 45;
//num++
// console.log(++num); // 46 -> pre increment 
// console.log(num++); 
// console.log(num);

//let num = 2;
//num += 5;
//console.log(num);
//num -= 5;
//console.log(num);
//num *= 5;
//console.log(num);
//num /= 5;
//console.log(num);
//num %= 5;
//console.log(num);
//num **= 5
//console.log(num);

//const num1 = 3;
//const num2 = 6;
//
//console.log(3 > 6)
//console.log(3 < 6)
//console.log(3 >= 6)
//console.log(3 == 6)
//console.log(3 <= 6)
//console.log(3 != 6)

// loose equality
//console.log("5" == 5);

//strict equality
//console.log("5" === 5);

//const age = 19;
//const hasId = true;

//const canEnterClub = age >= 18 && hasId === true;
//console.log(canEnterClub);

//console.log("manish"/60);
//console.log(typeof NaN);

//if(false){
//    console.log("in true block");
//} else {
//    console.log("in false block");
//    
//}

//const isLoggedIn = true
//if (isLoggedIn) {
//   console.log("you can like, comment"); 
//} else {
//   console.log(" Please First Login");
//}

//let day = "fri";
//
//if ( day === "mon" ) {
//    console.log("1st day of the week");
//}else if ( day === "tue"){
//    console.log("2nd day of the week"); 
//}else if ( day === "wed"){
//    console.log("3rd day of the week"); 
//}else if ( day === "thu"){
//    console.log("4th day of the week"); 
//}else if ( day === "fri"){
//    console.log("5th day of the week"); 
//}else if ( day === "sat"){
//    console.log("6th day of the week"); 
//}else if ( day === "sun"){
//    console.log("7th day of the week"); 
//}else {
//    console.log("wrong day"); 
//}

//const isLoggedIn = true;
//const isSubscribed = true;
//
//if (isLoggedIn) {
//    if(isSubscribed) {
//        console.log("you can access premium content");  
//    }else{
//        console.log("you don't have any premium plan to access this content");  
//    }
//}else {
//    console.log("Please login");
//}

//switch case

const day = "fri";

switch (day) {
    case "mon":
        console.log("1st day of the week");
        break;
    case "tue":
        console.log("2nd day of the week");
        break;
    case "wed":
        console.log("3rd day of the week");
        break;
    case "thu":
        console.log("4th day of the week");
        break;
    case "fri":
        console.log("5th day of the week");
        break;
    case "sat":
        console.log("6th day of the week");
        break;
    case "sun":
        console.log("7th day of the week");
        break;
    default:
        console.log("wrong day");
        
}