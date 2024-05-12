// Question # 01
console.log("hello! world.");

// Question # 02
let temp:number = 20;
if (temp < 22){
  console.log("it is cold to-day.")
};

// Question # 03
let totalapples: number =  10;
let lessapples: number =  4;
let remainingapples: number =  totalapples - lessapples;
console.log(`mery pass ab sirf ${remainingapples} apples left.`);

// Question # 04
let f_name:string = "Haris";
let l_name:string = "Nadeem";
let full_name:string = f_name + " " + l_name;
console.log(full_name);

// Question # 05
if (7 < 4) {console.log("yes")
}
else{
    console.log("no")
};


//Medium
//Question 06
function calculateArea(radius: number): number {
    if (radius < 0) {
        throw new Error("Radius cannot be negative.");
    }
    return Math.PI * radius ** 2;
}

const radius: number = 10;
const area: number = calculateArea(radius);
console.log(`The area of the circle with radius ${radius} is: ${area}`);


//Question-07
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
};


// Question-08
const temperatures: number[] = [25, 28, 22, 30, 26]; // Array of temperatures

function findHighestTemperature(temps: number[]): number {
    let highestTemp: number = temps[0];
    for (let i = 1; i < temps.length; i++) {
        if (temps[i] > highestTemp) {
            highestTemp = temps[i];
        }
    }
    return highestTemp;
}
const highestTemperature = findHighestTemperature(temperatures);
console.log("The highest temperature is:", highestTemperature);