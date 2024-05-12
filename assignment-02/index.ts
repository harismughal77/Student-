// Declaring a variable for your favorite movie
let favoriteMovie1: string = ("Malik");
console.log(favoriteMovie1);

// Template string to introduce yourself
let myName: string = "Haris"; // Renamed from 'name' to 'myName' to avoid conflicts
let age: number = 30;
let intro: string = `Hello, my name is ${myName} and I am ${age} years old.`;
console.log(intro);

// Combining first and last names
let firstName: string = "Haris";
let middleName: string = "Nadeem";
let lastName: string = "Hajvery";

let fullName: string = `${firstName} ${middleName} ${lastName}`;
console.log(fullName);

// User's age
let userAge: number = 30;
console.log(userAge);

// Displaying product information
let product_Name: string = "Laptop";
let product_Company: string = "HP";
let product_Model: string = "Zbook";
let product_Price: number = 180000;
let product_Info: string = `The product is a ${product_Company} ${product_Model} ${product_Name} and it costs RS - ${product_Price}.`;
console.log(product_Info);

// Number of pets
let numberOfPets: number = 0;
console.log(numberOfPets);

// Checking if it is your birthday
let is_My_Birthday: boolean = false;
console.log(is_My_Birthday);

// User information
let userInfo: string = `Name: ${firstName} ${middleName} ${lastName}, Age: ${userAge}`;
console.log(userInfo);

// Birth year
const birthYear: number = 1993;
console.log(birthYear);

// Full address from city and country
let city: string = "Lahore";
let country: string = "Pakistan";
let full_Address: string = `${city}, ${country}`;
console.log(full_Address);

// Today's temperature
let temperature: number = 31.5;
console.log(temperature);

// Logging all outputs
console.log(intro, fullName, product_Info, userInfo, full_Address);