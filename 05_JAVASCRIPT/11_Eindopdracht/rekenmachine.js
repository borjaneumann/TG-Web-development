//Variables declaration 
let display=document.getElementById('result')
let result=document.getElementById('equal')
let allClear = document.getElementById('ac')
let sign = document.getElementById('sign');
function enterInput(e){
  input+=e.target.innerHTML;
  display.innerHTML=input;
  allClear.innerHTML='C';
}
//collect the values from the buttons and store it in a const
let btnArray= document.querySelectorAll('button');
//when I click on a numerical button, the value has to appear on the screen.
for (i=0;i<btnArray.length;i++){
  if (btnArray[i].innerHTML!='='&& btnArray[i].innerHTML!='AC' && btnArray[i].innerHTML!='+/-'){
    btnArray[i].addEventListener('click',enterInput);
  }
}
//Change color operator buttons on click
let btnOperatorArray=document.getElementsByClassName('white-change');

for (let i=0;i<btnOperatorArray.length;i++){
  if (btnOperatorArray[i].innerHTML=='/'|| btnOperatorArray[i].innerHTML=='*'||btnOperatorArray[i].innerHTML==='+'||btnOperatorArray[i].innerHTML==='-'){
  btnOperatorArray[i].addEventListener('click',changeColor)
  console.log(btnOperatorArray[i].innerHTML)
  }
}
//change operator's color on and off(it works though it is not the goal.)
// let state = false;
// function changeColor(element){
//   state=!state;
//   let a =document.getElementById(element)
//   if(state){
//     a.style.backgroundColor ='white'
//     a.style.color ='red'}
//   else {
//     console.log('hola')
//     console.log(a.innerHTML == element)
//     a.style.backgroundColor ='orange';
//     a.style.color ='black';
//   } 
// }

//change operator's color to white
function changeColor(element){
  let a =document.getElementById(element);
  if (a.innerHTML=='/'||a.innerHTML=='*'||a.innerHTML=='-'||a.innerHTML=='+'){
    a.style.backgroundColor ='white'
    a.style.color ='red'}
}
//change operator's color back to orange
function backToColor(element){
  let a =document.getElementById(element);
  if (a.innerHTML!=='/'||a.innerHTML!=='*'||a.innerHTML!=='-'||a.innerHTML1=='+'){
    document.getElementById('minus').style.backgroundColor ='orange';
    document.getElementById('minus').style.color ='black';
    document.getElementById('many').style.backgroundColor ='orange';
    document.getElementById('many').style.color ='black';
    document.getElementById('plus').style.backgroundColor ='orange';
    document.getElementById('plus').style.color ='black';
    document.getElementById('division').style.backgroundColor ='orange';
    document.getElementById('division').style.color ='black';
  }
}
//Appplying addEventListeners to single buttons
result.addEventListener('click', showResult)
allClear.addEventListener('click',reset)
sign.addEventListener('click', signHandler)

//add and remove minus symbol
function signHandler(){
  let negative='-'
  display.innerHTML='';
  if (input!==''){
    display.innerHTML= eval(input);}
    if(parseFloat(display.innerHTML)<0){
      display.innerHTML=display.innerHTML.substring(1,display.innerHTML.length);
      input=display.innerHTML;
    }else if(parseFloat(display.innerHTML)>0){
      display.innerHTML=negative + display.innerHTML;
      input=display.innerHTML; 
    }
}
//show result on the display, calcultes 5+/* plus = and rounds up to 2 decimals when applicable
function showResult(){
  display.innerHTML='';
  if(input.charAt(input.length -1)==='+'||input.charAt(input.length -1)==='*'||input.charAt(input.length -1)==='/'){
    let inputSliced= input.slice(0,input.length -1);
    console.log(inputSliced)
    input= input + inputSliced;
    display.innerHTML= eval(input);
  }
  if(input !==''){
      console.log(display.innerHTML=eval(input))
      if (eval(input)%2!==0){
      display.innerHTML=eval(input).toFixed(2);}
      else{
        display.innerHTML=eval(input);
      }
  } 
}
//Makes AC to C when button any button is pushed and when C is clicked resets the display.
function reset(){
  input=='';
  display.innerHTML='0';
  if (allClear.innerHTML== 'C'){
    allClear.innerHTML='AC';
    display.innerHTML='0'
    input='';
  }
}

