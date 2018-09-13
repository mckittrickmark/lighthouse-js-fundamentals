function loopyLighthouse (startNum, endNum) {
  for (var i = startNum ; i <= 200 ; i++){
    if ((i % 3) === 0 && (i % 4) === 0){
      console.log("LoopyLighthouse");
    }
    else if ((i % 3) === 0){
      console.log("Loopy");
    }
    else if ((i % 4) === 0) {
      console.log("Lighthouse");
    }
    else {
      console.log(i);
    }
  }
}

loopyLighthouse(100, 200)