let dice1 = Math.floor(Math.random()*6)+1
console.log(dice1)

let dice2 = Math.floor(Math.random()*6)+1
console.log(dice2)

let dice3 = Math.floor(Math.random()*6)+1
console.log(dice3)

if (dice1 == dice2) {
    if (dice1 == dice3) {
        console.log("3 dices are the identical")
    } 
    else {
        console.log("2 dices are the identical")
    }
}
else {
    if (dice1 == dice3 || dice2 == dice3) {
        console.log("2 dices are the identical")
    } 
    else {
        console.log("no identical dice")
    }
    }

// Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none.

// lancer trois dés
// on abtient trois valeurs
// comparer les mêmes
// 
// 
// 
// 
// 
// 