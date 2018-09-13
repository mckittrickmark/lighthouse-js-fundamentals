function concat (baseArray, array2) {
  var counter = 0;
  length2 = array2.length - 1
  for (var i = 0 ; i <= length2 ; i++) {
    workingVar = array2[i];
    //console.log(workingVar);
    baseArray.push(workingVar);
  }
  return baseArray
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);