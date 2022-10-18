var elForm = document.querySelector(".form-js");
var inputFirst = document.querySelector(".input-first");
var inputSecond = document.querySelector(".input-second");
var buttonSumbit = document.querySelector(".button-js");
var btnDeleteFirst = document.querySelector(".delete-first-btn");
var btnDeleteSecond = document.querySelector(".delete-second-btn");
var list = document.querySelector(".list-js");
var fruits = ["aplle", "orange", "banana", "peach"];
 
var createFunction = function(){
   for (i = 0; i<fruits.length; i++){
    var item = document.createElement("li");
    var text = document.createElement("p");
    text.textContent = fruits[i];
    item.appendChild(text);
    list.appendChild(item);
   }
};
createFunction();

elForm.addEventListener('submit', function(evt){
   evt.preventDefault();
   list.innerHTML = '';
   if (inputFirst.value.trim()){
      fruits.unshift(inputFirst.value);
   }
   if (inputSecond.value.trim()){
      fruits.push(inputFirst.value);
   }
   createFunction();
});

btnDeleteFirst.addEventListener('click', function(){
   fruits.shift();
   list.innerHTML = '';
   createFunction();
});
btnDeleteSecond.addEventListener('click', function(){
   fruits.pop();
   list.innerHTML = '';
   createFunction();
})


 
var fizzForm = document.querySelector(".fizz-form");
var fizzInput = document.querySelector(".fizz-input");
var fizzText = document.querySelector(".fizz-text");
var buzzText = document.querySelector(".buzz-text");
var fizzbuzzText = document.querySelector(".fizz-buzz-text");
var fizzError = document.querySelector(".alert-js");

var fizz = [];
var buzz = [];
var fizzbuzz = [];

fizzForm.addEventListener('submit', function(evt){
   evt.preventDefault();

   var inputValue = Number(fizzInput.value);

   if(inputValue % 3 == 0 && inputValue % 5 == 0){
      fizzInput.value = "";
      fizzbuzz.unshift(inputValue);
      fizzbuzzText.textContent = fizzbuzz.join("");
      fizz.unshift(inputValue);
      fizzText.textContent = fizz.join(" ");
      buzz.unshift(inputValue);
      buzzText.textContent = buzz.join(" ");
      fizzError.classList.add("d-none");
   } else if (inputValue % 3 == 0){
      fizzInput.value = "";
      fizz.unshift(inputValue);
      fizzText.textContent = fizz.join(" ");
      fizzError.classList.add("d-none");
   } else if (inputValue % 5 == 0){
      fizzInput.value = "";
      buzz.unshift(inputValue);
      buzzText.textContent = buzz.join(" ");
      fizzError.classList.add("d-none");
   } else {
      fizzInput.value = "";
      fizzError.classList.add("d-block");
      fizzError.classList.remove("d-none");
      fizzError.textContent = `${inputValue} 3ga ham 5ga ham bo'linmaydi !`;
   }
})





