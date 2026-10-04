/*let arr=[3,4,6,2]

console.log(arr[3])
//here i declared a const array means i can 
// changed the element but can not assign another array of names arra
const arra=[3,4,5,6,1]

//i havn't dclrd this arr as const so here im 
// creating a new varible named arr->no error
arr=[45,56,34];

console.log(arra[3])

arra[3]=0;
console.log(arra[3]);

console.log(arr[2])


// METHODS //++++++++++++++++++++++++++++++++++++++++


let arr=[1,2,3,4,5]

//console.log(arr);


//arr.push() // arr.pop() 

//arr.shift()->[ 2, 3, 4, 5 ]  
//console.log(arr)
//arr.unshift(6) ->[ 6, 2, 3, 4, 5 ]
console.log(arr.includes(10)) //ask wheter 9 is present in arr
console.log(arr.indexOf(4))//tells us 4 ka index
const newArr= arr.join()

console.log(newArr)

console.log(arr)

console.log(typeof arr)

console.log(typeof newArr)


console.log(Array.isArray(arr))


console.log(Array.isArray(newArr))*/


//slice ns splice//+++++++++++++++++++++
/*let arr=[1,2,3,4,5]

console.log('org', arr)
const sp= arr.slice(1,4)
console.log("slice", sp)
console.log('sliced',arr)

const spl=arr.splice(1,3)
console.log("splice", spl) //splice [ 2, 3, 4 ]

console.log('spliced',arr)//spliced [ 1, 5 ]  ->org array maniplted by splice

*/

////++++ARRAYS 2

let marvel=['thor','capt','hulk']

let dc=['batman','superman','flash']


let arr=marvel+dc

console.log(arr)

//console.log(arr[2])


let all = marvel.concat(dc)

console.log(all)

const faila=[...all];

console.log(faila)

let nArr=[1,2,3,[4,5,6],[7,[8,9,10]]]

const fla= nArr.flat()

console.log(fla)
let name='nikhil'
console.log(Array.from('gupta'))
