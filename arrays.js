//Push() method using a manual function
var typesOfCandy = function (candy){
    //1. Create a variable to hold the different candies.
    //2. Creat a function to push the newest candy to the array  
}

//Step #1:
var candy = ["twix", "snickers", "hersheys", "butterfingers"];

//This will add almond joy to the list of candies on the console log.
push("almond joy");

//This will add sweettarts to the list of candies on the console log.
push("sweettarts")

//Step 2: This function called push will add the newest candy to the array.
function push(candyItem){
    candy[candy.length] = candyItem;
}
console.log (candy)

//Pop() method using a manual function
var iceCream = ["vanilla", "chocolate", "strawberry", "matcha", "cookies and cream"]
console.log (iceCream)

pop();
function pop(){
    for (let i = 0; i < 1; i++){
        iceCream.length = iceCream.length - 1;
    }
}
console.log (iceCream)




//toString method using a manual function
var sports = ["volleyball", "basketball", "football", "soccer", "swimming"]
var sportsString = '';

function toString(){
    for (let i = 0; i < sports.length; i++) {
        sportsString = sportsString + sports[i];
    if (i < sports.length - 1) {
        sportsString = sportsString + "," 
        }
    }
}

toString();
console.log (sportsString)

//Join method using a manual function
var chips = ["doritos", "cheetos", "ruffles", "lays", "fritos"];
var chipNames = "";


join("/");
function join(separator){
    for (let i = 0; i < chips.length; i++) {
        chipNames = chipNames + chips[i];
        
        
    if (i < chips.length - 1) {
        chipNames = chipNames + separator;
        }
    }
}

console.log(chipNames);




//Concat method using a manual function 
var comedies = ["21 Jump Street", "We're the Millers", "White Chicks"];
var horror = ["The Conjuring", "Us", "Insidious"];

bothGenresArray();
function bothGenresArray (addArrays){
    var combinedArray = []
    for (let i = 0; i < comedies.length; i++){
        combinedArray[combinedArray.length] = comedies[i];
    }

    for(let i = 0; i < horror.length; i++){
        combinedArray[combinedArray.length] = horror[i];
    }
    return combinedArray;
}
var allMoviesArray = bothGenresArray (comedies, horror)
console.log (allMoviesArray)