////////////////////////////////////////
//
// Created By: nikanatenaze
//
////////////////////////////////////////




let fmnum = prompt("Enter the first nummber (Minimal Number)")
let tmnum = prompt("Enter the first nummber (Maximum Number)")
let encan = "Enter correct symbols!"
let unumis = "Your Random Number is: "
let even = "  |  Your number is: even"
let odd = "  |  Your number is: odd"

let result = Math.round(Math.random() * (tmnum - fmnum) + fmnum)

if (result % 2 == 0){
    console.log(unumis + result + even)
    alert(unumis + result + even)
}

else if (result % 2 != 0) {
    console.log(unumis + result + odd)
    alert(unumis + result + odd)
}

else {
    console.log(encan)
    alert(encan)
}

