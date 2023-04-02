// Write your solution here!



//       *ON ALL NOTES, JUST REMOVE `CONSOLE.LOG` TO RUN CODE*      //


// //  //     arraysAndObjects()
// //  //                                                                        nextNote(video)


// let letters = ['a', 'b', 'c']
// console.log(letters)
// // ^^pulls entire array
// console.log(letters[0])
// // ^^pulls specific index


// //  //                                                                       nextNote(video)

// let book = {
//     title: "Slam",
//     author: "Walter Dean Myers",
//     publisher: "New York Times"
// }
// console.log(book.title)
// console.log(book["title"])

// //

// let letters = ['a', 'b', 'c']
// letters[0] = 'j'
// //letters[1] = '25'
// letters[2] = 'true'
// console.log(letters)
// you can change the entire array or select which index to change same for the other example

// let book = {
//     title: "Slam",
//     author: "Walter Dean Myers",
//     publisher: "New York Times"
// }
// book.title = "This Is Not A Love Story"
// book['author'] = 'Cedric Jaquay Jones'
// console.log(book)


// //  //      arrays()
// //  //                                                 nextNote(identifyDataStructuresAndArrays)

// const firstNumber = 32;
// const secondNumber = 9;
// const thirdNumber = 14;
// const fourthNumber = 33;
// const fifthNumber = 48;
// const powerBall = 5;

// function logWinningNumbers(first, second, third, fourth, fifth, power) {
//   console.log("Winning numbers:", first, second, third, fourth, fifth, power);
// }

// logWinningNumbers(
//   firstNumber,
//   secondNumber,
//   thirdNumber,
//   fourthNumber,
//   fifthNumber,
//   powerBall
// );
// LOG: Winning numbers: 32 9 14 33 48 5
// => undefined


// //  //                                                                     nextNote(createArrays)

// ["This", "is", "an", "array", "of", "strings."];

// ["Hello, world!", 42, null, NaN];


/////                                                               ASSIGNING ARRAYS TO VARIABLES 


// const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

// const flowers = ["Rose", "Tulip", "Orchid", "Lily"]


////// check array length


// const myArray = ["This", "array", "has", 5, "elements"];

// console.log(myArray.length)

/////

// const winningNumbers = [32, 9, 14, 33, 48, 5];

// function logWinningNumbers(numbers) {
//   console.log("Winning numbers:", numbers);
// }

// console.log(winningNumbers(winningNumbers));
// LOG: Winning numbers: [32, 9, 14, 33, 48, 5]
// => undefined

/////

// const alphabet = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   // => undefined
  
//  // alphabet.length;
//   // => 26
  
//   console.log(alphabet[alphabet.length - 1]);
//   // => "z"

// //  //                                                                   nextNote(nestedArrays)


// const egregiouslyNestedArray = [
//     "How",
//     ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
//     "seems.",
//   ];
//egregiouslyNestedArray[0];
//=> 'How'

//console.log(egregiouslyNestedArray[1]);
//=> [ 'deep', [ 'can', [ 'we', [Array], 'dang' ], 'deep,' ], 'it' ]

//egregiouslyNestedArray[2];
//=> 'seems.'

//console.log(egregiouslyNestedArray[1][0]);
//=> 'deep'

//console.log(egregiouslyNestedArray[1][1]);
//=> [ 'can', [ 'we', [ 'go', [Array], 'Pretty' ], 'dang' ], 'deep,' ]

//console.log(egregiouslyNestedArray[1][2]);
//=> 'it'

//egregiouslyNestedArray[1][1][1][1][1];
//=> ['?']

//egregiouslyNestedArray[1][1][1][1][1][0];
//=> '?'

/////                                                                            Array Methods

// const string = "Hello";

// console.log(string.toUpperCase());
// //=> "HELLO"

// //  //      arrays()
// //  //                                                           nextNote(addElementsToAnArray)

//const superheroes = ["Catwoman", "Storm", "Jessica Jones"];
//const copyOfCoolSuperheroes = [...superheroes]

//console.log(superheroes.push("Wonder Woman"));
// // => 4
//console.log(superheroes.unshift("Batman"))
// // => 5
// console.log(superheroes);
// // => ["Batman", "Catwoman", "Storm", "Jessica Jones", "Wonder Woman"]


// const cities = ["New York", "San Francisco"];

// console.log(cities.unshift("Boston", "Chicago"));
// // => 4
// console.log(cities.push("The Best City: Dallas"))
// console.log(cities);
// // => ["Boston", "Chicago", "New York", "San Francisco", "The Best City: Dallas"]

/////                                                                               COPY AN ARRAY
///// in order for allCities to run, you have to call coolCities and allCities

//const coolCities = ["New York", "San Francisco"];
//const allCities = ["Los Angeles", ...coolCities]

// const copyOfCoolCities = [...coolCities];

//console.log(copyOfCoolCities);

