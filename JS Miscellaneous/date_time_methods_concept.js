const millisecondsTime = Date.now();
console.log(millisecondsTime);//1693393542497

//? get day of the month
const time = new Date;
console.log(time.getDate());//30


//!Formatting a Date

const currentDate = new Date();
console.log(currentDate.getDate());//30 today's date
console.log(currentDate.getMonth());// 7+1 ~= 8 // current month
console.log(currentDate.getFullYear());//2023 current year