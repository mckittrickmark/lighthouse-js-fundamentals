function lastIndexOf (array, num) {
  var includes1 = array.includes(num)
  if ( includes1 === false) {
    return -1
  }
  else {
    var length2 = (array.length -1)
    for (var i = length2 ; i > 0 ; i--) {

      if ( array[i] === num) {
        return i * 1 ;
        break
      }
    }
  }
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

console.log(lastIndexOf([3],3), "=?", 0);