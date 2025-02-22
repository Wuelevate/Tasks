// Higher Order Functions using Prototype

const arr = [1, 2, 3, 4, 5, 6];

// Custom Map Function
Array.prototype.customMap = function(mapCallback) {
    // console.log(this);
    let result = [];
    for(let i=0; i<this.length; i++) {
        result.push(mapCallback(this[i], i, this));
    }
    return result;
}

// console.log(arr.customMap(num => num*2));


// Custom Filter Function
Object.prototype.customFilter = function(filterCallback) {
    let result = [];
    for(let i=0; i<this.length; i++) {
        if(filterCallback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

// console.log(arr.customFilter(num =>  num%3 === 0));

// Custom Reduce Function
Object.prototype.customReduce = function(reduceCallback, initialValue) {
    let accumulator = initialValue ?? this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = reduceCallback(accumulator, this[i], i, this);
    }
    return accumulator;
}

// console.log(arr.customReduce((acc, num) => acc + num));




// MultiplyByN Function
Array.prototype.multiplyByN = function(n=3) {
    let result = [];
    for(let i=0; i<this.length; i++) {
        result.push(this[i]*n);
    }
    return result;
    }
  
// console.log(arr.multiplyByN(4));




//Find True Length of String
let str = "    aniruddha   ";

String.prototype.actualLength = function() {
    let result = this.trim().length;
    return result;
}
// console.log(str.length);
// console.log(str.actualLength());



// Destructuring Arrays
let [first, second, third] = arr;
// console.log(first, second, third);



// Destructuring Objects
const obj = {
    name: "Aniruddha",
    age: 23,
    email: "xyz@gmail.com",
    address: "Mumbai"
}

let {name: username, email: gmail} = obj;
// console.log(username, gmail);
