// String to Number
function convertToNumber(value){
    let n = Number(value)
    console.log("Converted to Number : "+ n + " Type : "+typeof(n))
}

convertToNumber("123")
convertToNumber("45678")
convertToNumber("abc")

// convert number to string
function convertNumberToString(num){
    let s = String(num)
    console.log("Converted to String : "+ s + " Type : "+ typeof(s))

}
convertNumberToString(123)
convertNumberToString(456.99)
convertNumberToString(true)

// Type coercion
let a = 5;
let b = "10";
let sum = a + b;
console.log("Sum of "+ a + " and "+ b + " is " + sum)