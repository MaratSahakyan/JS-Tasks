// Task - 1

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){
    return numbers.reduce((a,e) => a + e * e, 0);
  }
  

// Tsak - 2

// In this simple assignment you are given a number and have to make it negative.But maybe the number is already negative ?
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    return !num || num < 0 ? num : num*-1
}


// Task - 3
  
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]


function friend(friends){
    return friends.filter(e => e.length === 4)
}
   

// Task - 4

// In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.
// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]

function solve(arr){
  if(!arr) return arr;
  arr = arr.sort((a, b) => a-b)
  let addItem = [];
  let result = arr.reduce((a, e, i) => {
    if(arr.indexOf(e) !== arr.lastIndexOf(e)){
      return a.concat(e)
    } else {
      addItem.push(e)
    }
  return a
  }, []);
  
  return result.concat(addItem);

}


// Task 5
// deepCopy object

function deepCopy(obj){
  return Object.keys(obj).reduce((objCopy, elem) => {
      if (typeof obj[elem] !== "object" || obj[elem] === null){
          objCopy[elem] = obj[elem];
      } else {
          objCopy[elem] = deepCopy(obj[elem]);
      }
      return objCopy;
  }, Array.isArray(obj) ? [] : {});
}

// task 6
// array range   range(1, 5)  => [2, 3, 4]

function range(x,y){
  if(x + 1 < y ) return [x + 1].concat(range(++x,y));
  return [];
}
