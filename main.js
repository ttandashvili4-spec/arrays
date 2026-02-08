// homework 1

const arr1 = ["toko", "tanashvili", 20, 1, true, false];
console.log(arr1);

arr1[1] = "tornike";
console.log(arr1);

arr1[3] = 2;
console.log(arr1);

const lastIndex = arr1.length - 1;
arr1[lastIndex] = true;
console.log(arr1);

// homework 2

const fruits = ["banana", "apple", "melon", "orange"];

if (fruits.indexOf("banana") !== -1) {
    console.log("this array contains banana. index is: " + fruits.indexOf("banana"));
} else {
    console.log("this array does not contain banana");
}

// homework 3

const movies = ["Insidious", "Batman", "Interstellar", "MysterySkin"];

if (movies.includes("Batman")) {
    console.log("this array contains Batman");
} else {
    console.log("this array does not contain Batman");
}

// homework 4

const texts = ["hello", "world", "javascript", "is", "interesting"];

texts[1] = texts[1].toUpperCase();
console.log(texts);

texts[4] = texts[4].toUpperCase();
console.log(texts);

// homework 5

let str1 = ["    hello      "];
console.log(str1[0].trim());