let originalPrices = [463 , 654 , 2346]

let discountedPrices = []

//for(value of originalPrices){
//    discountedPrices.push(value * 0.9) //10% discount
//}

//originalPrices.forEach((value)=>{ //forEach won't return anything
//    discountedPrices.push(value * 0.9) //10% discount
//})
//
//console.log(originalPrices);
//console.log(discountedPrices);
//
//const discountedPrices2 = originalPrices.map((value) => {
//    return value * 0.9
//})
//
//console.log(discountedPrices2);
//
let student = [
    {
        name : "Ayaan",
        marks : 46,
    },

     {
        name : "Mansi",
        marks : 56,
    },

     {
        name : "Debadrita",
        marks : 33,
    },

     {
        name : "Shivan",
        marks : 30,
    },

      {
        name : "Alauddin",
        marks : 28,
    },

]

//let studentNames = []
//students.forEach((value)=>{
//    studentNames.push(value.name)
//})
 
//const studentNames = student.map((student)=> student.name)
//const studentMarks = student.map((student)=> student.marks)
//console.log(studentNames ,  studentMarks);

let boostMarks = student.map(student => ({...student , marks : student.marks + 10}))
//let boostMarks = student.map(student => student.marks<33) // [ false, false, false, true, true ]

//console.log(boostMarks);

//let failedStudents = []
//
//    student.forEach(student => {
//        if(student.marks < 33){
//        failedStudents.push(student)
//        }
//    })

//const failedStudents = student.filter((student)=> student.marks<33).map((student)=> student.name)

//const failedStudentsName = failedStudents.map((student)=> student.name)
//console.log(failedStudents);

//let marks = [56 , 24 , 62 , 73 , 78]

//let totalMarks = 0
//
//marks.forEach((mark)=> totalMarks += mark ,0)

//const totalMarks = marks.reduce((accumulator , cuurentValue)=>{
//     return accumulator + cuurentValue;
//} ,0)
//
//console.log(totalMarks);

const attendence = ["present" , "present" , "absent" , "present" , "absent"]

//let obj = {}
//
//attendence.forEach((value)=>{
//    if (obj[value]){
//        obj[value] = obj[value] + 1
//    } else {
//        obj[value] = 1
//    }
//})
//
//console.log(obj);

const obj = attendence.reduce((acc , value)=>{
    //if (acc[value]){    
    //    acc[value] = acc[value] + 1
    //} else {
    //    acc[value] = 1
    //}

    acc[value] = (acc[value] || 0) +1;   

    return acc
} ,{})
console.log(obj);