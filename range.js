

function range(start, end, step) {
  var rangeCounter = []
  if ( start === false || end === false || step === false) {
    return []
  }
  else if (start > end) {
    return []
  }
  else if (step < 0) {
    return []
  }
  else {
    for (let counter = start ; counter <= end ; counter = counter + step){
      rangeCounter.push(counter)
    }
    return rangeCounter

  }
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));