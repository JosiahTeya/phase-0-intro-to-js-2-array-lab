const cats =["Milo" , "Otis" , "Garfield"];
function destructivelyAppendCat(Ralph){
    cats.push("Ralph");
    return cats;
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat(Garfield){
    cats.pop("Garfield");
    return cats
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift("Milo")
    return cats
}
function appendCat(Broom){
    Broom=[...cats,"Broom"]
return Broom
}
function prependCat(Arnold){
    Arnold=["Arnold",...cats]
    return Arnold
}
function removeLastCat(){
    let remainingCats = cats.slice(0,-1)
    return remainingCats
}
function removeFirstCat(){
    let remainingCats = cats.slice(1)
    return remainingCats
}