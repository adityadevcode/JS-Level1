/* Array sort method -build in sort method

const alphaArray = ["zebra","arial", "medium"];
const alphaArray2 = ["zebra","arial", "medium", 3, 1, 1000];
const alphaSort = (array) => {
    if(!array.length)return;
    return array.sort();
}

console.log(alphaSort(alphaArray));
(3) ['arial', 'medium', 'zebra']

console.log(alphaSort(alphaArray2));
(6) [1, 1000, 3, 'arial', 'medium', 'zebra']

//sort numbers for array  ascending desending numbers
const arrayOfNumbers = [1,2344,322,21,555,4];
const numberSortAsc = (array) => {
    if(!array.length) return;
    return array.sort((a,b)=>a-b);
}

console.log(numberSortAsc(arrayOfNumbers));
(6) [1, 4, 21, 322, 555, 2344]

/* descending order we add reverese()
const arrayOfNumbers = [1,2344,322,21,555,4];
const numberSortDes = (array)=> {
    if (!array.length) return;
    return array.sort((a,b) => a-b).reverse();
}

console.log(numberSortDes(arrayOfNumbers));
//(6) [2344, 555, 322, 21, 4, 1]
*/

/*strings and numbers in array
const arrayNumAndString = [1,10000,23,44,2,'a','cat','boy'];

const sortNumbersAndStrings = (array) => {
if(!array.length) return;
const numArray =[];
const strArray =[];
array.forEach(el => {
    isNaN(el) ? strArray.push(el) : numArray.push(el);
});
strArray.sort();
numArray.sort((a,b) => a-b);
return [...numArray, ...strArray];
}

console.log(sortNumbersAndStrings(arrayNumAndString));
//(8) [1, 2, 23, 44, 10000, 'a', 'boy', 'cat']
*/

///////////////////////////////////

















