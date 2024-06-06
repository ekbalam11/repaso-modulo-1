// enunciado https://www.codewars.com/kata/557af4c6169ac832300000ba/

function removeRotten(bagOfFruits) {
    let freshFruits = [];

    for (let fruit of bagOfFruits){
        let cleanedFruit = fruit.replace("rotten","");
        cleanedFruit = cleanedFruit.toLowerCase();
        freshFruits.push(cleanedFruit)
    }

    return freshFruits;
}

console.log(removeRotten([])); // []

console.log(removeRotten(["apple", "banana", "kiwi", "melone", "orange"])); // ["apple","banana","kiwi","melone","orange"])

console.log(removeRotten(["apple", "rottenBanana", "apple"])); //["apple","banana","apple"] 

console.log(removeRotten(["rotten", "is rotten?"]));

console.log(removeRotten("rottenPatata"));



//Como repasar las letras de una palabra?

function quitarM (palabra) {
    let palabrasnoM = [];
    for (let letra of palabra) {
        let palabrassinM = letra.replace("M","");
        palabrasnoM.push(palabrassinM)
    }

    return palabrasnoM;
}


console.log(quitarM([]));


console.log(quitarM("Mamita"));