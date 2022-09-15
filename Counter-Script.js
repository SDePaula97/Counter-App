  //1. Create a new variable called 'total' and assign it the div with the id of 'total'
 const addBtn = document.getElementById('total');

//2. Create Six Functions (add, subtract, multiplyBy2, divideBy2, multiplyBy5, divideBy5)
// Example:
const addBtn = document.querySelector('#add') {

} 

const subBtn = document.querySelector('#subtract') {

  }
  const mult2Btn = document.querySelector('#multiplyBy2') {

  }
  const div2Btn = document.querySelector('#divideBy2') {

  }
  const mult5Btn = document.querySelector('#multiplyBy5') {

  }
  const divBtn = document.querySelector('#divideBy5') {

  }
function add(){
    console.log(total.textContent)
    total.textContent = Number(total.textContent) + 1;
}
function subtract(){
    console.log(total.textContent)
    total.textContent = Number(total.textContent) - 1;
}
function multiplyBy2(){
    console.log(total.textContent)
    total.textContent = Number(total.textContent) * 2;
}
function divideBy2(){
    console.log(total.textContent)
    total.textContent = Number(total.textContent) / 2;
}
function multiplyBy5(){
    console.log(total.textContent)
    total.textContent = Number(total.textContent) * 5;
}
function divideBy5(){
    console.log(total.textContent)
    total.textContent = Number(total.textContent) / 5;
}
function reset(){
    console.log( + total.textContent)
    total.textContent = 0;
}
  
  //3. Attach Functions to Buttons
addBtn.addEventListener('click', add);
addBtn.addEventListener('click', subtract);
addBtn.addEventListener('click', multiplyBy2);
addBtn.addEventListener('click', divideBy2);
addBtn.addEventListener('click', multiplyBy5);
addBtn.addEventListener('click', divideBy5);
resetBtn.addEventListener('click', reset);