// console.log(copyOfCoolSuperheroes);
//=> ["New York", "San Francisco"]
//console.log(coolCities)
//console.log(allCities)

/////                                                               REMOVE ELEMENTS FROM AN ARRAY

//const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//days.pop();
// => "Sun"
//days.shift() >> removes from beginning of array
//console.log(days)

/////                                                                           WITH NO ARGUMENTS

// Note that creating a copy using .slice() works the same way as if you use 
// the spread operator: they both create a shallow copy, and with both the copy 
// points to a different object in memory than the original. If you add an 
// element to one of the arrays, it does not get added to the others:

 //const primes = [2, 3, 5, 7];
//console.log(primes.slice(-2,))
// const copyOfPrimesUsingSlice = primes.slice();

// const copyOfPrimesUsingSpreadOperator = [...primes];

// primes.push(11);
// // => 5

// primes;
// // => [2, 3, 5, 7, 11]

// copyOfPrimesUsingSlice;
// // => [2, 3, 5, 7]

// copyOfPrimesUsingSpreadOperator;
// // => [2, 3, 5, 7]

//const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//console.log(days.slice(2, 5))

//              If no second argument is provided, the slice will run from the 
//              index specified by the first argument to the end of the Array:

//const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

//console.log(days.slice(1));
// => ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]


// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// console.log(days.splice(0, 1, "Worst Day"))
// console.log(days)
// console.log(days.slice(0, 1))
//console.log(days.slice(-1));
// => ["Sun"]

//console.log(days.slice(-3));
// => ["Fri", "Sat", "Sun"]

//console.log(days.slice(0, -1));
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

///// .splice()

// const cards = [
//     "Ace of Spades",
//     "Jack of Clubs",
//     "Nine of Clubs",
//     "Nine of Diamonds",
//     "Three of Hearts",
//   ];
  
//   console.log(cards.splice(2, 1, "Ace of Clubs"));
  // => ["Nine of Clubs"]
  // if numbers are in order => [ 'Jack of Clubs', 'Nine of Clubs' ]
  //console.log(cards);
  // => ["Ace of Spades", "Jack of Clubs", "Ace of Clubs", "Nine of Diamonds", "Three of Hearts"]

//   const menu = [
//     "Jalapeno Poppers",
//     "Cheeseburger",
//     "Fish and Chips",
//     "French Fries",
//     "Onion Rings",
//   ];
  
  //menu.splice(1, 2, "Veggie Burger", "House Salad", "Teriyaki Tofu");
  // => ["Cheeseburger", "Fish and Chips"]
  
  //menu;

  //const books = ["Beloved", "Giovanni\’s Room", "The Color Purple"];

  //console.log(books.splice(2, 0,  "Kindred", "Love Medicine"));
  // => []
  // the `0` prevents the code from replacing, only adds
  //console.log(books);
  // => ['Beloved', 'Giovanni’s Room', 'Kindred', 'Love Medicine', 'The Color Purple']

/////                                                   REPLACING A SINGLE ELEMENT
//   const cards = [
//     "Ace of Spades",
//     "Jack of Clubs",
//     "Nine of Clubs",
//     "Nine of Diamonds",
//     "Three of Hearts",
//   ];
  
  //console.log(cards[2] = "Ace of Clubs");
  // => "Ace of Clubs"
  
  //console.log(cards);

//   const menu = [
//     "Jalapeno Poppers",
//     "Cheeseburger",
//     "Fish and Chips",
//     "French Fries",
//     "Onion Rings",
//   ];
  
//   const newMenu = [
//     ...menu.slice(0, 1),
//     "Veggie Burger",
//     "House Salad",
//     "Teriyaki Tofu",
//     ...menu.slice(3),
//   ];
  
  //console.log(menu);
  // => ["Jalapeno Poppers", "Cheeseburger", "Fish and Chips", "French Fries", "Onion Rings"]
  
  //console.log(newMenu);
  // => ["Jalapeno Poppers", "Veggie Burger", "House Salad", "Teriyaki Tofu", "French Fries", "Onion Rings"]
// // //  //                               newExample(1)


const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    
     cats.push(name)
}

destructivelyAppendCat("Ralph")


function destructivelyPrependCat(name){
    
    cats.unshift(name)
}
destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat(){

    cats.pop()
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){

    cats.shift()
}
destructivelyRemoveFirstCat()

function appendCat(name){
    const newCats = [...cats, name]
    return newCats

}
appendCat("Joe")

function prependCat(name){
    const newPrependCats = [name, ...cats]
    return newPrependCats

}
newPrependCats("Jim")

function removeLastCat(){
 const newLastCat = [...cats] 
    newLastCat.pop()

    return newLastCat
}
removeLastCat()


function removeFirstCat(){
    const newFirstCat = [...cats] 
       newFirstCat.shift()
   
       return newFirstCat
   }
   removeFirstCat()