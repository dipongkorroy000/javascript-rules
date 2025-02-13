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

// type-6--array--->
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

// type-7-loop--->
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

//type-9-lowercase-uppercase-&-trim--->
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

// type-10-string part need-slice(),--->
// let fullName = 'dipongkorroy';
// console.log(fullName.slice(0,3)); // result- dip---

// type-11-string-&-array-- split()---->
// let schoolName = 'North IDEAL Academy';
// console.log(schoolName.split(' ')); //result- [ 'North', 'IDEAL', 'Academy' ]---
// again example---
// let students = 'rahim,karim,jadu,madu,sajjat';
// console.log(students.split(',')); // result- [ 'rahim', 'karim', 'jadu', 'madu', 'sajjat' ]---

// type-12-array-&-string--join()---->
// let flowerName = ['golap','joba','sondha maloti'];
// console.log(flowerName.join()); // result--string out---

// let students = ['rahim','karim','jadu','madu','sajjat'];
// console.log(students.join('|')); 
// console.log(students.join('-'));

// type-13--string join- concat()--->
// let first = 'hero';
// let last = 'alom';
// console.log(first + ' ' + last);
// // alternative --
// console.log(first.concat(' ').concat(last));

// type-14-string reverse--->
// let demoName = 'I am learning Web Dev.';

// let s = '';
// for(let d of demoName){
//     s = d + s;
// }
// console.log(s);

//alternative---
// let s = '';
// for(let d = 0;d < demoName.length;d++){
//     s = demoName[d] + s;
// }
// console.log(s);

//alternative---
// let s = demoName.split('').reverse().join('');
// console.log(s);

// type-15--objects-1--->
// let person = {
//     fullName: 'mahabub alom',
//     age: 25,
//     married: false,
//     'fav places': ['ramsagor','kuakata','bandorban','jaflaong']
// }

// all key/property showing---
// console.log(Object.keys(person));
// console.log(Object.values(person));

//finding key/property value---
// console.log(typeof person);
// console.log(person.fullName); //or--
// console.log(person['fullName']);
// console.log(person["fav places"]); // must be-for array--

//update/change value---
// person.fullName = 'jankar mahabub vai'; // or--
// person['age'] = 28;
// person['fav places'] = ['suksagor','coxbazar'];
// console.log(person);

//finding name-variable system---
// let d = 'fullName';
// console.log(person[d]);

// update name-variable system---
// let s = 'fullName';
// person[s] = 'mahabub';
// console.log(person);

// type-16-object-2--->
// let college = {
//     fullName: 'ADC',
//     class: ['11','12'],
//     events: ['science fair','bijoy dibos','21 feb'],
//     students: {
//         class11: 512,
//         class12: {
//             gpa: 60,
//             merit: 'top'
//         }
//     }
// }

//finding key/property value---
// console.log(college.students.class11);
// console.log(college.students.class12.gpa);
// console.log(college.events[1]);

//update/change value---
// college.students.class12.gpa = 58;
// college.events[1] = '16 december';

// // key/property delete---
// delete college.fullName;

// console.log(college);

// type-17-object-3--->
// let mobile = {
//     brand: 'samsung',
//     price: 25000,
//     color: 'white',
//     camera: '12mp'
// }

// all key & value showing step by step---
// for(let s in mobile){
//     console.log(s);
//     console.log(mobile[s]);
// } 

// all key & value showing one by one---
// for(let s in mobile){
//     console.log(s,mobile[s]);
// }
// //or object literal--
// for(let s in mobile){
//     console.log(s,':',mobile[s]);
// }

// key showing array---
// console.log(Object.keys(mobile));

// alternative key showing loop---
// for(let d in mobile){
//     console.log(d);
// }

// type-18-object create method--->
//1. let pen = {};
//2. let pen = new Object();
//3. let pen = Object.create();

// type-19--->
// let friends = ['jadu','madu','kadu','raju','saju'];
// for(let friend of friends){
//     console.log(friend);
// }

//alternative--
// for(let s = 0;s < friends.length;s++){
//     console.log(friends[s]);
// }

//alternative--
// let s = 0;
// while(s < friends.length){
//     console.log(friends[s]);
//     s++;
// }

// type-20--reverse items--->
// let numbers = [20,22,24,26,34,46,54];
// console.log(n.reverse());

//alternative--
// let div = [];
// for(let s of numbers){
//    div.unshift(s);
// }
// console.log(div);

//alternative--
// let div = [];
// for(s = 0;s < numbers.length;s++){
//     div.unshift(numbers[s]);
// }
// console.log(div);

//alternative-double step-
// let div = [];
// for(let i = numbers.length -1;i >= 0;i--){
//     console.log(numbers[i]);
//     div.push(numbers[i])
// }
// console.log(div);

// type-21--->
// sort-ascending-ASCII-Binary Character Table- following---
// not working-10,11,12.....--ABC....

// let rollNum = [4,3,5,1,7,6,8,9]; 
// console.log(rollNum.sort());

// let friends = ['dal','apple','eat','banana','cat'];
// console.log(friends.sort());
