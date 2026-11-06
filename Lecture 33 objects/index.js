//let product1 = ["iphone", 56835, 4.5, 75, 10]

//console.log(product1["4"]);
//console.log(typeof product1);



let product2 = {
        221: "iphone",
        price: 57633,
        avgRating: 4.5,
        totalReview: 75,
        discount: 50,
        productName: "iphone 25",
        varients : ["pro" , "base" , "pro max"],
        manufacturerDetail : {
            city : "dhampur",
            state : "UP",
            country :" India"
        },
        //method h ye agr isi ko object se bahr likhe to wo function ho jayega
        printProductName: function () {
            console.log(this.productName);
        },
        printDiscount() {
            console.log(this.discount);
        }
    }
//let res = product2.printProductName()
////console.log(res);
//product2.printDiscount()

//console.log(Object.keys(product2));
//console.log(Object.values(product2));
//console.log(Object.entries(product2));


//for (value of product1){
//    console.log(value);
//}
//
//for( let i=0 ; i< product1.length; i++){
//    console.log(product1[i]);
//    
//}
//
//product1.forEach(function(value , index){
//    console.log(value , index);
//})

//for( value of product2){
//    console.log(value);
//}


//function ko chalane ke liye call krna pdta h

//function b(num){
//    console.log(num);//start
//    num() // callback execute kar rha h
//    console.log("b") // end
//}
//
//b(function a(){
//    console.log("a");  //b("argument" iske "" andr agr function de denge to wo call back function ban jayega )
//})


//let Math = {
//    abs(){
//
//    },
//    ceil(){
//
//    },
//    floor(){
//        
//    }
//}

//console.log(product2[221]);

//console.log((product2["discount"]));
//console.log((product2."discount"));// will give error

//for (value in product2) {
//    console.log(product2[value]);
//}

//destructuring


//const [a,b,c] =  [56835, 4.5, 75, 10 ,"iphone"]
//console.log(c);

//let {price , printDiscount , avgRating} = product2
//console.log(price  , printDiscount(), avgRating);

//for ([a,b] of Object.entries(product2)){
//    console.log(a,b);
//}
//
//let product1 = [56835, 4.5, 75, 10 ,"iphone"]
//const [name,price] =  [ ,"iphone" , 56835, 4.5, 75, 10]

//let arr = [53 , 15 , 626 , 7 , 43 , 57 , 23 , 54 , 752 , 43]

//console.log(Math.min(53 , 15 , 626 , 7 , 43 , 57 , 23 , 54 , 752 , 43));
//console.log(arr);
//console.log(...arr);
//
//console.log(Math.min(...arr));
//Math.max()

//let a = [1,2]
//let b = [3,4]
//
//let c = [...a , ...b]//array mmerging by spread operator
//console.log(...c);

//let product1 = [56835, 4.5, 75, 10 ,"iphone"]
//const [n,p , ...hello] =  ["iphone" , 56835, 4.5, 75, 10]

//console.log(hello);

//function add (...numbers){
//   let total = 0;
//   for(value of numbers) {
//    total += value
//   }
//   return total;
//}

//console.log(add(4,5,345,9,5));

let { manufacturerDetail , ...userKeLiyeDetaial} = product2

console.log(userKeLiyeDetaial);




















