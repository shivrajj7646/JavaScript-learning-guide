for (let i=1; i<=5; i++){
    console.log(i)
}

console.log("backward")

for (let i=5; i>=1; i--){
    console.log(i)
}

console.log("Print odd number upto 20")
for(let i=1; i<=20; i=i+2){
    console.log(i)
}

console.log("Print even number upto 20")
for(let i=0; i<=20; i=i+2){
    console.log(i)
}

console.log("print table of 17")
for (let i = 17; i <= 170; i = i+17){
    console.log(i)
}
console.log("NESTED FOR LOOP")
for(let i = 1; i <= 3; i++){
    console.log(`outer loop ${i}`)
    for(let j = 1; j <= 3; j++){
        console.log(j)
    }
}