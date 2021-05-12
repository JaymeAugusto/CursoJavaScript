let num = [5,8,2,9,3]
num.sort()
console.log(num)
num.push(6)
console.log(num)
console.log(num.length)
// for (let i = 0; i < num.length; i++) {
//     console.log(`var ${num[i]}`)   
// }
for(let i in num){
    console.log(`var ${num[i]}`)
}