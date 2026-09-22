// data types
let name = "karan";
let age = 23
let fee = 7500
let isStudent = true
let isNull = null
let unDefined

console.log("Name : "+name)
console.log("Age : "+age)
console.log("Is Studetn : "+ isStudent)
console.log("Null value : "+isNull)
console.log("Undefined Value : "+ unDefined)


// Object types
let products = {
    name:"laptop",
    price: 55000,
    quantity : 1
}
let fruit = ["Apple","Banana","Watermelon"]
let greet = function(){console.log("Bye Bye !")}

console.log("Product : "+products.name + " Price : "+products.price + " Quantity : "+ products.quantity)
console.log("Fruits : "+ fruit.join(","))
greet()