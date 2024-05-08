const decbtn = document.getElementById("dec-btn");
const reset = document.getElementById("reset-btn");
const Incbtn = document.getElementById("inc-btn");
const countlabel = document.getElementById("count");

let count = 0;

Incbtn.onclick = function () {
  count++;
  countlabel.textContent = count;
};
decbtn.onclick = function () {
  count--;
  countlabel.textContent = count;
};
reset.onclick = function () {
  count = 0;
  countlabel.textContent = count;
};

//Maths
console.log(Math.PI);
console.log(Math.E);

let x = 144;
let y = 2;
let z;
// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x); //point ni agad ni value
// z = Math.trunc(x); //poin tpachi nu jature
// z = Math.pow(x, y);
z = Math.sqrt(x);

console.log(z);

//Random
const min = 50;
const max = 100;
let random = Math.floor(Math.random() * (max - min)) + min;
console.log(random);

//Checkbox

const checkbox = document.getElementById("check");
const visabtn = document.getElementById("visabtn");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const add = document.getElementById("add");
const subres = document.getElementById("subres");
const payment = document.getElementById("payment");

add.onclick = function () {
  if (checkbox.checked) {
    subres.textContent = `You are Subscribed`;
  } else {
    subres.textContent = `You are Not Subscribed`;
  }
  if (visabtn.checked) {
    payment.textContent = `You are paying with visa`;
  } else if (mastercard.checked) {
    payment.textContent = `You are paying with Mastercard`;
  } else if (paypal.checked) {
    payment.textContent = `You are paying with Paypal`;
  } else {
    payment.textContent = `You must select payment side`;
  }
};

//ternary
let age = 21;
let message = age >= 22 ? "you are adult" : "youre a minor";
console.log(message);

let time = 16;
let greet = time < 12 ? "good Moorinig" : "Good Noon";
console.log(greet);

let isStudent = false;
let ans = isStudent ? " you are a student" : "you are not a student";
console.log(ans);

let purchase = 99;
let discount = purchase >= 100 ? 10 : 0;
console.log(`you total is  $${purchase - purchase * (discount / 100)}`);

function getrandomrole() {
  const role = ["ADMIN", "USER", "GUEST"];
  console.log("role", role);
  return role[Math.floor(Math.random() * role.length)];
}

function getrandomUserName() {
  const name = "lksdsnfilnfng";
  console.log("name", name);
  let usenamee = "";
  for (let i = 0; i < 8; i++) {
    usenamee += name.charAt(Math.floor(Math.random() * name.length));
    console.log("hi"); // Add this line to log the usenamee variable
  }
  console.log(usenamee); // Move this line outside the loop and before the return statement
  return usenamee;
}
