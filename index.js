const cats= ["Milo", "Otis", "Garfield"]
console.log(cats)
cats()
function destructivelyAppendCat() {
    return cats.push('Ralph')
}
destructivelyAppendCat()

 function destructivelyPrependCat(){
    return cats.unshift('Bob')
 }
destructivelyPrependCat()

function destructivelyRemoveLastCat() {
    return cats.pop()
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat() {
    return cats.shift()
}
destructivelyRemoveFirstCat()

let cat;
function appendCat() {
   return cat=[...cats, 'Broom']

}

appendCat()

let ncat;
function prependCat() {
    return ncat=['Arnold',...cats]
    
}
prependCat()


function removeLastCat() {
    return cats.slice(0,-1)
}
removeLastCat()

function removeFirstCat() {
    return cats.slice(-2)
}
removeFirstCat()