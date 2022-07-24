////////////////////////////////////////////////////////////////////////
///////////////////////////Functional Programming///////////////////////
////////////////////////////////////////////////////////////////////////
// 
// Section 1: Learn About Functional Programming
// 
// Functional programming is a style of programming where solutions are simple, 
// isolated functions, without any side effects outside of the function 
// scope: INPUT -> PROCESS -> OUTPUT

// Functional programming is about:

// Isolated functions - there is no dependence on the state of the program, 
// which includes global variables that are subject to change

// Pure functions - the same input always gives the same output

// Functions with limited side effects - any changes, or mutations, 
// to the state of the program outside the function are carefully controlled


// Function that returns a string representing a cup of green tea
// const prepareTea = () => 'greenTea';

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (numOfCups) => {
//     const teaCups = [];

//     for (let cups = 1; cups <= numOfCups; cups += 1) {
//         const teaCup = prepareTea();
//         teaCups.push(teaCup);
//     }
//     return teaCups;
// };

// // Only change code below this line
// const tea4TeamFCC = getTea(40);
// // Only change code above this line

//////////////////////////////////////////////////////////////////////////

// 
// Section 2: Understand Functional Programming Terminology
// 
// Prepare 27 cups of green tea and 13 cups of black tea and store them 
// in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. 
// Note that the getTea function has been modified so it now takes a function as the first argument.
// Note: The data (the number of cups of tea) is supplied as the last argument. 
// We'll discuss this more in later lessons.

// Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => 'greenTea';

// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => 'blackTea';

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (prepareTea, numOfCups) => {
//     const teaCups = [];

//     for (let cups = 1; cups <= numOfCups; cups += 1) {
//         const teaCup = prepareTea();
//         teaCups.push(teaCup);
//     }
//     return teaCups;
// };

// // Only change code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// // Only change code above this line

// console.log(
//     tea4GreenTeamFCC,
//     tea4BlackTeamFCC
// );
//////////////////////////////////////////////////////////////////////////


// 
// Section 3: Understand the Hazards of Using Imperative Code
// 
// tabs is an array of titles of each site open within the window
// const Window = function (tabs) {
//     this.tabs = tabs; // We keep a record of the array inside the object
// };

// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//     this.tabs = this.tabs.concat(otherWindow.tabs);
//     return this;
// };

// // When you open a new tab at the end
// Window.prototype.tabOpen = function (tab) {
//     this.tabs.push('new tab'); // Let's open a new tab for now
//     return this;
// };

// // When you close a tab
// Window.prototype.tabClose = function (index) {

//     // Only change code below this line

//     const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
//     const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

//     this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

//     // Only change code above this line

//     return this;
// };

// // Let's create three browser windows
// const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
// const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
// const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// // Now perform the tab opening, closing, and other operations
// const finalTabs = socialWindow
//     .tabOpen() // Open a new tab for cat memes
//     .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//     .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);

//////////////////////////////////////////////////////////////////////////


// 
// Section 4: Avoid Mutations and Side Effects Using Functional Programming
// 
// 
// Recall that in functional programming, changing or altering things is called mutation, 
// and the outcome is called a side effect. A function, ideally, should be a pure function, 
// meaning that it does not cause any side effects.
// 
// Let's try to master the functional programming  discipline and not alter any variable or object in our code.
// 
// Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.


// The global variable
// let fixedValue = 4;

// function incrementer() {
//     // Only change code below this line

//     return fixedValue + 1
//     // Only change code above this line
// }

// console.log(incrementer())
// console.log(fixedValue)
//////////////////////////////////////////////////////////////////////////




// 
// Section 5: Pass Arguments to Avoid External Dependence in a Function
// 
// 
// Another principle of functional programming is to always declare your dependencies explicitly. 
// This means if a function depends on a variable or object being present, then pass that variable or 
// object directly into the function as an argument.

// Let's update the incrementer function to clearly declare its dependencies.

// Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.

// The global variable
// let fixedValue = 4;
// // Only change code below this line
// function incrementer(arg) {
//     return arg + 1
//     // Only change code above this line
// }

//////////////////////////////////////////////////////////////////////////



// 
// Section 6: Refactor Global Variables Out of Functions
// 
// 
// Rewrite the code so the global array bookList is not changed inside either function. 
// The add function should add the given bookName to the end of the array passed to it and return a new array (list). 
// The remove function should remove the given bookName from the array passed to it.

// Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arra, bookName) {
    const newArra = [...arra]
    newArra.push(bookName);
    return newArra;

    // Change code above this line
}

// Change code below this line
function remove(arra, bookName) {
    const newArra = [...arra]
    const indexOfItem = newArra.indexOf(bookName);
    if (indexOfItem >= 0) {

        newArra.splice(indexOfItem, 1);
        return newArra;

        // Change code above this line
    }
}
console.log(add("KLK"))

//////////////////////////////////////////////////////////////////////////