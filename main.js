// let obihavo = 28;

// if(obihavo < 0) {
//     alert ("Men kurtkamni kiyaman...")
// }else if(obihavo < 15){
//     alert("Men kastyum kiyaman...")
// }else{
//     alert("Men futbolka yoki kastyum kiyaman..")
// }

let random1 = Math.trunc(100*Math.random());

if (random1 % 3 == 0) {
    alert (random1 + "-bu son fizz")
}else if ( random1 % 5 == 0){
    alert(random1 + "-bu son buzz")

}else if (random1 % 3 == 0 && random1 % 5 == 0) {
    alert(random1 + "-bus son fizzbuzz")
} else{
    alert(random1 + "-bu son fizz, buzz va fizzbuzz ham emas..")
}