var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
length = ingredients.length
count1 = 0

while (count1 < length) {
  console.log(ingredients[count1]);
  count1 ++
}


// Write a for loop that prints out the contents of ingredients:

for (var i = 0 ; i < length ; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var i = length ; i >= 0 ; i--) {
  console.log(ingredients[i]);
}