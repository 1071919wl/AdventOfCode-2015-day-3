// const fs = require('fs');
// var text = fs.readFileSync("./simple.txt").toString('utf-8');
// var textByLine = text.split("")


// const textByLine = [
//   '^', '^', '<', '<', 'v',
//   '<', '<', 'v', '>', '<',
//   'v', '^', '^', '<', '>',
//   '<', '>', '^', '^', '<'
// ]

const textByLine = [
  '^', '>', 'v', '<', '^', '>', 'v', '<'
]

let convert = [];
let newList = [];

for (let a=0; a<textByLine.length; a++){
  if (textByLine[a]==="^"){
    convert.push([0,1]);
  }else if (textByLine[a]==="<"){
    convert.push([-1,0]);
  }else if (textByLine[a]==="v"){
    convert.push([0, -1]);
  }else {
    convert.push([1, 0]);
  }
}
// console.log (convert);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~CONVERTS TO ARRAY IN ARRAY

// var test = [
//   [ 0, 1 ], [ 1, 0 ], [ 1, 0 ]
// ]
// var sum =[];
// var hello = test.reduce(function(a, b){
    // return a.map(function(v,i){
    //     return v+b[i];
//     });
// });
//
// console.log(hello);
// console.log(sum);

                      // SOLUTION ABOVE
//
// for (let b=0; b<test.length; b++){
//
// }

// let array1 = [ 0, 1 ];
// let array2 = [ 1, 0 ];
// var sum = [];
//
// for(let i = 0; i < test.length; i++){
//       sum.push(test[0][i]+test[1][i]);
// }
// console.log(sum);


// var sum1=[];
// for(let i = 0; i < test[0].length; i++){
//    sum1.push(array1[i]+array2[i]);
// }
// console.log (sum1);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ADDS THE ARRAYS

var test1 = [
  [ 0, 1 ], [ 1, 0 ], [ 1, 0 ]
];
var test2 = [
  [ 1, 0 ], [ 1, 0 ]
];
var sum =[[0, 0]];
var sum2 =[];

var array1 = test1[0]
var array2 = test2[0]

for(let i = 0; i < test1[0].length; i++){
        sum2.push(array1[i]+array2[i]);

}

sum.push(sum2);
console.log(sum2);




