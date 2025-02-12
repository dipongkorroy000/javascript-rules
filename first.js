// type-1--->
// var fullName = 'dipongkorroy';
// console.log(typeof fullName);

//type-2--->
// var first = 0.1;
// var second = 0.2;
// var total = first + second;
// console.log(total.toFixed(3));

// type-3--->
// let price = 40;
// price += 10; //price = price + 10;
// price -= 15; //price = price - 15;
// price *= 3; //price = price * 3;
// price /= 2; //price = price / 2;
// console.log(price);

//type-4--->
// console.log(10 == '10'); //true
// console.log(10 === '10'); //false

//type-5--->
// let a = 5;
// let b = 6;
// let studentAb = true;
// if((a >= 5 && b >= 5) || studentAb == true){
//     console.log('you can take');
// }

// type-6--array->
// let numbers = [55,23,24,16,59,75,52,34];
// console.log(Array.isArray(numbers)); // test the numbers attribute type---
// console.log(numbers.length);
// console.log(numbers[3]);
// numbers[3] = 25; //update 3 number index---
// numbers.unshift(44,64); // add number first---
// numbers.push(39,99); // add number last---
// numbers.shift(); // remove the num fast---
// numbers.pop() // remove the num last---
// console.log(numbers.includes(52)); //finding number---
// console.log(numbers.indexOf(52)); // finding index number to 52---

// type-7-loop--
// let students = ['rahim','karim','jadu','madu','sajjat'];
// for(let a of students){
//     console.log(a);
// }
// alternative ---
// let students = 1;
// while(students <= 10){
//     console.log(students);
//     students++;
// }

//do-while --->
// let s = 5;
// do{
//     console.log(s);
//     s++;
// }
// while(s < 5);

//type-8-string-vs-array--->
// let fullName = 'rahimrana';
// console.log(fullName.length);
// console.log(fullName[3]);
// fullName[3] = 'y' // not change because string is immutable--
// console.log(fullName);

// let flowerName = ['golap','joba','sondha maloti'];
// flowerName[2] = 'puspa'; // changed the value, array is mutable---
// console.log(flowerName);

//type-9-lowercase-uppercase-&-trim->
// let schoolName = 'North IDEAL Academy';
// console.log(schoolName);
// console.log(schoolName.toLowerCase());
// console.log(schoolName.toUpperCase());
// //example---
// let a = 'sakib';
// let b = 'SaKib';
// console.log(a.toLowerCase() === b.toLocaleLowerCase()) // string character equal---
//example
// let drink = 'water'
// let liquid = 'water '
// console.log(drink.trim() == liquid.trim()); // trim just side space out ---

//type-10-
