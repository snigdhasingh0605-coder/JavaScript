let student = {
    name : "varad",
    rollNo : 34,
    subjects : ["maths" , "english" , "hindi"]
}

let{ subjects : vishay , totalMarks = 500, ...variable} = student //500 is default value
// console.log(hello);

//how to rename key
//let vishay = subjects// instead of using this we will use (:)
//console.log(vishay);
//console.log( totalMarks);

//let obj1 = {
//    name : "snigdha",
//    phone : 7839276459
//}
//
////let india = " country"
//let obj2 = {
//    address : "india",
//    adharCard : 432785643567,
//    name : "yash"
//}
//
//let obj3 = {...obj1 , ...obj2}
//
//console.log(obj3);


//console.log(variable);

//array and object update

//let arr = [1,2,3,4]
//
//arr[1] = "updated"
////arr = ["hudrfhd" , "gfhg" , "gfg"]
//console.log(arr);

//let obj = {
//   name : " kasturi",
//   rollNo : "23"
//}
//
//obj = {
//    add : "ssdafi"
//}

//console.log(obj);

//const obj1 = {
//   name : " kasturi",
//   rollNo : "23",
//   address : null
//}
//
//obj1 ["name"] = "snigdha"
//obj1.name = "golu"
//
//delete obj1.rollNo
//console.log(obj1);
//console.log(obj1.address?.street);

let arr1 = [1,2,4,5,3]
//
////arr1.splice(1,3) //delete
////arr1.splice(3,2,"add")// add
//arr1.splice(3,2,["replace"])// replace
//console.log(arr1);

//let trimArr= arr1.slice(1,5)
//console.log(trimArr);

//console.log(arr1.indexOf(5));

//let res = arr1.find((value)=>{
//
//    if ((value===3)){
//        return value
//    } 
//   // return value === "3";
//})
//
//console.log(res);
//
//let resIndex = arr1.findIndex((value) => {
//    return value === 3;
//})
//
//console.log(resIndex);

//let arr3 = [1,2,3,4,5,[6,7,8 ,[9,10,11]]]
//
//console.log(arr3.flat(Infinity));

//console.log(arr3);

let arr4 = [4,5,6,62,213,13]

let arrCopy = arr4;
let arrCopy2 =[...arr4];//spread operator


arrCopy2.pop()

console.log("arr4",arr4);
console.log("arrCopy",arrCopy2);

