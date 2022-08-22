// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("liarLiarPantsOnFire") = () => {
     it("iterates over an array, pushing to new array, the sum oflast 2 numbers in array"), () => {
      expect(liarLiarPantsOnFire(fiblength1)).toEqual([1, 1, 2, 3, 5, 8]);
        expect(liarLiarPantsOnFire(fiblength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
        }}
// 
// DID IT PASS BEFORE FUNCTION?!?!?!?!?!?!: YES, AND NO, THERE WAS NO FUNCTION!
// b) Create the function that makes the test pass.
// pseudocode: make a function that outputs an array with the length = Fiblength1 or 2.
// create a loop that starts on index 2 and that index is equal to the sum of the prior 2 indexes and the loop length is the fiblength. 

const liarLiarPantsOnFire = (number) => {
    let newArr = [0, 1];
    for (let i = 2; i <= number; i++){
      newArr.push(newArr[i - 2] + newArr[i - 1])

    }
    return newArr.slice(1)
    
  }
 // DID IT PASS AFTER ADDING FUNCTION?!?!?!?!?!?!: YES, AND YES!

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("completeShiteToGOAT") = () => {
     it("iterates over an array, checking make sure is number and is odd"), () => {
      expect(completeShiteToGOAT(fullArr1)).toEqual([-9, 7, 9, 199]);
        expect(completeShiteToGOAT(fullArr2)).toEqual([-823, 7, 23]);
        }}

// DID IT PASS BEFORE FUNCTION?!?!?!?!?!?!: YES, AND NO, THERE WAS NO FUNCTION!
// b) Create the function that makes the test pass.
// pseudo: create a function "completeShiteToGOAT" that iterates over an array  and returns the index if the value has a remainder when divided by 2, meaning its odd and it is a number and not somehting else. to achieve said awesomness i will use %2!==0 to get odd numbers and then use newArrianaGrande.sort((a,b)(a-b))
const completeShiteToGOAT = (array) => {
    let newArrianaGrande = []
    for(let i=0; i<array.length; i++){
        if (array[i] %2 !== 0 && typeof(array[i]) === 'number'){
            newArrianaGrande.push(array[i])
        }
    }
    return newArrianaGrande.sort((a,b) =>a-b)
}
 // DID IT PASS AFTER ADDING FUNCTION?!?!?!?!?!?!: YES, AND YES!


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

describe("rapunzelRapunzelLetDownYourHair") = () => {
     it("iterates over an array, add value at i with value at i-1"), () => {
        expect(rapunzelRapunzelLetDownYourHair(numbersToAdd1)).toEqual([2, 6, 51, 60]);
        expect(rapunzelRapunzelLetDownYourHair(numbersToAdd2)).toEqual([0, 7, -1, 11]);
        expect(rapunzelRapunzelLetDownYourHair(numbersToAdd2)).toEqual([]);
        }}

// DID IT PASS BEFORE FUNCTION?!?!?!?!?!?!: YES, AND NO, THERE WAS NO FUNCTION!
// b) Create the function that makes the test pass.
// Pseudocode: create a function named "rapunzelRapunzelLetDownYourHair, iterate all over rapunzels hair, instead of taking whatever result we get and adding it to a new array we will toss it right back into the one started with that way as the numbers at each index change it will be reflected at the end result. it took me a while to realize this. was very annoyed. 

const rapunzelRapunzelLetDownYourHair = (array) => {
   for(i = 1; i < array.length; i++){
     array[i] = array[i] + array[i - 1]
   }
   return array
 }
 // DID IT PASS AFTER ADDING FUNCTION?!?!?!?!?!?!: YES, AND YES!

 