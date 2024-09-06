// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++
// }

// console.log("print odd number upto 20")

// let j = 1;
// while(j <= 20){
//     console.log(j);
//     j = (j+2);
// }

// console.log("print even number upto 20");

// let k = 0;
// while(k <= 20){
//     console.log(k)
//     k = k+2;
// }

console.log("let's play game");
const FavGame = "cricket";
let guess = prompt("guess my favorite game");
while((guess != FavGame) && (guess != "quit")){
    console.log("wrong");
    guess = prompt("wrong guess. please try again");
} if (guess == FavGame){
    console.log("congratulation");
}else{
    console.log("you quit")
}