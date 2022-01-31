// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 

// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।




// ============== Solution ==============

// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে

function findFarenheit(cel){
    return far = (cel * 9 / 5) + 32;
}

let farOfHundred = findFarenheit(100);
// console.log(farOfHundred);




// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

function findCelsius(faren){
    let cel = (faren - 32) * 5/9; 
    let celsius = parseFloat(cel.toFixed(2));
    return celsius;
}

// console.log(findCelsius(100));




// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

function yourGrade(mark){
    if(mark >= 80 && mark <= 100){
        console.log(`You got A+.`);
    } else if(mark >= 70 && mark <= 79){
        console.log(`You got A.`);
    } else if(mark >= 60 && mark <= 69){
        console.log(`You got B.`);
    } else if(mark >= 50 && mark <= 59){
        console.log(`You got C.`);
    } else if(mark >= 40 && mark <= 49){
        console.log(`You got D.`);
    } else if(mark >= 33 && mark <= 39){
        console.log(`You got E.`);
    } else if(mark >= 1 && mark <= 32){ 
        console.log(`You're Failed.`);
    } else{
        console.log(`Please Input your valid Number.`);
    }
}


    // let sakibsGrade = yourGrade(89);




// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।

function getInterest(capital, parcent){
    let i = capital * parcent / 100;
    console.log(`You want ${parcent}% interest on ${capital}. Interest = ${i}`);
}

//  (getInterest(10000, 14));












//  বেসিক জাভাস্ক্রিপ্ট চেকলিস্ট 

// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 

// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 

// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো




// =============== Solution ===============

// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 

var myName = 'Riyad';

let age = 22;

const isMuslim = true;



// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 

// First Way
var int = 1;
var text = '';
while(int <= 100){
    text += ` ${int}, `;
    int++;
}

// console.log('Numbers fromt 1 to 100 are:' + text);

// Second Way
let number = '';
for(let i = 1; i <= 100; i++){
    number += `The Number is ${i}. `
}

// console.log(number);



// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 

let fifty = 50;
let evenNumber = '';
for(let i = fifty; i <= 80; i += 2){
    evenNumber += ` ${i} `;
}

// console.log(`The even Numbers from 50 to 80 are: ${evenNumber}`);



// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো

function addThreeNum(num1, num2, num3){
    return sum = num1 + num2 + num3;
}

console.log(`The Sum of three Numbers is: ${addThreeNum(4, 5, 9)}.`);