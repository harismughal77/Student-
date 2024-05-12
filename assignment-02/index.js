"use strict";
// Declaring a variable for your favorite movie
let favoriteMovie1 = ("Malik");
console.log(favoriteMovie1);
// Template string to introduce yourself
let myName = "Haris"; // Renamed from 'name' to 'myName' to avoid conflicts
let age = 30;
let intro = `Hello, my name is ${myName} and I am ${age} years old.`;
console.log(intro);
// Combining first and last names
let firstName = "Haris";
let middleName = "Nadeem";
let lastName = "Hajvery";
let fullName = `${firstName} ${middleName} ${lastName}`;
console.log(fullName);
// User's age
let userAge = 30;
console.log(userAge);
// Displaying product information
let product_Name = "Laptop";
let product_Company = "HP";
let product_Model = "Zbook";
let product_Price = 180000;
let product_Info = `The product is a ${product_Company} ${product_Model} ${product_Name} and it costs RS - ${product_Price}.`;
console.log(product_Info);
// Number of pets
let numberOfPets = 0;
console.log(numberOfPets);
// Checking if it is your birthday
let is_My_Birthday = false;
console.log(is_My_Birthday);
// User information
let userInfo = `Name: ${firstName} ${middleName} ${lastName}, Age: ${userAge}`;
console.log(userInfo);
// Birth year
const birthYear = 1993;
console.log(birthYear);
// Full address from city and country
let city = "Lahore";
let country = "Pakistan";
let full_Address = `${city}, ${country}`;
console.log(full_Address);
// Today's temperature
let temperature = 31.5;
console.log(temperature);
// Logging all outputs
console.log(intro, fullName, product_Info, userInfo, full_Address);
