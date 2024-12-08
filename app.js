let selectedCurrency = document.querySelector('#select')
let convertedCurrency = document.querySelector('#convert')
let Btn = document.getElementById('submit')
// let eur = document.querySelector('.EUR')
// let inr = document.querySelector('.INR')
let input = document.getElementById('input')
let para = document.querySelector('#p')

const EUR_INR = 90.5;
const EUR_PKR = 293.8;
const EUR_USD = 1.6;

const PKR_USD = 0.0036;
const PKR_INR = 0.30;
const PKR_EUR = 0.0034;

const INR_USD = 0.012;
const INR_PKR = 3.28;
const INR_EUR = 0.011;

const USD_PKR = 277.8;
const USD_INR = 84.6;
const USD_EUR = 0.94;

// var inputValue = input.ariaValueText;

Btn.addEventListener('click', function test(){
    // selectedCurrency.value
   if(selectedCurrency.value === "EUR" && convertedCurrency.value === "INR"){
    var totalValue = Number(EUR_INR * input.value);
    para.innerHTML = totalValue
   }
   else if(selectedCurrency.value === "EUR" && convertedCurrency.value === "PKR"){
    var totalValue = Number(EUR_PKR * input.value);
    para.innerHTML = totalValue
   }
   else if(selectedCurrency.value === "EUR" && convertedCurrency.value === "USD"){
    var totalValue = Number(EUR_USD * input.value);
    para.innerHTML = totalValue
   }
   else if(selectedCurrency.value === "PKR" && convertedCurrency.value === "INR"){
    var totalValue = Number(PKR_INR * input.value);
    para.innerHTML = totalValue
   }
   else if(selectedCurrency.value === "PKR" && convertedCurrency.value === "USD"){
    var totalValue = Number(PKR_USD * input.value);
    para.innerHTML = totalValue
   }
   else if(selectedCurrency.value === "PKR" && convertedCurrency.value === "EUR"){
    var totalValue = Number(PKR_EUR * input.value);
    para.innerHTML = totalValue
   }
   else if(selectedCurrency.value === "INR" && convertedCurrency.value === "PKR"){
    var totalValue = Number(INR_PKR * input.value);
    para.innerHTML = totalValue
   }
   else if(selectedCurrency.value === "INR" && convertedCurrency.value === "USD"){
    var totalValue = Number(INR_USD * input.value);
    para.innerHTML = totalValue
   }
   else if(selectedCurrency.value === "INR" && convertedCurrency.value === "EUR"){
    var totalValue = Number(INR_EUR * input.value);
    para.innerHTML = totalValue
   }
   else if(selectedCurrency.value === "USD" && convertedCurrency.value === "INR"){
    var totalValue = Number(USD_INR * input.value);
    para.innerHTML = totalValue
   }
   else if(selectedCurrency.value === "USD" && convertedCurrency.value === "PKR"){
    var totalValue = Number(USD_PKR * input.value);
    para.innerHTML = totalValue
   }
   else if(selectedCurrency.value === "USD" && convertedCurrency.value === "EUR"){
    var totalValue = Number(USD_EUR * input.value);
    para.innerHTML = totalValue
   }
})