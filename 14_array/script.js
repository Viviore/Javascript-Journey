//array = a vairable like structure that can hold more than 1 value

let fruits = ["watermelon" ,"apple", "orange", "banana"];

fruits[0] = "coconut" //reassign specific value in array

/* fruits.push("durian"); //adds new value end of the array
fruits.pop() //removes element of the end of the array
fruits.unshift("mango"); //adds new value start of the array
fruits.shift("") //removes element of the start of the array */


for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    
    
}

for (let i = fruits.length - 1; i > 0; i--) {
    console.log(fruits[i]);
    
}

