//1.introduct
// 2.variable
// 3.oprater
// 4.funcation
// 5.object
// 6.array
// 7.loop
// 8.basic awit asyn
// 9.onclick event
// 10. basic DOM (DOM change HTML CSS style)

// 2.variable
let name = "Toch Meng";
name = "HEng";
console.log(name);
// 3.oprater
let a = 10;
let b = 10;
const result = a + b;
const result1 = a - b;
const result2 = a * b;
const result3 = a / b;
console.log(result, result1, result2, result3);
// concate strnig
let f = "chin";
let l = "hav";
let data = f + l;
console.log(data);

// 4.funcation
function plush() {
  let a = 10;
  let b = 20;
  let result = a + b;
  console.log(result);
}

plush1();
function plush1(a, b) {
  return a + b;
}

const mun = plush1(20, 20);
console.log(mun);
// 4.funcation

// 5.object
// const c = { property a:  value :"10" };
const c = { a: "10" };
console.log(typeof c.a);

// 6.array
let ar = [1, 2, 4, 5, 6, 10];

// join all in arry for map it

console.log(ar.join(" * "));

// this one it can get data first in arry to display

console.log(ar.shift());

// this one it can add data first in arry to display

console.log(ar.unshift("get start"));

// ar.map((a) => {
//   console.log(a);
// });
// ar.forEach((a) => {
//   console.log(a);
// });
for (let i = 0; i < ar.length; i++) {
  const data = ar[i];

  if (data == 6) {
    ar.shift();
  }
  console.log("this is me at arry break " + data);
}
// it can push arr to 2 line arry to one arry by use it
const first = ["meng"];
const last = ["heng"];
const next = ["heee"];
const myname = first.concat(last, next, "henggg");
console.log(myname);

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// this is use for make arry alot in one
console.log(myArr.flat());

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let sh = fruits.splice(1, 0);
console.log(sh);

// short arry for small to hight
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);

// If the result is negative, a is sorted before b.

// If the result is positive, b is sorted before a.

// find max muber in arry
const arrayMAx = (arr) => {
  return Math.max.apply(null, arr);
};
const arraymin = (arr) => {
  return Math.min.apply(null, arr);
};
console.log(arrayMAx(points));
console.log(arraymin(points));

// basic awit asyn
let me = document.querySelector("#me");
let more = 0;

function hi() {
  if (more == 0) {
    me.style.backgroundColor = "red";
    more = 1;
  } else {
    me.style.backgroundColor = "black";
    more = 0;
  }
}
