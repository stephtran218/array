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
    //1. Create a variable to hold the ice cream flavors
    //2. Create a funtion that will replicate the pop() method
        //2a. Use a for loop that will go once to take out the last element in the array "cookies and cream"

//Step 1:       
var iceCream = ["vanilla", "chocolate", "strawberry", "matcha", "cookies and cream"]
console.log (iceCream)

//Step 2:
pop();
function pop(){
    for (let i = 0; i < 1; i++){
        iceCream.length = iceCream.length - 1;
    }
}
console.log (iceCream)




//toString method using a manual function
    //1. Create a variable to hold all the sports
    //2. Create a second variable to hold the sports string
    //3. Create a function that will replicate the toString method
        //3a. Use a for loop to go through the sports
        //3b. Use an if statement that will put a comma through each previous element in the string

//Step 1:
var sports = ["volleyball", "basketball", "football", "soccer", "swimming"]

//Step 2:
var sportsString = '';


//Step 3:
function toString(){

    //Step 3a:
    for (let i = 0; i < sports.length; i++) {
        sportsString = sportsString + sports[i];

    //Step 3b:
    if (i < sports.length - 1) {
        sportsString = sportsString + "," 
        }
    }
}

toString();
console.log (sportsString)

//Join method using a manual function
    //1. Create a variable to hold all the chips
    //2. Create a variable to hold the string of chips
    //3. Create a function that will replicate the join method
        //3a. Use a for loop that will go through all the chips and put thenm in the string
        //3b. Use an if statement to separate the chips so user can select what they want to separate the elements with

//Step 1:
var chips = ["doritos", "cheetos", "ruffles", "lays", "fritos"];

//Step 2:
var chipNames = "";

//Step 3:
join("/");
function join(separator){

    //Step 3a:
    for (let i = 0; i < chips.length; i++) {
        chipNames = chipNames + chips[i];
        
    //Step 3b:    
    if (i < chips.length - 1) {
        chipNames = chipNames + separator;
        }
    }
}

console.log(chipNames);




//Concat method using a manual function 
    //1. Create two variables: one for comedies and one for horror
    //2. Create a function that will replicate the concat method
        //2a. Create a for loop for comedies
        //2b. Create a for loop for horror
    //3. In the for loops, add the comedies array and the horror array
    //4. Create variable that will hold both arrays
    //5. Return the array with both genres of movies as one array

//Step 1:
var comedies = ["21 Jump Street", "We're the Millers", "White Chicks"];
var horror = ["The Conjuring", "Us", "Insidious"];

//Step 2:
bothGenresArray();
function bothGenresArray (addArrays){
    var combinedArray = []

    //Step 2a:
    for (let i = 0; i < comedies.length; i++){

        //Step 3:
        combinedArray[combinedArray.length] = comedies[i];
    }

    //Step 2b:
    for(let i = 0; i < horror.length; i++){

        //Step 3:
        combinedArray[combinedArray.length] = horror[i];
    }

    //Step 5:
    return combinedArray;
}

//Step 4:
var allMoviesArray = bothGenresArray (comedies, horror)
console.log (allMoviesArray)