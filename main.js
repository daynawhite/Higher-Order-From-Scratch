// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.

const myArray = [2,4,6,8]
mapFunction = (arr) => {
    let newArr = []
    for (let i=0; i <= arr.length-1; i++) {
        newArr[i] = arr[i] * 10
    }
    console.log(newArr)
}
mapFunction(myArray)

// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
// This was done in class by the teacher (not required for assignment).

// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.
const myArray2 = [1,2,3,4,5,6,7,8,9]
filterFunction = (arr) => {
    let newArr = []
    for (let i=0; i <= arr.length-1; i++) {
        if (arr[i] % 3 === 0) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}
filterFunction(myArray2)