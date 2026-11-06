// let alokMarks = 46 + 56 + 23;
// let addiMarks = 24 + 24 + 42;
// let karan = 54 + 23 + 65;
// let anu = 54 + 52 + 23;
// 
// //console.log("alokmarks" , alokMarks);
//

function totalMarks( mathMarks , scienceMarks , sanskritMarks){ 
     //console.log( "Calculating marks for:" + studentName);
     return  mathMarks + scienceMarks + sanskritMarks;   
}
////totalMarks("Alok" , 46 , 56 , 23)
////totalMarks("Addi" , 24 , 24 , 42)
////totalMarks("karan" , 54 , 23 , 65)
////totalMarks("Anu" , 54 , 52 , 23)

//after array class
let students =[["Alok" , 46 , 56 , 23] ,
 ["Addi" , 24 , 24 , 42] , 
["karan" , 54 , 23 , 65] , 
["Anu" , 54 , 52 , 23]
]

for (let i=0;i<students.length; i++){
    calPercentage(students[i][0] , students[i][1] , students[i][2] , students[i][3]);
    
}
//
function calPercentage(studentName, mathMarks, scienceMarks, sanskritMarks) {
    let total = totalMarks( mathMarks , scienceMarks , sanskritMarks);
    let percentage = (total/300) * 100;
    //console.log("Total Marks" , total);
    console.log(`${studentName} percentage : ` , percentage);
    
}
//
// let response = calPercentage("Alok" , 46 , 56 , 23)
// console.log(response);
// calPercentage("Addi" , 24 , 24 , 42)
// calPercentage("karan" , 54 , 23 , 65)
// calPercentage("Anu" , 54 , 52 , 23)

//function greetingMsg(username, greet){
//    console.log(`${greet}, ${username}`);
//    
//}
//
//greetingMsg("Priyanshu" , "Hii")
//greetingMsg("Anshika" , "Hello")
//greetingMsg("Satyam" , "Namaste")
//greetingMsg("Saif" , "Kemcho")

//function calculator(num1 , num2 , operator) {
//   
//    switch (operator) {
//        case "+":
//            console.log(`${num1} ${operator} ${num2} =` , num1 + num2);
//            break;
//            case "-":
//            console.log(`${num1} ${operator} ${num2} =` , num1 - num2);
//            break;
//            case "/":
//            console.log(`${num1} ${operator} ${num2} =` , num1 / num2);
//            break;
//            case "*":
//            console.log(`${num1} ${operator} ${num2} =` , num1 * num2);
//    }   
//}
//calculator(6999987944446,12345678,"+")

//fun1 ()

//function fun1(){
//    console.log("function decleration")
//}

//console.log(add(5 , 7));      
//let add = function ( num1 , num2){
//    return num1 + num2
//}

//Arrow function( use= jha bohot kam chice likhni ho thoda thoda)

//syntax1
//let add1 = (num1, num2)=> num1 + num2;

//syntax2
//let add2 = num1 => num1 + 4;

//syntax3
//let add3 = (num1, num2)=> {

    //something
    //something
   // return num1 + num2
//}

//console.log(add(4,6));