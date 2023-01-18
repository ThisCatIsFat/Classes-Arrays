class Shoes {
  /*   the constructor method used in classes so that when a new instance of the class is made, it will include
  the attributes listed in the constructor  */
  constructor(Name, Product_Code, Quantity, Value_per_item) {
    this.Name = Name;
    this.Product_Code = Product_Code;
    this.Quantity = Quantity;
    this.Value_per_item = Value_per_item;
  }
  /*   i thought that along with price, quantity of shoes would be the most often changed value so
  this method means that you can call it as and when to edit the quantity of shoes from any instance  */
  editQuantity(newQuantity) {
    this.Quantity = newQuantity;
  }
}

// 5 instances with information, using the shoe class template:

let shoe1 = new Shoes("Trainers", "W1", 3, 200);
let shoe2 = new Shoes("High Heels", "W2", 5, 350);
let shoe3 = new Shoes("Snow Shoes", "W3", 7, 900);
let shoe4 = new Shoes("Ballet Shoes", "W4", 1, 500);
let shoe5 = new Shoes("Sandals", "W5", 6, 40);

// ARRAY OF ALL INSTANCES
let allShoes = [shoe1, shoe2, shoe3, shoe4, shoe5];

/* you can call the method from within the main class like so and change the quantity 
starting with the name of the shoe instance you want to edit the quantity of :
shoe4.editQuantity("7");  i commented this out as i didn't think this part needed for this task*/

/* FIND MAX

/* i found a great site that helped me understand the reduce function and how it can be applied in this context, this loops through and compares
the number at the current index with the previous one, returning whichever was the highest when the loop is done 
https://daily-dev-tips.com/posts/javascript-find-min-max-from-array-of-objects/ */
const highestValue = allShoes.reduce(function (prev, curr) {
  return curr.Value_per_item > prev.Value_per_item ? curr : prev;
});
console.log(highestValue);

/* FIND MIN

i used the same reduce method as the previous function, all i had to do was change the '>' to a '<' since now i wanted to get the lowest number in the
array */
const lowestValue = allShoes.reduce(function (prev, curr) {
  return curr.Value_per_item < prev.Value_per_item ? curr : prev;
});
console.log(lowestValue);

/* FIND NAME OF SHOE

 wasn't sure how to find an element from an object so i read about the find method and how to use it 
https://www.geeksforgeeks.org/javascript-array-find-method/ */
let findShoes = allShoes.find((shoes) => shoes.Name === "Trainers");
console.log(findShoes);

/* ASCENDING ORDER 

i found some information about the sort method as it accepts a comparator function which i could apply to my code to get the ascending order of spesific key/values in the 
array of objects. This method compares two values and decides which comes first. I decided to use the value per item when ascending, an easy way to see the cheapest/most 
expensive item in a list
https://www.scaler.com/topics/javascript-sort-an-array-of-objects/ */
let sortedOrder = allShoes.sort((a, b) => a.Value_per_item - b.Value_per_item);
console.log(sortedOrder);
